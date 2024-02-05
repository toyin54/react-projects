import React, { useState } from 'react'
import './styles.css'
import { FaStar } from 'react-icons/fa'

function Star({ stars = 5 }) {
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)

    function handleClick(getCurrentIndex) {
        setRating(getCurrentIndex)
    }

    function handleMouseHover(getCurrentIndex) {
        setHover(getCurrentIndex)
    }

    function handleMouseLeave() {
        setHover(rating)
    }
    return (
        <div className='star-rating'>
            <div className="container">
                {
                    [...Array(stars)].map((_, index) => {
                        index += 1
                        return (
                            <FaStar
                                key={index}
                                className={index <= (hover || rating) ? "active" : "inactive"}
                                onClick={() => handleClick(index)}
                                onMouseMove={() => handleMouseHover(index)}
                                onMouseLeave={() => handleMouseLeave()}
                                size={40}
                            />
                        )
                    })

                }
            </div>

        </div>
    )
}

export default Star
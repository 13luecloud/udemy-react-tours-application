import { useState } from "react"

const Tour = ({id, image, info, name, price}) => {
    const [readMore, setReadMore] = useState(false)

    return (
        <article className="single-tour">
            <img className="img" src={image} alt={name} />
            <span className="tour-price"> {price} </span>
            <div className="tour-info">
                <h5> {name} </h5>

                <p> 
                    {readMore ? info + " " : `${info.substring(0,200)}...`}
                    <button className="info-btn" onClick={() => setReadMore(!readMore)}>
                        {readMore ? "Show less" : "Read More"}
                    </button>
                </p>
            </div>
        </article>
    )
}

export default Tour
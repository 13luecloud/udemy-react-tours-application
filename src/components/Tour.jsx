import { useState } from "react"

const Tour = ({id, image, info, name, price, removeTour}) => {
    const [readMore, setReadMore] = useState(false)

    return (
        <article className="single-tour">
            <img className="img" src={image} alt={name} />
            <span className="tour-price"> Php {price}.00 </span>
            <div className="tour-info"> 
                <h5> {name} </h5>

                <p>
                    {readMore ? info + " " : `${info.substring(0, 200)}... `}
                    <button className="info-btn" onClick={() => setReadMore(!readMore)}> 
                        {readMore ? "Show less" : "Read More"}
                    </button>
                </p>

                <button className="delete-btn btn-block btn" onClick={() => removeTour(id)}> Not Interested </button>
            </div>           
        </article>
    )
}

export default Tour
import { useState, useEffect } from "react";
import Tour from "./Tour";

export default function Tours() {
    const [tours, setTours] = useState([])
    const url = 'https://course-api.com/react-tours-project'
    
    useEffect(() => {
        const fetchData = async() =>{
            try {
                const response = await fetch(url)
                const tours = await response.json()
                setTours(tours)
            } catch (error) {
                console.log(error)
            }
        }

        fetchData()
    }, [])

    const removeTour = (id) => {
        let newTours = tours.filter((tour) => tour.id !== id)
        setTours(newTours);
    }

    return (
        <section> 
            <div className="title"> 
                Our Tours 
                <div className="title-underline"></div>
            </div>
            <div className="tours">
                {tours.map(tour => {
                    return (
                        <Tour key={tour.id} {...tour} removeTour={removeTour}/>
                    )
                })}
            </div>
        </section>
    )
}
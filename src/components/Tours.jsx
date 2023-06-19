import { useState, useEffect } from "react";

import Tour from "./Tour";

const url = 'https://course-api.com/react-tours-project';

const Tours = () => {   

    const [tours, setTours] = useState([])

    const fetchTours = async() => {
        try {
          const response = await fetch(url);
          const tours = await response.json();
          setTours(tours);
        } catch (error) {
          console.log(error);
        }
    };
    useEffect(() => {
        fetchTours()
    }, [])

    const removeTour = (id) => {
        let newTours = tours.filter((tour) => tour.id !== id)
        setTours(newTours)
    }

    if (tours.length === 0) {
        return (
            <main>
                <div className="title">
                    <h2> No More Tours Left </h2>
                    <button type="button" className="btn" onClick={() => fetchTours()}> Refresh List </button>
                </div>
            </main>
        )
    } 

    return (
        <main>
            <section>
                <div className="title"> 
                    <h2> Our Tours </h2>
                    <div className="title-underline"> </div>
                </div>

                <div className="tours">
                    {tours.map((tour) => {
                        return (
                            <Tour key={tour.id} {...tour} removeTour={removeTour} />
                        )
                    })}
                </div>
            </section>
        </main>
    )
}

export default Tours
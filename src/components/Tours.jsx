import { useState, useEffect } from "react";

const url = 'https://course-api.com/react-tours-project';
export default function Tours() {
    const [tours, setTours] = useState([])

    const fetchTours = async() => {
        try {
            const response = await fetch(url)
            const newTours = response.json()
            setTours(newTours)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchTours()
    }, [])

    if (tours.length === 0) {
        return (
            <div className="title">
                <h2> No More Tours Left </h2>
                <button type="button" className="btn" onClick={() => fetchTours()}> Refresh List </button>
            </div>
        )
    } 

    return (
        <div className="title"> 
            <h2> Our Tours </h2>
            <div className="title-underline"> </div>
        </div>
    )
}
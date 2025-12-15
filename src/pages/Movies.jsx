import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "axios";

export default function Movies() {

    const { id } = useParams();
    const [movie, setMovies] = useState(null)

    useEffect(() => {
        axios.get(`http://localhost:3000/movies/${id}`)
            .then(response => {
                console.log(response);
                setMovies(response.data)
            }).catch(err => {
                console.log(err.message);
            })
    }, [id])


    return (
        <>
            <div className="d-flex">
                <div className="w-50 p-5">
                    <img src={`http://localhost:3000/img/${movie?.image}`} alt="" className="w-50" />
                </div>
                <div className="p-5">
                    <h3 className="">{movie?.title}</h3>
                    <p>Release year: {movie?.release_year}</p>
                    <p>Genre: {movie?.genre}</p>
                    <p>Director: {movie?.director}</p>
                    <p>Abstract: {movie?.abstract}</p>
                </div>
            </div>
            <div className="card p-3 mt-3">
                <h3>Reviews</h3>
                {
                    movie?.review.map(review =>
                        <div key={review.id} className="card mb-2 p-2">
                            <h4 className="card-title">{review.name}</h4>
                            <p className="card-text">{review.text}</p>
                        </div>
                    )

                }

            </div>


        </>
    )
}
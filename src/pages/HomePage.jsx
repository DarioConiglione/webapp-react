import axios from "axios"
import { useEffect, useState } from "react"

export default function HomePage() {

    const [movies, setMovies] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/movies')
            .then(response => {
                console.log(response);
                setMovies(response.data)
            }).catch(err => {
                console.log(err.message);
            })
    }, [])

    return (
        <>

            <div className="p-5 mb-4 bg-light rounded-3">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">Lista dei film!</h1>
                    <p className="col-md-8 fs-4">
                        Using a series of utilities, you can create this jumbotron, just
                        like the one in previous versions of Bootstrap. Check out the
                        examples below for how you can remix and restyle it to your liking.
                    </p>
                    <button className="btn btn-primary btn-lg" type="button">
                        Example button
                    </button>
                </div>
            </div>

            <section className="my-4 py-3">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {
                            movies.map(movie =>
                                <div className="col" key={movie.id}>
                                    <div className="card">
                                        <img src={movie.image} alt="" className="card-img-top" />
                                        <div className="card-body">
                                            <h3 className="card-title">{movie.title}</h3>
                                            <p>{movie.abstract}</p>
                                        </div>

                                    </div>
                                </div>

                            )
                        }

                    </div>
                </div>
            </section>

        </>
    )
}
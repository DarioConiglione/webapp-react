import { Link } from "react-router-dom"
export default function MoviesList({ movies }) {

    return (
        <>
            <section className="my-4 py-3">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

                        {
                            movies.map(movie =>
                                <Link to={`/movies/${movie.id}`} className="text-decoration-none" key={movie.id}>
                                    <div className="col">
                                        <div className="card h-100">
                                            <img src={`http://localhost:3000/img/${movie.image}`} alt="" className="card-img-top" />
                                            <div className="card-body">
                                                <h3 className="card-title">{movie.title}</h3>
                                                <p>{movie.abstract}</p>
                                            </div>

                                        </div>
                                    </div>
                                </Link>


                            )
                        }


                    </div>
                </div>
            </section>
        </>
    )
}
import { NavLink } from "react-router-dom"

export default function Navbar({ menu }) {

    return (
        <>
            <nav className="navbar navbar-expand-md navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="#">Il sito di film numero 1</a>
                    <button
                        className="navbar-toggler d-lg-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsibleNavId"
                        aria-controls="collapsibleNavId"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                            {
                                menu.map((item) =>
                                    <li className="nav-item" key={item.id}>
                                        <NavLink className="nav-link active" to={item.link} aria-current="page">{item.text}</NavLink>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )

}
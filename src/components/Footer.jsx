import { NavLink, Link } from "react-router-dom"
export default function Footer() {

    const footerNav = [
        {
            id: 1,
            text: 'Azienda',
            link: [
                {
                    id: 1,
                    text: 'Chi siamo',
                    rotta: '/'
                },
                {
                    id: 2,
                    text: 'Domande frequenti',
                    rotta: '/'
                },
                {
                    id: 3,
                    text: 'Contatti',
                    rotta: '/'
                },
                {
                    id: 4,
                    text: 'Opportunità di lavoro',
                    rotta: '/'
                },

            ]
        },
        {
            id: 2,
            text: 'Policy',
            link: [
                {
                    id: 5,
                    text: 'Note legali',
                    rotta: '/'
                },
                {
                    id: 6,
                    text: 'Privacy',
                    rotta: '/'
                },
                {
                    id: 7,
                    text: 'informazioni legali',
                    link: '/'
                },

            ]
        }
    ]


    return (
        <>
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3">
                    <div className="col">
                        <h3>Informazioni</h3>
                        <p>Link utili o contatta il numero 800-900-credici </p>
                    </div>

                    {
                        footerNav.map((col) =>
                            <div className="col" key={col.id}>
                                <h3>{col.text}</h3>
                                <ul className="list-unstyled">
                                    {
                                        col?.link.map((rotta) =>
                                            <li key={rotta.id}><Link to={rotta.rotta}>{rotta.text}</Link></li>
                                        )
                                    }
                                </ul>
                            </div>
                        )
                    }
                    {/* <div className="col">
                        <h3>Azienda</h3>
                        <ul className="list-unstyled">
                            <li><a href="/">Chi siamo</a></li>
                            <li><a href="/">Domande frequenti</a></li>
                            <li><a href="/">Contatti</a></li>
                            <li><a href="/">Opportunità di lavoro</a></li>

                        </ul>

                    </div>
                    <div className="col">
                        <h3>Policy</h3>
                        <ul className="list-unstyled">
                            <li><a href="/">Note legali</a></li>
                            <li><a href="/">Privacy</a></li>
                            <li><a href="/">informazioni legali</a></li>

                        </ul>
                    </div> */}
                </div>
            </div>
        </>
    )
}
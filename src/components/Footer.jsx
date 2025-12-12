export default function Footer() {
    return (
        <>
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3">
                    <div className="col">
                        <h3>Informazioni</h3>
                        <p>Link utili </p>
                    </div>
                    <div className="col">
                        <h3>Daje con questo footer2</h3>
                        <ul className="list-unstyled">
                            <li><a href="/">Sto</a></li>
                            <li><a href="/">Cognonome</a></li>
                            <li><a href="/">Contatti</a></li>
                            <li><a href="/">Chi siamo</a></li>
                        </ul>

                    </div>
                    <div className="col">
                        <h3>Daje con questo footer3</h3>
                        <ul className="list-unstyled">
                            <li><a href="/">Lavora per altri</a></li>
                            <li><a href="/">Speriamo di far giusto</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
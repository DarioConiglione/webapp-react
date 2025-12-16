export default function StarRating({ rating }) {

    function getStarRating(vote) {

        console.log(vote);


        let stars = []
        for (let i = 1; i <= vote; i++) {
            stars.push(<i className="bi bi-star-fill" key={`fill-${i}`}></i>)
        }
        console.log(stars);

        for (let i = 1; i <= 5 - vote; i++) {
            stars.push(<i className="bi bi-star" key={`${i}`}></i>)
        }

        return stars
    }


    return (
        <div className="rating">
            {getStarRating(rating)}
        </div>
    )
}
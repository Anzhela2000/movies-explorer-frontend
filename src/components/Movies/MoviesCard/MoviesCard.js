import './moviesCard.css'
function MoviesCard(props) {
    return (
        <section className="moviesCard">
            <button className="moviesCard__img_click">
                <img src={props.image} className="moviesCard__img" alt='карточка фильма'></img>
            </button>
            <div className='moviesCard__info'>
                <p className="moviesCard__title">{props.title}</p>
                <img className="moviesCard__sign" src={props.sign}></img>
                <p className="moviesCard__time">{props.time}</p>
            </div>
        </section>
    )
}

export default MoviesCard;
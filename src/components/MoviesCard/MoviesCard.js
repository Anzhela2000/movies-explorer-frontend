import './MoviesCard.css'
function MoviesCard(props) {
    return (
        <section className="movies-card">
            <button className="movies-card__img_click">
                <img src={props.image} className="movies-card__img" alt='карточка фильма'></img>
            </button>
            <div className='movies-card__info'>
                <h2 className="movies-card__title">{props.title}</h2>
                <img className="movies-card__sign" alt='иконка' src={props.sign}></img>
                <p className="movies-card__time">{props.time}</p>
            </div>
        </section>
    )
}

export default MoviesCard;
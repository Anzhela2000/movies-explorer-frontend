import '../MoviesCard/MoviesCard.css'
import sign from '../../images/delete-film.svg'

function MoviesCard({ deleteMovie, ...card }) {

    const deleteMovieCard = () => {
        deleteMovie(card);
    }

    return (
        <section className="movies-card">
            <a className="movies-card__img_click" href={card.trailerLink} target='_blank'>
                <img src={card.image} className="movies-card__img" alt='карточка фильма'></img>
            </a>
            <div className='movies-card__info'>
                <h2 className="movies-card__title">{card.nameRU}</h2>
                <button className='movies-card__button' onClick={deleteMovieCard}>
                    <img className="movies-card__sign" alt='иконка' src={sign}></img>
                </button>
                <p className="movies-card__time">{`${Math.floor(card.duration / 60)}ч${card.duration % 60}м`}</p>
            </div>
        </section>
    )
}

export default MoviesCard;
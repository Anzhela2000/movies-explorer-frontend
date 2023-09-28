
import MoviesCard from '../SavedMoviesCard/SavedMoviesCard.js'
import '../MoviesCardList/MoviesCardList.js'

function MoviesCardList(props) {

    return (
        <section>
            <main className="movies-card-list">
                <ul className="movies-card__list">
                    {
                        props.savedMovies.map((card) =>
                            <li className="movies-card__item" key={card._id}>
                                <MoviesCard
                                    image={card.image}
                                    nameRU={card.nameRU}
                                    duration={card.duration}
                                    _id={card._id}
                                    deleteMovie={props.deleteMovie}
                                />
                            </li>
                        )
                    }
                </ul>
            </main>
        </section>
    )
}

export default MoviesCardList;
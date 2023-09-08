import MoviesCard from "../MoviesCard/MoviesCard"
import './MoviesCardList.css'

function MoviesCardList(props) {

    return (
        <main className="movies-card-list">
            <ul className="movies-card__list">
                {
                    props.cards.slice(0, props.num).map((card) =>
                        <MoviesCard
                            country={card.country}
                            director={card.director}
                            duration={card.duration}
                            year={card.year}
                            description={card.description}
                            image={`https://api.nomoreparties.co/${card.image.url}`}
                            trailerLink={card.trailerLink}
                            thumbnail={`https://api.nomoreparties.co/${card.image.formats.thumbnail.url}`}
                            nameRU={card.nameRU}
                            nameEN={card.nameEN}
                            savedMovies={props.savedMovies}
                            popupAddMovie={props.popupAddMovie}
                            popupDeleteMovie={props.popupDeleteMovie}
                        />

                    )
                }
            </ul>
            <button className={`movies-card-list__button-more ${props.isLoadMore ? "movies-card-list__button-more_active" : ""}`} onClick={props.showMoreCards}>Ещё</button>
        </main>
    )
}

export default MoviesCardList;
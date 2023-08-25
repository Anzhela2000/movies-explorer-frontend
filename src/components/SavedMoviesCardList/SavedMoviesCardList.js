import arrSave from "../arrSave.js";
import MoviesCard from "../MoviesCard/MoviesCard.js"
import '../MoviesCardList/MoviesCardList.js'
import sign from '../../images/delete-film.svg'
function MoviesCardList() {
    return (
        <section>
        <main className="movies-card-list">
            <ul className="movies-card__list">
                {
                    arrSave.map((card) =>
                        <MoviesCard
                            image={card.image}
                            title={card.nameRU}
                            time={card.duration}
                            sign = {sign}
                        />
                    )
                }
            </ul>
        </main>
        <div className="movies-card-list__gap"></div>
        </section>
    )
}

export default MoviesCardList;
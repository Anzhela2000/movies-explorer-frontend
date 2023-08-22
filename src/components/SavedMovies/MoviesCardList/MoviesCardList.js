import arrSave from "../../arrSave.js";
import MoviesCard from "../../Movies/MoviesCard/MoviesCard.js"
import '../../Movies/MoviesCardList/moviesCardList.css'
import sign from '../../../images/delete-film.svg'
function MoviesCardList() {
    return (
        <section>
        <main className="moviesCardList">
            <ul className="moviesCard__list">
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
        <div className="moviesCardList__gap"></div>
        </section>
    )
}

export default MoviesCardList;
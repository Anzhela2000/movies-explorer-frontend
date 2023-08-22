import arr from "../../arr.js";
import MoviesCard from "../MoviesCard/MoviesCard"
import './moviesCardList.css'
import sign from '../../../images/sign-film.svg'
function MoviesCardList() {

    let num = 16;

    if (window.matchMedia("(min-width: 320px) and (max-width: 767px)").matches) {
        num = 5;
    } else if (window.matchMedia("(min-width: 768px) and (max-width: 1279px)").matches) {
        num = 8;
    }

    return (
        <main className="moviesCardList">
            <ul className="moviesCard__list">
                {
                    arr.slice(0, (num)).map((card) =>
                        <MoviesCard
                            image={card.image}
                            title={card.nameRU}
                            time={card.duration}
                            sign={sign}
                        />
                    )
                }
            </ul>
            <button className="moviesCardList__button-more">Ещё</button>
        </main>
    )
}

export default MoviesCardList;
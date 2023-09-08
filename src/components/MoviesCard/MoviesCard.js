import './MoviesCard.css'
import { useEffect, useState } from 'react';
import { mainApi } from '../../utils/MainApi';
import signGrey from '../../images/grayIcon.svg'
import signGreen from '../../images/greenIcon.svg'
import { useLocation } from 'react-router-dom';

function MoviesCard({ sign, savedMovies, popupAddMovie, popupDeleteMovie, ...card }) {

    const location = useLocation();

    const [isSave, setIsSave] = useState(false);

    //Сравнение карточки из нашего апи с карточками из внешнего. Для подсвечивания сохраненных фильмов

    const isSaved = savedMovies.some(i => i.nameRU === card.nameRU);

    //Дабавление карточки с внешнего апи на наш

    async function handleAddClick() {
        if (!isSaved) {
            mainApi.addFilm(card).then((movie) => {
                setIsSave(true);
                popupAddMovie();
            }).catch((err) => console.log(err));
        }
        else {
            const filterArr = savedMovies.find(i => i.nameRU === card.nameRU);
            mainApi.deleteFilm(filterArr._id).then(() => {
                setIsSave(false);
                popupDeleteMovie();
            })
        }
    }

    useEffect(() => {
        if (isSaved) {
            setIsSave(true);
        } else {
            setIsSave(false);
        }
    }, [])

    return (
        <section className="movies-card" key={card._id}>
            <a className="movies-card__img_click" href={card.trailerLink} target='_blank'>
                <img src={card.image} className="movies-card__img" alt='карточка фильма'></img>
            </a>
            <div className='movies-card__info'>
                <h2 className="movies-card__title">{card.nameRU}</h2>
                <button className='movies-card__button' onClick={handleAddClick}>
                    <img className="movies-card__sign" alt='иконка' src={isSave ? signGreen : signGrey}></img>
                </button>
                <p className="movies-card__time">{`${Math.floor(card.duration / 60)}ч${card.duration % 60}м`}</p>
            </div>
        </section>
    )
}

export default MoviesCard;
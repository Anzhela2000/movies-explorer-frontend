import Header from '../Header/Header.js'
import SearchForm from '../SearchForm/SearchForm.js'
import Footer from '../Footer/Footer.js'
import MoviesCardList from '../SavedMoviesCardList/SavedMoviesCardList.js'
import { useState } from 'react'
import Preloader from '../Preloader/Preloader.js'
import { mainApi } from '../../utils/MainApi.js'
import Popup from '../Popup/Popup.js'
function SavedMovies(props) {

    const [message, setMessage] = useState('');
    const [isPreloader, setIsPreloader] = useState(false);
    const [isErrorMessage, setisErrorMessage] = useState('');
    const [isCheckbox, setIsCheckbox] = useState(false);
    const [isPopup, setIsPopup] = useState(false);
    const [popupMessage, setIsPopupMessage] = useState('');
    const [cards, setCards] = useState(props.savedMovies);

    //Обработчик input поисковой формы - передает данные для прелоадера

    const handleChange = event => {
        setMessage(event.target.value);
    }

    //изсмнение состояния чекбокса

    async function toogleCheckbox(e) {
        if (isCheckbox) {
            setIsCheckbox(false);
            filterArr(JSON.parse(localStorage.getItem('allSavedMovies')));
        } else {
            setIsCheckbox(true);
            filterShortMovie(cards);
        }
    }

    //функции обращения к Api, дальше передает отфильтрованный массив

    function filterShortMovie(arr) {
        const resultShortMovie = arr.filter((movie) =>
            movie.duration < 40)
        if (resultShortMovie.length === 0) {
            setisErrorMessage('Ничего не найдено');
        }
        setCards(resultShortMovie);
    }

    function filterArr(arr) {
        const regex = new RegExp(message, 'gi')
        const result = arr.filter((movie) =>
            movie.nameRU.match(regex) || movie.nameEN.match(regex));
        if (result.length === 0) {
            setisErrorMessage('Ничего не найдено');
        }
        else {
            setCards(result);
        }
    }

    async function getSavedMovies(e) {
        e.preventDefault();
        setisErrorMessage('');
        setCards([]);
        if (message.length > 0) {
            setIsPreloader(true);
            try {
                if (isCheckbox) {
                    filterShortMovie(JSON.parse(localStorage.getItem('allSavedMovies')))
                } else {
                    filterArr(JSON.parse(localStorage.getItem('allSavedMovies')))
                }
            } catch {
                setisErrorMessage('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
            } finally {
                setIsPreloader(false);
            }
        } else {
            setisErrorMessage('Нужно ввести ключевое слово')
        }
    }

    //Попап удаления фильма

    function popupDeleteMovie() {
        setIsPopup(!isPopup);
        setTimeout(() => {
            setIsPopup(isPopup => !isPopup);
        }, 1000);
        setIsPopupMessage('Фильм удален');
    }

    //Удаление фильма 

    function deleteMovie(card) {
        mainApi.deleteFilm(card._id).then(() => {
            props.setIsSavedMovies((state) => state.filter((c) => c._id !== card._id));
            setCards((state) => state.filter((c) => c._id !== card._id));
            popupDeleteMovie();
        })
    }

    return (
        <section className="movies">
            <Header loggedIn={props.loggedIn} savedActiveClass={'header__movies_focus'} />
            <SearchForm pushMovies={getSavedMovies} handleChange={handleChange} inputValue={message} isCheckbox={isCheckbox} toogleCheckbox={toogleCheckbox} />
            <Preloader preloader={isPreloader} />
            <p className="movies__not-found-message">{isErrorMessage}</p>
            <Popup isPopup={isPopup} popupMessage={popupMessage}></Popup>
            <MoviesCardList savedMovies={cards} deleteMovie={deleteMovie} />
            <Footer />
        </section>
    )
}
export default SavedMovies;
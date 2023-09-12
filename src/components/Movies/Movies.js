import SearchForm from "../SearchForm/SearchForm"
import Header from "../Header/Header.js"
import MoviesCardList from "../MoviesCardList/MoviesCardList"
import Footer from "../Footer/Footer"
import { useEffect, useState } from "react"
import { moviesApi } from "../../utils/MoviesApi"
import Popup from "../Popup/Popup"
import Preloader from "../Preloader/Preloader"
import './Movies.css'

function Movies(props) {

    const localStorageMovies =
        JSON.parse(localStorage.getItem('localStorageMovies')) ?? [];

    const localStorageInputText =
        JSON.parse(localStorage.getItem('localStorageInputText')) ?? '';

    const localStorageCheckbox =
        JSON.parse(localStorage.getItem('localStorageCheckbox')) ?? false;

    //стэйты

    const [cards, setCards] = useState(localStorageMovies);
    const [input, setInput] = useState(localStorageInputText);
    const [isPreloader, setIsPreloader] = useState(false);
    const [isErrorMessage, setisErrorMessage] = useState('');
    const [isCountCards, setIsCountCards] = useState(16);
    const [isLoadCards, setIsLoadCards] = useState(4);
    const [width, setWidth] = useState(window.innerWidth);
    const [isLoadMore, setIsLoadMore] = useState(false);
    const [isCheckbox, setIsCheckbox] = useState(localStorageCheckbox);
    const [isPopup, setIsPopup] = useState(false);
    const [popupMessage, setIsPopupMessage] = useState('');
    let allMovies = JSON.parse(window.localStorage.getItem('allMovies'));

    //отловить изменение экрана

    useEffect(() => {
        setWidth(window.innerWidth)
    }, [window.innerWidth]);

    //устанавливает значения для отображаемых и подгружаемых карточек

    useEffect(() => {
        if (window.matchMedia("(min-width: 320px) and (max-width: 767px)").matches) {
            setIsCountCards(5);
            setIsLoadCards(1);
        } else if (window.matchMedia("(min-width: 768px) and (max-width: 1279px)").matches) {
            setIsCountCards(8);
            setIsLoadCards(2);
        } else {
            setIsCountCards(16);
            setIsLoadCards(4);
        }
    }, [width]);

    //проверка на необходимость кнопки еще и функция по добавлению доп.карточек

    const handleButtonMore = (arr) => {
        if (arr.length > isCountCards) {
            setIsLoadMore(true);
        } else if (arr.length === isCountCards) {
            setIsLoadMore(false);
        }
        else {
            setIsLoadMore(false);
        }
    }

    const showMoreCards = () => {
        setIsCountCards((prevValue) => prevValue + isLoadCards);
    }

    //Обработчик input поисковой формы - передает данные для прелоадера

    const handleChange = e => {
        setInput(e.target.value);
    }

    function filterShortMovie(arr) {
        const regex = new RegExp(input, 'gi')
        const result = arr.filter((movie) =>
            movie.nameRU.match(regex) || movie.nameEN.match(regex));
        const resultShortMovie = result.filter((movie) =>
            movie.duration < 40)
        if (resultShortMovie.length === 0) {
            setisErrorMessage('Ничего не найдено');
        }
        setCards(resultShortMovie);
        handleButtonMore(resultShortMovie);
    }

    function filterArr(arr) {
        const regex = new RegExp(input, 'gi')
        const result = arr.filter((movie) =>
            movie.nameRU.match(regex) || movie.nameEN.match(regex));
        if (result.length === 0) {
            setisErrorMessage('Ничего не найдено');
        }
        else {
            setCards(result);
            handleButtonMore(result);
        }
    }

    async function getMovies() {
        try {
            if (allMovies === null) {
                await moviesApi.getFilms().then((movies) => {
                    localStorage.setItem("allMovies", JSON.stringify(movies));
                    if (isCheckbox) {
                        filterShortMovie(JSON.parse(localStorage.getItem('allMovies')));
                    } else {
                        filterArr(JSON.parse(localStorage.getItem('allMovies')));
                    }
                })
            }
            else {
                if (isCheckbox) {
                    filterShortMovie(JSON.parse(localStorage.getItem('allMovies')));
                } else {
                    filterArr(JSON.parse(localStorage.getItem('allMovies')));
                }
            }
        }
        catch {
            setisErrorMessage('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
        }
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setIsPreloader(true);
        setIsLoadMore(false);
        setisErrorMessage('');
        if (input.length > 0) {
            try {
                await getMovies();
            }
            catch {
                setisErrorMessage('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
            }
            finally {
                setIsPreloader(false)
            }
        }
        else {
            setisErrorMessage('Нужно ввести ключевое слово');
            setIsPreloader(false);
        }
    }

    //функция обращения к Api, дальше передает отфильтрованный массив

    function toogleCheckbox() {
        setisErrorMessage('');
        if (input.length > 0  && allMovies !== null) {
            if (isCheckbox) {
                setIsCheckbox(false);
                filterArr(JSON.parse(localStorage.getItem('allMovies')));
            } else {
                setIsCheckbox(true);
                filterShortMovie(cards);
            }
        } else {
            setisErrorMessage('Введите ключевое слово и нажмите поиск');
        }
    }

    //Открытие попапа

    function popupAddMovie() {
        setIsPopup(!isPopup);
        setTimeout(() => {
            setIsPopup(isPopup => !isPopup);
        }, 1000);
        setIsPopupMessage('Фильм добавлен');
    }

    function popupDeleteMovie() {
        setIsPopup(!isPopup);
        setTimeout(() => {
            setIsPopup(isPopup => !isPopup);
        }, 1000);
        setIsPopupMessage('Фильм удален');
    }

    useEffect(() => {
        localStorage.setItem('localStorageMovies', JSON.stringify(cards));
        localStorage.setItem('localStorageInputText', JSON.stringify(input));
        localStorage.setItem('localStorageCheckbox', JSON.stringify(isCheckbox));
    }, [cards]);

    useEffect(() => {
        handleButtonMore(localStorageMovies);
    }, [])

    useEffect(() => {
        handleButtonMore(localStorageMovies);
    }, [isCountCards])

    return (
        <section className="movies">
            <Header loggedIn={true} activeClass={'header__movies_focus'} />
            <SearchForm pushMovies={handleSubmit} handleChange={handleChange} inputValue={input} isCheckbox={isCheckbox} toogleCheckbox={toogleCheckbox} isErrorInput={isErrorMessage} />
            <Preloader preloader={isPreloader} />
            <p className="movies__not-found-message">{isErrorMessage}</p>
            <MoviesCardList cards={cards} num={isCountCards} isLoadMore={isLoadMore} showMoreCards={showMoreCards} savedMovies={props.savedMovies} popupAddMovie={popupAddMovie} popupDeleteMovie={popupDeleteMovie} setIsSavedMovies={props.setIsSavedMovies} />
            <Footer />
            <Popup isPopup={isPopup} popupMessage={popupMessage}></Popup>
        </section>
    )
}

export default Movies;
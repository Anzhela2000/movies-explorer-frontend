import SearchForm from "../SearchForm/SearchForm"
import Header from "../Header/Header.js"
import MoviesCardList from "../MoviesCardList/MoviesCardList"
import Footer from "../Footer/Footer"
import { useEffect, useState } from "react"
import { moviesApi } from "../../utils/MoviesApi"
import './Movies.css'
import Preloader from "../Preloader/Preloader"

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

    //отловить изменение экрана

    useEffect(() => {
        setWidth(window.innerWidth)
    }, [window.innerWidth])

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
            setIsLoadMore(true)
        } else {
            setIsLoadMore(false)
        }
    }

    const showMoreCards = () => {
        setIsCountCards((prevValue) => prevValue + isLoadCards)
    }

    //Обработчик input поисковой формы - передает данные для прелоадера

    const handleChange = e => {
        setInput(e.target.value)
    }

    //функция обращения к Api, дальше передает отфильтрованный массив

    function toogleCheckbox(e) {
        if (isCheckbox) {
            setIsCheckbox(false)
        } else {
            setIsCheckbox(true)
            filterShortMovie(cards)
        }
    }

    function filterShortMovie(arr) {
        const resultShortMovie = arr.filter((movie) =>
            movie.duration < 40)
        if (resultShortMovie.length === 0) {
            setisErrorMessage('Ничего не найдено');
        }
        setCards(resultShortMovie);
    }

    function filterArr(arr) {
        const regex = new RegExp(input, 'gi')
        const result = arr.filter((movie) =>
            movie.nameRU.match(regex) || movie.nameEN.match(regex));
        if (isCheckbox) {
            filterShortMovie(result);
        } else if (result.length === 0) {
            setisErrorMessage('Ничего не найдено');
        }
        else {
            setCards(result);
            handleButtonMore(result);
        }
    }

    async function getMovies(e) {
        e.preventDefault();
        setIsLoadMore(false);
        setisErrorMessage('');
        setCards([]);
        if (input.length > 0) {
            setIsPreloader(true);
            try {
                let movies = await moviesApi.getFilms();
                filterArr(movies);
            } catch {
                setisErrorMessage('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
            } finally {
                setIsPreloader(false);
            }
        } else {
            setisErrorMessage('Нужно ввести ключевое слово')
        }
    }

    useEffect(() => {
        localStorage.setItem('localStorageMovies', JSON.stringify(cards));
        localStorage.setItem('localStorageInputText', JSON.stringify(input));
        localStorage.setItem('localStorageCheckbox', JSON.stringify(isCheckbox));
    }, [cards]);

    useEffect(() => {
        handleButtonMore(localStorageMovies);
    }, [])

    return (
        <section className="movies">
            <Header loggedIn={true} activeClass={'header__movies_focus'} />
            <SearchForm pushMovies={getMovies} handleChange={handleChange} inputValue={input} isCheckbox={isCheckbox} toogleCheckbox={toogleCheckbox} isErrorInput={isErrorMessage} />
            <Preloader preloader={isPreloader} />
            <MoviesCardList cards={cards} num={isCountCards} isLoadMore={isLoadMore} showMoreCards={showMoreCards} savedMovies={props.savedMovies} />
            <Footer />
        </section>
    )
}

export default Movies;
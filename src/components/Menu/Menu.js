import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import '../Header/Header.css'
import './Menu.css'
function Menu(props) {

    const [isMain, setIsMain] = useState(false);
    const [isMovies, setIsMovies] = useState(false);
    const [isSavedMovies, setIsSavedMovies] = useState(false);

    let location = useLocation();

    function changeLocation() {
        if (location.pathname === "/") {
            setIsMain(true);
        }
        else if (location.pathname === "/movies") {
            setIsMovies(true);
        }
        else if (location.pathname === "/saved-movies") {
            setIsSavedMovies(true);
        } else {
            setIsMain(false);
            setIsMovies(false);
            setIsSavedMovies(false);
        }
    }

    useEffect(() => {
        changeLocation();
    }, [location.pathname]);

    return (
        <section className={props.isOpen ? `menu menu_active` : `menu`}>
            <nav className="menu__content">
                <button className="menu__button-close" onClick={props.onClose}></button>
                <ul className="menu__list">
                    <Link to={'../'} className="menu__item"><li className={`menu__item-li ${isMain ? "menu__item-li_active" : ""}`}>Главная</li></Link>
                    <Link to={'../movies'} className="menu__item"><li className={`menu__item-li ${isMovies ? "menu__item-li_active" : ""}`}>Фильмы</li></Link>
                    <Link to={'../saved-movies'} className="menu__item"><li className={`menu__item-li ${isSavedMovies ? "menu__item-li_active" : ""}`}>Сохраненные фильмы</li></Link>
                </ul>
                <Link to="../profile" className="header__account_menu header__account"><p className='header__account-text'>Аккаунт</p></Link>
            </nav>
        </section>
    )
}

export default Menu;
import { Link } from "react-router-dom";
import '../Header/Header.css'
import './Menu.css'
function Menu(props) {
    return (
        <section className={props.isOpen ? `menu menu_active` : `menu`}>
            <nav className="menu__content">
                <button className="menu__button-close" onClick={props.onClose}></button>
                <ul className="menu__list">
                    <Link to={'../'} className="menu__item"><li className="menu__item-li">Главная</li></Link>
                    <Link to={'../movies'} className="menu__item"><li className="menu__item-li menu__item-li_active">Фильмы</li></Link>
                    <Link to={'../saved-movies'} className="menu__item"><li className="menu__item-li">Сохраненные фильмы</li></Link>
                </ul>
                <Link to="../profile" className="header__account_menu header__account"><p className='header__account-text'>Аккаунт</p></Link>
            </nav>
        </section>
    )
}

export default Menu;
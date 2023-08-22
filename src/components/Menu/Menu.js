import { Link } from "react-router-dom";
import '../Header/Header.css'
import './Menu.css'
function Menu(props) {
    return (
        <section className={props.isOpen ? `menu menu_active` : `menu`}>
            <section className="menu__content">
                <button className="menu__close" onClick={props.onClose}></button>
                <ul className="menu__list">
                    <Link to={'../'} className="menu__item"><li className="menu__item_li">Главная</li></Link>
                    <Link to={'../movies'} className="menu__item"><li className="menu__item_li">Фильмы</li></Link>
                    <Link to={'../saved-movies'} className="menu__item"><li className="menu__item_li">Сохраненные фильмы</li></Link>
                </ul>
                <Link to="../profile" className="header__account_menu"><p className='header__account-text'>Аккаунт</p></Link>
            </section>
        </section>
    )
}

export default Menu;
import { Link } from 'react-router-dom'
import { useState } from 'react';
import Menu from '../Menu/Menu';
import logo from '../../images/logo.svg'
function HeaderAuth(props) {
    
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    function openMenu() {
        setIsOpenMenu(true);
    }

    function closeMenu() {
        setIsOpenMenu(false);
    }

    return (
        <section className={`header ${props.isLanding ? "header__landing" : ""}`}>
            <Menu isOpen={isOpenMenu} onClose={closeMenu} />
            <Link to={'../'}><img src={logo} className="header__logo" alt='логотип'></img></Link>
            <nav className="header__links">
                <div className='header__movies'>
                    <Link to="../movies" className={`header__movies-item ${props.activeClass}`} >Фильмы</Link>
                    <Link to="../saved-movies" className={`header__movies-item ${props.savedActiveClass}`}>Сохраненный фильмы</Link>
                </div>
                <Link to="../profile" className="header__account"><p className='header__account-text'>Аккаунт</p></Link>
                <button className='header__burger' onClick={openMenu} ></button>
            </nav>
        </section >
    )
}

export default HeaderAuth;
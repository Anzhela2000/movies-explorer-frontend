import logo from '../../images/logo.svg'
import { Link } from 'react-router-dom'
import Menu from '../Menu/Menu';
import { useState } from 'react';
function HeaderAuth() {
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    function openMenu() {
        setIsOpenMenu(true);
    }

    function closeMenu() {
        setIsOpenMenu(false);
    }

    return (
        <section className="header">
            <Menu isOpen={isOpenMenu} onClose={closeMenu} />
            <Link to={'../'}><img src={logo} className="header__logo"></img></Link>
            <div className="header__links">
                <div className='header__movies'>
                    <Link to="../movies" className="header__movies-item header__movies-focus">Фильмы</Link>
                    <Link to="../saved-movies" className="header__movies-item">Сохраненный фильмы</Link>
                </div>
                <Link to="../profile" className="header__account"><p className='header__account-text'>Аккаунт</p></Link>
                <button className='header__burger' onClick={openMenu} ></button>
            </div>
        </section >
    )
}

export default HeaderAuth;
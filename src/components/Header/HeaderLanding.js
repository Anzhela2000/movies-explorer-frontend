import logo from '../../images/logo.svg'
import { Link } from 'react-router-dom'
function HeaderLanding() {
    return (
        <section className="header header__main">
            <img src={logo} className="header__logo" alt='логотип'></img>
            <nav className='header__auth'>
                <Link to="./signup" className='header__signup'>Регистрация</Link>
                <Link to="./signin" className="header__signin">Войти</Link>
            </nav>
        </section >
    )
}

export default HeaderLanding;


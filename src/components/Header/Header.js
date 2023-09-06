import './Header.css'
import HeaderAuth from './HeaderAuth';
import HeaderLanding from './HeaderLanding';

function Header(props) {
    return (
        <header>
            {props.loggedIn ? < HeaderAuth activeClass={props.activeClass} savedActiveClass={props.savedActiveClass}/> : <HeaderLanding />}
        </header>
    )
}

export default Header;
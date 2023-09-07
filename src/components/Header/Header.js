import './Header.css'
import HeaderAuth from './HeaderAuth';
import HeaderLanding from './HeaderLanding';

function Header(props) {
    
    return (
        <header>
            {props.loggedIn ? < HeaderAuth activeClass={props.activeClass} isLanding={props.isLanding} savedActiveClass={props.savedActiveClass}/> : <HeaderLanding />}
        </header>
    )
}

export default Header;
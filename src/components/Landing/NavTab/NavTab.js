import './NavTab.css'

function NavTab() {
    return (
        <nav className="NavTab">
            <a href="#aboutProject"><a className="NavTab__link">О проекте</a></a>
            <a href="#techs"><a className="NavTab__link">Технологии</a></a>
            <a href="#aboutMe"><a className="NavTab__link">Студент</a></a>
        </nav >
    )
}

export default NavTab;
import logo from '../../../images/promo__logo.svg'
import './Promo.css'

function Promo() {
    return (
        <section className="promo">
            <img className="promo__logo" src={logo} alt='логотип'></img>
            <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
        </section>
    )
}

export default Promo;
import './Preloader.css'
import spin from '../../images/spin.png'
function Preloader(props) {

    return (
        <section className={`preloader ${props.preloader ? "preloader_active" : ""}`}>
            <img className="preloader__spin" src={spin}></img>
        </section>
    )
}

export default Preloader;
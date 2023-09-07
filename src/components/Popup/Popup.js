import './Popup.css'

function Popup(props) {

    return (
        <section className={`popup ${props.isPopup ? "popup__active" : ""}`}>
            <p className="popup__text">{props.popupMessage}</p>
        </section>
    )
}

export default Popup
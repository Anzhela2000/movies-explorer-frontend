import { Link } from "react-router-dom";
import Header from "../Header/Header";
import './Profile.css'

function Profile(props) {
    return (
        <section>
            <Header loggedIn={true} />
            <main className="profile">
                <h3 className="profile__title">Привет, Анжела</h3>
                <form className="profile__form">
                    <div className="profile__input">
                        <p className="profile__input-name">Имя</p>
                        <input className="profile__input_mod" placeholder={props.name} ></input>
                    </div>
                    <div className="profile__input">
                        <p className="profile__input-name">E-mail</p>
                        <input className="profile__input_mod" placeholder={props.email} ></input>
                    </div>
                </form>
                <button className="profile__button_change">Редактировать</button>
                <Link to={'../signin'} className="profile__button_exit">Выйти из аккаунта</Link>
            </main>
        </section>
    )
}

export default Profile;
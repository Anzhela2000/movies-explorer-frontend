import { Link } from "react-router-dom";
import Header from "../Header/Header";
import './Profile.css'
import { useState } from "react";

function Profile(props) {
    const [isDisabled, setisDisabled] = useState(true);

    function setEdit() {
        setisDisabled(false);
    }

    return (
        <section>
            <Header loggedIn={true} />
            <main className="profile">
                <h1 className="profile__title">Привет, {props.name}!</h1>
                <form className="profile__form">
                    <div className="profile__input">
                        <p className="profile__input-name">Имя</p>
                        <input className="profile__input_data" disabled={isDisabled} placeholder={props.name} ></input>
                    </div>
                    <div className="profile__input">
                        <p className="profile__input-name">E-mail</p>
                        <input className="profile__input_data" disabled={isDisabled} placeholder={props.email} ></input>
                    </div>
                </form>
                <section className={`profile__bottom ${isDisabled ? "" : "profile__bottom_disabled"}`}>
                    <button className="profile__button_edit" onClick={setEdit}>Редактировать</button>
                    <Link to={'../signin'} className="profile__button_exit">Выйти из аккаунта</Link>
                </section>
                <button className={`profile__button-save ${isDisabled ? "" : "profile__button-save_active"}`}>Сохранить</button>
            </main>
        </section>
    )
}

export default Profile;
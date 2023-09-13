import { Link } from "react-router-dom";
import Header from "../Header/Header";
import './Profile.css'
import { useState, useContext } from "react";
import { mainApi } from "../../utils/MainApi";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import Popup from "../Popup/Popup";

function Profile(props) {

    const currentUser = useContext(CurrentUserContext);
    const [name, setName] = useState(currentUser.name);
    const [email, setEmail] = useState(currentUser.email);
    const [emailError, setEmailError] = useState('');
    const [nameError, setNameError] = useState('');
    const [isEditButton, setisEditButton] = useState(true);
    const [isDisabled, setIsDisabled] = useState(true);
    const [isTitleName, setIsTitleName] = useState(currentUser.name);
    const [isPopup, setIsPopup] = useState(false);
    const [popupMessage, setIsPopupMessage] = useState('');

    //Поменять кнопку редактировать на на сохранить

    function setEditButton() {
        setisEditButton(false);
    }

    //Выход с сайта, очищает localStorage

    function exit() {
        localStorage.removeItem('jwt');
        localStorage.removeItem('localStorageMovies');
        localStorage.removeItem('localStorageInputText');
        localStorage.removeItem('localStorageCheckbox');
        localStorage.removeItem('allMovies');
        localStorage.removeItem('allSavedMovies');
        props.setLoggedIn(false);
    }

    //Изменение данных

    async function patchUser() {
        setIsDisabled(true);
        try {
            const user = await mainApi.patchUser(name, email);
            props.setCurrentUser(user);
            setIsTitleName(currentUser.name);
            setisEditButton(true);
            setIsPopup(!isPopup);
            setIsPopupMessage('Данные сохранены');
            setTimeout(() => {
                setIsPopup(isPopup => !isPopup);
            }, 1000);
        }
        catch {
            setIsPopup(!isPopup);
            setisEditButton(true);
            setIsPopupMessage('Произошла ошибка');
            setTimeout(() => {
                setIsPopup(isPopup => !isPopup);
            }, 1000);    
        }
    }

    //Валидация

    function emailHandler(e) {
        setEmail(e.target.value);
        const check = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (!check.test(e.target.value)) {
            setEmailError('Неверно введен email');
            setIsDisabled(true);
        } else {
            setEmailError('');
            changeDisabled(e)
        }
    }

    const nameHandler = (e) => {
        setName(e.target.value)
        if (e.target.value.length < 3 || e.target.value.length > 30) {
            setNameError('Имя должно быть быть длиннее 3 символов и короче 30')
            setIsDisabled(true);
        } else {
            setNameError('');
            changeDisabled(e);
        }
    }

    //Сравнивает есть ли изменения, при их отсутствии делает кнопку сохранить неактивной

    function changeDisabled(e) {
        if (e.target.value === currentUser.name || e.target.value === currentUser.email) {
            setIsDisabled(true);
        } else {
            setIsDisabled(false);
        }
    }

    return (
        <section>
            <Header loggedIn={props.loggedIn} />
            <main className="profile">
                <h1 className="profile__title">Привет, {isTitleName}!</h1>
                <form className="profile__form">
                    <div className="profile__input">
                        <p className="profile__input-name">Имя</p>
                        <input className="profile__input_data" name="name" onChange={nameHandler} disabled={isEditButton} value={name}></input>
                    </div>
                    <span className="profile__input-error">{nameError}</span>
                    <div className="profile__input">
                        <p className="profile__input-name">E-mail</p>
                        <input className="profile__input_data" name="email" onChange={emailHandler} disabled={isEditButton} value={email}></input>
                    </div>
                    <span className="profile__input-error">{emailError}</span>
                </form>
                <section className={`profile__bottom ${isEditButton ? "" : "profile__bottom_disabled"}`}>
                    <button className="profile__button_edit" onClick={setEditButton}>Редактировать</button>
                    <Link to={'../'} className="profile__button_exit" onClick={exit}>Выйти из аккаунта</Link>
                </section>
                <button className={`profile__button-save ${isEditButton ? "" : "profile__button-save_active"}`} disabled={isDisabled} onClick={patchUser}>Сохранить</button>
                <Popup isPopup={isPopup} popupMessage={popupMessage}></Popup>
            </main>
        </section>
    )
}

export default Profile;
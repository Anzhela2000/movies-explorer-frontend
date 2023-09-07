import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import logo from '../../images/logo.svg'
import './Register.css'
import { auth } from '../../utils/Auth';
function Register() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [nameError, setNameError] = useState('');
    const [autorizationError, setAutorizationError] = useState('');
    const [isDisabled, setIsDisabled] = useState(true);

    const navigate = useNavigate();

    //Валидация

    function emailHandler(e) {
        setEmail(e.target.value);
        const check = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (!check.test(e.target.value)) {
            setEmailError('Неверно введен email');
        } else {
            setEmailError('');
        }
    }

    function passwordHandler(e) {
        setPassword(e.target.value);
        if (e.target.value.length < 8) {
            setPasswordError('Пароль должен содержать не меньше 8 символов');
        } else {
            setPasswordError('');
        }
    }

    function nameHandler(e) {
        setName(e.target.value);
        if (e.target.value.length < 3 || e.target.value.length > 30) {
            setNameError('Имя должно быть быть длиннее 3 символов и короче 30');
        } else {
            setNameError('');
        }
    }

    const checkInputs = () => {
        if (emailError.length > 0 || passwordError.length > 0 || nameError.length > 0) {
            setIsDisabled(true);
        } else if (name.length === 0 || email.length === 0 || password.length === 0) {
            setIsDisabled(true);
        }

        else {
            setIsDisabled(false);
        }
    }

    //Отправка формы

    const handleSubmitRegister = (e) => {
        e.preventDefault();
        auth.register(name, email, password).then((data) => {
            if (data) {
                setAutorizationError('');
                navigate('../signin');
            } else { setAutorizationError('Пользователь с таким email уже существует.') }
        });
    }

    useEffect(checkInputs, [nameHandler, emailHandler, passwordHandler])

    return (
        <section className="register">
            <Link to={'../'} className='auth__logo'><img src={logo} alt='логотип'></img></Link>
            <h1 className='auth__title'>Добро пожаловать!</h1>
            <form className='auth__form' onSubmit={handleSubmitRegister} novalidate>
                <div className="auth__input">
                    <p className="auth__input-name">Имя</p>
                    <input className="auth__input_data" required={true} placeholder='Введите имя' name="name" onChange={nameHandler} value={name}></input>
                </div>
                <span className='auth__input-error'>{nameError}</span>
                <div className="auth__input">
                    <p className="auth__input-name">E-mail</p>
                    <input className="auth__input_data" required={true} type='email' placeholder='Введите почту' name="email" onChange={emailHandler} value={email}></input>
                </div>
                <span className='auth__input-error'>{emailError}</span>
                <div className="auth__input">
                    <p className="auth__input-name">Пароль</p>
                    <input className="auth__input_data" required={true} type='password' placeholder='Введите пароль' name="password" onChange={passwordHandler} value={password}></input>
                </div>
                <span className='auth__input-error'>{passwordError}</span>
                <button className='auth__submit' type='submit' disabled={isDisabled}>Зарегистрироваться</button>
                <p className='auth__post-error'>{autorizationError}</p>
                <p className='auth__path-toogle'>Уже зарегистрированы?<Link to={'/signin'} className='auth__toogle'>Войти</Link></p>
            </form>
        </section>
    )
}

export default Register;
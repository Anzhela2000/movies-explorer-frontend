import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg'
import './Register.css'
function Register() {
    return (
        <section className="register">
            <Link to={'../'} className='auth__logo'><img src={logo} alt='логотип'></img></Link>
            <h3 className='auth__title'>Добро пожаловать!</h3>
            <form className='auth__form'>
                <div className="auth__input">
                    <p className="auth__input-name">Имя</p>
                    <input className="auth__input_mod" required={true} minLength={2} maxLength={30} placeholder='Введите имя' ></input>
                </div>
                <div className="auth__input">
                    <p className="auth__input-name">E-mail</p>
                    <input className="auth__input_mod" required={true} type='email' minLength={2} maxLength={30} placeholder='Введите почту' ></input>
                </div>
                <div className="auth__input">
                    <p className="auth__input-name">Пароль</p>
                    <input className="auth__input_mod" required={true} type='password' minLength={8} maxLength={30} placeholder='Введите пароль'></input>
                </div>
                <button className='auth__submit' type='submit'>Зарегистрироваться</button>
                <p className='auth__path-toogle'>Уже зарегистрированы?<Link to={'/signin'} className='auth__toogle'>Войти</Link></p>
            </form>
        </section>
    )
}

export default Register;
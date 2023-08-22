import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg'
import '../Register/Register.css'
import './Login.css'
function Login() {
    return (
        <section className="login">
            <Link to={'../'} className='auth__logo'><img src={logo} alt='логотип'></img></Link>
            <h3 className='auth__title'>Рады видеть!</h3>
            <form className='auth__form'>
                <div className="auth__input">
                    <p className="auth__input-name">E-mail</p>
                    <input className="auth__input_mod" required={true} type='email' minLength={2} maxLength={30} placeholder='Введите email' ></input>
                </div>
                <div className="auth__input">
                    <p className="auth__input-name">Пароль</p>
                    <input className="auth__input_mod" required={true} type='password' minLength={8} maxLength={30} placeholder='Введите пароль'></input>
                </div>
                <button className='auth__submit login__submit' type='submit'>Войти</button>
                <p className='auth__path-toogle'>Ещё не зарегистрированы?<Link to={'/signup'} className='auth__toogle'>Регистрация</Link></p>
            </form>
        </section>
    )
}

export default Login;
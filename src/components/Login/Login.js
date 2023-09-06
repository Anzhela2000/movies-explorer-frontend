import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import logo from '../../images/logo.svg'
import '../Register/Register.css'
import './Login.css'
import { auth } from '../../utils/Auth';

function Login(props) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [autorizationError, setAutorizationError] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);

  //Валидация и обработка инпутов

  function emailHandler(e) {
    setEmail(e.target.value)
    const check = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!check.test(e.target.value)) {
      setEmailError('Неверно введен email')
    } else {
      setEmailError('')
    }
  }

  function passwordHandler(e) {
    setPassword(e.target.value)
    if (e.target.value.length < 8) {
      setPasswordError('Пароль должен содержать не меньше 8 символов')
    } else {
      setPasswordError('')
    }
  }

  //Отправка формы для входа

  const navigate = useNavigate();

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    auth.authorize(email, password)
      .then(data => {
        if (data) {
          localStorage.setItem('jwt', data.token);
          props.setLoggedIn(true);
          navigate("/movies", {
            replace: true
          });
        } else {
          setAutorizationError('Вы ввели неправильный логин или пароль.')
        }
      })
  }
  
  return (
    <section className="login">
      <Link to={'../'} className='auth__logo'><img src={logo} alt='логотип'></img></Link>
      <h3 className='auth__title'>Рады видеть!</h3>
      <form className='auth__form' onSubmit={handleSubmitLogin}>
        <div className="auth__input">
          <p className="auth__input-name">E-mail</p>
          <input className="auth__input_data" required={true} type='email' name="email" onChange={emailHandler} value={email} minLength={2} maxLength={30} placeholder='Введите email' ></input>
        </div>
        <span className='auth__input-error'>{emailError}</span>
        <div className="auth__input">
          <p className="auth__input-name">Пароль</p>
          <input className="auth__input_data" required={true} type='password' name="password" onChange={passwordHandler} value={password} minLength={8} maxLength={30} placeholder='Введите пароль'></input>
        </div>
        <span className='auth__input-error'>{passwordError}</span>
        <button className='auth__submit login__submit' type='submit' disabled={isDisabled}>Войти</button>
        <p className='auth__post-error'>{autorizationError}</p>
        <p className='auth__path-toogle'>Ещё не зарегистрированы?<Link to={'/signup'} className='auth__toogle'>Регистрация</Link></p>
      </form>
    </section>
  )
}

export default Login;
import { useNavigate } from 'react-router-dom';
import './NotFound.css'

function NotFound() {
    let history = useNavigate();
    return (
        <section className="NotFound">
            <h2 className="NotFound__title">404</h2>
            <p className="NotFound__subtitle">Страница не найдена</p>
            <button className="NotFound__button-back" onClick={() => history(-1)}>Назад</button>
        </section>
    )
}

export default NotFound;
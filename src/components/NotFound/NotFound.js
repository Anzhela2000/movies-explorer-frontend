import { useNavigate } from 'react-router-dom';
import './NotFound.css'

function NotFound() {
    const navigate = useNavigate()

    function goBack() {
        navigate(-1);
    }

    return (
        <section className="not-found">
            <h1 className="not-found__title">404</h1>
            <p className="not-found__subtitle">Страница не найдена</p>
            <button className="not-found__button-back" onClick={goBack}>Назад</button>
        </section>
    )
}

export default NotFound;
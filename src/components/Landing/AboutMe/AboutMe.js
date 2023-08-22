import './AboutMe.css'
import photo from '../../../images/photo_2023-08-16_15-49-48.jpg'
function AboutMe() {
    return (
        <section className="aboutMe" id='aboutMe'>
            <h2 className="aboutMe__title" >Студент</h2>
            <div className='aboutMe__content'>
                <div className="aboutMe__info">
                    <p className="aboutMe__info_name">Анжела</p>
                    <p className="aboutMe__info_who">Фронтенд-разработчик, 23 года</p>
                    <p className="aboutMe__info_bio">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
                        и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                    <a href='https://github.com/Anzhela2000' target="_blank" className="aboutMe__git">GitHub</a>
                </div>
                <img src={photo} className="aboutMe__photo" alt='моё фото' />
            </div>
            <p className='aboutMe__portfolio_title'>Портфолио</p>
            <div className="aboutMe__portfolio">
                <a className='aboutMe__portfolio_var aboutMe__links' target="_blank">Статичный сайт<p className="aboutMe__portfolio_sign">↗</p></a>
                <a className='aboutMe__portfolio_var aboutMe__links' target="_blank">Адаптивный сайт<p className="aboutMe__portfolio_sign">↗</p></a>
                <a className='aboutMe__portfolio_var aboutMe__links' target="_blank">Одностраничное приложение<p className="aboutMe__portfolio_sign">↗</p></a>
            </div>
        </section>
    )
}

export default AboutMe;
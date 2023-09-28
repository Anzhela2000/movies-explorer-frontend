import './AboutMe.css'
import photo from '../../images/photo_2023-08-16_15-49-48.jpg'
function AboutMe() {
    return (
        <section className="about-me" id='about-me'>
            <h2 className="about-me__title landing__block-title" >Студент</h2>
            <div className='about-me__content'>
                <div className="about-me__info">
                    <p className="about-me__info-title">Анжела</p>
                    <p className="about-me__info-subtitle">Фронтенд-разработчик, 23 года</p>
                    <p className="about-me__info_bio">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
                        и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                    <a href='https://github.com/Anzhela2000' target="_blank" className="about-me__git">GitHub</a>
                </div>
                <img src={photo} className="about-me__photo" alt='моё фото' />
            </div>
            <p className='about-me__portfolio_title'>Портфолио</p>
            <div className="about-me__portfolio">
                <a className='about-me__portfolio-website' target="_blank">Статичный сайт<p className="about-me__portfolio_sign">↗</p></a>
                <a href='https://anzhela2000.github.io/russian-travel' className='about-me__portfolio-website' target="_blank">Адаптивный сайт<p className="about-me__portfolio_sign">↗</p></a>
                <a href='https://mesto-anzhela.nomoredomains.xyz/' className='about-me__portfolio-website' target="_blank">Одностраничное приложение<p className="about-me__portfolio_sign">↗</p></a>
            </div>
        </section>
    )
}

export default AboutMe;
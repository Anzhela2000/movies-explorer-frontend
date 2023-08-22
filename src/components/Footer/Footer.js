import './Footer.css'

function Footer() {
    return (
        <section className="footer">
            <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className="footer__bottom">
                <p className="footer__year">© 2023</p>
                <a href='https://practicum.yandex.ru/' className="footer__yp" target="_blank">Яндекс.Практикум</a>
                <a href='https://github.com' className="footer__yp" target="_blank">GitHub</a>
            </div>
        </section>
    )
}

export default Footer;
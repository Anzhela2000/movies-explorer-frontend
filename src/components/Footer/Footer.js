import './Footer.css'

function Footer() {
    return (
        <section className="footer">
            <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
            <div className="footer__bottom">
                <p className="footer__year">© 2023</p>
                <div className='footer__bottom-links'>
                    <a href='https://practicum.yandex.ru/' className="footer__bottom-link" target="_blank">Яндекс.Практикум</a>
                    <a href='https://github.com' className="footer__bottom-link" target="_blank">GitHub</a>
                </div>
            </div>
        </section>
    )
}

export default Footer;
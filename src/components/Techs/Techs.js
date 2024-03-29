import './Techs.css'

function Techs() {
    return (
        <section className="techs" id='techs'>
            <h2 className="techs__title landing__block-title" >Технологии</h2>
            <div className="techs__content">
                <h3 className="techs__content_title">7 технологий</h3>
                <h4 className="techs__content_subtitle">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</h4>
            </div>
            <ul className="techs__list">
                <li className="techs__item">HTML</li>
                <li className="techs__item">CSS</li>
                <li className="techs__item">JS</li>
                <li className="techs__item">React</li>
                <li className="techs__item">Git</li>
                <li className="techs__item">Express.js</li>
                <li className="techs__item">mongoDB</li>
            </ul>
        </section>
    )
}

export default Techs;
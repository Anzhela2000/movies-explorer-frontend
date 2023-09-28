import './AboutProject.css'
function AboutProject() {
    return (
        <section className="about-project" id='aboutProject' >
            <h2 className="about-project__title landing__block-title" >О проекте</h2>
            <div className='about-project__content'>
                <div className="about-project__column">
                    <p className="about-project__column_title">Дипломный проект включал 5 этапов</p>
                    <p className="about-project__column_subtitle">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className="about-project__column">
                    <p className="about-project__column_title">На выполнение диплома ушло 5 недель</p>
                    <p className="about-project__column_subtitle">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className="about-project__progress">
                <p className='about-project__progress_left'>1 неделя</p>
                <p className='about-project__progress_right'>4 недели</p>
            </div>
            <div className="about-project__web">
                <p className='about-project__web-text'>Back-end</p>
                <p className='about-project__web-text'>Front-end</p>

            </div>

        </section>
    )
}
export default AboutProject;
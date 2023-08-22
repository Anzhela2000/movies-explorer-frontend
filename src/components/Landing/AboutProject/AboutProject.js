import './AboutProject.css'
function AboutProject() {
    return (
        <section className="aboutProject" id='aboutProject' >
            <h2 className="aboutProject__title" >О проекте</h2>
            <div className='aboutProject__content'>
                <div className="aboutProject__column">
                    <p className="aboutProject__column_title">Дипломный проект включал 5 этапов</p>
                    <p className="aboutProject__column_subtitle">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className="aboutProject__column">
                    <p className="aboutProject__column_title">На выполнение диплома ушло 5 недель</p>
                    <p className="aboutProject__column_subtitle">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className="aboutProject__progress">
                <p className='aboutProject__progress_left'>1 неделя</p>
                <p className='aboutProject__progress_right'>4 недели</p>
            </div>
            <div className="aboutProject__web">
                <p className='aboutProject__web_text'>Back-end</p>
                <p className='aboutProject__web_text'>Front-end</p>

            </div>

        </section>
    )
}
export default AboutProject;
import './SearchForm.css'
import sign from '../../../images/icon.svg'
function SearchForm() {
    return (

        <form className="searchForm">
            <div className='searchForm__form'>
                <img src={sign} className='searchForm__sign' alt='поиск'></img>
                <input className="searchForm__input" placeholder="Фильм"></input>
                <button className="searchForm__button"></button>
            </div>
            <div className='seacrhForm__toogle'>
                <input type="checkbox" id="switch" className='searchForm__toogle_sign' /><label className='searchForm__toogle_label' for="switch">Toggle</label>
                <p className="searchForm__toogle_text">Короткометражки</p>
            </div>
        </form>

    )
}

export default SearchForm;
import './SearchForm.css'
import sign from '../../images/icon.svg'
function SearchForm() {
    return (

        <form className="search-form">
            <div className='search-form__form'>
                <img src={sign} className='search-form__sign' alt='поиск'></img>
                <input className="search-form__input" placeholder="Фильм"></input>
                <button className="search-form__button"></button>
            </div>
            <div className='seacrhForm__toogle'>
                <input type="checkbox" id="switch" className='search-form__toogle_sign' /><label className='search-form__toogle_label' for="switch">Toggle</label>
                <label for='switch' className="search-form__toogle_text">Короткометражки</label>
            </div>
        </form>

    )
}

export default SearchForm;
import './SearchForm.css'
import sign from '../../images/icon.svg'
import Checkbox from '../Checkbox/Checkbox';
function SearchForm(props) {

    return (
        <section>
            <form className="search-form">
                <form className='search-form__form'>
                    <img src={sign} className='search-form__sign' alt='поиск'></img>
                    <input className="search-form__input" placeholder="Фильм" onChange={props.handleChange} value={props.inputValue} minLength={1}></input>
                    <button className="search-form__button" type='submit' onClick={props.pushMovies}></button>
                </form>
                <Checkbox isCheckbox={props.isCheckbox} toogleCheckbox={props.toogleCheckbox} />
            </form>
            <span>{props.isErrorMessage}</span>
        </section>
    )
}

export default SearchForm;
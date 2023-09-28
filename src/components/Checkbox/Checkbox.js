import './Checkbox.css'
function Checkbox(props) {
    
    return (
        <div className='seacrhForm__toogle'>
            <input type="checkbox" id="switch" className='search-form__toogle_sign' onChange={props.toogleCheckbox} /><label className={`search-form__toogle_label ${props.isCheckbox ? "search-form__toogle_label_active" : ""}`} for="switch">Toggle</label>
            <label for='switch' className="search-form__toogle_text">Короткометражки</label>
        </div>
    )
}

export default Checkbox;
import SearchForm from "../SearchForm/SearchForm"
import Header from "../Header/Header.js"
import MoviesCardList from "../MoviesCardList/MoviesCardList"
import Footer from "../Footer/Footer"
import arr from "../arr.js"
import './Movies.css'

function Movies() {
    return (
        <section className="movies">
            <Header loggedIn={true} />
            <SearchForm />
            <MoviesCardList arr={arr} />
            <Footer />
        </section>
    )
}

export default Movies;
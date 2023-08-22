import Header from '../Header/Header.js'
import SearchForm from '../Movies/SearchForm/SearchForm.js'
import Footer from '../Footer/Footer.js'
import MoviesCardList from '../SavedMovies/MoviesCardList/MoviesCardList.js'
function SavedMovies() {
    return (
        <section className="movies">
            <Header loggedIn={true} />
            <SearchForm />
            <MoviesCardList />
            <Footer />
        </section>
    )
}
export default SavedMovies;
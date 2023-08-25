import Header from '../Header/Header.js'
import SearchForm from '../SearchForm/SearchForm.js'
import Footer from '../Footer/Footer.js'
import MoviesCardList from '../SavedMoviesCardList/SavedMoviesCardList.js'
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
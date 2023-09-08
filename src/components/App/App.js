import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import './App.css';
import '../../vendor/normalize.css'
import '../../vendor/fonts/Inter.css'
import Landing from "../Landing/Landing";
import SavedMovies from "../SavedMovies/SavedMovies";
import Movies from "../Movies/Movies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFound from "../NotFound/NotFound";
import { auth } from "../../utils/Auth";
import ProtectedRouteElement from "../ProtectedRouteElement/ProtectedRouteElement";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { mainApi } from "../../utils/MainApi";

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [isSavedMovies, setIsSavedMovies] = useState([]);
  const [currentUser, setCurrentUser] = useState({
    "name": '',
    "email": ''
  });

  //Получить сохраненные фильмы 

  function getSavedFilms() {
    mainApi.getSavedFilms().then((movies) => setIsSavedMovies(movies))
  }

  const navigate = useNavigate();
  const location = useLocation();

  //Проверка токена

  useEffect(() => {
    tokenCheck();
  }, [])

  const tokenCheck = () => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      setLoggedIn(true);
      auth.tokenCheck(jwt)
        .then((data) => {
          setCurrentUser(data);
          navigate({ replace: true });
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }

  // Достать пользователя после входа

  useEffect(() => {
    if (loggedIn) {
      mainApi.getUser().then((user) => setCurrentUser(user));
    }
    else {
      console.log('err')
    }
  }, [])

  useEffect(getSavedFilms, [location.pathname])


  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Routes>
          <Route path="/signup" element={<Register />} />
          <Route path="/signin" element={<Login setLoggedIn={setLoggedIn} />} />
          <Route path="/profile" element={<ProtectedRouteElement component={Profile} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
          <Route path="/saved-movies" element={<ProtectedRouteElement component={SavedMovies} loggedIn={loggedIn} savedMovies={isSavedMovies} getSavedFilms={getSavedFilms} />} />
          <Route path="/movies" element={<ProtectedRouteElement component={Movies} loggedIn={loggedIn} savedMovies={isSavedMovies} />} />
          <Route path="/" element={<Landing isLogin={loggedIn} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;

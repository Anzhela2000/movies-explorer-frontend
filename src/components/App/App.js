import { Routes, Route, useNavigate } from "react-router-dom";
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
import ProtectedRouteAuth from "../ProtectedRouteElement/ProtectedRouteAuth";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { mainApi } from "../../utils/MainApi";

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [isSavedMovies, setIsSavedMovies] = useState(null);
  const [currentUser, setCurrentUser] = useState({
    "name": '',
    "email": ''
  });

  const navigate = useNavigate();

  async function getSavedFilms() {
    try {
      let movies = await mainApi.getSavedFilms();
      localStorage.setItem("allSavedMovies", JSON.stringify(movies));
      setIsSavedMovies(JSON.parse(localStorage.getItem('allSavedMovies')));
    }
    catch {
      console.log('err');
    }
  }

  //Проверка токена

  useEffect(() => {
    tokenCheck();
  }, [])

  async function tokenCheck() {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      await getSavedFilms();
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
  }, [loggedIn])

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Routes>
          <Route path="/signup" element={<ProtectedRouteAuth component={Register} loggedIn={loggedIn} setLoggedIn={setLoggedIn} getSavedFilms={getSavedFilms} />} />
          <Route path="/signin" element={<ProtectedRouteAuth component={Login} loggedIn={loggedIn} setLoggedIn={setLoggedIn} getSavedFilms={getSavedFilms} />} />
          <Route path="/profile" element={<ProtectedRouteElement component={Profile} loggedIn={loggedIn} setLoggedIn={setLoggedIn} setCurrentUser={setCurrentUser}/>} />
          <Route path="/saved-movies" element={<ProtectedRouteElement component={SavedMovies} loggedIn={loggedIn} savedMovies={isSavedMovies} setIsSavedMovies={setIsSavedMovies} />} />
          <Route path="/movies" element={<ProtectedRouteElement component={Movies} loggedIn={loggedIn} savedMovies={isSavedMovies} setIsSavedMovies={setIsSavedMovies} />} />
          <Route path="/" element={<Landing isLogin={loggedIn} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;

import { Routes, Route, Navigate, BrowserRouter, useNavigate } from "react-router-dom";
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

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/profile" element={<Profile name="Анжела" email="pochta@yandex.ru" />} />
        <Route path="/saved-movies" element={<SavedMovies />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/" element={<Landing />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

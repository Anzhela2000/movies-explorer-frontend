export default class MainApi {
    constructor({ url, headers }) {
        this._url = url;
        this._headers = headers;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`)
    }

    getUser() {
        return fetch(`${this._url}/users/me`, {
            method: 'GET',
            headers: this._headers,
        }).then(this._checkResponse)
    }

    addFilm(movie) {
        return fetch(`${this._url}/movies`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify(movie)
        }).then(this._checkResponse)
    }

    getSavedFilms() {
        return fetch(`${this._url}/movies`, {
            headers: this._headers,
        }).then(this._checkResponse)
    }

    deleteFilm(id) {
        return fetch(`${this._url}/movies/${id}`, {
            method: 'DELETE',
            headers: this._headers
        }).then(this._checkResponse)
    }

    patchUser(name, email) {
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: name,
                email: email
            })
        }).then(this._checkResponse)
    }

}

export const mainApi = new MainApi({
    url: 'http://localhost:3002',
    headers: {
        authorization: `${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
});
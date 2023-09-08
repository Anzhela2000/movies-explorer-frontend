
class Auth {
    constructor({ url, headers }) {
        this._url = url;
        this._headers = headers;
    }
    checkResponse = (res) => {
        return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
    }

    register = (name, email, password) => {
        return fetch(`${this._url}/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password }),
        })
            .then(this.checkResponse)
            .catch((err) => console.log(err))
    }

    authorize = (email, password) => {
        return fetch(`${this._url}/signin`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({ email, password })
        })
            .then(this.checkResponse)
            .catch((err) => console.log(err))
    }

    tokenCheck = (token) => {
        return fetch(`${this._url}/users/me`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization" : `${token}`,
              },
        })
            .then(this.checkResponse)
    }
}

export const auth = new Auth({
    url: 'http://localhost:3002',
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"     
    }
});
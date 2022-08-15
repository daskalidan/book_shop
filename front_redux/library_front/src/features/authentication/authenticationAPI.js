import axios from 'axios'

const URL = "http://127.0.0.1:8000/"
// async(2)
export function signin(action) {
    return new Promise((resolve) =>
        axios.post(`${URL}token/`, { username: action.username, password: action.password }).then((res) => resolve({ data: res.data }))
    );
}

export function signup(action) {
    return new Promise((resolve) =>
        axios.post(`${URL}register/`, { username: action.username,email: action.email, password: action.password, is_staff:action.is_staff })
        .then((res) => resolve({ data: res.data }))
    );
}
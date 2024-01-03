import api from './apirequest/api'

async function getrooms() {
    await api.get('/', {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("token")
        }
    })
        .then((response) => {
            console.log(response.data)
        })
}

async function login(details) {

    console.log(details)
    await api.post("/login", details)

        .then((responce) => {
            console.log(responce.data);
            localStorage.setItem("token", responce.data)
        })
}
export { getrooms as default, login }
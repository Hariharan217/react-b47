import api from './axios'

async function login(detail) {
    let res = await api.put("/user/login", detail)

    return res.data
}

async function newregistration(details) {
    console.log(details)
    let res = await api.post('/user', details)

    return res.data

}


async function Passwordreset(email) {
   
    let res = await api.post('/user/forgetpassword', {email})

    return res.data

}

async function passwordchange(obj) {
   
    let res = await api.put('/user/passwordchange', obj)

    // console.log(res)

    return res.data

}


export { Passwordreset as default,  passwordchange, login, newregistration}
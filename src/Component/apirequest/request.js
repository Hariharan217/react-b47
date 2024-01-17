import api from './api'

async function getclass() {
    let res = await api.get('/class/getclass', {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("token")
        }
    })
    return res.data;
}
async function studentClassdetail() {
    let res = await api.get('/student/studentClassdetail', {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("token")
        }
    })
    return res.data;
}

async function getoneclass(id) {
    let res = await api.post('/class/getoneclass', { id }, {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("token")
        }
    })

    return res.data;
}

async function leaveapply(id) {
    let res = await api.post('/class/leaveapply', { id }, {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("token")
        }
    })

    return res.data;
}

async function tasksubmission(id) {

    let res = await api.post('/class/tasksubmission', { id }, {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("token")
        }
    })

    return res.data;
}

async function login(detail) {
    let res = await api.put("/student/login", detail)

    return res.data
}


export { getclass as default, login, studentClassdetail, getoneclass, leaveapply, tasksubmission }
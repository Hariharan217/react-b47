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
    // console.log(res.data)
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

    // console.log(id)
    let res = await api.post('/class/leaveapply' , {id},{
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("token")
        }
    })

    return res.data;
}

async function tasksubmission(id) {

    // console.log('hi')
    let res = await api.post('/class/tasksubmission', {id},{
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("token")
        }
    })

    return res.data;
}

async function Passwordreset(email) {

   let res = await api.post('/student/forgetpassword', {email})

    // return res.data;
}

async function login(detail) {
 let res=   await api.put("/student/login", detail)

    

        // .then((res) => {
        //     console.log(res.data);
        //     localStorage.setItem("token", res.data)
        // })

        return res.data
}


export { getclass as default, login, studentClassdetail, getoneclass , leaveapply, tasksubmission, Passwordreset}
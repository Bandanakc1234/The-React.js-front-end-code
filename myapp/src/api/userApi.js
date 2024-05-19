import {API} from '../config'

export const userRegister = (username, email, password) =>{
    let user = {username, email, password}
    return fetch (`${API}/signup`,{
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(user)
    })
    .then(response =>{return response.json})
    .catch (error=> console.log(error))
}

//login
export const userLogin = ({email, password}) =>{
    return fetch(`${API}/auth/login`,{
        method: 'POST',
        headers: {
            "Content-Type":"application/json"
        },
        body:JSON.stringify({email, password})
    })
    .then(response =>{return response.json()})
    .catch(error => console.log(error))
}


// delete user
export const deleteUser = (id, token) =>{
    return fetch(`${API}/profile/${id}`,{
        method: "DELETE",
        // headers: {
        //     Authorization: `Bearer ${token}`
        // }
    })
    .then(response =>{return response.json()})
    .catch(error => console.log(error))
}

//user detail
export const userDetail = (id, token) =>{
    return fetch(`${API}/profile/${id}`,{
        // headers: {
        //     Authorization: `Bearer ${token}`
        // }
    })
    .then(response =>{return response.json()})
    .catch(error => console.log(error))
}

//update user
export const userUpdate = (id, user, token)=>{
    return fetch(`${API}/profile/${id}`,{
        method: "PUT",
        headers:{
            // Authorization:`Bearer ${token}`
            "Content-Type":"application/json"
        },
        body: user
    })
    .then(response =>{return response.json()})
    .catch(error => console.log(error))
}

// authenticate to keep sigined in
export const authenticate = (logininfo) => {
    localStorage.setItem('token', logininfo.token)
    localStorage.setItem('user', JSON.stringify(logininfo.user))
}

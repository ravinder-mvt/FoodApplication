export const getToken = () => {
    return JSON.parse(localStorage.getItem("token"))
}

//set Token

export const setToken = (data) => {
    return localStorage.setItem("token", JSON.stringify(data))
}


//remove token

export const removeToken = () => {
    return localStorage.removeItem("token")
}

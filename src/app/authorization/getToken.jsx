const getToken = () => {
    const isToken = sessionStorage.getItem("loginToken");
    const userToken = isToken
    return userToken
}

export default getToken
import axios from "axios";

export const registerUser = ( async (values) => {
    console.log(values)
    const result = await axios.post("http://localhost:3000/api/users", {
        identity_number: values.identity_number.toString(),
        name: values.firstName + ' ' +values.lastName,
        telp: values.telp,
        gender: values.gender,
        place_of_birth: values.place_of_birth,
        date_of_birth: values.date_of_birth,
        religion: values.religion,
        email: values.email,
        password: values.password,
        roleId: values.roleId,
        status: values.status
    }).then( (response) => {
        return {"status" : "success"}
    }).catch( (error) => {
        return {"status" : "failed", 'error' : error.response.data.errors}
    });
    return result
})

export const getLastIdentityNumber = async (id) => {
    const result = await axios.get('http://localhost:3000/api/users/getLastIdentityNumber', {
        roleId: id,
    })
    .then(response => {
        let idNo = response.data.data.identity_number
        const code = idNo.substring(0,9)
        idNo = parseInt(idNo.slice(-4))+1
        const idNumber = String(idNo).padStart(4, '0');
        const identity_number = code+idNumber
        return identity_number
    })
    .catch(error => {
        console.error('Error fetching data :', error);
    })
    return result
}

export const loginUser = (value) => {
    const result = axios.post("http://localhost:3000/api/users/login", {
        email: value.email,
        password: value.password
    })
    .then(response => {
        return {"status" : "success", "token" : response.data.data.token}
    })
    .catch(error => {
        return {"status" : "failed", 'error' : error.response.data.errors}
    })
    return result
} 

export const getDataUser = async (loginToken) => {
    const result = await axios.get("http://localhost:3000/api/users/current", {
        headers: {
            Authorization : loginToken
        }
    })
    .then(response => {
        return {"data" : response.data.data}
    })
    .catch(error => {
        return error
    })
    return result
}

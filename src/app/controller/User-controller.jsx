import axios from "axios";

export const registerUser = ( async (values) => {
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
        // console.log(JSON.stringify(response.data));
        return {"status" : "success"}
    }).catch( (error) => {
        return {"status" : "failed", 'error' : error.response.data.errors}
        // console.log();
    });
    return result
})

export const getLastIdentityNumber = (id) => {
    const result = axios.get('http://localhost:3000/api/users/getLastIdentityNumber', {
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
        console.error('Error fetching data:', error);
    })
    return result
}

export const loginUSer = (value) => {
    const result = axios.post("http://localhost:3000/api/users/login", {
        email: value.email,
        password: value.password
    })
    .then(response => {
        // console.log(response)
        return {"status" : "success"}
    })
    .catch(error => {
        // console.log(error)
        return {"status" : "failed", 'error' : error.response.data.errors}
    })
    return result
} 
import axios from "axios";


async function Register(name, email, password) {

    try {
        let response = await axios.post("http://localhost:5000/register", {
            "name": name,
            "email": email,
            "password": password
        })
        return response
    }

    catch (error) {
    return error.response
    }

}

export default Register;
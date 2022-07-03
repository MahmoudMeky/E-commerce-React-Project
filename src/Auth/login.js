import axios from "axios";


async function Login(email, password) {

    try {
        let response = await axios.post("http://localhost:5000/login", {
            "email": email,
            "password": password
        })
        return response
    }

    catch (error) {
    return error.response
    }

}

export default Login;
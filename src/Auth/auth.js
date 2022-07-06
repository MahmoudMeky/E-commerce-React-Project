import axios from "axios";

async function Authenticate() {
    try {
        let response = await axios.post(
            "http://localhost:5000/auth",
            {},
            {
                headers: {
                    "access-token": localStorage.getItem("access_token"),
                },
            }
        );
        return response;
    } catch (error) {
        return error.response;
    }
}

export default Authenticate;

// import jwt from "jsonwebtoken";
import axios from "axios";

const accessToken: any = localStorage.getItem("accessToken");
const userService = {

    // getUserProfile: async (userData: any) => {
    //     let userProfile = await axios
    //         .post(`http://localhost:8000/users/${decodedToken}`, {
    //             headers: {
    //                 Authorization: accessToken
    //             }    //             })
    //
    //         })
    //
    // },

    // getUser: async (token) => {
    //     let userAuth = await axios
    //         .get("http://localhost:8000/login",
    //             {
    //                 headers: {
    //                     "Content-Type": "application/json"
    //                 }
    //             })
    //     return userAuth.data;
    // },
    signIn: async (login: string, password: string) => {
        let userAuth = await axios
            .post("http://localhost:8000/login", {
                    login: login,
                    password: password
                },
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
        return userAuth.data;
    },
}
export default userService

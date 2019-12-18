// import jwt from "jsonwebtoken";
import axios from "axios";

const accessToken: any = localStorage.getItem("accessToken");
const userService = {

    getMyPage: async () => {
        let userProfile = await axios
            .get("http://localhost:8000/myPage", {
                headers: {
                    Authorization: accessToken
                }
            })
        console.log(userProfile)
        return userProfile.data;

    },

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

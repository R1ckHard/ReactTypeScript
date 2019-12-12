import jwt from "jsonwebtoken";

const accessToken: any = localStorage.getItem("accessToken");

const userService = {

    getUserProfile: async (userData: any) => {
        let userProfile = await fetch(`http://localhost:8000/users/${"verifyToken"}`, {
            headers: {
                Authorization: accessToken
            },
            method: "POST",
            body: JSON.stringify({
                title: "Title of post",
                body: userData
            })

        })

    },
    signIn: async (login:any,password:any) => {
        let userAuth = await fetch("http://localhost:8000/login", {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({
                login:login,
                password:password
            })

        })
        console.log(userAuth);
        console.log(login,password);
        return userAuth;
    },
}
export default userService

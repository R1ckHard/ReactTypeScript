import axios from "axios";

// const accessToken: any = localStorage.getItem("accessToken");
const userService = {

    getMyPage: async () => {
        let userProfile = await axios
            .get("http://localhost:8000/myPage", {
                headers: {
                    Authorization: await localStorage.getItem("accessToken"),
                }
            })
        console.log(userProfile)
        return userProfile.data;

    },
    signUp: async (login: string, password: string,name:string,surname:string) => {
        let userRegistr = await axios
            .post("http://localhost:8000/registration", {
                    login: login,
                    password: password,
                    name:name,
                    surname:surname
                },
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
        console.log(userRegistr);
        return userRegistr.data;
    },

    updateUser: async (login: string, password: string,name:string,surname:string) => {
        let deleteUser = await axios
            .put("http://localhost:8000/settings", {
                    login: login,
                    password: password,
                    name:name,
                    surname:surname
                },
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
        return deleteUser.data;
    },

    deleteUser: async () => {
        let deleteUser = await axios
            .delete("http://localhost:8000/settings",{
                headers: {
                    Authorization: await localStorage.getItem("accessToken"),
                }
            })
        return deleteUser.data;
    },

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

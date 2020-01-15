import React, {FormEvent} from "react";
import {MyProfile} from "../components/MyProfile/MyProfile";
import userService from "../service/UserService";
import {Navbar} from "../components/Navbar/Navbar";

export class Settings extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            userData: {
                login: '',
                password: '',
                name: '',
                surname: '',
                image:''
            },
            token: false,
        }
    }

    handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(this.state.userData);
        if (this.state.userData.image) {
            const data = new FormData();
            data.append("imageName",this.state.userData.image);
            let updateImage = await userService.updateImage(data);
            this.props.setUserProfile(updateImage);
        }
        let changeUserData = await userService.updateUser(this.state.userData.login,
                this.state.userData.name,
                this.state.userData.surname);
            this.setState({
                login: changeUserData.login,
                name: changeUserData.name,
                surname: changeUserData.surname
            })
        
    };

    
    deleteUser = async () => {
        try {
            await userService.deleteUser();
            console.log("user is deleted")
            this.props.history.push("/")

        } catch (e) {
            console.log(e.message)
        }
    }

    inputHandler = async (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            userData: {
                ...this.state.userData,
                [event.target.name]: event.target.value
            }
        })
    };

    componentDidMount = async () => {
        try {
            const data = await userService.getMyPage();
            this.setState({
                userData: {
                    ...this.state.userData,
                    login: data.login,
                    name: data.name,
                    surname: data.surname,
                },
                token: true,

            })
        } catch (e) {
            this.props.history.push('/login');

        }
    };

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <>
                <Navbar history={this.props.history}
                        token={this.state.token}
                        userData={this.state.userData}
                />

                <MyProfile
                    handleSubmit={this.handleSubmit}
                    userData={this.state.userData}
                    token={this.state.token}
                    inputHandler={this.inputHandler}
                    history={this.props.history}
                    deleteUser={this.deleteUser}
                />
            </>
        )
    }


}


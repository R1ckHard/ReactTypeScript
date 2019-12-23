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
                visible: false
            },
            token: false,
        }
    }

    handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            let changeUserData = await userService.updateUser(this.state.userData.login, this.state.userData.password, this.state.userData.name, this.state.userData.surname);
            this.setState({
                login: changeUserData.login,
                password: changeUserData.password,
                name: changeUserData.name,
                surname: changeUserData.surname
            })

        } catch (e) {
            console.log(e.message)
        }
    };

    loginHandler = async (event: React.ChangeEvent<HTMLInputElement>) => {
        await this.setState({
            userData: {
                ...this.state.userData,
                login: event.target.value
            }
        })
    }
    passwordHandler = async (event: React.ChangeEvent<HTMLInputElement>) => {
        await this.setState({
            userData: {
                ...this.state.userData,
                password: event.target.value
            }
        })

    }
    nameHandler = async (event: React.ChangeEvent<HTMLInputElement>) => {
        await this.setState({
            userData: {
                ...this.state.userData,
                name: event.target.value
            }
        })
    };
    surnameHandler = async (event: React.ChangeEvent<HTMLInputElement>) => {
        await this.setState({
            userData: {
                ...this.state.userData,
                surname: event.target.value
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
                <Navbar history={this.props.history} token={this.state.token}/>
                <MyProfile
                    onSubmit={this.handleSubmit}
                    userData={this.state.userData}
                    token={this.state.token}
                    surnameHandler={this.surnameHandler}
                    nameHandler={this.nameHandler}
                    loginHandler={this.loginHandler}
                    passwordHandler={this.passwordHandler}
                    history={this.props.history}/>
            </>
        )
    }


}


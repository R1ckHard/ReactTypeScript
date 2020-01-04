import React, {FormEvent} from "react";
import {MyProfile} from "../components/MyProfile/MyProfile";
import userService from "../service/UserService";
import {Navbar} from "../components/Navbar/Navbar";

export class MyPage extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            userData: {
                login: '',
                password: '',
                name: '',
                surname: '',
            },
            token: false,
        }
    }

    handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            // let changeUserData = await userService.signIn(this.state.userData.login, this.state.userData.password);
            //
            // if (accessToken) {
            //     localStorage.setItem("accessToken", accessToken);
            //     this.props.history.push('/myPage');
            // }

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
                <h1>Hello {this.state.userData.login}</h1>
                <h1>Hello {this.state.userData.name}</h1>
                <h1>Hello {this.state.userData.surname}</h1>

            </>
        )
    }


}


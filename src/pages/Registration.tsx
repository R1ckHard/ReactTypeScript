import React, {FormEvent} from "react";
import {SignUpForm} from "../components/SignUpForm/SignUpForm";
import {Navbar} from "../components/Navbar/Navbar";
import userService from "../service/UserService";


export class Registration extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            userData: {
                login: '',
                password: '',
                name: '',
                surname: '',
            }
        }
    }

    handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            let user = await userService.signUp(this.state.userData.login, this.state.userData.password, this.state.userData.name, this.state.userData.surname);
            this.props.history.push('/login');

        } catch (e) {
            if (e.status === 401) {
                console.log('invaligLogin')
            }
            console.log(e.message)
        }
    };
    loginHandler = async (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            userData: {
                ...this.state.userData,
                login: event.target.value
            }
        })
    };
    passwordHandler = async (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            userData: {
                ...this.state.userData,
                password: event.target.value
            }
        })
    };
    nameHandler = async (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            userData: {
                ...this.state.userData,
                name: event.target.value
            }
        })
    };
    surnameHandler = async (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            userData: {
                ...this.state.userData,
                surname: event.target.value
            }
        })
    };

    render() {
        return (
            <>
                <Navbar history={this.props.history}/>
                <SignUpForm
                    handleSubmit={this.handleSubmit}
                    loginHandler={this.loginHandler}
                    passwordHandler={this.passwordHandler}
                    nameHandler={this.nameHandler}
                    surnameHandler={this.surnameHandler}
                    history={this.props.history}/>
            </>
        )
    }

}


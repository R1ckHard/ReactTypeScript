import React, {FormEvent} from "react";
import {SignUpForm} from "../components/SignUpForm/SignUpForm";
import Navbar from "../components/Navbar/Navbar";
import userService from "../service/UserService";

interface State {
    userData: {
        login: string,
        password: string,
        name: string,
        surname: string,
    },
}

export class Registration extends React.Component<any, State> {
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

    inputHandler = async (event: React.ChangeEvent<HTMLInputElement>) => {
          this.setState({
            userData: {
                ...this.state.userData,
                [event.target.name]: event.target.value
            }
        })
    };

    render() {
        return (
            <>
                <Navbar history={this.props.history}/>
                <SignUpForm
                    handleSubmit={this.handleSubmit}
                    userData={this.state.userData}
                    inputHandler={this.inputHandler}
                    history={this.props.history}/>
            </>
        )
    }

}


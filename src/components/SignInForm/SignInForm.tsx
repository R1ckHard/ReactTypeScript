import React from "react";
import {TextField, Button} from "@material-ui/core/";
import "./SIgnInForm.scss";
import userService from "../../service/UserService";

export class SignInForm extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            userData: {
                login: null,
                password: null
            }

        }
    }

    handleSubmit = async (event: any) => {
        event.preventDefault();
        try {
            let accessToken = await userService.signIn(this.state.userData.login, this.state.userData.password);
            if (accessToken) {
                localStorage.setItem("accessToken", JSON.stringify(accessToken));
            }
        } catch (e) {
            if (e.response.status === 401) {
                console.log('invaligLogin')
            }
        }
    };
    loginHandler = async(event: any) => {
       await this.setState({
            userData: {
                ...this.state.userData,
                login: event.target.value
            }
        })
        console.log(this.state.userData.login);
    }
    passwordHandler = async(event: any) => {
        await this.setState({
            userData: {
                ...this.state.userData,
                password: event.target.value
            }
        })
        console.log(this.state.userData.password);

    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="signInForm">
                    <TextField
                        onChange={this.loginHandler}
                        name="login"
                        className="text-field"
                        id="outlined"
                        label="Login"
                        variant="outlined"
                    />
                    <TextField
                        name="password"
                        onChange={this.passwordHandler}
                        className="text-field"
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant="outlined"
                    />
                    <Button className='submitButton' type="submit" variant="contained" color="primary">
                        Submit
                    </Button>
                </form>
            </div>
        )
    }


};









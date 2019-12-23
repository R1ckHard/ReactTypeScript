import React, {FormEvent} from "react";
import {TextField, Button, Typography} from "@material-ui/core/";
import "./SignUpForm.scss";
import userService from "../../service/UserService";

export class    SignUpForm extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            userData: {
                login: '',
                password: '',
                name:'',
                surname:'',
            }
        }
    }

    handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            let user = await userService.signUp(this.state.userData.login, this.state.userData.password,this.state.userData.name,this.state.userData.surname);
            this.props.history.push('/login');

        } catch (e) {
            if (e.status === 401) {
                console.log('invaligLogin')
            }
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
    };
    passwordHandler = async (event: React.ChangeEvent<HTMLInputElement>) => {
        await this.setState({
            userData: {
                ...this.state.userData,
                password: event.target.value
            }
        })
    };
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


    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="signInForm">
                    <Typography variant="h4" gutterBottom>
                        Sigh Up Please
                    </Typography>
                    <TextField
                        onChange={this.loginHandler}
                        name="login"
                        className="text-field"
                        id="outlined"
                        variant="outlined"
                        placeholder="Login"
                    />
                    <TextField
                        name="password"
                        onChange={this.passwordHandler}
                        className="text-field"
                        id="outlined-password-input"
                        type="password"
                        autoComplete="current-password"
                        variant="outlined"
                        placeholder="Password"

                    />
                    <TextField
                        onChange={this.nameHandler}
                        className="text-field"
                        id="outlined"
                        variant="outlined"
                        placeholder="Name"
                    />
                    <TextField
                        onChange={this.surnameHandler}
                        className="text-field"
                        id="outlined-password-input"
                        autoComplete="current-password"
                        variant="outlined"
                        placeholder="Surname"

                    />
                    <Button className='submitButton' type="submit" variant="contained" color="primary">
                        Submit
                    </Button>
                </form>
            </div>
        )
    }

};







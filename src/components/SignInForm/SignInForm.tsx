import React, {FormEvent} from "react";
import {TextField, Button, Typography} from "@material-ui/core/";
import "./SignInForm.scss";

export class SignInForm extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        
    }

    loginHandler = async (event: React.ChangeEvent<HTMLInputElement>) => {
        this.props.setAuthLogin(event.target.value)

    }
    passwordHandler = async (event: React.ChangeEvent<HTMLInputElement>) => {
        this.props.setAuthPassword(event.target.value)
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div className="container">
                <form onSubmit={this.props.handleSubmit} className="signInForm">
                    <Typography variant="h4" gutterBottom>
                        Sigh In Please
                    </Typography>
                    <TextField
                        onChange={this.loginHandler}
                        value={this.props.login}
                        className="text-field"
                        id="outlined"
                        variant="outlined"
                        placeholder="Login"
                    />
                    <TextField
                        name="password"
                        onChange={this.passwordHandler}
                        value={this.props.password}
                        className="text-field"
                        id="outlined-password-input"
                        type="password"
                        autoComplete="current-password"
                        variant="outlined"
                        placeholder="Password"

                    />
                    <Button className='submitButton' type="submit" variant="contained" color="primary">
                        Submit
                    </Button>
                </form>
            </div>
        )
    }

};







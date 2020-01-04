import React, {FormEvent} from "react";
import {TextField, Button, Typography} from "@material-ui/core/";
import "./SignUpForm.scss";

export class  SignUpForm extends React.Component<any, any> {
    constructor(props:any){
        super(props)
    }
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div className="container">
                <form onSubmit={this.props.handleSubmit} className="signInForm">
                    <Typography variant="h4" gutterBottom>
                        Sigh Up Please
                    </Typography>
                    <TextField
                        onChange={this.props.loginHandler}
                        name="login"
                        className="text-field"
                        id="outlined"
                        variant="outlined"
                        placeholder="Login"
                    />
                    <TextField
                        name="password"
                        onChange={this.props.passwordHandler}
                        className="text-field"
                        id="outlined-password-input"
                        type="password"
                        autoComplete="current-password"
                        variant="outlined"
                        placeholder="Password"

                    />
                    <TextField
                        onChange={this.props.nameHandler}
                        className="text-field"
                        id="outlined"
                        variant="outlined"
                        placeholder="Name"
                    />
                    <TextField
                        onChange={this.props.surnameHandler}
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







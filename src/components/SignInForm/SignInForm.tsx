import React, {FormEvent} from "react";
import {TextField, Button, Typography} from "@material-ui/core/";
import "./SignInForm.scss";
import userService from "../../service/UserService";
import {setAuthUser } from '../../store/auth/actions';
import {connect} from 'react-redux'
import rootReducer from '../../store/reducers'
import {createStore} from 'redux'
import {store} from '../../App';

class SignInForm extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        console.log(props)
        this.state = {
            login: '',
            password: ''
        }
    }
    
    componentDidMount = () => {
        console.log(this.props.userProfile)
        store.subscribe(() => {
            if (this.props.userProfile !== store.getState().auth.userProfile) {
                console.log(1)
                console.log(store.getState().auth.userProfile)
            }

        })
    }

    loginHandler = async (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({login: event.target.value})

    }
    passwordHandler = async (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({password: event.target.value})
    }

    handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            let accessToken = await userService.signIn(this.state.login, this.state.password);
            if (accessToken) {
                await localStorage.setItem("accessToken", accessToken);
                let user = await userService.getMyPage();
                this.props.setAuthLogin(user);
                    // this.props.history.push('/myPage');
            }
        } catch (e) {
            if (e.status === 401) {
                console.log('invaligLogin')
            }
            console.log(e.message)
        }
    };
    

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="signInForm">
                    <Typography variant="h4" gutterBottom>
                        Sigh In Please
                    </Typography>
                    <TextField
                        onChange={this.loginHandler}
                        value={this.state.login}
                        className="text-field"
                        id="outlined"
                        variant="outlined"
                        placeholder="Login"
                    />
                    <TextField
                        name="password"
                        onChange={this.passwordHandler}
                        value={this.state.password}
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

const mapStateToProps = (state: any) => {
    return {
        userProfile: state.auth.login
    };
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        setAuthLogin: (user: any) => {dispatch(setAuthUser(user))},
        // setAuthPassword
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignInForm)







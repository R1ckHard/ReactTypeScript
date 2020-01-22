import React, {FormEvent} from "react";
import {TextField, Button, Typography} from "@material-ui/core/";
import "./SignInForm.scss";
import userService from "../../service/UserService";
import {setAuthUser} from '../../store/auth/actions';
import {connect} from 'react-redux'
import {store} from '../../index';

interface State {
    login:any,
    password:any
}
class SignInForm extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            login: '',
            password: ''
        }
    }

    componentDidMount = () => {
        console.log(this.props)
        store.subscribe(() => {
            if (this.props.userProfile !== store.getState().auth.userProfile) {
                console.log(store.getState().auth.userProfile)
            }
        })
        console.log(store.getState().auth.userProfile)
    }

    inputHandler = async (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(this.state);
        try {
            let accessToken = await userService.signIn(this.state.login, this.state.password);
            if (accessToken) {
                await localStorage.setItem("accessToken", accessToken);
                let user = await userService.getMyPage();
                this.props.setAuthUser(user);
                this.props.history.push('/myPage');
            }
        } catch (e) {
            if (e.status === 401) {
                console.log('invaligLogin')
            }
            console.log(e.message)
        }
        console.log(this.props);
    };
    
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="signInForm">
                    <Typography variant="h4" gutterBottom>
                        Sigh In Please
                    </Typography>
                    <TextField
                        name='login'
                        onChange={this.inputHandler}
                        value={this.state.login}
                        className="text-field"
                        id="outlined"
                        variant="outlined"
                        placeholder="Login"
                    />
                    <TextField
                        name="password"
                        onChange={this.inputHandler}
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
        userProfile: state.auth.userProfile
    };
}
const mapDispatchToProps = {
    setAuthUser,

}
export default connect(mapStateToProps, mapDispatchToProps)(SignInForm)







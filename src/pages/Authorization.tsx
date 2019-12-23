import React, {FormEvent} from "react";
import {SignInForm} from "../components/SignInForm/SignInForm";
import userService from "../service/UserService";
import {Navbar} from "../components/Navbar/Navbar";

export class Authorization extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            userData: {
                login: null,
                password: null
            },
        }
    }

    handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            let accessToken = await userService.signIn(this.state.userData.login, this.state.userData.password);
            if (accessToken) {
                await localStorage.setItem("accessToken", accessToken);
                this.props.history.push('/myPage');
            }
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
        console.log(this.state.userData.login);

    }
    passwordHandler = async (event: React.ChangeEvent<HTMLInputElement>) => {
        await this.setState({
            userData: {
                ...this.state.userData,
                password: event.target.value
            }
        })
        console.log(this.state.userData.password);
    }
    componentDidMount = async () => {
        try {
            const data = await userService.getMyPage();
            if (data) {
                this.props.history.push("/myPage")
            }

        } catch (e) {
            console.log(e.message);
        }

    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <>
                <Navbar history={this.props.history}/>
                <SignInForm loginHandler={this.loginHandler}
                            passwordHandler={this.passwordHandler}
                            handleSubmit={this.handleSubmit}
                            history={this.props.history}/>
            </>

        );
    }


}

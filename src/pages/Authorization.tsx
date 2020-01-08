import React, {FormEvent} from "react";
import SignInForm from "../components/SignInForm/SignInForm";
import userService from "../service/UserService";
import {Navbar} from "../components/Navbar/Navbar";
// import {setAuthUser } from '../store/auth/actions'
// import {connect} from 'react-redux'

export default class Authorization extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

    }

    handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        console.log(this.props)
        event.preventDefault();
        // try {
        //     let accessToken = await userService.signIn(this.props.login, this.props.password);
        //     if (accessToken) {
        //         await localStorage.setItem("accessToken", accessToken);
        //         let user = await userService.getMyPage();
        //         this.props.setAuthLogin(user);
        //         console.log(user)
        //             // this.props.history.push('/myPage');
        //     }
        // } catch (e) {
        //     if (e.status === 401) {
        //         console.log('invaligLogin')
        //     }
        //     console.log(e.message)
        // }
    };

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
                <SignInForm history={this.props.history}/>
            </>

        );
    }


}

// const mapStateToProps = (state: any) => {
//     return {
//         login: state.auth.login,
//         password: state.auth.password
//     };
// }
// const mapDispatchToProps = (dispatch: any) => {
//     return {
//         setAuthUser: (user: any) => {dispatch(setAuthUser(user))},
//         // setAuthPassword
//     }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Authorization)

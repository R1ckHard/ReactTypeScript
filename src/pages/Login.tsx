import React from "react";
import SignInForm from "../components/SignInForm/SignInForm";
import userService from "../service/UserService";
import Navbar from "../components/Navbar/Navbar";


export default class Login extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

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
                <SignInForm history={this.props.history}/>
            </>

        );
    }


}

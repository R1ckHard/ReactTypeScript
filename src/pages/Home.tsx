import React from "react";
import {UserTable} from "../components/UserTable/UserTable";
import Navbar from "../components/Navbar/Navbar";
import userService from "../service/UserService";

interface State {
    userData: {
        login: string,
        password: string,
        name: string,
        surname: string,
        image:string
    },
    token: boolean,
}
export class Home extends React.Component <any, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            userData: {
                login: '',
                password: '',
                name: '',
                surname: '',
                image:'',
            },
            token: false,
        }
    }


    componentDidMount = async () => {
        const data = await userService.getMyPage();
        if(data){
             this.setState({
                userData: {
                    ...this.state.userData,
                    login: data.login,
                    name: data.name,
                    surname: data.surname,
                    image: data.image
                },
                token: true,

            })
        }
        else {
            this.setState({
                token: false,

            })
        }
        console.log(this.state.token);


    };

    render() {
        return (
            <>
                <Navbar  token={this.state.token} history={this.props.history}/>
            </>
        )
    }

}


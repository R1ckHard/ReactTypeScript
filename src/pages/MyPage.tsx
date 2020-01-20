import React, {FormEvent} from "react";
import {MyProfile} from "../components/MyProfile/MyProfile";
import userService from "../service/UserService";
import Navbar from "../components/Navbar/Navbar";
import {CircularProgress} from "@material-ui/core";


export class MyPage extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            userData: {
                login: '',
                name: '',
                surname: '',
                image: ''
            },
            token: false,
        }
    }


    componentDidMount = async () => {
        try {
            const data = await userService.getMyPage();
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
            console.log(this.state)

        } catch (e) {
            this.props.history.push('/login');

        }

    };
    

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <>
                {this.state.token ? (
                    <>
                        <Navbar history={this.props.history} token={this.state.token}/>
                        <h1>Hello {this.state.userData.login}</h1>
                        <h1>Hello {this.state.userData.name}</h1>
                        <h1>Hello {this.state.userData.surname}</h1>
                        <img src={`http://localhost:8000/${this.state.userData.image}`} alt="myImage"/>
                    </>

                ) : <div className='container'>
                    <CircularProgress className='loader' disableShrink/>
                </div>
                }

            </>
        )
    }


}


import React, {FormEvent} from "react";
import {MyProfile} from "../components/MyProfile/MyProfile";
import userService from "../service/UserService";
import Navbar from "../components/Navbar/Navbar";
import {CircularProgress} from "@material-ui/core";
import {connect} from 'react-redux'
import {setAuthUser} from './../store/auth/actions';


interface State {
    userData: {
        login: string,
        name: string,
        surname: string,
        image?: string | null | Blob
    },
    token: boolean,
}

class Settings extends React.Component<any, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            userData: {
                login: '',
                name: '',
                surname: '',
                image: null
            },
            token: false,
        }
    }

    handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(this.state.userData);
        let changeUserData = await userService.updateUser(
            this.state.userData.login,
            this.state.userData.name,
            this.state.userData.surname
        );
        console.log('sasas', changeUserData);
        this.props.setAuthUser(changeUserData);

        if (this.state.userData.image) {
            console.log(this.state.userData.image);
            const data = new FormData();
            data.append("image", this.state.userData.image);
            let updateImage = await userService.updateImage(data);
            this.props.setAuthUser(updateImage);
            console.log(updateImage);
        }
        console.log(changeUserData);
        
    };

    deleteUser = async () => {
        try {
            await userService.deleteUser();
            console.log("user is deleted")
            this.props.history.push("/")

        } catch (e) {
            console.log(e.message)
        }
    }

    inputHandler = async (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            userData: {
                ...this.state.userData,
                [event.target.name]: event.target.value
            }
        })
    };

    updateImage = async (event: any) => {
        this.setState({
            userData: {
                ...this.state.userData,
                image: event.target.files[0]
            }
        })
    };

    componentDidMount = async () => {
        try {
            const data = await userService.getMyPage();
            this.setState({
                userData: {
                    login: data.login,
                    name: data.name,
                    surname: data.surname,
                },
                token: true,

            })
        } catch (e) {
            this.props.history.push('/login');

        }
    };

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <>
                {this.state.token ? (
                        <>
                            <Navbar history={this.props.history}
                                    token={this.state.token}
                                    userData={this.state.userData}
                            />
                            <MyProfile
                                handleSubmit={this.handleSubmit}
                                userData={this.state.userData}
                                token={this.state.token}
                                inputHandler={this.inputHandler}
                                updateImage={this.updateImage}
                                history={this.props.history}
                                deleteUser={this.deleteUser}
                            />
                        </>
                    ) :
                    <div className='container'>
                        <CircularProgress className='loader' disableShrink/>
                    </div>
                }

            </>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        userProfile: state.settings.userProfile
    };
}
const mapDispatchToProps = {
    setAuthUser,
}
export default connect(mapStateToProps, mapDispatchToProps)(Settings)

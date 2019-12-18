import React, {FormEvent} from "react";
import {Button, TextField, Typography,CircularProgress} from "@material-ui/core";
import userService from "../../service/UserService";
import "./MyProfile.scss";


export class MyProfile extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            userData: {
                login: '',
                password: '',
                name: '',
                surname: '',
                visible: false
            }
        }
    }

    handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            let accessToken = await userService.signIn(this.state.userData.login, this.state.userData.password);

            if (accessToken) {
                localStorage.setItem("accessToken", accessToken);
                this.props.history.push('/myPage');
            }

        } catch (e) {
            if (e.status === 401) {
                console.log('invaligLogin')
            }
            console.log(e.message)
        }
    };

    componentDidMount = async () => {
        try {
            const data = await userService.getMyPage();
            this.setState({
                userData: {
                    ...this.state.userData,
                    login: data.login,
                    name: data.name,
                    surname: data.surname,
                    visible: true
                }
            })
        } catch (e) {
            console.error(e.message)
        }

    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div className="container">
                {
                    this.state.userData.visible ? (
                        <form onSubmit={this.handleSubmit} className="userDataForm">
                            <Typography variant="h4" gutterBottom>
                                Hello {this.state.userData.login}
                            </Typography>
                            <TextField
                                value={this.state.userData.login}
                                className="text-field"
                                id="outlined"
                                variant="outlined"
                            />
                            <TextField
                                placeholder="Input new password"
                                className="text-field"
                                id="outlined"
                                variant="outlined"
                            />
                            <TextField
                                value={this.state.userData.name}
                                placeholder="Name"
                                className="text-field"
                                id="outlined"
                                variant="outlined"
                            />
                            <TextField
                                value={this.state.userData.surname}
                                placeholder="Surname"
                                className="text-field"
                                id="outlined"
                                variant="outlined"
                            />
                            <Button className='submitButton' type="submit" variant="contained" color="primary">
                                Submit
                            </Button>
                        </form>
                    ): <CircularProgress disableShrink />
                }
            </div>


        );
    }
};







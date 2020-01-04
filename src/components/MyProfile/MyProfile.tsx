import React, {FormEvent} from "react";
import {Button, TextField, Typography, CircularProgress} from "@material-ui/core";
import "./MyProfile.scss";


export class MyProfile extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div className="container">
                {
                    this.props.token ? (
                        <form onSubmit={this.props.handleSubmit} className="userDataForm">
                            <Typography variant="h4" gutterBottom>
                                Hello {this.props.userData.login}
                            </Typography>
                            <TextField
                                value={this.props.userData.login}
                                onChange={this.props.loginHandler}
                                className="text-field"
                                id="outlined"
                                variant="outlined"
                            />
                            {/*<TextField*/}
                            {/*    placeholder="Input new password"*/}
                            {/*    className="text-field"*/}
                            {/*    id="outlined"*/}
                            {/*    variant="outlined"*/}
                            {/*/>*/}
                            <TextField
                                value={this.props.userData.name}
                                onChange={this.props.nameHandler}
                                placeholder="Name"
                                className="text-field"
                                id="outlined"
                                variant="outlined"
                            />
                            <TextField
                                value={this.props.userData.surname}
                                onChange={this.props.surnameHandler}
                                placeholder="Surname"
                                className="text-field"
                                id="outlined"
                                variant="outlined"
                            />
                            {/*<TextField*/}
                            {/*    className="file-field"*/}
                            {/*    type="file"*/}
                            {/*    id="file"*/}
                            {/*    name="file" />*/}
                            <span>
                                <Button
                                    className='submitButton'
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                >
                                    Submit
                                </Button>
                                <Button
                                    onClick={this.props.deleteUser}
                                    variant="contained"
                                    color="secondary"
                                    className="deleteButton"
                                >
                                    Delete
                                </Button>
                            </span>
                        </form>
                    ) : <CircularProgress className='loader' disableShrink/>
                }
            </div>

        );
    }
};







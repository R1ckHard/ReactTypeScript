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
                                    value={this.props.userData.name}
                                    placeholder="Name"
                                    className="text-field"
                                    id="outlined"
                                    variant="outlined"
                                />
                                <TextField
                                    value={this.props.userData.surname}
                                    placeholder="Surname"
                                    className="text-field"
                                    id="outlined"
                                    variant="outlined"
                                />
                                <TextField
                                    className="file-field"
                                    type="file"
                                    id="file"
                                    name="file" />
                                <Button
                                    className='submitButton'
                                        type="submit"
                                        variant="contained"
                                        color="primary">
                                    Submit
                                </Button>
                            </form>
                        ) : <CircularProgress className='loader' disableShrink/>
                    }
                </div>

        );
    }
};







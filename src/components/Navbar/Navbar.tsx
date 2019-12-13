import React from "react"
import {Link, Button, Typography, Toolbar, AppBar} from '@material-ui/core/';
import './Navbar.scss';


export const Navbar: React.FunctionComponent = () => {
    return (
        <div className="navbar">
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">
                        <Button href="/" className="navbar-logo" color="inherit">LOGO</Button>

                    </Typography>
                </Toolbar>
                <Button href="/login" className="navbar-login" color="inherit">Login</Button>
            </AppBar>
        </div>

    );
}

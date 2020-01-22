import React from "react"
import './Navbar.scss';
import {MenuItem, Menu, Avatar, Button, Typography, Toolbar, AppBar} from '@material-ui/core/';
import {setAuthUser} from '../../store/auth/actions';
import {connect} from 'react-redux'

interface State {
    menuIsVisible: boolean,
    anchorEl: Element | null | undefined
}

class Navbar extends React.Component<any, State> {
    constructor(props: any) {
        super(props);
        console.log(this.props);

        this.state = {
            menuIsVisible: false,
            anchorEl: null,
        }
    }

    handleClose = () => {
        this.setState({
            menuIsVisible: false,
            anchorEl: null
        })
    };
    handleClick = (event: any) => {
        this.setState({
            anchorEl: event.currentTarget,
            menuIsVisible: true
        })
    };

    openMenu = (event: any) => {
        switch (event.target.innerHTML) {
            case "Settings":
                return this.props.history.push("/settings");
            case "Logout":
                return (localStorage.removeItem("accessToken"), this.props.history.push("/"));
            case "My Page":
                this.props.history.push("/myPage");

        }
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <>
                {this.props.token ? (<div className="navbar">
                            <AppBar position="static">
                                <Toolbar>
                                    <Typography variant="h6">
                                        <Button onClick={() => this.props.history.push("/")} className="logo"
                                                color="inherit">LOGO</Button>
                                    </Typography>
                                </Toolbar>
                                <div className="userName">
                                    <span>{this.props.userProfile.name} {this.props.userProfile.surname}</span>
                                    <Avatar className="avatar-container">
                                        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={this.handleClick}>
                                           <span>
                                               <img src={`http://localhost:8000/${this.props.userProfile.image}`} className='avatar' alt="myImage" />
                                           </span> 
                                        </Button>
                                        <Menu
                                            className='menu'
                                            id="simple-menu"
                                            keepMounted
                                            anchorEl={this.state.anchorEl}
                                            open={this.state.menuIsVisible}
                                            onClose={this.handleClose}
                                            onClick={this.openMenu}
                                        >
                                            <MenuItem><span>My Page</span></MenuItem>
                                            <MenuItem><span>Settings</span></MenuItem>
                                            <MenuItem><span>Logout</span></MenuItem>
                                        </Menu>
                                    </Avatar>
                                </div>
                            </AppBar>
                        </div>
                    ) :
                    (<div className="navbar">
                            <AppBar position="static">
                                <Toolbar>
                                    <Typography variant="h6">
                                        <Button onClick={() => this.props.history.push("/")} className="logo"
                                                color="inherit">LOGO</Button>
                                    </Typography>
                                </Toolbar>
                                <span>
                                    <Button
                                        onClick={() =>
                                            this.props.history.push("/login")}
                                        className="signIn-button"
                                        color="inherit">Sign In</Button>
                                    <Button
                                        onClick={() =>
                                            this.props.history.push("/registration")}
                                        className="signUp-button"
                                        color="inherit">Sign Up</Button>
                                </span>

                            </AppBar>
                        </div>
                    )
                }
            </>

        )
    }

}


const mapStateToProps = (state: any) => {
    return {
        userProfile: state.auth.userProfile
    };
}
const mapDispatchToProps = {
    setAuthUser,

}
export default connect(mapStateToProps, mapDispatchToProps)(Navbar)


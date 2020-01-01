import React from "react"
import './Navbar.scss';
import {MenuItem, Menu, Avatar, Button, Typography, Toolbar, AppBar} from '@material-ui/core/';


export class Navbar extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
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
                return (localStorage.removeItem("accessToken"),this.props.history.push("/"));
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
                                    <span>Name Surname</span>
                                    <Avatar className="avatar">
                                        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={this.handleClick}>
                                            R
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
                                        color="inherit">Sigh Up</Button>
                                </span>

                            </AppBar>
                        </div>
                    )
                }
            </>

        )
    }

}


// export const Navbar: React.FC<NavbarProps> = ({token}) => {
//     console.log(token);
//     return (
//         <>
//             {token ? (<div className="navbar">
//                         <AppBar position="static">
//                             <Toolbar>
//                                 <Typography variant="h6">
//                                     <Button href="/" className="logo" color="inherit">LOGO</Button>
//
//                                 </Typography>
//                             </Toolbar>
//                             <Avatar className="avatar">RIHARD</Avatar>
//                         </AppBar>
//                     </div>
//                 ) :
//                 (<div className="navbar">
//                         <AppBar position="static">
//                             <Toolbar>
//                                 <Typography variant="h6">
//                                     <Button href="/" className="logo" color="inherit">LOGO</Button>
//                                 </Typography>
//                             </Toolbar>
//                             <span>
//                     <Button href="/login" className="signIn-button" color="inherit">Sign In</Button>
//                 <Button href="/registration" className="signUp-button" color="inherit">Sigh Up</Button>
//                 </span>
//                         </AppBar>
//                     </div>
//                 )
//             }
//
//         </>
//
//     )
// }
//

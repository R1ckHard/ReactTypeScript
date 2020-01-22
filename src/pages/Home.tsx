import React from "react";
import Navbar from "../components/Navbar/Navbar";
import userService from "../service/UserService";
import {setAuthUser} from "../store/auth/actions";
import {connect} from "react-redux";
import { UserListItem } from "../components/UserListItem/UserListItem";

interface State {
    userList: Array<string>,
    token: boolean,
}

class Home extends React.Component <any, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            userList: [] ,
            token: false,
        }
    }


    componentDidMount = async () => {
        const data = await userService.getMyPage();
        const userList = await userService.getAllUsers();
        this.setState({
            userList: userList.data
        })
        if (data) {
            this.setState({
                token: true,

            })
        } else {
            this.setState({
                token: false,

            })
        }
        console.log(this.state.userList);


    };


    render() {
        return (
            <>
                <Navbar token={this.state.token} history={this.props.history}/>
                <div className='container'>
                    <UserListItem userList={this.state.userList}/>
                </div>

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
export default connect(mapStateToProps, mapDispatchToProps)(Home)




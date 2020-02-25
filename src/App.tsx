import React from 'react'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./pages/Home"
import Login from "./pages/Login";
import {MyPage} from "./pages/MyPage";
import {Registration} from "./pages/Registration"
import {connect} from 'react-redux'
import {setPageUser} from './store/auth/actions';
import userService from "./service/UserService";
import Settings from './pages/Settings';
import PrivateRoute from "./PrivateRouter";

class App extends React.Component<any, any> {


    componentDidMount = async () => {
        if(localStorage.getItem('accessToken')){
            const data = await userService.getMyPage();
            if(data){
                this.props.setPageUser(data);
            }

        }

    }

    render() {
        return (
                <BrowserRouter>
                    <Switch>
                        <Route component={Home} path="/" exact/>
                        <Route component={Login} path="/login" exact/>
                        <Route component={Registration} path="/registration" exact/>
                        <PrivateRoute path="/myPage" exact component={MyPage} />
                        <PrivateRoute path="/settings" exact component={Settings} />
                    </Switch>
                </BrowserRouter>
        );
    }


}


const mapDispatchToProps = {
    setPageUser,

}
export default connect(null,mapDispatchToProps)(App)

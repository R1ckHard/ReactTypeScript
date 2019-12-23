import React from 'react'
import {Navbar} from "./components/Navbar/Navbar";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Home} from "./pages/Home"
import {Authorization} from "./pages/Authorization";
import {MyPage} from "./pages/MyPage";
import {Registration} from "./pages/Registration"
import {Settings} from "./pages/Settings"

class App extends React.Component<any, any> {

    render() {
        return (
            <BrowserRouter>

                <Switch>
                    <Route component={Home} path="/" exact/>
                    <Route component={Authorization} path="/login" exact/>
                    <Route component={MyPage} path="/myPage" exact/>
                    <Route component={Registration} path="/registration" exact/>
                    <Route component={Settings} path="/settings" exact/>

                </Switch>
            </BrowserRouter>
        );
    }


}

export default App;

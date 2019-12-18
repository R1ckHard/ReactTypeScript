import React from 'react'
import {Navbar} from "./components/Navbar/Navbar";
// import {UserTable} from "./components/UserTable/UserTable";
import {BrowserRouter, Route,Switch} from "react-router-dom";
import {Home} from "./pages/Home"
import {Authorization} from "./pages/Authorization";
import {MyPage} from "./pages/MyPage";




class  App extends React.Component<any, any>{

    render() {
        return (
            <BrowserRouter>
                <Navbar />
                        <Switch>
                            <Route component={Home} path="/" exact />
                            <Route component={Authorization} path="/login" exact />
                            <Route component={MyPage} path="/myPage" exact />
                            <Route component={MyPage} path="/registration" exact />

                        </Switch>
            </BrowserRouter>


        );
    }


}

export default App;

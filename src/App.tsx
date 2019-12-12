import React from 'react'
import {Navbar} from "./components/Navbar/Navbar";
import {UserTable} from "./components/UserTable/UserTable";
import {BrowserRouter, Route,Switch} from "react-router-dom";
import {Home} from "./pages/Home"
import {SignInForm} from "./components/SignInForm/SignInForm";


class  App extends React.Component<any, any>{

    render() {
        return (
            <BrowserRouter>
                <Navbar />
                <div className="container">
                    <Switch>
                        <Route component={UserTable} path="/" exact />
                        <Route component={SignInForm} path="/login" exact />

                    </Switch>
                </div>
            </BrowserRouter>


        );
    }


}

export default App;

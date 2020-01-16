import React from 'react'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Home} from "./pages/Home"
import Login from "./pages/Login";
import {MyPage} from "./pages/MyPage";
import {Registration} from "./pages/Registration"
import {Settings} from "./pages/Settings"
import rootReducer from './store/reducers'
import {Provider} from 'react-redux'
import {createStore} from 'redux'

export const store = createStore(rootReducer)

class App extends React.Component<any, any> {

    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route component={Home} path="/" exact/>
                        <Route component={Login} path="/login" exact/>
                        <Route component={MyPage} path="/myPage" exact/>
                        <Route component={Registration} path="/registration" exact/>
                        <Route component={Settings} path="/settings" exact/>
                    </Switch>
                </BrowserRouter>
            </Provider>
        );
    }


}

export default App;

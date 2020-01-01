import React from "react";
import {UserTable} from "../components/UserTable/UserTable";
import {Navbar} from "../components/Navbar/Navbar";

export const Home: React.FunctionComponent = (props:any) => {
    return (
        <>
            <Navbar history={props.history}/>
            <UserTable/>
        </>
    )
}


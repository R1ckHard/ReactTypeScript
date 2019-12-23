import React from "react";

import {SignUpForm} from "../components/SignUpForm/SignUpForm";
import {Navbar} from "../components/Navbar/Navbar";

export const Registration: React.FunctionComponent = (props: any) => {

    return (
        <>
            <Navbar history={props.history}/>
            <SignUpForm history={props.history}/>
        </>
    )
}


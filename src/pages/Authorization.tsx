import React from "react";
import {SignInForm} from "../components/SignInForm/SignInForm";

export const Authorization:React.FunctionComponent = (props:any) =>{
    return(
        <SignInForm history={props.history}/>
    )
}

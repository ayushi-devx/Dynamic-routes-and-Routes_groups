// this layout for signin and signup not for user

import { ReactNode } from "react";

export default function lays ({children}:{
    children:ReactNode
}){
    return <div>
        <div>header</div>
        {children}
        <div>footer</div>
    </div>
}
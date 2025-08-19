import {FC, PropsWithChildren} from "react";

export const Layout:FC<PropsWithChildren> = ({children})=>{
    console.log("")
    return (
        <div>
            {children}
        </div>
    )
}
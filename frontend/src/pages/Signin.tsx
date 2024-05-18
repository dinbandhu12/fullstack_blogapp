import React from "react"
import { Right } from "../components/Right"
import { Auth } from "../components/Auth"

export const Signin = () => {
    return <div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <div>
                <Auth type="signin" />
            </div>
            <div className="none lg:block">
                <Right />
            </div>
        </div>
    </div>
}

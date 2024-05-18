import React from "react"
import { Right } from "../components/Right"
import { Auth } from "../components/Auth"

export const Signup = () => {
    return <div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <div>
                <Auth type="signup" />
            </div>
            <div className="none lg:block">
                <Right />
            </div>
        </div>
    </div>
}

import React, { ChangeEvent, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {SignupInput} from "@dbsuser/blog-common"
import axios from "axios";
import { BACKEND_URL } from '../config';

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
    const navigate = useNavigate();
    const [postInputs, setPostInputs] = useState<SignupInput>({
        name: "",
        username: "",
        password: ""
    })

    async function sendRequest() {
        try{
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`, postInputs)
            const jwt = response.data;
            localStorage.setItem("token", jwt);
            navigate("/blogs")
        } catch(e) {
            alert("Error while signing up")
        }
    }

    return <div className="h-screen flex justify-center flex-col">
    <div className="flex justify-center">
        <div>
            <div className="px-10">
                <div className="text-3xl font-extrabold">
                    Create an account
                </div>
                <div className="text-slate-500 text-center">
                    {type === "signin" ? "Don't have an account?" : "Already have an account?" }
                    <Link className="pl-2 underline" to={type === "signin" ? "/signup" : "/signin"}>
                        {type === "signin" ? "Sign up" : "Sign in"}
                    </Link>
                </div>
            </div>
            <div className="pt-8">
                {type === "signup" ? <LabelledInput label="Name" placeholder="Enter name" onChange={(e) => {
                    setPostInputs({
                        ...postInputs,
                        name: e.target.value
                    })
                }} /> : null}
                <LabelledInput label="Username" placeholder="Enter Username" onChange={(e) => {
                    setPostInputs({
                        ...postInputs,
                        username: e.target.value
                    })
                }} />
                <LabelledInput label="Password" type="password" placeholder="Enter password" onChange={(e) => {
                    setPostInputs({
                        ...postInputs,
                        password: e.target.value
                    })
                }} />
                <button onClick={sendRequest} type="button" className="mt-8 w-full text-white hover:bg-gray-900 focus:outline-none focus:ring-2 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type === "signup" ? "Sign up" : "Sign in"}</button>
            </div>
        </div>
    </div>
</div>
}


interface LabelledInputType {
    label: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string;  
}

function LabelledInput({ label, placeholder, onChange, type }: LabelledInputType) {
    return <div>
        <label className="block mb-2 pt-4 text-sm font-medium text-black">{label}</label>
        <input onChange={onChange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-200 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-200 dark:border-gray-400 dark:placeholder-gray-600 dark:text-black" 
        placeholder={placeholder} required />

    </div>
}


// refer this link
// https://v1.tailwindcss.com/components/forms
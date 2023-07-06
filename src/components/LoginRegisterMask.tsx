"use client";
import React, {FC, useState} from "react";
import Login from "@/components/Login";
import Register from "@/components/Register";

interface LoginRegisterMaskProps {
    setExpandLogin: (state) => void,
}

const LoginRegisterMask: FC<LoginRegisterMaskProps> = ({setExpandLogin}) => {


    const [showRegisterPanel, setShowRegisterPanel] = useState<boolean>(false)

    return (
        <>
            <div className={"fixed h-screen w-screen bg-black opacity-40"}></div>
            <div
                className={"fixed rounded-md w-112 bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-300 px-8 pt-4 pb-8"}>
                {
                    showRegisterPanel ?

                        <Register setExpandLogin={setExpandLogin}/>
                        :
                        <Login setShowRegisterPanel={setShowRegisterPanel} setExpandLogin={setExpandLogin}/>
                }
            </div>
        </>

    )
}

export default LoginRegisterMask

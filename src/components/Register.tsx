"use client";
import React, {FC, useEffect, useState} from "react";

interface RegisterProps {
    setExpandLogin: (state) => void
}

const Register : FC<RegisterProps> = ({setExpandLogin}) => {

    // 验证码
    //倒数60秒
    const [timeLeft, setTimeLeft] = useState<number>(60);

    const [sendChoosable, setSendChoosable] = useState(false);


    useEffect(() => {
        const timerId = setTimeout(() => {
            if (timeLeft > 0) {
                setTimeLeft(timeLeft => timeLeft - 1);
            } else {
                setSendChoosable(true);
            }
        }, 1000);

        return () => {
            clearTimeout(timerId);
        };
    }, [timeLeft]);

    return (
        <div>
            <div className={"relative h-4"}>
                <img onClick={() => {
                    setExpandLogin(false)
                }} className={"w-6 h-6 hover:cursor-pointer absolute -right-4"}
                     src="/iconfont/close.png" alt=""/>
            </div>
            <div className={"w-full"}>
                <img className={"w-16 h-16 m-auto"} src="/logo/logo.png" alt=""/>
            </div>
            <div className={"text-center text-xl font-bold mt-5"}>Universe seven</div>
            <div className={"text-bg999 text-center mt-4"}>
                173198977@qq.com
            </div>
            <div className={"flex justify-around w-10/12 m-auto"}>
                <input className={"w-11 bg-codeinput h-11 rounded-md focus:outline-0 text-center text-xl"} maxLength={1} type="text"/>
                <input className={"w-11 bg-codeinput h-11 rounded-md focus:outline-0 text-center text-xl"} maxLength={1} type="text"/>
                <input className={"w-11 bg-codeinput h-11 rounded-md focus:outline-0 text-center text-xl"} maxLength={1} type="text"/>
                <input className={"w-11 bg-codeinput h-11 rounded-md focus:outline-0 text-center text-xl"} maxLength={1} type="text"/>
                <input className={"w-11 bg-codeinput h-11 rounded-md focus:outline-0 text-center text-xl"} maxLength={1} type="text"/>
                <input className={"w-11 bg-codeinput h-11 rounded-md focus:outline-0 text-center text-xl"} maxLength={1} type="text"/>
            </div>
            <div className={"bg-black w-10/12 h-12 m-auto mt-9 rounded-full text-center hover:bg-bg1 hover:cursor-pointer"}>
                <p className={"text-eee text-xl leading-12"}>验证</p>
            </div>
            <div className={"w-10/12 text-center m-auto mt-6"}>
                {
                    sendChoosable ? <span className={"hover:cursor-pointer"}>发送验证码</span> :  <span className={"text-bg999"}>再次发送验证码 {timeLeft}s</span>
                }

            </div>
        </div>
    )
}

export default Register

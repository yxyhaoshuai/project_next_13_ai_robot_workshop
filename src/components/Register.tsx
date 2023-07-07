"use client";
import React, {FC, useEffect, useRef, useState} from "react";

interface RegisterProps {
    setExpandLogin: (state) => void
}

const Register : FC<RegisterProps> = ({setExpandLogin}) => {
    // 验证码
    //倒数60秒
    const [timeLeft, setTimeLeft] = useState<number>(60);
    // 是否切换成倒数的标签
    const [sendChoosable, setSendChoosable] = useState<boolean>(false);

    //验证码组件刚刚上来就发送验证码倒数60s
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




    //给每一个input绑上ref实现聚焦逻辑
    const input1Ref = useRef(null);
    const input2Ref = useRef(null);
    const input3Ref = useRef(null);
    const input4Ref = useRef(null);
    const input5Ref = useRef(null);
    const input6Ref = useRef(null);

    //往input输入是聚焦下一个input
    const handleInputChange = (event, inputRef, nextInputRef):void => {
        if (event.target.value.length === event.target.maxLength) {
            nextInputRef.current.focus();
        }
    };
    //删除input里的数据时聚焦上一个input
    const handleKeyDown = (event, inputRef, prevInputRef):void=> {
        if (event.key === 'Backspace' && event.target.value === '') {
            prevInputRef.current.focus();
        }
    };

    //点击再次发送
    const sendAgain = (): void => {
        setSendChoosable(false);
        setTimeLeft(60);
    };

    //点击验证后的逻辑
    const verify = ():void=>{
    //    点击验证后在这里获取input的数据然后发送网络请求给验证码服务器
        console.log("发送网络请求给服务器")
    }

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
                <input onKeyDown={(event) => handleKeyDown(event, input1Ref, input1Ref)}  ref={input1Ref} onChange={(event) => handleInputChange(event, input1Ref, input2Ref)}   className={"w-11 bg-codeinput h-11 rounded-md focus:outline-0 text-center text-xl"} maxLength={1} type="text"/>
                <input onKeyDown={(event) => handleKeyDown(event, input2Ref, input1Ref)} ref={input2Ref} onChange={(event) => handleInputChange(event, input2Ref, input3Ref)}  className={"w-11 bg-codeinput h-11 rounded-md focus:outline-0 text-center text-xl"} maxLength={1} type="text"/>
                <input onKeyDown={(event) => handleKeyDown(event, input3Ref, input2Ref)} ref={input3Ref} onChange={(event) => handleInputChange(event, input3Ref, input4Ref)}  className={"w-11 bg-codeinput h-11 rounded-md focus:outline-0 text-center text-xl"} maxLength={1} type="text"/>
                <input onKeyDown={(event) => handleKeyDown(event, input4Ref, input3Ref)} ref={input4Ref} onChange={(event) => handleInputChange(event, input4Ref, input5Ref)}  className={"w-11 bg-codeinput h-11 rounded-md focus:outline-0 text-center text-xl"} maxLength={1} type="text"/>
                <input onKeyDown={(event) => handleKeyDown(event, input5Ref, input4Ref)} ref={input5Ref} onChange={(event) => handleInputChange(event, input5Ref, input6Ref)}  className={"w-11 bg-codeinput h-11 rounded-md focus:outline-0 text-center text-xl"} maxLength={1} type="text"/>
                <input onKeyDown={(event) => handleKeyDown(event, input6Ref, input5Ref)} ref={input6Ref} className={"w-11 bg-codeinput h-11 rounded-md focus:outline-0 text-center text-xl"} maxLength={1} type="text"/>
            </div>
            <div className={"bg-black w-10/12 h-12 m-auto mt-9 rounded-full text-center hover:bg-bg1 hover:cursor-pointer"}>
                <p onClick={verify} className={"text-eee text-xl leading-12"}>验证</p>
            </div>
            <div className={"w-10/12 text-center m-auto mt-6"}>
                {
                    sendChoosable ? <span onClick={()=>{sendAgain()}} className={"hover:cursor-pointer"}>发送验证码</span> :  <span className={"text-bg999"}>再次发送验证码 {timeLeft}s</span>
                }
            </div>
        </div>
    )
}

export default Register

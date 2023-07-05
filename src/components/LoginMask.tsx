import React, {FC} from "react";

interface LoginMaskProps {
    setExpandLogin:(state)=>void
}

const LoginMask: FC<LoginMaskProps> = ({setExpandLogin}) => {

    return (
        <>
            <div className={"fixed h-screen w-screen bg-black opacity-40"}></div>
            <div className={"fixed h-88 rounded-md w-112 bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-300 px-8 py-4"}>
                <div className={"relative h-4"}>
                    <img onClick={()=>{setExpandLogin(false)}} className={"w-6 h-6 hover:cursor-pointer absolute -right-4"} src="/iconfont/close.png" alt=""/>
                </div>
                <div className={""}>
                    <span className={"text-xl font-bold"}>登录 / 注册</span>
                </div>
                <div className={"h-12 text-bg999 text-sm leading-10"}>
                    如果您之前没有注册过，我们将帮助您创建一个帐户。
                </div>
                <div className={"flex justify-center items-center m-auto"}>
                    <form className="w-full mx-auto bg-white">
                        <div className="mb-6">
                            <input className={"focus:outline-none focus:ring focus:ring-blue-400 hover:drop-shadow-[0_2px_6px_rgba(88,182,235,0.5)] h-12 appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"} id="email" type="email" placeholder="请输入您的邮箱地址"/>
                        </div>

                        <div className="flex items-center justify-between">
                            <button
                                className="h-12 w-full bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit">使用邮箱登录
                            </button>
                        </div>
                    </form>
                </div>
                <div className={"flex mt-7"}>
                    <div className={"flex-1 border-b"}></div>
                    <div className={"w-10 relative "}>
                        <span className={"absolute -top-2 text-xs left-2"}>或者</span>
                    </div>
                    <div className={"flex-1 border-b"}></div>
                </div>
                <div className={"flex justify-around mt-6"}>
                    <a href="#">
                        <img className={"w-7"} src="/iconfont/google_logo.png" alt=""/>
                    </a>
                    <a href="#">
                        <img className={"w-7"} src="/iconfont/apple_logo.png" alt=""/>
                    </a>
                    <a href="#">
                        <img className={"w-7"} src="/iconfont/facebook_logo.png" alt=""/>
                    </a>
                </div>
            </div>
        </>

    )
}

export default LoginMask

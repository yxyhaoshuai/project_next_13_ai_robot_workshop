"use client"
import React, {FC} from "react";

interface NavBarPropsrops {
    focusNavBar:number,
    onClickNavBar:(e)=>void
}

const NavBar : FC<NavBarPropsrops> = ({focusNavBar,onClickNavBar}) => {

    return (
        <div className={"navBar left-NavBar bg-navbar w-20 h-screen"}>
            <div className={"logo w-20 flex justify-center mt-6 mb-6"}>
                <img src="/logo/logo.png" alt="" className={"w-2/3"}/>
            </div>
            <div className={"icon w-full flex-col pb-4 pt-4 mt-10"}>
                <div onClick={() => {
                    onClickNavBar(0)
                }}
                     className={`all rounded-md w-14 h-14 mb-2 m-auto text-5xl flex justify-center ali ${focusNavBar === 0 ? "bg-black2" : ""} hover:bg-black2 hover:cursor-pointer`}>
                    <img className={"w-12 text-center m-auto align-middle"}
                         src={focusNavBar === 0 ? "iconfont/all(1).svg" : "iconfont/all.svg"}
                         alt=""/>
                </div>
                <div onClick={() => {
                    onClickNavBar(1)
                }}
                     className={`all rounded-md w-14 h-14 mb-2 m-auto text-5xl flex justify-center ali ${focusNavBar === 1 ? "bg-black2" : ""} hover:bg-black2 hover:cursor-pointer`}>
                    <img className={"w-40px text-center m-auto align-middle"}
                         src={focusNavBar === 1 ? "iconfont/chat(1).svg" : "iconfont/chat.svg"}
                         alt=""/>
                </div>
                <div onClick={() => {
                    onClickNavBar(2)
                }}
                     className={`all rounded-md w-14 h-14 mb-2 m-auto text-5xl flex justify-center ali ${focusNavBar === 2 ? "bg-black2" : ""} hover:bg-black2 hover:cursor-pointer`}>
                    <img className={"w-40px text-center m-auto align-middle"}
                         src={focusNavBar === 2 ? "iconfont/user(1).svg" : "iconfont/user.svg"}
                         alt=""/>
                </div>
                <div onClick={() => {
                    onClickNavBar(3)
                }}
                     className={`all rounded-md w-14 h-14 mb-2 m-auto text-5xl flex justify-center ali ${focusNavBar === 3 ? "bg-black2" : ""} hover:bg-black2 hover:cursor-pointer`}>
                    <img className={"w-40px text-center m-auto align-middle"}
                         src={focusNavBar === 3 ? "iconfont/collect.svg" : "iconfont/collect(1).svg"}
                         alt=""/>
                </div>
            </div>
        </div>
    )
}

export default NavBar

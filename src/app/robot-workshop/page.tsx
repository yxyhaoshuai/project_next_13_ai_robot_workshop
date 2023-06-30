"use client";
import {useState} from "react";
import NavBar from "@/components/layout/NavBar";
import FirstLayout from "@/components/layout/FirstLayout";
import AllRobot from "@/components/AllRobot";
import SecondaryLayout from "@/components/layout/SecondaryLayout";
import RobotList from "@/components/RobotList";
import RobotCard from "@/components/RobotCard";
import ChatRobotList from "@/components/ChatRobotList";
import ChatInterface from "@/components/ChatInterface";

export default function Page() {
    //navbar一共有四个索引分别为0，1，2，3
    const [focusNavBar, setFocusNavBar] = useState(0);
    const [routerIndex, setRouterIndex] = useState(0);
    const onClickNavBar = (index) => {
        setFocusNavBar(index)
    }

    return (
        <div className={"flex overflow-hidden"}>
            <NavBar onClickNavBar={onClickNavBar} focusNavBar={focusNavBar}/>
            <FirstLayout>
                {focusNavBar === 0 && <AllRobot setRouterIndex={setRouterIndex}/>}
                {focusNavBar === 1 && <ChatRobotList/>}
                {focusNavBar === 2 && <div className={"text-9xl"}>用户</div>}
                {focusNavBar === 3 && <div className={"text-9xl"}>收藏</div>}
            </FirstLayout>
            <SecondaryLayout>
                {focusNavBar === 0 && <RobotList routerIndex={routerIndex}>
                    <RobotCard/>
                    <RobotCard/>
                    <RobotCard/>
                    <RobotCard/>
                    <RobotCard/>
                    <RobotCard/>
                    <RobotCard/>
                    <RobotCard/>
                    <RobotCard/>
                    <RobotCard/>
                    <RobotCard/>
                    <RobotCard/>
                </RobotList>}
                {focusNavBar === 1 && <ChatInterface/>}
                {focusNavBar === 2 && <div className={"text-9xl"}>用户</div>}
                {focusNavBar === 3 && <div className={"text-9xl"}>收藏</div>}
            </SecondaryLayout>
        </div>
    )
}

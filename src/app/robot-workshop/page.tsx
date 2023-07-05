"use client";
import {useEffect, useState} from "react";
import NavBar from "@/components/layout/NavBar";
import FirstLayout from "@/components/layout/FirstLayout";
import AllRobot from "@/components/AllRobot";
import SecondaryLayout from "@/components/layout/SecondaryLayout";
import RobotList from "@/components/RobotList";
import RobotCard from "@/components/RobotCard";
import ChatRobotList from "@/components/ChatRobotList";
import ChatInterface from "@/components/ChatInterface";
import PersonalData from "@/components/PersonalData";
import EditPanel from "@/components/EditPanel";
import Collect from "@/components/Collect";
import CollectList from "@/components/CollectList";
import CollectCard from "@/components/CollectCard";


export default function Page() {

    //navbar一共有四个索引分别为0，1，2，3
    const [focusNavBar, setFocusNavBar] = useState<number>(0);
    const [routerIndex, setRouterIndex] = useState<number>(0);

    const onClickNavBar = (index: number) => {
        setFocusNavBar(index);
    };

    useEffect(()=>{
        console.log("渲染")
    },[])

    return (
        <>
            <div className={"flex overflow-hidden"}>
                <NavBar onClickNavBar={onClickNavBar} focusNavBar={focusNavBar} />
                <FirstLayout>
                    {focusNavBar === 0 && <AllRobot routerIndex={routerIndex} setRouterIndex={setRouterIndex}/>}
                    {focusNavBar === 1 && <ChatRobotList />}
                    {focusNavBar === 2 && <PersonalData className={"text-9xl"} />}
                    {focusNavBar === 3 && <Collect />}
                </FirstLayout>
                <SecondaryLayout>
                    {focusNavBar === 0 && <RobotList routerIndex={routerIndex}><RobotCard /><RobotCard /></RobotList>}
                    {focusNavBar === 1 && <ChatInterface />}
                    {focusNavBar === 2 && <EditPanel className={"text-9xl"} />}
                    {focusNavBar === 3 && <CollectList><CollectCard /></CollectList>}
                </SecondaryLayout>
            </div>
        </>
    )
}


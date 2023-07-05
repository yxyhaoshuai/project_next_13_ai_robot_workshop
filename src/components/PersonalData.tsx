import { FC } from "react";
import {Progress} from "antd";

interface PersonalDataProps {}

const PersonalData : FC<PersonalDataProps> = ({}) => {
    return (
        <div className={"p-4"}>
            <div className={"text-2xl text-text2"}>个人资料</div>
            <div className={"bg-text444 mt-4 rounded-md p-4 drop-shadow-[0_2px_6px_rgba(88,182,235,0.5)] mb-8"}>
                <div className={"h-20 relative"}>
                    <img className={"w-14 rounded-full absolute top-2 left-2"} src="/user-head/img.png" alt=""/>
                </div>
                <div>
                    <span className={"text-xl text-eee"}>严总</span>
                    <span className={"text-xl text-text4"}>#3674</span>
                </div>
                <div className={"my-2"}>
                    <span className={"px-2 py-1 bg-amber-700 rounded-md"}>标准</span>
                </div>
                <div className={"flex items-center"}>
                    <div className={"text-xs text-bg999"}>
                        剩余聊天次数：
                    </div>
                    <div className={"text-2xl text-text4 font-bold"}>
                        100
                    </div>
                </div>
            </div>
            <div className={"h-14 bg-text444 rounded-md mb-4 flex items-center relative hover:cursor-pointer"}>
                <span className={"mx-2"}>
                    <img className={"w-8"} src="/iconfont/certificate.png" alt=""/>
                </span>
                <span className={"text-text4"}>
                    权限卡
                </span>
                <span className={"absolute right-3 top-4"}>
                    <img className={"w-5"} src="/iconfont/right-arrow.svg" alt=""/>
                </span>
            </div>
            <div className={"h-14 bg-text444 rounded-md mb-4 flex items-center relative hover:cursor-pointer"}>
                <span className={"mx-2"}>
                    <img className={"w-8"} src="/iconfont/setting.png" alt=""/>
                </span>
                <span className={"text-text4"}>
                    设置
                </span>
                <span className={"absolute right-3 top-4"}>
                    <img className={"w-5"} src="/iconfont/right-arrow.svg" alt=""/>
                </span>
            </div>
        </div>
    )
}

export default PersonalData

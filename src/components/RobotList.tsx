import React, {FC, useState} from "react";
import {Tag} from "antd";

interface ParagraphProps {
    routerIndex: number
}

type ContainerProps = {
    children: ReactNode;
};

const RobotList: FC<ContainerProps | ParagraphProps> = ({routerIndex,children}) => {

    //搜索框获取焦点时发亮
    const [isSearchFocus, setIsSearchFocus] = useState(false)
    const searchOnFocus = () => {
        setIsSearchFocus(isSearchFocus => !isSearchFocus)
    }
    return (
        <>
            <div className={"rounded-md overflow-hidden mt-4"}>
                <div className={"w-full h-24 flex justify-center items-center drop-shadow-md hover:drop-shadow-[0_2px_6px_rgba(88,182,235,0.5)]"}>
                    <div className={`border ${isSearchFocus ? "border-searchborder drop-shadow-[0_2px_6px_rgba(88,182,235,0.5)]" : "border-text444"} drop-shadow-3xl h-14 w-10/12 bg-text444 rounded-full overflow-hidden flex`}>
                        <div className={"flex-1 bg-text444 h-full flex justify-center items-center"}>
                            <img src="/iconfont/search.png" className={"w-6 h-6"} alt=""/>
                        </div>
                        <div className={"flex-10 bg-bg1 h-full"}>
                            <input onBlur={searchOnFocus} onFocus={searchOnFocus} type="text"
                                   placeholder="输入机器人名称"
                                   className={"pl-2 text-eee w-full h-full text-2xl appearance-none bg-transparent border-none rounded-none focus:outline-none"}/>
                        </div>
                        <div className={"flex-1 bg-text444 h-full flex justify-center items-center"}>
                            <a className={"hover:text-eee text-xl text-text3 hover:cursor-pointer"}>搜索</a>
                        </div>
                    </div>
                </div>
                {
                    routerIndex === 0 ?
                        <div className={"w-full bg-text444 rounded-md overflow-hidden"}>

                            <div className={"h-14 text-eee text-xl flex ml-4 items-center"}>
                                筛选条件：
                                <Tag color="magenta">中文</Tag>
                                <Tag color="magenta">英文</Tag>
                                <Tag color="magenta">日文</Tag>
                            </div>
                            <div className={"h-98 overflow-y-auto scroll-red"}>
                                <div className="grid grid-cols-3 md:grid-cols-4 sm:grid-cols-5 gap-5 pl-5 pr-5 pb-5">
                                    {
                                        children
                                    }
                                </div>
                            </div>
                        </div>
                        :
                        <div className={"w-full h-98 bg-text444 rounded-md overflow-hidden text-eee"}>
                            <div className={"bg-no-repeat bg-cover bg-center bg-bottom h-48 overflow-hidden bg-[url('/background/img_1.png')]"}>

                            </div>
                            <div className={"flex h-32 bg-text4 relative pl-52"}>
                                <div className={"h-32 w-32 bg-amber-700 absolute -top-12 left-14"}></div>
                                <div className={"h-8 w-24 mt-6 bg-bg2 ml-4"}></div>
                                <div className={"h-8 w-24 mt-6 bg-bg2 ml-4"}></div>
                                <div className={"h-8 w-24 mt-6 bg-bg2 ml-4"}></div>
                                <div className={"h-8 w-24 mt-6 bg-bg2 ml-4"}></div>
                            </div>
                        </div>
                }
            </div>
        </>




    )
}

export default RobotList

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
    const [isSearchFocus, setIsSearchFocus] = useState<boolean>(false)
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
                            <div className={"relative bg-no-repeat bg-cover bg-center bg-bottom h-48 overflow-hidden bg-[url('/background/img_1.png')]"}>
                            </div>
                            <div className={"flex h-32 bg-text444 relative pl-52"}>
                                <div className={"h-32 w-32 rounded-md bg-amber-700 overflow-hidden absolute -top-12 left-14"}>
                                    <img src="/develop-test-img/img_11.png" alt=""/>
                                </div>
                                <div className={"flex w-180 flex-wrap pt-4"}>
                                    <div className={"hover:cursor-pointer h-8 w-20 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 ml-4 text-center leading-8"}>
                                        聊天
                                    </div>
                                    <div className={"hover:cursor-pointer h-8 w-20 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 bg-bg2 ml-4 text-center leading-8"}>
                                        编辑
                                    </div>
                                    <div className={"hover:cursor-pointer h-8 w-20 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 bg-bg2 ml-4 text-center leading-8"}>
                                        发布
                                    </div>
                                    <div className={"hover:cursor-pointer h-8 w-20 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 bg-bg2 ml-4 text-center leading-8"}>
                                        分享
                                    </div>
                                </div>

                                <div className={"absolute leading-6 w-60 text-center bottom-4 left-0 text-md overflow-hidden whitespace-nowrap overflow-ellipsis"}>
                                    Fishing Game
                                </div>
                            </div>
                            <div className={"ml-14"}>
                                <Tag color="magenta">标签1</Tag>
                                <Tag color="red">标签2</Tag>
                                <Tag color="volcano">标签3</Tag>
                                <Tag color="orange">标签4</Tag>
                                <Tag color="gold">标签5</Tag>
                                <Tag color="lime">标签6</Tag>
                                <Tag color="green">标签7</Tag>
                                <Tag color="cyan">标签8</Tag>
                                <Tag color="blue">标签9</Tag>
                                <Tag color="geekblue">标签10</Tag>
                                <Tag color="purple">标签10</Tag>
                            </div>
                            <div className={"w-full px-8 py-8"}>
                                聊天机器人介绍聊天机器人介绍聊天机器人介绍聊天机器人介绍聊天机器人介绍聊天机器人介绍聊天机器人介绍聊天机器人介绍聊天机器人介绍聊天机器人介绍聊天机器人介绍聊天机器人介绍
                            </div>
                        </div>
                }
            </div>
        </>
    )
}

export default RobotList

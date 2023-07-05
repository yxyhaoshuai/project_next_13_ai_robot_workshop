import React, {FC, useEffect, useState} from "react";
import {Tag} from "antd";


interface ParagraphProps {

}



const ChatInterface: FC<ParagraphProps> = ({}) => {

    //聊天区域内容
    const [messageItem, setMessageItem] = useState([]);

    //输入框当前文字
    const [inputData, setInputData] = useState("");

    //点击发送按钮
    const onClickSend = () => {
        if (inputData.length === 0) return
        //此时加上用户消息条目
        setMessageItem([...messageItem, {isUser: true, data: inputData}])
        sendMessage()
    }

    //是否展开机器人详情
    const [openAiDetail, setOpenAiDetail] = useState<boolean>(false)

    //发送网络请求
    const sendMessage = (): void => {
        //清空输入框里的数据
        setInputData("");
        console.log("发送网络请求");
        //在这里发送网络请求带上消息数据和用户id
    };

    const inputOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setInputData(e.target.value);
    };


    return (
        <div className={"p-2"}>
            <div className={"rounded-md bg-text444 h-screen w-full flex flex-col"}>
                {
                    openAiDetail ?

                        <div className={"w-full h-98 bg-text444 rounded-md overflow-hidden text-eee"}>
                            <div
                                className={"relative bg-no-repeat bg-cover bg-center bg-bottom h-48 overflow-hidden bg-[url('/background/img_1.png')]"}>
                                <div onClick={() => {
                                    setOpenAiDetail(!openAiDetail)
                                }} className={"flex absolute top-2 left-2 leading-8 hover:cursor-pointer"}>
                                    <img className={"w-8 h-8"} src="/iconfont/left_arrow.png" alt=""/>
                                    <span className={"text-text444"}>返回</span>
                                </div>
                            </div>
                            <div className={"flex h-32 bg-text444 relative pl-52"}>
                                <div className={"h-32 w-32 rounded-md bg-amber-700 overflow-hidden absolute -top-12 left-14"}>
                                    <img src="/develop-test-img/img.png" alt=""/>
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
                        :
                        <>
                            <div onClick={() => {
                                setOpenAiDetail(!openAiDetail)
                            }}
                                 className={"text-center h-24 flex justify-center items-center border-b border-b-bg999 w-full"}>
                                <a href="#">
                                    <img className={"w-16 rounded-full"} src="/develop-test-img/img.png" alt=""/>
                                </a>
                                <a className={"block flex items-center"} href="#">
                                    <span className={"ml-3 text-text4 text-xl"}>Fishing Game</span>
                                    <img className={"w-5 h-5"} src={"/iconfont/right-arrow.svg"}/>
                                </a>
                            </div>
                            <div className={"bg-text444 w-full h-5/6 pl-5 pr-5 overflow-y-auto"}>
                                {/*在下面添加内容*/}
                                {
                                    messageItem.map((item, index) => {
                                        return item.isUser ?
                                            <div className={"bg-text444 w-full pt-4 pb-4 flex justify-end pr-4"}>
                                                <span
                                                    className={"bg-text4 py-3 px-3 text-eee max-w-lg rounded-md"}>{item.data}</span>
                                                <span className={"w-32px h-32px rounded-full ml-3 bg-text4"}>
                                        <img className={"w-32px h-32px rounded-full w-8"} src="/user-head/img.png"
                                             alt=""/>
                                    </span>
                                            </div>
                                            :
                                            <div className={"bg-text444 w-full pt-4 pb-4 flex pl-4"}>
                                    <span className={"w-32px h-32px rounded-full bg-text4 mr-3"}>
                                        <img className={"w-32px h-32px rounded-full w-8"}
                                             src="/develop-test-img/img.png" alt=""/>
                                    </span>
                                                <span
                                                    className={"bg-text4 py-3 px-3 text-eee max-w-lg rounded-md"}>{item.data}</span>
                                            </div>
                                    })
                                }
                            </div>
                            <div className={"h-21 bg-text444 w-full flex justify-center items-center relative"}>
                                <div
                                    className={"w-9/12 bg-bg999 m-auto absolute bottom-6 flex rounded-2xl overflow-hidden"}>
                                    <input onKeyDown={(e) => {
                                        if (e.keyCode === 13) {
                                            onClickSend()
                                        }
                                    }} value={inputData} onChange={inputOnChange}
                                           className={"w-full h-12 bg-bgeee focus:outline-none pl-8"} type="text"
                                           name="input-name" placeholder="输入文本"/>
                                    <div onClick={onClickSend}
                                         className={"hover:cursor-pointer w-20 bg-gradient-to-r from-cyan-500 to-blue-500 flex justify-center items-center text-eee text-xl"}>
                                        发送
                                    </div>
                                </div>
                            </div>
                        </>

                }


            </div>
        </div>
    )
}

export default ChatInterface

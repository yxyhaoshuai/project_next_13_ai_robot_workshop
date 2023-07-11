import React, {FC, useState} from "react";

interface AiGeneratedGraphProps {
}

const AiGeneratedGraph: FC<AiGeneratedGraphProps> = ({}) => {

    const inputOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setInputGraphData(e.target.value);
    };

    //发送网络请求
    const sendMessage = (): void => {
        //清空输入框里的数据
        setInputGraphData("");
        console.log("发送网络请求");
        //在这里发送网络请求带上消息数据和用户id
    };

    //聊天区域内容
    const [graphMessageItem, setGraphMessageItem] = useState([]);

    //输入框当前文字
    const [inputGraphData, setInputGraphData] = useState("");

    //点击发送按钮
    const onClickSend = () => {
        if (inputGraphData.length === 0) return
        //此时加上用户消息条目
        setGraphMessageItem([...graphMessageItem, {isUser: true, data: inputGraphData}])
        sendMessage()
    }
    return (
        <div className={"p-2"}>
            <div className={"rounded-md bg-text444 h-screen w-full flex flex-col"}>
                <div
                    className={"text-center h-24 flex justify-center items-center border-b border-b-bg999 w-full"}>

                    <img className={"w-16 rounded-full hover:cursor-pointer"} src="/logo/logo.png" alt=""/>


                    <span className={"ml-3 text-text4 text-xl hover:cursor-pointer"}>7th universe</span>
                    <img className={"w-5 h-5 hover:cursor-pointer"} src={"/iconfont/right-arrow.svg"}/>

                </div>
                <div className={"bg-text444 w-full h-5/6 pl-5 pr-5 overflow-y-auto"}>
                    {/*在下面添加内容*/}
                    {
                        graphMessageItem.map((item, index) => {
                            return item.isUser ?
                                <div key={index} className={"bg-text444 w-full pt-4 pb-4 flex justify-end pr-4"}>
                                    <span className={"bg-text4 py-3 px-3 text-eee max-w-lg rounded-md"}>{item.data}</span>
                                    <span className={"w-32px h-32px rounded-full ml-3 bg-text4"}>
                                        <img className={"w-32px h-32px rounded-full w-8"} src="/user-head/img.png" alt=""/>
                                    </span>
                                </div>
                                :
                                <div className={"bg-text444 w-full pt-4 pb-4 flex pl-4"}>
                                    <span className={"w-32px h-32px rounded-full bg-text4 mr-3"}>
                                        <img className={"w-32px h-32px rounded-full w-8"} src="/develop-test-img/img.png" alt=""/>
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
                        }} value={inputGraphData} onChange={inputOnChange}
                               className={"w-full h-12 bg-bgeee focus:outline-none pl-8"} type="text"
                               name="input-name" placeholder="描述你想要的图！"/>
                        <div onClick={onClickSend}
                             className={"hover:cursor-pointer w-20 bg-gradient-to-r from-cyan-500 to-blue-500 flex justify-center items-center text-eee text-xl"}>
                            发送
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AiGeneratedGraph

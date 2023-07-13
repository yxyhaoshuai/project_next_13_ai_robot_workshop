import React, {FC, useEffect, useRef, useState} from "react";


interface AiGeneratedGraphProps {
}

const AiGeneratedGraph: FC<AiGeneratedGraphProps> = ({}) => {

    //重构、配置的输入框参数
    const inputParameter = [
        {id: 1, parameter: '/abcde'},
        {id: 2, parameter: '/defabc'},
        {id: 3, parameter: '/efg'},
        {id: 4, parameter: '/haws'},
        {id: 5, parameter: '/efafg'},
        {id: 6, parameter: '/sfasf'},
        {id: 7, parameter: '/hggggaws'},
        {id: 8, parameter: '/efaqafg'},
    ];


    const inputRef = useRef(null);

    //当前选中的参数id，等待用户点击发送按钮后发送这个参数#########把这里以及相关的逻辑清空
    const [selectedParameter, setSelectedParameter] = useState(-1);

    useEffect(() => {
        console.log(selectedParameter)
    }, [selectedParameter])

    //当前匹配到的参数列表
    const [currentInputBoxParameter, setCurrentInputBoxParameter] = useState([])

    //聊天区域内容
    const [messageItem, setMessageItem] = useState([]);

    //输入框当前文字
    const [inputData, setInputData] = useState<string>("");

    //是否隐藏tip提示
    const [isHideTip, setIsHideTip] = useState<boolean>(true);

    //点击发送按钮
    const onClickSend = (): void => {
        if (inputData.length === 0) return;
        //此时加上用户消息条目
        setMessageItem([...messageItem, {isUser: true, data: inputData}]);
        sendMessage();
    };


    //是否展开机器人详情
    const [openAiDetail, setOpenAiDetail] = useState<boolean>(false)

    //发送网络请求
    const sendMessage = (): void => {
        //清空输入框里的数据
        setInputData("");

        //把参数重置为初始值-1
        setSelectedParameter(-1)
        console.log("发送网络请求");
        //在这里发送网络请求带上消息数据和用户id
    };

    //输入框发生改变
    const inputOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setInputData(e.target.value);
        const regex = new RegExp(`.*${e.target.value}.*`, 'i');
        const matchedParameters = inputParameter.filter((item) => regex.test(item.parameter));
        setCurrentInputBoxParameter(matchedParameters)

    };

    //控制是否展开输入框的参数列表
    useEffect(() => {
        currentInputBoxParameter.length > 0 ? setIsHideTip(false) : setIsHideTip(true)
        inputData.length < 1 && setIsHideTip(true)
    }, [currentInputBoxParameter])


    const onClickParameterItems = (text, id) => {
        setInputData(text + "：")
        setIsHideTip(true)
        setSelectedParameter(id)
        //在这里写聚焦到输入框
        inputRef.current.focus();

    }

    return (
        <div className={"p-2"}>
            <div className={"rounded-md bg-text444 h-screen w-full flex flex-col"}>
                <div
                    className={"text-center h-24 flex justify-center items-center border-b border-b-bg999 w-full"}>

                    <img onClick={() => {
                        setOpenAiDetail(!openAiDetail)
                    }} className={"w-16 rounded-full hover:cursor-pointer"} src="/logo/logo.png"
                         alt=""/>


                    <span onClick={() => {
                        setOpenAiDetail(!openAiDetail)
                    }} className={"ml-3 text-text4 text-xl hover:cursor-pointer"}>Fishing Game</span>
                    <img onClick={() => {
                        setOpenAiDetail(!openAiDetail)
                    }} className={"w-5 h-5 hover:cursor-pointer"} src={"/iconfont/right-arrow.svg"}/>

                </div>
                <div className={"bg-text444 w-full h-5/6 pl-5 pr-5 overflow-y-auto"}>
                    {/*在下面添加内容*/}
                    {
                        messageItem.map((item, index) => {
                            return item.isUser ?
                                <div key={index}
                                     className={"bg-text444 w-full pt-4 pb-4 flex justify-end pr-4"}>
                                                <span
                                                    className={"bg-text4 py-3 px-3 text-eee max-w-lg rounded-md"}>{item.data}</span>
                                    <span className={"w-32px h-32px rounded-full ml-3 bg-text4"}>
                                                    <img className={"w-32px h-32px rounded-full w-8"}
                                                         src="/user-head/img.png" alt=""/>
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
                <div className={"h-21 bg-text444 w-full flex justify-center items-center relative z-40"}>
                    <div
                        className={"w-9/12 bg-bg999 m-auto absolute bottom-6 flex rounded-2xl overflow-hidden"}>
                        <input ref={inputRef} onKeyDown={(e) => {
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
                    {/*隐藏下面的组件*/}
                    {
                        isHideTip ? "" : <div
                            className={"absolute -top-60 w-10/12 h-60 bg-bg1 rounded-md z-40 pt-8 pb-2 pl-4 pr-4"}>
                            <img className={"w-6 h-6 absolute top-0 left-3"} src="/iconfont/hint.png"
                                 alt=""/>
                            <div className={"bg-bg1 w-full h-full w-full overflow-y-auto"}>
                                <div>
                                    {
                                        currentInputBoxParameter.map((item, index) => {
                                            return <div onClick={() => {
                                                onClickParameterItems(item.parameter, item.id)
                                            }} key={index}
                                                        className={"h-9 bg-bg1 hover:cursor-pointer hover:bg-bg5 text-bg999 flex items-center relative px-2"}>
                                                <span>{item.parameter}</span>
                                                <span
                                                    className={"absolute right-2 text-xs text-zinc-500"}>机器人参数</span>
                                            </div>
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    }

                </div>


            </div>
        </div>
    )
}

export default AiGeneratedGraph

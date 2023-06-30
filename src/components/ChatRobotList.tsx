import React, {FC, useState} from "react";

interface ParagraphProps {
}

const ChatRobotList: FC<ParagraphProps> = ({}) => {
    //搜索框获取焦点时发亮
    const [isSearchFocus, setIsSearchFocus] = useState(false)
    const searchOnFocus = () => {
        setIsSearchFocus(isSearchFocus => !isSearchFocus)
    }

    //后端假数据,待删除
    const robotArr = [{id: 1, name: "机器人1", intro: "您的机器人女友，可甜可咸。"}, {
        id: 2,
        name: "机器人1",
        intro: "您的机器人女友，可甜可咸。"
    }, {id: 3, name: "机器人1", intro: "您的机器人女友，可甜可咸。"}];

    const [focusRobotId, setFocusRobotId] = useState(0);


    return (
        <>
            <div className={"p-4"}>
                <div className={"w-full h-16 bg-bg1 box-border"}>
                    <div className={"text-text2 text-2xl"}>聊天</div>
                    {/*<Segmented className={"mt-10"} block options={[123, 456, 'longtext-longtext-longtext-longtext']} />*/}
                </div>
                <div
                    className={"w-full flex justify-center items-center drop-shadow-md hover:drop-shadow-[0_2px_6px_rgba(88,182,235,0.5)]"}>
                    <div
                        className={`border ${isSearchFocus ? "border-searchborder drop-shadow-[0_2px_6px_rgba(88,182,235,0.5)]" : "border-text444"} drop-shadow-3xl h-11 bg-text444 rounded-full overflow-hidden flex`}>
                        <div className={"flex-1 bg-text444 h-full flex justify-center items-center"}>
                            <img src="/iconfont/search.png" className={"w-6 h-6"} alt=""/>
                        </div>
                        <div className={"flex-5 bg-bg1 h-full"}>
                            <input onBlur={searchOnFocus} onFocus={searchOnFocus} type="text"
                                   placeholder="输入机器人名称"
                                   className={"pl-2 text-eee w-full h-full text-xl appearance-none bg-transparent border-none rounded-none focus:outline-none"}/>
                        </div>
                        <div className={"flex-1 bg-text444 h-full flex justify-center items-center"}>
                            <a className={"hover:text-eee text-sm text-text3 hover:cursor-pointer"}>搜索</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"m-auto bg-bg1 mt-5"}>
                <div className={"ml-4 mr-4 flex items-center h-10 pl-3 rounded-tr-md rounded-tl-md bg-text444 mb-3"}>
                    <img className={"w-6 h-6"} src={"iconfont/dialog_box.png"}/>
                </div>
                <div className={"ml-4 mr-4 bg-bg1"}>
                    {

                        robotArr.map((item) => {
                            return (
                                <div onClick={() => {
                                    setFocusRobotId(item.id)
                                }} key={item.id}
                                     className={`flex hover:drop-shadow-[0_2px_6px_rgba(88,182,235,0.5)] items-center ${focusRobotId !== item.id ? "bg-text444" : "bg-gradient-to-r from-cyan-500 to-blue-500"} h-20 rounded-md rounded-md  mb-3 hover:cursor-pointer`}>
                                    <div className={"w-1/4 text-center h-10 flex justify-center items-center"}>
                                        <img className={"w-2/3 rounded-full"} src="/develop-test-img/img.png" alt=""/>
                                    </div>
                                    <div className={"w-1/2"}>
                                        <p className={"text-text4 truncate text-ellipsis"}>这里是名字</p>
                                        <p className={"text-xs text-eee truncate text-ellipsis"}>这里是机器人介绍这</p>
                                    </div>
                                    <div className={"text-xs w-1/8 text-eee flex justify-center items-center"}>
                                        11:12
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </>

    )
}

export default ChatRobotList

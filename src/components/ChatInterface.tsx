import React, {FC} from "react";

interface ParagraphProps {
}

const ChatInterface: FC<ParagraphProps> = ({}) => {
    return (
        <div className={"p-2"}>
            <div className={"rounded-md bg-text444 pl-6 pr-6 h-screen w-full flex flex-col"}>
                <div className={"text-center h-24 flex justify-center items-center border-b border-b-bg999 w-full"}>
                    <a href="#">
                        <img className={"w-16 rounded-full"} src="/develop-test-img/img.png" alt=""/>
                    </a>
                    <a className={"block flex items-center"} href="#">
                        <span className={"ml-3 text-text4 text-xl"}>Fishing Game</span>
                        <img className={"w-5 h-5"} src={"/iconfont/right-arrow.svg"}/>
                    </a>
                </div>
                <div className={"bg-amber-700 w-full h-2/3 pl-5 pr-5 overflow-y-auto"}>
                    <div className={"bg-text444 w-full h-12"}>
                        在这里添加对话框条目
                    </div>
                </div>
                <div className={"h-1/4 bg-text444 w-full flex justify-center items-center relative"}>
                    <div className={"w-9/12 bg-bg999 m-auto absolute bottom-6 flex rounded-2xl overflow-hidden"}>
                        <input className={"w-full h-12 bg-bgeee focus:outline-none pl-8"} type="text" name="input-name" placeholder="输入文本"/>
                        <div className={"w-20 bg-gradient-to-r from-cyan-500 to-blue-500 flex justify-center items-center text-eee text-xl"}>
                            发送
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatInterface

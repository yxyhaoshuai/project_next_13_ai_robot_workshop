import React, {FC, useEffect, useState} from "react";

interface CollectProps {}

const Collect : FC<CollectProps> = ({}) => {
    const [open, setOpen] = useState<boolean>(false);

    useEffect(()=>{
        console.log("渲染")
    },[])

    return (
        <>
            {/*卡片div*/}
            <div onClick={() => {
                setOpen(!open)
            }}
                 className="flex w-full flex-col rounded-md overflow-hidden hover:cursor-pointer drop-shadow-md hover:drop-shadow-[0_6px_6px_rgba(88,182,235,0.5)]">
                <div className={"bg-amber-700 w-full aspect-square"}>
                    <img className={"w-full h-full"} src="/develop-test-img/img_2.png" alt=""/>
                </div>
                <div className={"h-28 bg-eee"}>
                    <div className={"h-7 overflow-hidden text-ellipsis p-1"}>
                        Swearing Scarlett
                    </div>
                    <div className={"pl-2 h-6 overflow-hidden text-ellipsis flex items-center"}>
                        <div className={"w-6 bg-amber-700 rounded-full overflow-hidden"}>
                            <img className={"w-6"} src="/user-head/img.png" alt=""/>
                        </div>
                        <div
                            className={"text-text4 text-sm ml-2 w-36 overflow-hidden text-ellipsis"}>
                            darkstorm2150
                        </div>
                    </div>
                    <div
                        className={"h-17 text-xs text-zinc-500 p-2 overflow-hidden text-ellipsis"}>
                        Your girlfriend has lost all her memory - her name, age, background,
                        habits, personality, and everything else, EXCEPT for her LOVE for you.
                        It's up to you to tell her about WHO SHE IS.
                        *Mirror bot: Your Boyfriend*NSFW
                        *New NSFW
                        EroticEnchantress - Customize a pornographic experience with your ears
                    </div>
                </div>
            </div>
        </>
    )
}

export default Collect

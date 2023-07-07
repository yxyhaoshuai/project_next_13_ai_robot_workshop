"use client";
import {FC, useEffect} from "react";
import {register} from "@/api/test";




interface ParagraphProps {}

const Paragraph : FC<ParagraphProps> = ({}) => {
    // useEffect(()=>{
    //     register("Best quality, masterpiece, ultra high res, (photorealistic:1.4), raw photo, 1girl, off shoulder").then((result)=>{
    //         console.log(result)
    //     })
    // },[])
    return (
        <div className={"text-9xl"}>
            这里是首页
        </div>

    )
}

export default Paragraph


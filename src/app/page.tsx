"use client";
import {FC, useEffect, useState} from "react";
import {getImg, register, register2} from "@/api/test";
import {headers} from "@/api/Headers/Headers";




interface ParagraphProps {}

const Paragraph : FC<ParagraphProps> = ({}) => {

    const [loading,setLoading] = useState(false)

    const [imageData,setImageData] = useState('')

    const [getImgInterval,setGetImgInterval] = useState(true)
    const [id,setId] = useState("")
    //
    useEffect(()=>{

        //使用headers时
        // register2(headers({prompt:"dog"})).then((result)=>{
        //     setId(result.request_id)
        //     setLoading(true)
        // })

        register("dog").then((result)=>{
            setId(result.request_id)
            setLoading(true)
        })
    },[])

    useEffect(() => {
        if (loading){
            setTimeout(() => {
                setGetImgInterval(!getImgInterval)
            }, 1000)
        }
        getImg(id).then((result)=>{
            //停止加载
            if (result.status === "done"){
                setLoading(false)
            }

            console.log(result)

            if (result.result?.images !== undefined && result.result.images !== null) {
                setImageData(...result.result.images);
            } else if (result.result?.current_image !== undefined && result.result.current_image !== null) {
                setImageData(result.result.current_image);
            }
        })
    }, [loading,getImgInterval])



    return (
        <div className={"text-9xl"}>
            <img src={`data:image/png;base64,${imageData}`}/>
        </div>

    )
}

export default Paragraph
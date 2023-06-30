import React, { FC } from "react";

interface ParagraphProps {
    children: React.ReactNode;
}


const FirstLayout : FC<ParagraphProps> = ({children}) => {
    return (
        <>
            {/*把下面div的背景颜色改回bg-bg1*/}
            <div className={"robots h-screen w-3/12 bg-bg1 hidden sm:block overflow-y-auto"}>
                {
                    children
                }
            </div>
        </>

    )
}

export default FirstLayout

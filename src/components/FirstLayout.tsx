import React, { FC } from "react";

interface ParagraphProps {
    children: React.ReactNode;
}


const FirstLayout : FC<ParagraphProps> = ({children}) => {
    return (
        <div className={"robots h-screen w-3/12 bg-bg1 hidden sm:block overflow-y-auto"}>
            {
                children
            }
        </div>
    )
}

export default FirstLayout

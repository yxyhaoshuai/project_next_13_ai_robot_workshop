import React, { FC } from "react";

interface ParagraphProps {
    children: React.ReactNode;
}


const SecondaryLayout : FC<ParagraphProps> = ({children}) => {
    return (
        <div className={"right h-32 w-5/6 bg-bg1 h-screen"}>
            {
                children
            }
        </div>
    )
}

export default SecondaryLayout

import React, {FC} from "react";


interface LoginMaskProps {
}

const LoginMask: FC<LoginMaskProps> = ({}) => {



    return (
        <>
            <div className="h-screen w-screen bg-text444 opacity-50 fixed top-0 left-0">
                <div className={"w-96 h-96 bg-bgeee opacity-100"}></div>
            </div>
        </>

    )
}

export default LoginMask

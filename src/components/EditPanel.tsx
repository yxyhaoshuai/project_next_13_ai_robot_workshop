import {FC, useState} from "react";

interface EditPanelProps {}

const EditPanelProps : FC<EditPanelProps> = ({}) => {
    const [editPanelIndex,setEditPanelIndex] = useState<number>(0);
    return (
        <div className={"p-5"}>
            <div className={"bg-text444 h-screen rounded-md"}>
                <div className={"h-16 border-b border-text555 flex items-center pl-4 text-2xl text-eee"}>权限卡</div>
            </div>
        </div>
    )
}

export default EditPanelProps

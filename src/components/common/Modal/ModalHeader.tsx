import React from "react";
import CardHeader from "../Card/CardHeader";
import {MdClose} from "react-icons/md";

type Props = {
    title: string,
    showCancelButton: boolean,
    onDismiss: () => void
}

const ModalHeader = ({showCancelButton, onDismiss, title}: Props) => {
    return <CardHeader>
        <div className='w-full flex flex-row justify-between items-center'>
            <div className='font-extrabold text-sm'>{title}</div>
            {showCancelButton && <MdClose onClick={onDismiss} className='cursor-pointer'/>}
        </div>

    </CardHeader>
}
export default ModalHeader
import React from 'react'
import CircularAvatar from "../common/CircularAvatar";
import {MdAdd, MdArrowDropDown} from "react-icons/md";
import Button from "../common/Button";
import {usePageTitleNormalizer} from "../../hooks/usePageTitleNormalizer";

const Appbar = () => {
    const title = usePageTitleNormalizer();
    return (
        <div className='appBar py-4 px-14'>
            <div className='font-extrabold text-2xl'>{title}</div>
            <div className='flex flex-row justify-start items-center gap-6'>
                <Button onClick={() => alert('modal')} variant='Filled' type='Success' title='سوال جدید' icon={<MdAdd/>}/>
                <CircularAvatar variant='Circular' img='https://i.pravatar.cc/150?img=11' altImg='avatar-image'/>
                <span className='font-bold text-sm text-grey-45'>امیر نظری فر</span>
                <MdArrowDropDown size={25} className='text-grey-9 cursor-pointer'/>
            </div>
        </div>
    )
}

export default Appbar

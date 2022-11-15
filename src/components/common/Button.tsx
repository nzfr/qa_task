import React from "react";

type Props = {
    variant: 'SUCCESS',
    title:string,
    icon?: JSX.Element
}

const Button = ({variant,title,icon}:Props) => {
    const bgColor = variant === 'SUCCESS' ? 'bg-green-27' : 'bg-green-50'
    return <button className={`flex flex-row justify-center items-center gap-2 ${bgColor} text-white p-2 rounded-lg font-bold text-xs`}>
        {icon ?? icon}
        {title}
    </button>
}
export default Button
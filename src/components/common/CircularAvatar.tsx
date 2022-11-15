import React from "react";

type Props = {
    img:string,
    altImg?:string
}

const CircularAvatar = ({img,altImg}:Props) => {
    return <img src={img} alt={altImg ?? ''} className='rounded-full h-11 w-11'/>
}
export default CircularAvatar
import React from "react";

type Props = {
    variant: 'Filled' | 'Outlined',
    type?: 'Success' | 'Error'
    title:string,
    icon?: JSX.Element,
    onClick?: () => void,
    className?:string
}

const Button = ({variant,type,title,icon, onClick,className}:Props) => {
    const styles = () => {
        switch (variant){
            case "Filled":
                if (type === 'Success'){
                    return 'filled-success-button'
                }
                if (type === 'Error'){
                    return 'filled-error-button'
                }
                break;
            case "Outlined":
                if (type === 'Success'){
                    return 'outlined-success-button'
                }
                if (type === 'Error'){
                    return 'outlined-error-button'
                }
                break;
            default:
                return 'filled-success-button'


        }
    }

    return <button onClick={onClick} className={`custom-button ${styles()} ${className ?? ''}`}>
        {icon ?? icon}
        {title}
    </button>
}
export default Button
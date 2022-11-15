import React, {ReactElement} from "react";

type Props = {
    children: ReactElement | ReactElement[]
}

const Card = ({children}:Props) =>  {
    return <div className='questionCard'>
        {children}
    </div>
}
export default Card;
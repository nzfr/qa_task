import React, {ReactElement} from "react";

type Props = {
    children: ReactElement | ReactElement[]
}

const ModalFooter = ({children}:Props) => {
    return <div className="bg-mainBg px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 border-t border-grey-77 gap-4">
        {children}
    </div>
}
export default ModalFooter
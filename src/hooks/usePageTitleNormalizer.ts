import {useLocation} from "react-router-dom";

export const usePageTitleNormalizer = () => {
    const {pathname} = useLocation()
    const title = () => {
        if (pathname === '/'){
            return 'لیست سوالات'
        }
        if (pathname.match('/question-details/[0-9]+')){
            return 'جزییات سوال'
        }
        return '';
    }
    return title();
}
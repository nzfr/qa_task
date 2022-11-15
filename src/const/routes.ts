import {lazy, LazyExoticComponent} from "react";

const QuestionsList = lazy(() => import('../components/quesitions-list/QuestionsList'))
const QuestionDetail = lazy(() => import('../components/question-detail/QuestionDetail'))

type RouteType = {
    path: string
    component: LazyExoticComponent<() => JSX.Element>;
}

export const routes: RouteType[] = [
    {
        path: '/',
        component: QuestionsList,
    },
    {
        path: '/question-details/:id',
        component: QuestionDetail,
    },
]

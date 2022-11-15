import {lazy, LazyExoticComponent} from "react";

const QuestionsList = lazy(() => import('../components/quesitions-list/QuestionsList'))
const QuestionDetail = lazy(() => import('../components/question-detail/QuestionDetail'))

type RouteType = {
    path: string
    title: string
    component: LazyExoticComponent<() => JSX.Element>;
}

export const routes: RouteType[] = [
    {
        path: '/',
        title: 'لیست سوالات',
        component: QuestionsList,
    },
    {
        path: '/question-details/:id',
        title: 'جزییات سوال',
        component: QuestionDetail,
    },
]

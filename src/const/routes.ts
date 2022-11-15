import QuestionsList from "../components/quesitions-list/QuestionsList";
import QuestionDetail from "../components/question-detail/QuestionDetail";

type RouteType = {
    path: string
    title: string
    component: () => JSX.Element
}

export const routes: RouteType[] = [
    {
        path: '/',
        title: 'لیست سوالات',
        component: QuestionsList,
    },
    {
        path: '/question-details',
        title: 'جزییات سوال',
        component: QuestionDetail,
    },
]

import QuestionsList from '../components/quesitions-list/QuestionsList'
import QuestionDetail from '../components/question-detail/QuestionDetail'

type RouteType = {
  path: string
  component: () => JSX.Element
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

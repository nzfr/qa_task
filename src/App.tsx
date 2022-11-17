import React, { lazy } from 'react'
import { useAppSelector } from './store/hooks'
import NewQuestionModal from './components/new-question-modal/NewQuestionModal'

const Appbar = lazy(() => import('./components/app-bar/Appbar'))
const AppRoutes = lazy(() => import('./components/routes/AppRoutes'))

const App = () => {
  const appState = useAppSelector((state) => state.appState)

  return (
    <AppRoutes>
      <Appbar />
      {appState.newQuestionModal.isOpen ? <NewQuestionModal /> : <></>}
    </AppRoutes>
  )
}
export default App

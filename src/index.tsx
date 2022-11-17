import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { store } from './store/store'
import { Provider } from 'react-redux'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const App = lazy(() => import('./App'))
const renderLoader = () => (
  <div className='w-full h-screen flex flex-col items-center justify-center'>
    <span>Loading ...</span>
  </div>
)

root.render(
  <Suspense fallback={renderLoader()}>
    <Provider store={store}>
      <App />
    </Provider>
  </Suspense>,
)

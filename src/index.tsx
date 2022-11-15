import React, {lazy, Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const Appbar = lazy(() => import('./components/app-bar/Appbar'))
const AppRoutes = lazy(() => import('./components/routes/AppRoutes'))

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const renderLoader = () => (
    <div className="w-full h-screen flex flex-col items-center justify-center">
        <span>Loading ...</span>
    </div>
);

root.render(
    <React.StrictMode>
       <Suspense fallback={renderLoader()}>
           <AppRoutes>
               <Appbar/>
           </AppRoutes>
       </Suspense>
    </React.StrictMode>,
)

import React, { ReactElement } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { routes } from '../../const/routes'

type Props = {
  children: ReactElement | ReactElement[]
}

const AppRoutes = ({ children }: Props) => {
  return (
    <BrowserRouter>
      <div className='min-h-screen bg-mainBg'>
        {children}
        <div className='h-full px-14 py-8'>
          <Routes>
            {routes.map(function (item, index) {
              return <Route key={index} path={item.path} element={<item.component />} />
            })}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}
export default AppRoutes

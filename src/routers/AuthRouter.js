import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { AuthPage } from '../pages/AuthPage';


export const AuthRouter = () => {


  return (

    <div>
         <Routes>
              <Route path="/login" element={<AuthPage />} />

              <Route path="*" element={<AuthPage />} />
            </Routes>
    </div>

  )
}

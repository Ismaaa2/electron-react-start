import React from 'react';
import { Navigate } from "react-router-dom";
import { HomePage } from '../pages/HomePage';

export const PrivateRouter = () => false ? <HomePage /> : <Navigate to="/auth/" />
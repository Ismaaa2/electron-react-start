import React from 'react';
import { Navigate } from 'react-router-dom';
import { AuthRouter } from './AuthRouter';

export const PublicRouter = () => true ? <AuthRouter /> : <Navigate to="/" />
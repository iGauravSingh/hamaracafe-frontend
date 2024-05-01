import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import { store } from './app/store';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import AffailateSignIn from './pages/Affailate-sign-in.jsx';
import AffailateSignUp from './pages/Affailate-sign-up.jsx';
import AffailateJobWork from './pages/Affailate-job-work.jsx';
import UserDashboard from './pages/UserDashboard.jsx';
import AdminDashboard from './pages/AdminDashboard.jsx';
import AdminLogin from './pages/Admin-login.jsx';
import Homepage from './pages/Homepage.jsx';
import NotFound from './pages/NotFound.jsx';
import FranchiseSignup from './pages/FranchiseSignup.jsx';
import FranchiseDashboard from './pages/FranchiseDashboard.jsx';
import FranchiseSignin from './pages/FranchiseSignin.jsx';
import DashboardController from './pages/DashboardController.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='/' element={<Homepage />} />
      <Route path='/signin' element={<AffailateSignIn />} />
      <Route path='/signup' element={<AffailateSignUp />} />
      <Route path='/job' element={<AffailateJobWork />} />
      <Route path='/adminlogin' element={<AdminLogin />} />
      <Route path='/franchisesignup' element={<FranchiseSignup />} />
      <Route path='/franchisesignin' element={<FranchiseSignin />} />

      {/* protected routes  */}
      <Route path='/dashboard' element={<UserDashboard />} />
      <Route path='/admindashboard' element={<DashboardController />} />
      <Route path='/franchisedashboard' element={<FranchiseDashboard />} />
      {/* //  */}
      <Route path="*" element={<NotFound />} />
      
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)

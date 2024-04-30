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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='/' element={<AffailateSignIn />} />
      <Route path='/signin' element={<AffailateSignIn />} />
      <Route path='/signup' element={<AffailateSignUp />} />
      <Route path='/job' element={<AffailateJobWork />} />
      <Route path='/adminlogin' element={<AdminLogin />} />

      {/* protected routes  */}
      <Route path='/dashboard' element={<UserDashboard />} />
      <Route path='/admindashboard' element={<AdminDashboard />} />

      {/* //  */}
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

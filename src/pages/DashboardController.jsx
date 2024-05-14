import React, { useState } from 'react'
import FranchiseAdminDashboard from './FranchiseAdminDashboard'
import AdminDashboard from './AdminDashboard'
import { useSelector } from 'react-redux'
import Unauthorized from './Unauthorized'

const DashboardController = () => {

    const {admin} = useSelector((state) => state.admin.value)

    if (!admin) {
        return <Unauthorized />;
      }

    // Dashboard state are aff , fra 

    const [dashboardState, setDashboardState] = useState('aff')

  return (
    <div>
        {/* upside Selector  */}
        <div className=' '>
        <div className=' h-12 bg-[#e62e56] flex justify-center items-center gap-10'>
            <p onClick={() => setDashboardState('aff')} className={` text-xl text-white font-sans border-b-8 ${dashboardState === 'aff' ? 'border-white' : 'border-[#e62e56]'} cursor-pointer`}>Affailate Dashboard</p>
            <p onClick={() => setDashboardState('fra')} className={` text-xl text-white font-sans border-b-8 ${dashboardState === 'fra' ? 'border-white' : 'border-[#e62e56]'} cursor-pointer`}>Franchise Dashboard</p>
        </div>
        </div>

        {dashboardState === 'aff' && <AdminDashboard />}
        {dashboardState === 'fra' && <FranchiseAdminDashboard />}
    </div>
  )
}

export default DashboardController
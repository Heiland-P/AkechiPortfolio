import React from 'react'
import { Outlet } from 'react-router-dom'

import LogButton from '../components/LogButton'

function MainLayout() {
  return (
    <div>
      <LogButton />
      <Outlet />
    </div>
  )
}

export default MainLayout
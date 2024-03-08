import React from 'react'

interface Props {
  children: React.ReactNode
}


const DashboardLayout: React.FC<Props> = ({children}) => {
  return (
    <>{children}</>
  )
}

export default DashboardLayout
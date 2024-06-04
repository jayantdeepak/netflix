import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    let err= useRouteError()
  return (
    <div className='flex justify-center align-middle' >
      something went wrong:{err.status}
    </div>
  )
}

export default Error

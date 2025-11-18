import React from 'react'
import { assets } from '../assets/assets'

const Login = () => {
  return (
    <div className='min-h-screen flex flex-col md:flex-row'>
      {/* background image */}
      <img src={assets.bgImage} alt="" className='w-full h-full -z-1 absolute top-0 left-0 object-cover'/>

      {/* left side : Branding */}
      <div className='flex-1 flex flex-col items-start justify-between p-6 md:p-10 lg:pl-40'>
        <img src={assets.logo} alt="" />

      </div>
    </div>
  )
}

export default Login
import React from 'react'
import './style.css'

const Navbar = () => {

  return (
    <div className=" flex justify-between nav">
      <div className="flex items-center justify-center">
        <div className='logo'>Qlearn</div>
      </div>
      <div className='navbuttons'>
        <ul className='ul flex items-center justify-center gap-20'>
          <li>Discover</li>
          <li>Earnings</li>
          <li>About</li>
          <li>Create a Quest</li>
        </ul>
      </div>
      <div className='buttonCont flex gap-5'>
        {/* <button className="google bg-blue-500" style={{padding:'0 .5rem', margin: '0.5rem 0', borderRadius: '0.5rem'}}>
            Sign in Google
        </button> */}
        <button className="connect bg-orange-500 px-3 rounded-lg" style={{ margin: '0.5rem 0', borderRadius: '.5rem' }}>Connect Wallet</button>
      </div>
    </div>
  )
}

export default Navbar

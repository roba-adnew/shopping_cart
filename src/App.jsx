// import { useState } from 'react'
import NavBar from './utils/NavBar'
import girlsShopping from './assets/girlsShopping.svg'
import './App.css'

function App() {

  return (
    <>
      <NavBar />
      <h1>Let&apos;s goo shoppping!!$!!$!!</h1>
      <img src={girlsShopping} className="girls" alt="Imagine an image of shopping" />
    </>
  )

}

export default App
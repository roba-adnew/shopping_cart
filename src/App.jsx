// import { useState } from 'react'
import { NavBar } from './utils/Components'
import girlsShopping from './assets/girlsShopping.svg'
import './App.css'

function App() {

  return (
    <>
      <NavBar />
      <h1>Let&apos;s goo shoppping!!$!!$!!</h1>
      <img src={girlsShopping} id="girls" alt="Imagine an image of shopping" />
    </>
  )

}

export default App
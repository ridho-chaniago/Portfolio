

import Profile from './component/pages/WebProfile'
import { useEffect } from 'react'
import Aos from "aos";

import 'aos/dist/aos.css'

function App() {
  useEffect(() => {
    Aos.init({
      duration:1000,

    })
  }, [])
  return (
    <>

      <Profile />

    </>
  )
}

export default App

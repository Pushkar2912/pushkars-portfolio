import React from 'react'
import Navbar from './components/common/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { PATHS } from './utils/paths'
import About from './pages/About'
import Projects from './pages/Projects'
import Contacts from './pages/Contacts'

const App = () => {
  return (
    <div className='bg-gray-800  min-h-[100vh] flex'>
      <div className='app-container-left w-[10%] border-r border-gray-500'>
        
      </div>
      <div className='app-cotainer-right flex-1'>
        <Navbar / >
        <Routes>
        <Route path={PATHS.HOME} element={<Home />} />
        <Route path={PATHS.ABOUT} element={<About />} />
        <Route path={PATHS.PROJECTS} element={<Projects />} />
        <Route path={PATHS.CONTACT} element={<Contacts />} />
      </Routes>
      </div>


     

    </div>
  )
}

export default App
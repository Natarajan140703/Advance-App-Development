import './App.css'

import { Routes, Route, BrowserRouter as Router } from "react-router-dom"
import EventGallery from './Components/EventGallery'
import About from './Components/About'
import Services from './Components/Services'
import Contact from './Components/Contact'
import Home from './Components/Home'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Profile from './Components/Profile'
import AdminLogin from './Components/AdminLogin'
import AdminDashboard from './Components/AdminDashboard'
import EventRegistrationTable from './Components/EventTableRegistration'





function App() {


  return (
    <>
      <Router>
        <Routes>

          <Route path='/' element={<Home />}></Route>
          <Route path='/about us' element={<About />}></Route>
          <Route path='/services' element={<Services />}></Route>
          <Route path='/event gallery' element={<EventGallery />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
          <Route path='/admin' element={<AdminLogin />}></Route>
          <Route path='/appointments' element={<EventRegistrationTable/>}></Route>
          <Route path='/admindash' element={<AdminDashboard />}></Route>





        </Routes>
      </Router>

      <div>
      </div>


    </>
  )
}

export default App
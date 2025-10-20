import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/HomePage/Home'
import Footer from './components/Layout/Footer'
import Solution from './components/Pages/Solution'
import Resource from './components/Pages/Resource'
import Navbar from './components/Layout/Navbar'
import Quote from './components/Pages/Quote'
import Demo from './components/Pages/Demo'
import Login from './components/Pages/Login'
import GoToTop from './components/Utils/GoToTop'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/solution' element={<Solution />}></Route>
          <Route path='/resource' element={<Resource />}></Route>
          <Route path='/quote' element={<Quote />}></Route>
          <Route path='/demo' element={<Demo />}></Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
      </main>
      <GoToTop />
      <Footer />
    </div>
  )
}

export default App
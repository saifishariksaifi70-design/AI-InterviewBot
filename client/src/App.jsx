import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Auth from './pages/Auth'
import InterviewPage from './pages/InterviewPage'
import { useEffect } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setUserData } from './redux/userSlice'
import InterviewHistory from './pages/InterviewHistory'
import Pricing from './pages/Pricing'
import InterviewReport from './pages/InterviewReport'

export const serverUrl = "http://localhost:3000"

function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    const getUser = async ()=>{
      try {
        const response = await axios.get(serverUrl + '/api/user/currentUser' , 
          {withCredentials:true}
        )
        dispatch(setUserData(response.data))

      } catch (error) {
        console.log(error)
        dispatch(setUserData(null))
        
      }
    }
    getUser()

  },[dispatch])

  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Auth' element={<Auth/>}/>
          <Route path='/interview' element={<InterviewPage/>}/>
          <Route path='/history' element={<InterviewHistory/>}/>
          <Route path='/pricing' element={<Pricing/>}/>
          <Route path='/report' element={<InterviewReport/>}/>



        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App

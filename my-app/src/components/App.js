import './App.css';
import Splush from '../pages/Splush/Splush';
import Registration from '../pages/Registration/Registration';
import Login from '../pages/Login/Login';
import Dashboard from '../pages/Dashboard/Dashboard';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function App() {

  const navigate = useNavigate()

  useEffect(() => {
    
    if(!localStorage.getItem('token')) navigate('/signIn') 
   
  }, [])

  return <section className='app'>
      <Routes>
        <Route path='/splush' element={<Splush />} />
        <Route path='/signUp' element={<Registration />} />
        <Route path='/signIn' element={<Login />} />
        <Route path='/todos' element={<Dashboard />} />
      </Routes>

      {/* Модальное окно сюда + пременить знание документации */}
  </section>
}

export default App;

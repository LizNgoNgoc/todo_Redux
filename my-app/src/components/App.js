import './App.css';
import Splush from '../pages/Splush/Splush';
import Registration from '../pages/Registration/Registration';
import Login from '../pages/Login/Login';
import Dashboard from '../pages/Dashboard/Dashboard';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    
   
  }, [])

  return <section className='app'>
   {localStorage.getItem('token') && <Navigate to='/todos'/>}
      <Routes>
        <Route path='/splush' element={<Splush />} />
        <Route path='/signUp' element={<Registration />} />
        <Route path='/signIn' element={<Login />} />
        <Route path='/todos' element={<Dashboard />} />
      </Routes>
  </section>
}

export default App;

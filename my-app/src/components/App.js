import './App.css';
import Splush from './Splush/Splush';
import Registration from './Registration/Registration';
import Login from './Login/Login';
import Dashboard from './Dashboard/Dashboard';


function App() {
  return <section className='app'>
      <Splush />
      <Registration />
      <Login />
  </section>
}

export default App;

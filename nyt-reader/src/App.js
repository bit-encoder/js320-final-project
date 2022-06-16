import './App.css';
import {Outlet} from 'react-router-dom'
import CreateLinks from './structure/00-link-creator';
import NavBar from './structure/01-navbar';
// import Home from './structure/03-home';

function App() {
  return (
    <div className='test-cage'>
        <NavBar />
        <CreateLinks />
        <Outlet />
    </div>
  );
}

export default App;

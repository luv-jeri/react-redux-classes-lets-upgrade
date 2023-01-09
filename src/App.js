import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Count from './pages/Count/Count';
import User from './pages/User/User';
function App() {
  return (
    <div className='App'>
      <ul>
        <li>
          <Link to='/'>User</Link>
        </li>
        <li>
          <Link to='/count'>Count</Link>
        </li>
      </ul>
      <Routes>
        <Route path='/' element={<User />} />
        <Route path='/count' element={<Count />} />
      </Routes>
    </div>
  );
}

export default App;

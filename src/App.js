import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Count from './pages/Count/Count';
import User from './pages/User/User';
import Products from './pages/Products/Products';
function App() {
  return (
    <div className='App'>
      <nav>
        <li>
          <Link to='/'>User</Link>
        </li>
        <li>
          <Link to='/count'>Count</Link>
        </li>
        <li>
          <Link to='/products'>products</Link>
        </li>
      </nav>
      <Routes>
        <Route path='/' element={<User />} />
        <Route path='/count' element={<Count />} />
        <Route path='/products' element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;

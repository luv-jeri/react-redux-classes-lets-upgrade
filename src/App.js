import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Count from './pages/Count/Count';
// import User from './pages/User/User';
import Products from './pages/Products/Products';
function App() {
  return (
    <div className='App'>
      <nav>
        <Link to='/'>Count</Link>
        <Link to='products'>Products</Link>
      </nav>
      <Routes>
        {/* <Route path='/' element={<User />} /> */}
        <Route path='/' element={<Count />} />
        <Route path='/products' element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;

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

const pr = [
  {
    id: 1,
    name: 'A',
    price: 100,
  },
  {
    id: 2,
    name: 'B',
    price: 200,
  },
  {
    id: 3,
    name: 'C',
    price: 300,
  },
];

const cart = [];

const add = (product) => {
  const index = cart.findIndex((item) => item.id === product.id); // find if we already have item in our cart
  
  
  if (index === -1) {
    // if we dont had the item
    const toAdd = {
      ...product,
      q: 1,
      totalPrice: product.price,
    };  // create a new object with two extra properties  q , total
    cart.push(toAdd);  // then push it to our cart
  } else {

    // if we already had the item 
    cart[index].q = cart[index].q + 1; // increace the q by 1 
    cart[index].totalPrice = cart[index].totalPrice + product.price; // increace the total price by the price of the item
  }
};

const remove = (product) => {
  const index = cart.findIndex((item) => item.id === product.id); // find if we have the item in the cart
  if (index !== -1) {
    if (cart[index].q === 1) {
      cart.splice(index, 1);
    } else {
      cart[index].q = cart[index].q - 1;
      cart[index].totalPrice = cart[index].totalPrice - product.price;
    }
  }
};

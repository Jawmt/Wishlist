
import { useRef } from 'react';
import './App.css';
import Header from './components/Header';
import Modal from './features/wishlist/components/Modal';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  
  return (
    <>
      <Header />
      
      <Home />  
    </>
  );
}

export default App;

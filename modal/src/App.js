import logo from './logo.svg';
import './App.css';
import Modal from './Modal'
import {useState,useEffect} from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => {
    setIsOpen(!isOpen);
  }
  return (
    <div className="App">
     <button onClick={handleClick}>Open Modal</button>
     <Modal isOpen={isOpen} >

        <p className={'modal-content'}>This is the modal <span onClick={handleClick} className={'close'}>X</span></p>

      </Modal>
    </div>
  );
}

export default App;

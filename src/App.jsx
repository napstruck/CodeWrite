import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import NavPage from './components/NavPage';
import CodeHome from './components/CodeHome';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='CodeWriteWebSite'>
      <NavPage></NavPage>
    </div>
    
  );
}

export default App;

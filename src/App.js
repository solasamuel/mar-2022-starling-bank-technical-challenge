import './App.css';
import { useEffect, useState } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './components/Home'


function App() {
  return (
    <Router>
      <div className="App">
        <div className="container mt-5">
          <Routes>
            <Route path='/' element={<Home />} exact />
          </Routes>
        </div>
      </div>
    </Router >
  );
}

export default App;

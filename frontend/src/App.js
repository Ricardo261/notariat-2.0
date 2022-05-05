import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavbarCustom from './components/NavbarCustom';
import Notaires from './pages/Notaires';

function App() {
  return (
    <div className="App">
      <NavbarCustom></NavbarCustom>
      <Notaires></Notaires>
    </div>
  );
}

export default App;

import Menu from './components/Menu/Menu';
import React from 'react'
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrinPage from './components/PrinPage/Page'
import Carousel from './components/Carousel/Carousel';
function App() {
  return (
    <div>
     <Menu/>
     <PrinPage/>
     <Carousel/>
    </div>
  );
}

export default App;

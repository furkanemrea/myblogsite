import React from "react";
import Navbar from './components/NavComp'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Info from "./components/Info";
import ModalPage from './components/ModalPage'
import Teknoloji from "./components/Teknoloji";





function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar ></Navbar>
        <div className="container">
        <Switch>
          <Route path="/" exact />
          <Route path="/Info" component={Info} exact/>
          <Route path="/Teknoloji" component={Teknoloji} exact/>
        </Switch>
        </div>
      </div>
      
      <ModalPage />
    </BrowserRouter>
  );
}

export default App;

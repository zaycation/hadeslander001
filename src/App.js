import React from "react";
import "./App.css";

//Layout Imports
import Header from "./components/layout/Header";

//Pages Imports
import Lander from "./components/pages/Lander";
import About from "./components/pages/About";
import Invite from './components/pages/Invite';
import Support from './components/pages/Support';

//React Router Imports
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
      </div>

      <Switch>
        <Route exact path="/" component={Lander}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/invite" component={Invite}></Route>
        <Route exact path='/support' component={Support}></Route>

        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

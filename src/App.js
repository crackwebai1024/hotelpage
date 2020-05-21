import React from 'react';
import { Route } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './App.css';
import Container from './container/Container';
import ShowCarousel from './container/ShowCarousel';
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <div className="body">
      <Router>
        <Route exact path="/" component={Container} />
        <Route path="/showlist" component={ShowCarousel} />
      </Router>
    </div>
  );
}

export default App;

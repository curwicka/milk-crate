import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, Reviews, Collection, Login } from "./components";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/reviews" exact component={() => <Reviews />} />
          <Route path="/collection" exact component={() => <Collection />} />
          <Route path="/login" exact component={() => <Login />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

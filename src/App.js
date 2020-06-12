import React from "react";
import LandingPage from "./Components/LandingPage/LandingPage";
import CovidSection from "./Components/CovidSection/CovidSection";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" component={LandingPage} exact />
        <Route path="/covid" component={CovidSection} exact />
      </BrowserRouter>
    </div>
  );
}

export default App;

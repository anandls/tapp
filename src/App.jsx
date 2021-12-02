import React from "react";
import "./App.css";

import Title from "./components/Title";
import TimeIndicator from "./components/TimeIndicator";

const App = () => {
  return (
    <div className="container">
      <Title />
      <TimeIndicator />
    </div>
  );
};

export default App;

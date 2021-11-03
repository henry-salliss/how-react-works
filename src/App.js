import React, { useState } from "react";

import "./App.css";
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";

function App() {
  console.log("App running");
  const [showParagraph, setShowParagraph] = useState(false);

  const toggleParagraph = () => {
    setShowParagraph((prevState) => !prevState);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={false} />
      <Button onClick={toggleParagraph}>Toggle paragraph</Button>
    </div>
  );
}

export default App;

import React from "react";

import Me from "./components/Me";
import About from "./components/About";
import NavigationBar from "./components/NavigationBar";
import Work from "./components/Work";
import Contact from "./components/Contact";

function App() {
  return (
    <div id="top">
      <NavigationBar />
      <Me />
      <About />
      <Work />
      <Contact />
    </div>
  );
}

export default App;

import { useState } from "react";

// Components
import MainLinks from "./components/MainLinks";
import NameLogo from "./components/NameLogo";

function App() {
  return (
    <div className="App">
      <NameLogo />
      <MainLinks />
    </div>
  );
}

export default App;

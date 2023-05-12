import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexRoute from "./routes";
import Navigation from "./components/Navigation";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Navigation />
        <IndexRoute />
      </BrowserRouter>
    </>
  );
}

export default App;

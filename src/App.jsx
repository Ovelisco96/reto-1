import { useState } from "react";
import second from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Section from "./components/Section/Section";
import Section2 from "./components/Section2/Section2";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <Header />
      <Section />
      <Section2/>
    </div>
  );
}

export default App;

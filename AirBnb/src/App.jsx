import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/card";
import data from "./components/data";

const Cards = data.map((x) => {
  return <Card key={x.id} {...x} />;
});

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">{Cards}</section>
    </div>
  );
}

export default App;

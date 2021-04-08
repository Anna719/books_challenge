import React from "react";
import './App.css';
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import System from "./components/System";
import Predmets from "./components/Predmets";
import Section from "./components/Section";
import Rodicia from "./components/Rodicia";
import Ucitelia from "./components/Ucitelia";
import Quotes from "./components/Quotes";


function App() {
  return (
    <div className="app">
      <Navigation/>
      <Header/>
      <System/>
      <Predmets/>
      <Section/>
      <Rodicia/>
      <Ucitelia/>
        <Quotes/>

    </div>
  );
}

export default App;

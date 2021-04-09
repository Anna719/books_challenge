import React, {useEffect, useState} from "react";
import './App.css';

import JsonData from './data/data.json'
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import System from "./components/System";
import Predmets from "./components/Predmets";
import {Section} from "./components/Section";


import {Quotes} from "./components/Quotes";
import {Rodicia} from "./components/Rodicia";
import {Ucitelia} from "./components/Ucitelia";


const App = () => {
        const [landingPageData, setLandingPageData] = useState({})
        useEffect(() => {
            setLandingPageData(JsonData)
        }, []);


  return (
    <div className="app">
      <Navigation data={landingPageData.Navigation}  />
        <Header data={landingPageData.Header} />
        <System data={landingPageData.System} />
        <Predmets data={landingPageData.Predmets}  />
        <Section data={landingPageData.Section}  />
        <Rodicia data={landingPageData.Rodicia}  />
        <Ucitelia data={landingPageData.Ucitelia}  />
        <Quotes data={landingPageData.Quotes}  />


    </div>
  )
};

export default App;

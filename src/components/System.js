import React from 'react';
import './System.css';

import computer from "./images/computers.png";
function System() {

    return(
        <div className='system'>
            <div className="container">
                <div className="flex">
                    <img src={computer} alt=""/>
                <div className="container__left">
                    <div className="list__1">
                        <p>Inteligentný systém učenia</p>
                        <ul>
                            <li>Program žiaka nie len testuje, ale aj učí</li>
                            <li>Obsahuje vysvetlenia</li>
                            <li>Zlepšenie výsledkov žiakov</li>
                            <li>Zameriava sa na slabé miesta žiaka</li>
                            <li>Umožňuje distančnú formu vzdelávania aj učenie priajmo na hodine</li>
                        </ul>
                    </div>
                    <div className="list__2">
                        <p>KoMpatibilita na zariadeniach</p>
                        <ul>
                            <li>Funguje na akomkoľvek zariadení</li>
                            <li>Nezávislý na operačnom systéme (Android, OS)</li>
                            <li>Kompletne prispôsobený na ovládania na mobile</li>
                            <li>Prispôsobený interaktívnym tabuliam</li>
                            <li>Umožňuje distančnú formu vzdelávania aj učenie priajmo na hodine</li>


                        </ul>
                    </div>
                </div>
            </div>
            </div>

        </div>
    )

}
export default System;
import React from 'react';
import './System.css';
import pic5 from './images/pic5.jpg';
import './Rodicia.css';
import './Ucitelia.css';

function Ucitelia() {
    return(
        <div>
            <div className='ucitelia'>
                <div className="container">
                    <div className="flex">

                        <div className="container__left">
                            <div>
                                <h2>SmartBooks doma</h2>
                                <p>Podporte svoje deti výučbou tam kde sa cítia bezpečne, komfortne a bez zdĺhavých príprav.  SmartBooks môže dať rodičom, vychovávateľom a domácim pedagógom možnosť formovať cestu učenia sa svojho dieťaťa prostredníctvom podrobných poznatkov, správ a štatistík z jednotlivého učenia.</p>
                            </div>
                            <div>
                                <h2>SmartBooks podľa školského
                                    vzdelávacieho systému </h2>
                                <p>SmartBooks je tvorené a postavené na osnovách  Ministerstva školstva SR pre Základné školy prvého a druhého stupňa vzdelávania.  Na jeho vzniku sa podieľalo tím pedagógov, medotikov  a učiteľov, tak aby posilňovalo a dopĺňalo školské učebné osnovy. </p>
                            </div>
                            <div>
                                <h2>Učenie pomocou zábavy </h2>
                                <p>Deti majú možnosť okrem vypracovania DÚ a testov zadaných učiteľom, učiť sa samostatne hravou formou. SmartBooks plánuje interaktívne učenie spolu so spolužiakmi a kamrátmi. OKrem iného, SmartBooks ponúka hodnotné odmeny a rôzne súťaže s podporou na celkovú výučbu a hravou formou jednoduché preverenie vedomostí a schopností. </p>
                            </div>
                        </div>
                        <div className="center">

                            <h1>Pre UČiteľov</h1>
                            <img src={pic5} alt=""/>
                            <button>Learn More</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )

}

export default Ucitelia;
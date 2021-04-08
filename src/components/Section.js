import React from 'react';
import './Section.css';
import pic1 from './images/pic1.jpg';
import pic2 from './images/pic2.jpg';
import pic3 from './images/pic3.jpg';


function Section() {
    return(
        <div className="section">
            <div className="container">
                <div className="box">
                    <img src={pic1} alt=''/>
                    <h1> 82 000+ ÚLOH</h1>
                    <p>SmartBooks má spracovaných
                        viac ako 82 000 úloh </p>
                </div>
                <div className="box">
                    <img src={pic2} alt=''/>
                    <h1>11 000+ Študentov</h1>
                    <p>Do výčby SmartBooks  sa už zapojilo
                        viac ako 3500+ študentov</p>
                </div>
                <div className="box">
                    <img src={pic3} alt=''/>
                    <h1>2000+ UČiteľov</h1>
                    <p>Smart Books pri procese výčby používa viac než 2000 učiteľov.</p>
                </div>

            </div>
            <div className='paragraph'>
                <p>“Smart Books je pre učiteľov a rodičov ktorí chcú zapojiť svojich  študentov a deti výučby a zlepšiť ich výsledky modernou metódou”</p>
            </div>
        </div>
    )

}

export default Section;
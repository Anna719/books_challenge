import React from 'react';
import vector1 from './images/Vector50.png';
import vector2 from './images/Vector44.png';
import img1 from './images/Vector04.png';
import img2 from './images/Vector05.png';
import './Quotes.css';

export const Quotes=(props)=> {
    return(
        <div className='quotes'>
            <div className="first">
                <p>“Čo si myslia rodičia, učitelia a školy o SmartBooks?” </p>
            </div>
            <div className="quotes_container">
                <div className="first_in">
                    <img className='quote' src={img1} alt=''/>
                    <p> {props.data ? props.data.quote1 : 'Loading'}</p>
                    <img className='quote' src={img2} alt=''/>
                </div>
                <div className="second_in">
                    <img className='quote' src={img1} alt=''/>
                    <p> {props.data ? props.data.quote2 : 'Loading'}</p>
                    <img className='quote' src={img2} alt=''/>
                </div>
            </div>

                <img className='wave1' src={vector1} alt=''/>
                <div className='color'>
                <img className='wave2' src={vector2} alt=''/>
                </div>


        </div>
    )

};


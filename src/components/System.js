import React from 'react';
import './System.css';
import computer from "./images/computers.png";


export const System=(props)=> {

    return(
        <div className='system'>

            <div className="container">
                    <div className="flex">
                        <img src={computer} alt=""/>
                    <div className="container__left">
                        <div className="list__1">
                            <p>{props.data ? props.data.paragraph : 'loading...'}</p>
                            <ul>
                                {props.data
                                    ? props.data.Intel.map((d, i) => (
                                        <li key={`${d}-${i}`}>{d}</li>
                                    ))
                                    : 'loading'}
                            </ul>
                        </div>
                        <div className="list__2">
                            <p>{props.data ? props.data.paragraph2 : 'loading...'}</p>
                            <ul>
                                {props.data
                                    ? props.data.Kompat.map((d, i) => (
                                        <li key={`${d}-${i}`}>{d}</li>
                                    ))
                                    : 'loading'}

                            </ul>
                        </div>
                    </div>
                </div>
            </div>


        </div>

    )

};
export default System;
import React from 'react';
import Vector from'./images/Vecto2r.png';
import Vector4 from'./images/Vector-4.png';
import Vector3 from'./images/Vector-3.png';
import Vector2 from'./images/Vector-2.png';
import vector from './images/white_vector.png';


import './Header.css';

export const Header=(props)=> {
    return(
        <div className='header'>
            <img  src={Vector}/>
        <div className='container'>

            <div className='row'>
                <div className='container-right'>
                    <h1>
                        {props.data ? props.data.title : 'Loading'}
                    </h1>
                    <p>{props.data ? props.data.paragraph : 'Loading'} </p>
                    <button>
                        Vyskúšaj zadarmo
                    </button>
                </div>
                {/*<img src='https://react-landing-page-template.herokuapp.com/img/about.jpg' alt=""/>*/}
            </div>
        </div>
            <div className='images'>
                <img className='hidden' src={Vector3}/>
                <img  className='hidden2' src={Vector4}/>
                <img className="hidden3" src={vector}/>
            </div>
        </div>
    );
}
export default Header;
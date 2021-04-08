import React from 'react';
import './Predmets.css';
import slovensky from './images/zlty.png';
import prirodoveda from './images/prvouka.png';
import vlastiveda from './images/vlastiveda.png';
import informatika from './images/informatika.png';
import eticka from './images/eticka.png';
import anglictina from './images/anglictina .png';
import nemcina from './images/Vector.png';
import rusky from './images/rusky.png';
import geografia from './images/geografia.png';
import dejepis from './images/dejepis.png';
import fyzika from './images/fyzika.png';
import biologia from './images/biologia.png';
import obcianska from './images/obcianska.png';
import chemia from './images/chemia.png';

function Predmets() {
    return(
        <div id="predmets">

            <div className='predmets'>
                <div className="text">
                    <h1>Smart Books obsahuje komplexné učivo 1-9 ročníka základných  škôl</h1>
                    <p>Spracovaných 16 Predmetov
                        podľa Platných školských osnov Schválených Ministerstvom školstva Slovenskej Rpubliky </p>
                </div>
                <div className="container">
                   <div className="boxes">
                    <img src={slovensky} alt=''/>
                    <p>Slovensky jazyk</p>
                   </div>

                    <div className="boxes">
                        <img src={prirodoveda} alt=''/>
                        <p>Prirodoveda</p>
                    </div>
                    <div className="boxes">
                        <img src={vlastiveda} alt=''/>
                        <p>Vlastiveda</p>
                    </div>
                    <div className="boxes">
                        <img src={informatika} alt=''/>
                        <p>Informatika</p>
                    </div>
                    <div className="boxes">
                        <img src={eticka} alt=''/>
                        <p>Eticka vychova</p>
                    </div>
                    <div className="boxes">
                        <img src={anglictina} alt=''/>
                        <p>Anglictina</p>
                    </div>
                    <div className="boxes">
                        <img src={nemcina} alt=''/>
                        <p>Nemcina</p>
                    </div>


                </div>

                <div className="container">
                    <div className="boxes">
                        <img src={rusky} alt=''/>
                        <p>Rusky</p>
                    </div>
                    <div className="boxes">
                        <img src={geografia} alt=''/>
                        <p>Geografia</p>
                    </div>
                    <div className="boxes">
                        <img src={dejepis} alt=''/>
                        <p>Dejepis</p>
                    </div>
                    <div className="boxes">
                        <img src={fyzika} alt=''/>
                        <p>Fyzika</p>
                    </div>
                    <div className="boxes">
                        <img src={biologia} alt=''/>
                        <p>Biologia</p>
                    </div>
                    <div className="boxes">
                        <img src={obcianska} alt=''/>
                        <p>Obcianska</p>
                    </div>
                    <div className="boxes">
                        <img src={chemia} alt=''/>
                        <p>Chemia</p>
                    </div>


                </div>

        </div>
        </div>
    )

}

export default Predmets;

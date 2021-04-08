import React from 'react';

import './Header.css';

function Header() {
    return(
        <div className='header'>
        <div className='container'>
            <div className='row'>
                <div className='container-right'>
                    <h1>
                        Vitaj
                        v Smart books

                    </h1>
                    <p>Vďaka inteligentnému vzdelávaciemu systému pomáhame efektívnym spôsobom výučby získavať vedomosti a schopnosti žiakov, ktorý vďaka tomu dosiahnu lepšie výsledky za kratší čas bez pomoci dospelého.   </p>
                    <button>
                        Vyskúšaj zadarmo
                    </button>
                </div>
                {/*<img src='https://react-landing-page-template.herokuapp.com/img/about.jpg' alt=""/>*/}
            </div>
        </div>
        </div>
    );
}
export default Header;
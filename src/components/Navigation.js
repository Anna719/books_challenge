import React, {Component, useState} from 'react';
import'./Navigation.css';
import Logo from './images/Logo.png';


class Navigation extends Component{

    constructor(props) {
        super(props);
        this.state = {
            dropdownVisible: false
        }
    }

    toggleDropdown = (e) => {
        this.setState(prevState => ({dropdownVisible: !prevState.dropdownVisible}))
    };

    renderDropdownMenu() {
        return (
            <div className='dropdown-body'>
                <ul>
                    <li><a>Náš príbeh</a></li>
                    <li><a>Povedali o nás</a></li>
                    <li><a>Poslanie</a></li>
                    <li><a>FAQ</a></li>

                </ul>
            </div>
        )
    }

    render() {
        return (
            <div className='navigation'>
                <a className="logo" href="/">
                    <img src={Logo} alt=''/>
                </a>

                <nav>
                    <ul className="nav__links">
                        <li onClick={this.toggleDropdown}>
                            <a href="#">Čo je  Smart Books?</a>

                        </li>
                        {
                            this.state.dropdownVisible &&
                            this.renderDropdownMenu()
                        }
                        <li ><a href="#rodicia">PRE RODIČOV</a></li>
                        <li><a href="#predmets">PRE ŠKOLY</a></li>
                        <li><a href="#">DôleŽitÉ informácie</a></li>
                        <li><a href="#">Nákup</a></li>
                        <li><a href="#">Prihlásenie</a></li>
                    </ul>
                </nav>
                {/*<button className="cta">Contact</button>*/}



            </div>
        )
    }
}

export default Navigation;
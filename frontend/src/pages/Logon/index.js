import React from "react";
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './style.css';

import gatosImg from '../../assets/Gatos.png'
import logoImg from '../../assets/Logo.png'

export default function Logon(){
    return (
        <div className="logon-container">
            <div className="form">
                <img className="Miau"src={logoImg} alt="Miau" />
                <form>
                    <h1>Faça seu logon</h1>

                    <input placeholder="Sua ID" />
                    <button className="button" type="submit">Entrar</button>
                    
                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#F1AF5B"/>
                        Não tenho cadastro
                    </Link>
                </form>
            </div>
            <div className="right-container">
                <img className="Gatos" src={gatosImg} alt="Gatos" />
            </div>
        </div>
    );
}
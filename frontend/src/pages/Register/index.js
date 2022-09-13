import React from "react";
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './style.css';

import Miau from '../../assets/Logo.png'

export default function Register(){
    return (
        <div className="register-container">
            <div className="content">
                <div className="left-container">
                    <img className="Miau" src={Miau} alt="Miau" />

                    <h1>cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude alguém a adotar um gato.</p>
                    
                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#F1AF5B"/>
                        Já tenho cadastro
                    </Link>

                </div>
                <form>
                    <div className="input-group1">
                        <input placeholder="Seu Nome" />
                        <input type="Email" placeholder="E-mail" />
                        <input type="Whatsapp" placeholder="Whatsapp"/>
                        </div>
                    <div className="input-group2">
                        <input placeholder="Cidade" />
                        <input placeholder="UF" style={{ width: 80 }} />
                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}
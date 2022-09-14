import React, { useState} from "react";
import { FiLogIn } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';

import api from '../../services/api'
import './style.css';

import gatosImg from '../../assets/Gatos.png'
import logoImg from '../../assets/Logo.png'

export default function Logon(){
    const [id, setId] = useState('');
    const navigate = useNavigate();

    async function handleLogon(e){
        e.preventDefault();

        try{
            const response = await api.post('sessions', { id });

            localStorage.setItem('doadorId', id);
            localStorage.setItem('doadorNome', response.data.nome);

            navigate('/profile');
        }catch(err){
            alert('Falha no login, tente novamente');
        }
    }

    return (
        <div className="logon-container">
            <div className="form">
                <img className="Miau"src={logoImg} alt="Miau" />
                <form onSubmit={handleLogon}>
                    <h1>Faça seu logon</h1>

                    <input 
                        placeholder="Sua ID" 
                        value={ id }
                        onChange={e => setId(e.target.value)}
                    />
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
import React, { useState } from "react";
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';

import api from "../../services/api";
import './style.css';

import Miau from '../../assets/Logo.png'

export default function Register(){
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [cidade, setCidade] = useState('');
    const [uf, setUf] = useState('');

    const navigate = useNavigate();
    
    async function handleRegister(e){
        e.preventDefault()

        const data = {
            nome,
            email,
            whatsapp,
            cidade,
            uf,
        }

        try{
            const response = await api.post('doadores', data);

            alert(`Seu ID de acesso: ${response.data.id}`);
            
            navigate('/');
        } catch(err) {
            alert('Erro no cadastro, tente novamente.');
        }
    }
    return (
        <div className="register-container">
            <div className="content">
                <div className="left-container">
                    <img className="Miau" src={Miau} alt="Miau" />

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude alguém a adotar um gato.</p>
                    
                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#F1AF5B"/>
                        Já tenho cadastro
                    </Link>

                </div>
                <form onSubmit={handleRegister}>
                    <div className="input-group1">
                        <input 
                            placeholder="Seu Nome" 
                            value={nome}    
                            onChange={e => setNome(e.target.value)}
                        />
                        <input 
                            type="Email" 
                            placeholder="E-mail" 
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            />
                        <input 
                        type="Whatsapp" 
                        placeholder="Whatsapp"
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)}
                        />
                        </div>
                    <div className="input-group2">
                        <input 
                        placeholder="Cidade" 
                        value={cidade}
                        onChange={e => setCidade(e.target.value)}
                        />
                        <input 
                        placeholder="UF" 
                        style={{ width: 80 }} 
                        value={uf}
                        onChange={e => setUf(e.target.value)}
                        />
                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}
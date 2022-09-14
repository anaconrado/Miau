import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi"
import Miau from '../../assets/Logo.png'

import api from '../../services/api';

import "./style.css";

export default function NewGato(){

    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [sexo, setSexo] = useState('');
    const [informacoes, setInformacoes] = useState('');
    const [descricao, setDescricao] = useState('');

    const navigate = useNavigate();

    const doadorId = localStorage.getItem('doadorId');

    async function handleNewGato(e){
        e.preventDefault();
        const data = {
            nome,
            idade,
            sexo,
            informacoes,
            descricao,
        };
    
        try{
            await api.post('gatos', data,{
                headers: {
                    Authorization: doadorId,
                }
            })

            navigate('/profile');
        }   catch(err){
            alert('Erro ao cadastrar gato, tente novamente');
        }
    }

    return(
        <div className="new-gato-container">
            <div className="content">
                <div className="left-container">
                    <img className="Miau" src={Miau} alt="Miau" />

                    <h1>Cadastro do gato</h1>
                    <p>Preencha o formulário com Informações do gato e faça seu cadastro para adoção</p>
                    
                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#F1AF5B"/>
                        Voltar para home
                    </Link>

                </div>
                <form onSubmit={handleNewGato}>
                    <div className="input-group">
                        <input 
                            placeholder="Nome" 
                            value={nome}
                            onChange={e => setNome(e.target.value)}
                            />
                        <input 
                            placeholder="Idade"
                            value={idade}
                            onChange={e => setIdade(e.target.value)}
                            />
                        <input 
                            placeholder="Sexo"
                            value={sexo}
                            onChange={e => setSexo(e.target.value)}
                            />
                    </div>
                    <textarea 
                        placeholder="Informações do gato" 
                        value={informacoes}
                        onChange={e => setInformacoes(e.target.value)}
                        />
                    <textarea 
                        placeholder="Descrição do gato"
                        value={descricao}
                        onChange={e => setDescricao(e.target.value)} 
                        />
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}
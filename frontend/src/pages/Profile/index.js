import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiPower, FiTrash2 } from "react-icons/fi";

import api from "../../services/api"

import "./style.css";

import logoImg from "../../assets/Logo.png";

export default function Profile(){
    const [gatos, setGatos] = useState([]);
    const navigate = useNavigate();

    const doadorNome = localStorage.getItem('doadorNome');
    const doadorId = localStorage.getItem('doadorNome');

    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: doadorId,
            }
        }).then(response => {
            setGatos(response.data);
        })
    }, [doadorId]);

    async function handleDeleteGato(id){
        try{
            await api.delete(`gatos/${id}`, {
                headers: {
                    Authorization: doadorId,
                }
            });

            setGatos(gatos.filter(gato => gato.id !== id));
        }   catch (err) {
            alert('Erro ao deletar o caso, tente novamente.');
        }
    }

    function handleLogout(){
        localStorage.clear();

        navigate('/');
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Miau" />
                <span> Bem Vinda, {doadorNome} </span>

                <Link className="button" to="/gato/new">Cadastrar novo gato</Link>
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#F1AF5B" />
                </button>
            </header>

            <h1>Gatos cadastrados</h1>

            <ul>
                {gatos.map(gato => (
                    <li key={gato.id}>
                    <strong>NOME:</strong>
                    <p>{gato.nome}</p>
    
                    <strong>IDADE:</strong>
                    <p>{gato.idade}</p>
    
                    <strong>SEXO:</strong>
                    <p>{gato.sexo}</p>
    
                    <strong>INFORMAÇÔES</strong>
                    <p>{gato.informacoes}</p>
    
                    <strong>DESCRIÇÂO:</strong>
                    <p>{gato.descricao}</p>
    
                    <button onClick={() => handleDeleteGato(gato.id)} type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
                ))}
            </ul>
        </div>
    );
}
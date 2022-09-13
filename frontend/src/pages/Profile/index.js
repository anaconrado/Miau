import React from "react";
import { Link } from "react-router-dom";
import { FiPower } from "react-icons/fi";

import "./style.css";

import logoImg from "../../assets/Logo.png";

export default function Profile(){
    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Miau" />
                <span> Bem Vinda </span>

                <Link className="button" to="incidents/new">Cadastrar novo gato</Link>
                <button type="button">
                    <FiPower size={18} color="#F1AF5B" />
                </button>
            </header>
        </div>
    );
}
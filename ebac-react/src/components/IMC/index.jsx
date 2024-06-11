import React, { useState } from 'react';
import './imc.css';

const IMC = () => {
    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);
    const [imc, setImc] = useState(null);
    const [status, setStatus] = useState('');

    const calculaIMC = (event) => {
        event.preventDefault(); // Evita que o formulário seja enviado
        if (peso > 0 && altura > 0) {
            const alturaEmMetros = altura / 100; // Converter altura para metros
            const imcCalculado = peso / (alturaEmMetros * alturaEmMetros);
            setImc(imcCalculado.toFixed(2)); // Definir o IMC com 2 casas decimais
            setStatus(getStatus(imcCalculado));
        }
    };

    const getStatus = (imc) => {
        if (imc < 18.5) {
            return 'Abaixo do peso';
        } else if (imc >= 18.5 && imc < 24.9) {
            return 'Peso normal';
        } else if (imc >= 25 && imc < 29.9) {
            return 'Sobrepeso';
        } else {
            return 'Obesidade';
        }
    };

    return (
        <form className="imc-form" onSubmit={calculaIMC}>
            <h2 className="imc-title">Calcule seu IMC</h2>
            <div className="imc-input-container">
                <label className="imc-label">Seu peso (kg)</label>
                <input
                    className="imc-input"
                    type="number"
                    placeholder="Digite seu peso (kg)"
                    value={peso}
                    onChange={(evento) => setPeso(parseFloat(evento.target.value))}
                />
            </div>
            <div className="imc-input-container">
                <label className="imc-label">Sua altura (cm)</label>
                <input
                    className="imc-input"
                    type="number"
                    placeholder="Digite sua altura (cm)"
                    value={altura}
                    onChange={(evento) => setAltura(parseFloat(evento.target.value))}
                />
            </div>
            <button className="imc-button" type="submit">Calcular IMC</button>
            {imc && <p className="imc-resultado">Seu IMC é: {imc} - {status}</p>}
        </form>
    );
};

export default IMC;

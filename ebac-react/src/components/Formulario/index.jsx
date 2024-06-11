import { useState, useEffect } from "react";

const Formulario = () => {
    let [materiaA, setMateriaA] = useState(0);
    let [materiaB, setMateriaB] = useState(0);
    let [materiaC, setMateriaC] = useState(0);
    let nome = 'Analice'

    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma /3;

        console.log(soma)
        console.log(media)

        if (media >= 7) {
            return (
                <p>Olá {nome}, você foi aprovado(a)!</p>
            )
        } else {
            return (
                <p>Olá {nome}, você não foi aprovado(a)!</p>
            )
        }
    }


    return (
        <form>
            <input type="number" placeholder="Nota matéria A" onChange={evento => setMateriaA(parseInt(evento.target.value))} />
            <input type="number" placeholder="Nota matéria B" onChange={evento => setMateriaB(parseInt(evento.target.value))} />
            <input type="number" placeholder="Nota matéria C" onChange={evento => setMateriaC(parseInt(evento.target.value))} />
            {renderizaResultado()}
        </form>
    )
}

export default Formulario;
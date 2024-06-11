import React, { useEffect, useState } from "react";

const Array = () => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);

    useEffect(() => {
        fetch('https://api.github.com/users/analiceleite/repos')
            .then(res => res.json())
            .then(resJson => {
                setTimeout(() => {
                    setEstaCarregando(false);
                    setRepos(resJson);
                }, 3000)
            })
    }, [])

    return (
        <>
            {estaCarregando && (
                    <h1>Carregando...</h1>
            )}

            <div>
                <ul>
                    <li>Repositórios</li> <br />
                    {repos.map(repositorio => (
                        <li key={repositorio.id}>
                            <b>Nome:</b> {repositorio.name} <br />
                            <b>Linguagem:</b> {repositorio.language} <br />
                            <a target="_blank" href={repositorio.html_url}>Visitar no Github</a> 
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Array;
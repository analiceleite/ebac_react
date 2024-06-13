import React, { useEffect, useState } from "react";

import styles from './ReposList.module.css';

const Array = ({ nomeUsuario }) => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);

    useEffect(() => {
        setEstaCarregando(true);
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
            .then(res => res.json())
            .then(resJson => {
                setTimeout(() => {
                    setEstaCarregando(false);
                    setRepos(resJson);
                }, 3000)
            })
    }, [nomeUsuario])

    return (
        <>
            <div>
                {estaCarregando ? (
                    <h1>Carregando...</h1>
                ) : (
                    <div>
                        <ul className={styles.list}>
                            {repos.map(repositorio => (
                                <li className={styles.listItem} key={repositorio.id}>
                                    <div className={styles.itemName}>
                                        <b>Nome:</b>
                                        {repositorio.name}
                                    </div>
                                    <div className={styles.itemLanguage}>
                                        <b>Linguagem:</b>
                                        {repositorio.language}
                                    </div>

                                    <a className={styles.itemLink} target="_blank" href={repositorio.html_url}>Visitar no Github</a>
                                </li>
                            ))}
                        </ul>

                    </div>
                )}
            </div>
        </>
    )
}

export default Array;

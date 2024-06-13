import React, { useState } from 'react';
import Perfil from './components/Perfil';
import ReposList from './components/ReposList';

import style from './components/ReposList/ReposList.module.css'

function App() {
  const [nomeUsuario, setNomeUsuario] = useState('');
  return (
    <>
    <div className={style.containerInput}>
      <input className={style.input} type="text" onBlur={(e) => setNomeUsuario(e.target.value)} placeholder='Nome do usuário Github'/>
    </div>
      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario= {nomeUsuario}/>
          <ReposList nomeUsuario={nomeUsuario}/>
        </>
      )}
    </>
  );
}

export default App;

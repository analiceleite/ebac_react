import React, { useState } from 'react';
import Perfil from './components/Perfil';
import Array from './components/Arrays';

import style from './components/Arrays/ReposList.module.css'

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
          <Array nomeUsuario={nomeUsuario}/>
        </>
      )}
    </>
  );
}

export default App;

import styles from './Perfil.module.css'

const Perfil = ({ nomeUsuario }) => {
  return (
    <div className={styles.header}>
      <img className={styles.avatar} src={`https://github.com/${nomeUsuario}.png`} alt="Imagem de Perfil - Analice" />
      <h1 className={styles.name}>{nomeUsuario}</h1>
    </div>
  );
};

export default Perfil;

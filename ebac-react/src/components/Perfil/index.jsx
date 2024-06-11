import "./perfil.css";

const Perfil = ({ nomeUsuario }) => {
  return (
    <div className="perfil-container">
      <img className="perfil-avatar" src={`https://github.com/${nomeUsuario}.png`} alt="Imagem de Perfil - Analice" />
      <h3 className="perfil-titulo">{nomeUsuario}</h3>
    </div>
  );
};

export default Perfil;

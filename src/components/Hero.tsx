import Imagen from '../assets/images/Telefono-01.png';

function Hero() {
  return (
    <>
      <h1 className="welcome-text">BIENVENIDO A</h1>
      <div className="image">
        <img src={Imagen} alt="Imagen teléfono" />
      </div>
      <h2 className="name-text">MONITORING INNOVATION</h2>
    </>
  );
}

export default Hero;

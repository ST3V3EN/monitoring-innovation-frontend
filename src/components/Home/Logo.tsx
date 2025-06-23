import LogoImage from '../../assets/images/Imagologo_motion.svg';

function Logo() {
  return (
    <div className="logo">
      <img src={LogoImage} alt="Logo" />
    </div>
  );
}

export default Logo;
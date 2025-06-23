import Logo from '../components/Logo';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import '../styles/Home.css'

function Home() {
  return (
      <div className="grid-container">
        <div className="side-curved-animation"></div>
        <Logo />
        <Hero />
        <Footer />
      </div>
  );
}

export default Home;

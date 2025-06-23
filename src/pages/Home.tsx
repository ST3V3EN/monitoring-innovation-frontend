import Logo from '../components/Home/Logo';
import Hero from '../components/Home/Hero';
import Footer from '../components/Home/Footer';
import '../styles/Home.css'

function Home() {
  return (
    <section className="home-section">
      <div className="grid-container">
        <div className="side-curved-animation"></div>
        <Logo />
        <Hero />
        <Footer />
      </div>
    </section>
  );
}

export default Home;

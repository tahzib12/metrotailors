import './App.css';
import AppointmentSection from './Components/Appointment';
import Carousel from './Components/Carousel';
import Footer from './Components/Footer';
import HeroSection1 from './Components/HeroSection1';
import Navbar from './Components/Navbar';
import ServicesSection from './Components/Service';
import TeamMetro from './Components/Team';

function App() {
  return (
    <div className=" relative">
      <div className='fixed z-50 w-full'>
      <Navbar/>
      </div>
      <Carousel/>
      <HeroSection1/>
      <ServicesSection/>
      <TeamMetro/>
      <AppointmentSection/>
      <Footer/>
    </div>
  );
}

export default App;

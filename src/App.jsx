import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Footer from './sections/Footer.jsx';
import Navbar from './sections/Navbar.jsx';
import Resume from './sections/Resume.jsx'
import Chatbot
 from './components/Chatbot.jsx';
const App = () => {
  return (
    <main className="App">
      <Navbar />
      <Hero />
      <About />  
      <Resume/>  
      <Chatbot />
      <Footer />
    </main>
  );
};

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MobileBottomNav from './components/MobileBottomNav';
import CustomCursor from './components/CustomCursor';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import { QuoteModalProvider } from './context/QuoteModalContext';
import QuoteModal from './components/QuoteModal';

function App() {
  return (
    <QuoteModalProvider>
      <Router>
        <div className="flex flex-col min-h-screen hide-cursor overflow-x-hidden relative w-full">
        <CustomCursor />
        <Navbar />
        <main className="flex-grow pt-20 pb-16 md:pb-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <MobileBottomNav />
        <QuoteModal />
      </div>
    </Router>
    </QuoteModalProvider>
  );
}

export default App;

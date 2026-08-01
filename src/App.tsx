import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CapabilityStrip from './components/CapabilityStrip';
import Services from './components/Services';
import ImportFlow from './components/ImportFlow';
import WhyByalance from './components/WhyByalance';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <CapabilityStrip />
        <Services />
        <ImportFlow />
        <WhyByalance />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

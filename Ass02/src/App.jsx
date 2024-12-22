import React from "react";
import Header from './com/Header'
import HeroSection from "./com/HeroSection";
import AboutSection from "./com/AboutSection";
import WhyUsSection from "./com/WhyUsSection";
import StatsSection from "./com/StatsSection";
import MenuSection from "./com/MenuSection";
import TestimonialsSection from "./com/TestimonialsSection";
import EventsSection from "./com/EventsSection";
import ChefsSection from "./com/ChefSection";
import ContactSection from "./com/ContactSection";
import Footer from "./com/Footer";
import Gallery from "./com/GallerySection";
import '../src/assests/css/main.css'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <WhyUsSection />
        <StatsSection />
        <MenuSection />
        <TestimonialsSection />
        <EventsSection />
        <ChefsSection />
        <Gallery/>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;

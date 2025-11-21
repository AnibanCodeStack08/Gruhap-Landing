import React from 'react';
import Hero from '../../components/Hero/Hero';
import Service from '../../components/Service/Service';
import Team from '../../components/Team/Team';
import Testimonial from '../../components/Testimonial/Testimonial';
import CTA from '../../components/CTA/CTA';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero />
      <Service />
      {/* <Team /> */}
      <Testimonial />
      <CTA />
      <Footer/>
    </>
  );
};

export default Home;

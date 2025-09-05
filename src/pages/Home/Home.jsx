import React from 'react';
import Hero from '../../components/Hero/Hero';
import Service from '../../components/Service/Service';
import Team from '../../components/Team/Team';
import Testimonial from '../../components/Testimonial/Testimonial';
import CTA from '../../components/CTA/CTA';

const Home = () => {
  return (
    <>
      <Hero />
      <Service />
      {/* <Team /> */}
      <Testimonial />
      <CTA />
    </>
  );
};

export default Home;

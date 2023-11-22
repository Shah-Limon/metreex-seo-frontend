import React from 'react';
import AboutSection from '../components/MetreexHomePage/AboutSection';
import AboutCompany from '../components/MetreexHomePage/AboutCompany';
import TestimonialSection from '../components/MetreexHomePage/TestimonialSection';
import OurWorkSection from '../components/MetreexHomePage/OurWorkSection';
import VideoSection from '../components/MetreexHomePage/VideoSection';
import CallToAction from '../components/MetreexHomePage/CallToAction';

const AboutPage = () => {
  return (
    <>
     
      <AboutCompany></AboutCompany>
      <OurWorkSection></OurWorkSection>
      <TestimonialSection></TestimonialSection>
      <VideoSection></VideoSection>
      <CallToAction></CallToAction>
    </>
  );
};

export default AboutPage;
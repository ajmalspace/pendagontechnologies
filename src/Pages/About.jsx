import React from 'react'
import AboutHero from '../Components/AboutHero'
import AboutWho from '../Components/AboutWho'
import TeamSlider from '../Components/AboutTeam';
import AboutJoin from '../Components/AboutJoin';
import AboutVision from '../Components/AboutVision';
import ContactForm from '../Components/ContactForm'


const About = () => {
  return (
    <div>
       <AboutHero /> 
       <AboutWho />
       <TeamSlider />
       <AboutJoin />
       <AboutVision />
       <ContactForm />
    </div>
  )
}

export default About
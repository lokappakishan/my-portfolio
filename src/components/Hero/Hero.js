import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding style={{marginTop:'5rem'}}>
    <LeftSection>
      <SectionTitle>Hi, I am <br />
       Kishan Lokappa</SectionTitle>
      <SectionText>
        I am a Frontend developer with more than three years of experience in building beautiful and functional responsive user interfaces using HTML, CSS and JavaScript frameworks.
      </SectionText>
      <Button onClick={()=>{window.location = 'https://www.linkedin.com/in/kishan-lokappa-323335126/'}}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;
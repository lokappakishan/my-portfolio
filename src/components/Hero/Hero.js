import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle>Welcome To <br />
       my personal po</SectionTitle>
      <SectionText>
        Frontend developer with more than three years' experience in building beautiful and functional responsive user interfaces using HTML, CSS and JavaScript frameworks.
      </SectionText>
      <Button onClick={()=>{window.location = 'https://lokappakishan@gmail.com'}}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;
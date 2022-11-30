import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Li } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
          <DiCssdeck size="3rem" /> <span>Portfolio</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <Li>
        <Link href="#projects" >
          <NavLink>PROJECTS</NavLink>
        </Link>
      </Li>
      <Li>
        <Link href="#tech">
          <NavLink>TECHNOLOGIES</NavLink>
        </Link>
      </Li>        
      <Li>
        <Link href="#about">
          <NavLink>ABOUT</NavLink>
        </Link>
      </Li>        
    </Div2>
      <Div3>
        <SocialIcons href="https://github.com/lokappakishan" target="_blank">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/kishan-lokappa-323335126/" target="_blank">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.instagram.com/kishan_karthi/" target="_blank">
          <AiFillInstagram size="3rem"/>
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;
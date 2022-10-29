import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span, HeaderWrapper } from './HeaderStyles';

const Header = () =>  (
      <header>
        <div>
          <Link href="/">
            <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
              <DiCssdeck size="3rem" /> <span>Portfolio</span>
            </a>
          </Link>
        </div>
        <nav>
              <ul>
                  <li><a href="#">Projects</a></li>
                  <li><a href="#">Technologies</a></li>
                  <li><a href="#">About</a></li>
              </ul>
        </nav>
        <div>
           <SocialIcons href="https://google.com">
              <AiFillGithub size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://google.com">
              <AiFillLinkedin size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://google.com">
              <AiFillInstagram size="3rem"/>
            </SocialIcons>
        </div>
      </header>
);

export default Header;


/*
<Container>
      <Div1>
        <Link href={'/'}>
          <a style={{display: "flex",alignItems: "center",color:'white',marginBottom:'20px'}}>
            <DiCssdeck size='3rem' /><Span>Portfolio</Span>
          </a>
        </Link>
      </Div1>
      <Div2>
        <li>
          <Link href="#projects" >
            <NavLink>Projects</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#tech" >
            <NavLink>Technologies</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#about" >
            <NavLink>About</NavLink>
          </Link>
        </li>
      </Div2>
      <Div3>
        <SocialIcons href='https://github.com'>
          <AiFillGithub size='3rem' />
        </SocialIcons>
        <SocialIcons href='https://github.com'>
          <AiFillLinkedin size='3rem' />
        </SocialIcons>
        <SocialIcons href='https://github.com'>
          <AiFillInstagram size='3rem' />
        </SocialIcons>
      </Div3>
    </Container>


*/
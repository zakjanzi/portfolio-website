// Link allows us to link different pages or sections.
import Link from 'next/link';
import React from 'react';
import { Img } from '../Projects/ProjectsStyles';
//icons
import { AiFillGithub, AiFillLinkedin, AiFillCodepenCircle } from 'react-icons/ai';
//styled components
import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style= {{display:'flex', alignItems:"center", color:"white", marginBottom:"20px"}}> 
        <img src="https://i.postimg.cc/ZqN3Qxsx/SON8258-Copy-2-modified.png" style= {{width:'40px', height:'40px', marginRight: '10px'}}/> <Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>

    <Div3>
      <SocialIcons href='https://github.com/zakjanzi' target='_blank'>
        <AiFillGithub size="3rem" />
      </SocialIcons>

      <SocialIcons href='https://linkedin.com' target='_blank'>
        <AiFillLinkedin size="3rem" />
      </SocialIcons>

      <SocialIcons href='https://codepen.io/zakjanzi' target='_blank'>
          <AiFillCodepenCircle size="3rem" />
      </SocialIcons>
      </Div3>

  </Container>
);

export default Header;

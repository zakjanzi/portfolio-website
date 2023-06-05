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
        <img src="https://i.postimg.cc/qBCgMC8J/image.png" style= {{width:'40px', height:'40px', marginRight: '10px'}}/> <Span>Zak's Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      {/* <li>
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
        <Link href="#background">
          <NavLink>About</NavLink>
        </Link>
      </li> */}
    </Div2>

    <Div3>

    <SocialIcons href='https://drive.google.com/file/d/1c0eSeO5_asthmP5n7ApcBpcQd1eFM27a/view' target='_blank'>
        <span>View CV</span>
    </SocialIcons>

      <SocialIcons href='https://github.com/zakjanzi' target='_blank'>
        <AiFillGithub size="3rem" />
      </SocialIcons>

      <SocialIcons href='https://www.linkedin.com/in/zakaria-j-714816111/' target='_blank'>
        <AiFillLinkedin size="3rem" />
      </SocialIcons>


      </Div3>

  </Container>
);

export default Header;

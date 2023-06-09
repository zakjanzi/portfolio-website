import React from 'react';
import { AiFillCodepenCircle, AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        {/* <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:0096181906810" target="_blank">+961 81 906 810</LinkItem>
        </LinkColumn> */}
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:zakjanzi@hotmail.com" target="_blank">
            zakjanzi@hotmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
      <CompanyContainer>
          <Slogan>This site was built with Next.js</Slogan>
        </CompanyContainer>
        
        <SocialContainer>

        

          <SocialIcons href="https://github.com/zakjanzi" target="_blank">
            <AiFillGithub size="3rem" />
          </SocialIcons>

          <SocialIcons href="https://www.linkedin.com/in/zakaria-j-714816111/" target="_blank">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>

          <SocialIcons href="https://codepen.io/zakjanzi" target="_blank">
            <AiFillCodepenCircle size="3rem" />
          </SocialIcons>

        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
import React from 'react';
import { AiFillCodepenCircle, AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:0096181906810">+96181906810</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:zakjanzi@hotmail.com">
            zakjanzi@hotmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>

          <SocialIcons href="https://github.com/zakjanzi">
            <AiFillGithub size="3rem" />
          </SocialIcons>

          <SocialIcons href="https://www.linkedin.com/in/zakaria-j-714816111/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>

          <SocialIcons href="https://codepen.io/zakjanzi">
            <AiFillCodepenCircle size="3rem" />
          </SocialIcons>

        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
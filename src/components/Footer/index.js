import React from 'react'

import {
    FaFacebook,
    FaInstagram,
    FaLinkedin

} from 'react-icons/fa'

import {
    FooterContainer,
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcons,
    SocialIconLink


} from './FooterElements'

import Fade from 'react-reveal/Fade';

const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrap>
            <SocialMedia>
                <SocialMediaWrap>
                    <Fade>
                    <SocialLogo to='/'></SocialLogo>
                    <SocialIcons>
                        <SocialIconLink href="/" target="_blank" aria-label="Facebook" rel="noopener noreferrer">
                            <FaFacebook/>
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Instagram" rel="noopener noreferrer">
                            <FaInstagram/>
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Linkedin" rel="noopener noreferrer">
                            <FaLinkedin/>
                        </SocialIconLink>
                    </SocialIcons>
                    </Fade>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
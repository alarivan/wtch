import React from "react"
import Container from "./styled/container"
import {
  faTwitter,
  faFacebook,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons"
import styled from "styled-components"
import SocialIcon from "./footer/SocialIcon"
import SubscribeFrom from "./footer/SubscribeForm"

const StyledFooter = styled.footer`
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  padding: 2rem 0;

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  h3 {
    margin-bottom: 0.75rem;
  }

  a {
    line-height: 1.9rem;
    color: #ccc;
  }

  @media (min-width: 768px) {
    padding: 4rem;
  }
`

const FooterContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1fr;
  text-align: center;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    text-align: left;
  }
`

const FooterSection = styled.div`
  margin: 1rem auto;
  padding: 0 0.5rem;

  @media (min-width: 768px) {
    margin: 0;
  }
`

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <FooterContainer>
        <FooterSection>
          <h2>Social Media</h2>
          <a href="http://twitter.com" title="Twitter">
            <SocialIcon icon={faTwitter} />
          </a>
          <a href="http://facebook.com" title="Facebook">
            <SocialIcon icon={faFacebook} />
          </a>
          <a href="http://youtube.com" title="YouTube">
            <SocialIcon icon={faYoutube} />
          </a>
        </FooterSection>
        <FooterSection>
          <h3>Company Info</h3>
          <ul>
            <li>
              <a href="#">All Products</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
          </ul>
        </FooterSection>
        <FooterSection>
          <h3>Blog Posts</h3>
          <ul>
            <li>
              <a href="#">Lorem ipsum dolor.</a>
            </li>
            <li>
              <a href="#">Lorem ipsum dolor.</a>
            </li>
            <li>
              <a href="#">Lorem ipsum dolor.</a>
            </li>
            <li>
              <a href="#">Lorem ipsum dolor.</a>
            </li>
          </ul>
        </FooterSection>
        <FooterSection>
          <SubscribeFrom />
        </FooterSection>
      </FooterContainer>
    </StyledFooter>
  )
}

export default Footer

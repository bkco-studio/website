import React from "react"
import { styles, Section } from "../../utils"
import styled from "styled-components"
import logo from "../../images/BKCO.svg"
import { FaTwitter, FaInstagram } from "react-icons/fa"

export default function Footer() {
  return (
    <FooterWrapper>
      <div>
        <img src={logo} alt=""></img>
      </div>
      <div>
        <p className="footer-column-header">Links</p>
        <a href="#">What we do</a>
        <a href="#">Who we are</a>
        <a href="#">Case studies</a>
        <a href="#">What Our Clients Say</a>
        <a href="#">Let's chat</a>
      </div>
      <div>
        <p className="footer-column-header">Extra</p>
        <a href="#">Careers</a>
        <a href="#">Privacy Policy</a>
      </div>
      <div>
        <p className="footer-column-header">Get in touch</p>
        <div className="get-in-touch-buttons">
          <button className="get-in-touch-button">Email us</button>
          <button className="get-in-touch-button">call us</button>
        </div>
        <p className="footer-column-header">social</p>
        <div className="social-container">
          <a href="https://twitter.com/briankulp">
            <FaTwitter className="social-links" />
          </a>
          <a href="https://www.instagram.com/">
            <FaInstagram className="social-links" />
          </a>
        </div>
      </div>
      <div className="copyright">
        &copy; 2018-{new Date().getFullYear()} BKCO, LLC
      </div>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.div`
  font-size: 1.1rem;
  background-color: ${styles.colors.mainWhite};
  border-radius: 5px;
  height: 374px;
  padding: 37px 0;
  color: ${styles.colors.mainBlack};
  font-family: "Noto Serif SC", serif;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 2fr;
  column-gap: 1rem;
  a {
    text-decoration: none;
    display: block;
    margin-bottom: 19px;
    /* line-height: 1.5rem; */
    cursor: pointer;
    color: inherit;
    font-family: "Roboto", sans-serif;
    font-size: 15px;
    text-transform: uppercase;
  }
  .footer-column-header {
    height: 15px;
    opacity: 0.6;
    font-family: Roboto;
    font-size: 13px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #343731;
    margin-bottom: 12px;
    text-transform: uppercase;
  }
  .get-in-touch-buttons {
    display: flex;
    margin-bottom: 19px;
  }
  .get-in-touch-button {
    color: ${styles.colors.mainWhite};
    background-color: ${styles.colors.mainGrey};
    height: 44px;
    width: 148px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    &:hover {
      background: ${styles.colors.mainGrey};
      cursor: pointer;
    }
    margin-right: 0.5rem;
  }
  .copyright {
    height: 16px;
    font-family: Roboto;
    font-size: 14px;
    font-weight: bold;
    font-stretch: normal;
    line-height: normal;
    color: #a8a8a8;
  }
  .social-container {
    display: flex;
  }
  .social-links {
    margin-right: 11px;
    font-size: 1.5em;
  }
  @media (max-width: 768px) {
    a {
      /* font-size: 12px; */
      margin-bottom: 7px;
    }
    display: grid;
    grid-template-columns: 1fr;
  }
  .get-in-touch-buttons {
    display: block;
  }
  .get-in-touch-button {
    margin-bottom: 11px;
  }
  img {
    display: none;
  }

  .footer-column-header {
    margin-top: 12px;
  }
`

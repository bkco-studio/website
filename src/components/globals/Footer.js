import React from "react"
import { styles, Section } from "../../utils"
import styled from "styled-components"
import logo from "../../images/BKCO.svg"
import { Link } from "gatsby"

export default function Footer() {
  return (
    <Section>
      <FooterWrapper>
        <div>
          <img src={logo}></img>
        </div>
        <div>
          <Link to="/">Home</Link>
          <a href="#">What we do</a>
          <a href="#">Who we are</a>
          <a href="#">Case studies</a>
          <a href="#">What Our Clients Say</a>
          <a href="#">Let's chat</a>
        </div>
        <div>
          <a href="#">Careers</a>
          <a href="#">Privacy Policy</a>
        </div>
        <div>
          <a href="#">Newsletter Signup Form</a>
          <div>&copy; 2018-{new Date().getFullYear()} BKCO, LLC</div>
        </div>
      </FooterWrapper>
    </Section>
  )
}

const FooterWrapper = styled.div`
  font-size: 1.1rem;
  background-color: ${styles.colors.mainGrey};
  border-radius: 5px;
  height: 374px;
  padding: 37px 30px;
  color: ${styles.colors.mainWhite};
  font-family: "Noto Serif SC", serif;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 2fr;
  column-gap: 1rem;

  /* align-items: center; */
  /* justify-content: center; */
  a {
    text-decoration: none;
    display: block;
    margin-bottom: 18px;
    cursor: pointer;
    color: inherit;
  }
`

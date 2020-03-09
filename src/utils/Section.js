import styled from "styled-components"
import { styles } from "../utils"

export const Section = styled.section`
  padding: 2rem 0;
  padding-left: 1.5em;
  /* padding: 42px; */
  margin: 0 auto;
  background-color: ${styles.colors.mainWhite};
  max-width: 1000px;

  @media (max-width: 768px) {
    padding-left: 1em;
  }
`

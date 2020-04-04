import styled from "styled-components"
import { styles } from "../utils"

export const Section = styled.section`
  padding: 2rem 8em;

  margin: 0 auto;
  background-color: ${styles.colors.mainWhite};

  @media (max-width: 768px) {
    margin: 0 auto;
    padding-left: 1em;
  }
`

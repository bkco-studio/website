import styled from "styled-components"
import { styles } from "../utils"

export const Section = styled.section`
  margin: 0 auto;
  padding: 2em 1em;
  padding-right: 1em;
  padding-left: 1em;
  background-color: ${styles.colors.mainWhite};

  @media (min-width: 768px) {
    padding: 2rem 8em;
    margin: 0 auto;
  }
`

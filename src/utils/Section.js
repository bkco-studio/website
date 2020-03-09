import styled from "styled-components"
import { styles } from "../utils"

export const Section = styled.section`
  padding: 2rem 0;
  margin: 0 auto;
  margin-left: 122px;
  background-color: ${styles.colors.mainWhite};
  max-width: 1000px;

  @media (max-width: 768px) {
    margin: 0 auto;
    padding-left: 1em;
  }
`

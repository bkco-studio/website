import styled from "styled-components"
import { styles } from "../utils"

export const Button = styled.div`
  color: ${styles.colors.mainWhite};
  background-color: ${styles.colors.mainGrey};
  /* ${styles.border({ color: `${styles.colors.mainBlack}` })}; */
  height: 44px;
  width: 148px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  &:hover {
    background: ${styles.colors.mainGrey};
    /* color: ${styles.colors.mainYellow}; */
    cursor: pointer;
  }
`

// import styled from "styled-components"
// import { styles } from "../utils"

// export const Section = styled.section`
//   padding: 2rem 0;
//   padding: 42px;
//   margin: 0 auto;
//   background-color: ${styles.colors.mainWhite};
// `

import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Section, Heading, Text, styles } from "../utils"
import styled from "styled-components"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const CaseStudy = ({ data }) => {
  const { title, body, image, wysiwyg } = data.contentfulCaseStudy
  console.log("data.contentfulCaseStudy: ", wysiwyg)
  const renderWysiwyg = () => <>{documentToReactComponents(wysiwyg.json)}</>

  return (
    <Layout homepage={false}>
      <Section>
        <CaseStudyWrapper>
          <div>
            <img alt={title} src={image.file.url} />
            <h1>{title}</h1>
            <p className="body-text">{body.body}</p>
            <div>{renderWysiwyg()}</div>
          </div>
          <div className="call-to-action">
            <Heading heading="Like what you see? Let's work together." />
            <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " />
            <div className="submit-container">
              <input
                type="submit"
                value="get in touch"
                className="submit-button"
              />
            </div>
          </div>
        </CaseStudyWrapper>
      </Section>
    </Layout>
  )
}

const CaseStudyWrapper = styled.div`
  .body-text {
    margin-bottom: 10em;
  }
  .call-to-action {
    background-color: #f8f8f8;
    padding-top: 2em;
    padding-bottom: 2em;
    margin-top: 3em;
  }
  .submit-container {
    display: flex;
    /* justify-content: center; */
    align-items: center;
    width: 800px;
  }
  .submit-button {
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
    margin-right: 2rem;
  }
`

export default CaseStudy

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulCaseStudy(slug: { eq: $slug }) {
      title
      wysiwyg {
        id
        json
      }
      slug
      body {
        body
      }
      image {
        file {
          url
        }
      }
    }
  }
`

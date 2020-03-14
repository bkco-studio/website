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
      <CaseStudyWrapper>
        {/* <Section> */}
        <div className="work-container">
          <div className="image-container">
            <img className="work-image" alt={title} src={image.file.url} />
          </div>
          <div className="work-container-body">
            <h1 className="work-title">{title}</h1>
            <div className="work-body">{body.body}</div>
            <div className="wysiwyg">{renderWysiwyg()}</div>
          </div>
        </div>
        {/* </Section> */}

        <div className="call-to-action">
          <div className="call-to-action-content">
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
        </div>
      </CaseStudyWrapper>
    </Layout>
  )
}

const CaseStudyWrapper = styled.div`
  padding: 0 1.5em;
  /* display: grid; */
  /* place-items: center; */
  .work-container-body {
    /* background-color: grey; */
    margin-left: 120px;
  }
  .image-container {
    display: grid;
    place-items: center;
    background-color: grey;
  }
  .work-image {
    max-width: 100%;
    /* margin: 0 auto; */
    margin-left: 20px;
  }
  .work-title,
  .work-body {
    /* margin-left: 125px; */
    /* font-size: 20px; */
  }
  .work-title {
    margin-top: 2em;
  }

  .work-body {
    opacity: 0.8;
    font-size: 20px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 2;
    letter-spacing: normal;
    color: #343731;
  }

  .wysiwyg {
    /* margin-left: 125px; */
    margin-bottom: 5em;
  }
  .call-to-action {
    background-color: #f5f5f5;
    padding-top: 2em;
    padding-bottom: 2em;
    margin-top: 3em;
    /* width: 1200px; */
    margin: 0 auto;
  }
  .call-to-action-content {
    margin-left: 125px;
    width: 700px;
  }
  .submit-container {
    display: flex;
    /* justify-content: center; */
    align-items: center;
    max-width: 800px;
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

  @media (max-width: 768px) {
    .work-title,
    .work-body,
    .wysiwyg,
    .call-to-action-content {
      margin-left: 42px;
      margin: 1px solid blue;
    }
    .work-image {
      padding-right: 30px;
    }
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

import React, { Component } from "react"
import { Section } from "../../utils"
import styled from "styled-components"

export default class Testimonials extends Component {
  state = {
    testimonials: [
      {
        id: 1,
        image: "#",
        name: "Bill",
        title: "General Manager, Backsplash",
        text:
          "Best employee anyone has ever had. Best employee anyone has ever had. Best employee anyone has ever had. Best employee anyone has ever had. Best employee anyone has ever had. Best employee anyone has ever had. Best employee anyone has ever had. Best employee anyone has ever had. Best employee anyone has ever had. Best employee anyone has ever had. Best employee anyone has ever had. Best employee anyone has ever had. Best employee anyone has ever had. Best employee anyone has ever had. Best employee anyone has ever had. Best employee anyone has ever h",
      },
      {
        id: 2,
        image: "#",
        name: "Jill",
        title: "CFO",
        text:
          "Best employee anyone has ever had. Period. Best employee anyone has ever had. Period. Best employee anyone has ever had. Period. Best employee anyone has ever had. Period. Best employee anyone has ever had. Period.",
      },
      {
        id: 3,
        image: "#",
        name: "Sarah",
        title: "CEO",
        text:
          "Destined to take over the company next. Best employee anyone has ever had. Period. Best employee anyone has ever had. Period. Best employee anyone has ever had. Period. Best employee anyone has ever had. Period. ",
      },
    ],
  }
  render() {
    return (
      <Section>
        <TestimonialWrapper>
          {this.state.testimonials.map(testimonial => {
            return (
              <div className="testimonial-wrapper" key={testimonial.id}>
                <div>
                  {/* <Img fluid={GET_IMAGE.img1.childImageSharp.fluid} /> */}
                  <div className="testimony-avatar"></div>
                  <div className="testimony-name">{testimonial.name}</div>
                  <div className="testimony-title">{testimonial.title}</div>
                </div>
                <div className="testimonial-text">{testimonial.text}</div>
              </div>
            )
          })}
        </TestimonialWrapper>
      </Section>
    )
  }
}

const TestimonialWrapper = styled.div`
  .testimonial-wrapper {
    /* font-size: 72px; */
    display: grid;
    grid-template-columns: 100px 1fr;
    padding-bottom: 3rem;
    grid-column-gap: 250px;
  }
  .testimony-avatar {
    height: 62px;
    width: 62px;
    background-color: blue;
    border-radius: 50%;
    margin-bottom: 1.5rem;
    /* margin: 0 auto; */
  }
  .testimony-name {
    /* text-align: center; */
    margin-bottom: 0.75rem;
  }
  .testimony-title {
    /* text-align: center; */
  }
  .testimonial-text {
    /* font-size: 48px; */
    padding-left: 20px;
    border-left: 1px solid black;
    line-height: 1.67;
  }
`

export const GET_IMAGE = graphql`
  {
    img1: file(relativePath: { eq: "testimonyGallery/62X62-1.png" }) {
      childImageSharp {
        fluid(maxWidth: 62) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    img2: file(relativePath: { eq: "testimonyGallery/62X62-2.png" }) {
      childImageSharp {
        fluid(maxWidth: 62) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    img3: file(relativePath: { eq: "testimonyGallery/62X62-3.png" }) {
      childImageSharp {
        fluid(maxWidth: 62) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

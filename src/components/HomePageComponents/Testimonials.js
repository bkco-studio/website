import React, { Component } from "react"
import { Section, Heading, Text } from "../../utils"
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
          <div className="testimony-header">
            <Heading heading="Built on trust and communication." />
            <Text text="The partnerships with our clients are our number one priority. We value honest and open communication becauses it leads to a better end result. Here are some nice things some past clients have said about working with us:" />
          </div>
          {this.state.testimonials.map(testimonial => {
            return (
              <div className="testimonial-wrapper" key={testimonial.id}>
                <blockquote>
                  <p className="testimonial-text">
                    <div className="testimonial-quote">&ldquo;</div>
                    <div>{testimonial.text}</div>
                  </p>
                </blockquote>
                <div className="testimonial-detail">
                  {/* <Img fluid={GET_IMAGE.img1.childImageSharp.fluid} /> */}
                  <div className="testimony-avatar"></div>
                  <div>
                    <div className="testimony-name">{testimonial.name}</div>
                    <div className="testimony-title">{testimonial.title}</div>
                  </div>
                </div>
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
    /* display: grid; */
    /* grid-template-columns: 100px 1fr; */
    padding-bottom: 3rem;
    /* grid-column-gap: 250px; */
  }
  .testimony-avatar {
    height: 62px;
    width: 62px;
    background-color: blue;
    border-radius: 50%;
    margin-bottom: 1.5em;
    margin-right: 1.5em;
    /* margin: 0 auto; */
  }
  .testimony-name {
    margin-bottom: 0.75rem;
  }
  .testimony-title {
    /* text-align: center; */
  }
  .testimonial-text {
    line-height: 1.67;
    margin-bottom: 2em;
    /* display: grid; */
    position: relative;
  }

  .testimony-header {
    background-color: #f8f8f8;
    padding: 2em 0;
    margin-bottom: 1em;
  }
  .testimonial-detail {
    display: flex;
  }
  .testimonial-quote {
    font-size: 4em;
    position: absolute;
    left: -30px;
    top: -30px;
    width: 31px;
    height: 25px;
    opacity: 0.3;
    color: #343731;
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

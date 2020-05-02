import React, { Component } from "react"
import { Section, Heading, Text } from "../../utils"
import styled from "styled-components"
import Pic1 from "../../images/testimonyGallery/62X62-1.png"
import Pic2 from "../../images/testimonyGallery/62X62-2.png"
import Pic3 from "../../images/testimonyGallery/62X62-3.png"

export default class Testimonials extends Component {
  state = {
    testimonials: [
      {
        id: 1,
        image: "#",
        name: "Ryan",
        title: "General Manager, Backsplash",
        img: Pic1,
        text:
          "Brian is someone I would always want on my team. He and I have worked together at different times for a total of about 6 years. As his manager throughout most of that time, I couldn't have asked for a better team member. He has a remarkable work ethic, gets the job done, strives for excellence and yet is very personable and easy to work with. He excels at implementing beautiful user experiences and most recently worked as a manager on my team; his direct reports loved him! He will truly be an inspiration to any team he joins both in terms of the positive attitude he brings, and the level of technical proficiency he offers.",
      },
      {
        id: 2,
        image: "#",
        name: "Jill",
        title: "CFO",
        img: Pic2,
        text:
          "Best employee anyone has ever had. Period. Best employee anyone has ever had. Period. Best employee anyone has ever had. Period. Best employee anyone has ever had. Period. Best employee anyone has ever had. Period.",
      },
      {
        id: 3,
        image: "#",
        name: "Sarah",
        title: "CEO",
        img: Pic3,
        text:
          "Destined to take over the company next. Best employee anyone has ever had. Period. Best employee anyone has ever had. Period. Best employee anyone has ever had. Period. Best employee anyone has ever had. Period. ",
      },
    ],
  }
  render() {
    return (
      // <Section>
      <TestimonialWrapper>
        <div className="testimony-header">
          <div className="testimony-header-text">
            <Heading heading="Built on trust and communication." />
            <Text text="The partnerships with our clients are our number one priority. We value honest and open communication becauses it leads to a better end result. Here are some nice things some past clients have said about working with us:" />
          </div>
        </div>
        {/* <Section> */}
        {this.state.testimonials.map(testimonial => {
          return (
            <div className="testimonial-wrapper" key={testimonial.id}>
              <blockquote>
                <div className="testimonial-text">
                  <div className="testimonial-quote">&ldquo;</div>
                  <div>{testimonial.text}"</div>
                </div>
              </blockquote>
              <div className="testimonial-detail">
                {/* <Img fluid={GET_IMAGE.img1.childImageSharp.fluid} /> */}
                {/* <div className="testimony-avatar"></div> */}
                <img className="testimony-avatar" src={testimonial.img} />

                <div>
                  <div className="testimony-name">{testimonial.name}</div>
                  <div className="testimony-title">{testimonial.title}</div>
                </div>
              </div>
            </div>
          )
        })}
        {/* </Section> */}
      </TestimonialWrapper>
      // </Section>
    )
  }
}

const TestimonialWrapper = styled.div`
  margin-top: 34px;

  .testimonial-wrapper {
    /* margin-top: 50px; */
    max-width: 100%;
    width: 600px;
    padding-bottom: 0.5rem;
  }
  /* .testimonial-wrapper:first-of-type {
    margin-top: 50px;
  } */
  .testimony-avatar {
    height: 62px;
    width: 62px;
    border-radius: 50%;
    margin-bottom: 0.5em;
    margin-right: 1.5em;
  }
  .testimony-name,
  .testimony-title {
    text-transform: uppercase;
  }
  .testimony-name {
    margin-bottom: 0.2em;
    font-weight: bold;
  }
  .testimony-title {
    color: #343731;
    opacity: 0.6;
  }
  .testimonial-text {
    line-height: 1.67;
    margin-bottom: 1em;
    /* display: grid; */
    /* display: none; */
    margin-bottom: 34px;
    position: relative;
    font-family: "Noto Serif SC", serif;
  }

  .testimony-header {
    background-color: #f8f8f8;
    padding: 2em 24px;
    margin-bottom: 42px;
  }
  .testimonial-header-text {
    padding-left: 24px;
  }

  /* .testimony-header-text {
    padding: 2rem 0;
    margin: 0 auto;
    margin-left: 122px;

    max-width: 1000px;
  } */

  .testimonial-detail {
    display: flex;
    width: 100%;
    margin-bottom: 34px;
  }
  .testimonial-quote {
    display: hidden;
    font-size: 4em;
    position: absolute;
    left: -30px;
    top: -30px;
    opacity: 0.3;
    color: #343731;
    width: 100%;
    margin-bottom: 34px;
  }
  @media (min-width: 768px) {
    width: 100%;
    .testimonial-wrapper {
      width: 100%;
      /* margin-left: 24px; */
      display: hidden;
      padding-left: 15px;
      /* padding: 0 3em; */
      /* padding: 2em 0; */
      padding-left: 110px;
      margin-bottom: 3em;
    }
    .testimony-header {
      width: 100%;
      padding: 2em 0;
      padding-left: 110px;
      margin-bottom: 100px;
      /* padding-left: 24px;
      margin-left: 24px;
      padding: 2rem 0;
      margin: 0 auto;
      margin-left: 122px;

      max-width: 1000px; */
    }
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

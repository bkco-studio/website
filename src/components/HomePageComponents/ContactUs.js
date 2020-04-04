import React from "react"
import styled from "styled-components"
import { Heading, Text, styles, Section } from "../../utils"
// import Title from "../Title"
// import styles from "../../css/contact.module.css"
const ContactUs = () => {
  return (
    <FormWrapper>
      <div className="header-text">
        <Heading heading="Let's chat" />
        <Text text="Whether you’re in the early planning phase of a project or ready to get started right away, get in touch and we can help walk you through the process." />
        <Text text="Our engagements are billed on a per-project basis. Meaning when we fully understand the scope of your project, we will give you a flat cost for the entire project. This means no budget overruns or surprises through the duration of the project. Our minimum engagements start at $25,000." />
      </div>
      <form method="post" action="https://formspree.io/robgmerrill@gmail.com">
        <div className="formgrid">
          <div className="input-box">
            <label htmlFor="name">Your Name</label>
            <br />
            <input id="name" type="text" name="name" placeholder="john smith" />
          </div>
          <div className="input-box">
            <label htmlFor="company">Company</label>
            <br />
            <input
              id="company"
              type="text"
              name="company"
              placeholder="Acme, Inc."
            />
          </div>

          <div className="input-box">
            <label htmlFor="start">
              <span>Start Date:</span>
            </label>

            <br />
            <select
              id="start"
              name="project start date"
              required
              className="form-item__element--select"
            >
              <option disabled selected="selected" hidden value="">
                As soon as possible
              </option>
              <option value="As soon as possible">As soon as possible</option>
              <option value="30 days">Next 30 days</option>
              <option value="3 months">Next 3 months</option>
              <option value="Not sure">Not sure</option>
            </select>
          </div>

          <div className="input-box">
            <label htmlFor="budget">
              <span>Project Budget:</span>
            </label>
            <br />
            <select
              id="budget"
              name="project budget"
              className="form-item__element--select"
              required
            >
              <option disabled selected="selected" hidden value="">
                ~$50,000
              </option>
              <option value="50000">~$50,000</option>
              <option value="10000">~$10,000</option>
              <option value="25000">~$25,000</option>
              <option value="100000">~$100,000</option>
            </select>
          </div>
          <div className="input-box">
            <label htmlFor="tell-us">Tell us a bit about the project</label>
            <br />
            <textarea
              id="tell-us"
              type="text"
              name="more info"
              placeholder="Please provide a breif overview of the project..."
            ></textarea>
          </div>
          <br />
          <div className="submit-container">
            <input type="submit" value="submit" className="submit-button" />
            <p>We typically respond within 1-2 business days.</p>
          </div>
        </div>
      </form>
    </FormWrapper>
  )
}

const FormWrapper = styled.div`
  padding: 2em 8em;
  margin-bottom: 1em;
  /* display: grid; */
  background: #f8f8f8;
  .formgrid {
    display: grid;
    grid-template-columns: 380px 380px;
    grid-gap: 1em;
  }

  /* select option[data-default] {
    color: blue;
  } */
  select option[data-default] {
    font-size: 46px;
  }
  /* .placeholder {
    display: none;
  }
  [disabled] {
    color: gray;
  } */
  .form-item__element--select {
    appearance: none;
    :invalid {
      color: gray;
    }

    /* :[disabled]  {
      color: gray;
    } */
  }
  input,
  select,
  textarea {
    border: none;
    /* border-bottom: 1px solid black; */
    width: 300px;
    padding: 0.5rem;
  }
  .input-box {
    border-bottom: 1px solid rgba(52, 55, 49, 0.4);
    width: 380px;
    margin-bottom: 1rem;
  }
  input,
  textarea {
    background-color: #f8f8f8;
  }
  .submit-container {
    display: flex;
    /* justify-content: center; */
    align-items: center;
    max-width: 800px;
  }

  .submit-container p {
    width: 621px;
    height: 30px;
    font-family: NotoSerifSC;
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.14;
    letter-spacing: normal;
    color: #343731;
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
    display: hidden;
    padding: 2em 1em;
    max-width: 100%;
    .formgrid {
      display: grid;
      grid-template-columns: 380px;
      grid-column-gap: 1rem;
    }
  }
  @media (max-width: 768px) {
    /* display: hidden;
    max-width: 700px; */
  }
`

export default ContactUs

import React from "react"
import styled from "styled-components"
import { Heading, Text, styles } from "../../utils"
// import Title from "../Title"
// import styles from "../../css/contact.module.css"
const ContactUs = () => {
  return (
    <section>
      {/* <Title title="contact" subtitle="us" /> */}

      <FormWrapper>
        <Heading heading="Let's chat" />
        <Text text="Whether you’re in the early planning phase of a project or ready to get started right away, get in touch and we can help walk you through the process." />
        <Text text="Our engagements are billed on a per-project basis. Meaning when we fully understand the scope of your project, we will give you a flat cost for the entire project. This means no budget overruns or surprises through the duration of the project. Our minimum engagements start at $25,000." />
        <form>
          <div class="formgrid">
            <div className="input-box">
              <label for="name">
                Your Name
                <br />
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="john smith"
                />
              </label>
            </div>
            <div className="input-box">
              <label for="company">
                Company
                <br />
                <input
                  id="company"
                  type="text"
                  name="company"
                  placeholder="Acme, Inc."
                />
              </label>
            </div>

            <div className="input-box">
              <label for="start">
                <span>Start Date:</span>

                <br />
                <select
                  id="start"
                  name="project-start"
                  required
                  className="form-item__element--select"
                >
                  <option disabled selected="selected" hidden value="">
                    As soon as possible
                  </option>
                  <option value="As soon as possible">
                    As soon as possible
                  </option>
                  <option value="30 days">Next 30 days</option>
                  <option value="3 months">Next 3 months</option>
                  <option value="Not sure">Not sure</option>
                </select>
              </label>
            </div>

            <div className="input-box">
              <label for="budget">
                <span>Project Budget:</span>

                <br />
                <select
                  id="budget"
                  name="project-budget"
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
              </label>
            </div>
            <div className="input-box">
              <label for="tell-us">
                Tell us a bit about the project
                <br />
                <textarea
                  id="tell-us"
                  type="text"
                  name="company"
                  placeholder="Acme, Inc."
                ></textarea>
              </label>
            </div>
            <br />
            <div className="submit-container">
              <input type="submit" value="submit" className="submit-button" />
              <p>We typically respond within 1-2 business days.</p>
            </div>
          </div>
        </form>
      </FormWrapper>
    </section>
  )
}

const FormWrapper = styled.div`
  width: 900px;
  /* display: grid; */
  .formgrid {
    display: grid;
    grid-template-columns: 1fr;
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
  @media (min-width: 768px) {
    .formgrid {
      display: grid;
      grid-template-columns: 380px 380px;
      grid-column-gap: 1rem;
    }
  }
`

export default ContactUs

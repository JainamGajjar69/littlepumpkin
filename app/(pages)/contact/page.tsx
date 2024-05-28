"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import styled from "styled-components";

interface UserData {
  yourName: string;
  emailAddress: string;
  yourMessage: string;
}

const Section = styled.div`
  margin-top: 8vh;
  margin-bottom: 8vh;
  background-color: white; /* Light grey background */
  color: #333; /* Dark text color */
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 1280px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 3vw;
  padding-bottom: 0;
  padding-left: 3vw;
  perspective: 500px;
`;

const GridTwoThirdsCopy = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: 1fr 0.5fr;
  grid-template-rows: auto;
  grid-row-gap: 24px;
  grid-column-gap: 24px;
  justify-items: stretch;
  align-items: stretch;
`;

const Panel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border-radius: 12px;
  background-color: white; /* White background */
  direction: ltr;
  color: #333; /* Dark text color */
  padding: 20px; /* Add padding for better spacing */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 1); /* Light shadow for depth */
`;

const PanelBody = styled.div`
  position: relative;
  padding-left: 1100;
  z-index: 1;
  display: flex;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: 36px;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  flex: 1 0 auto;
  &.justify-content-center {
    justify-content: center;
  }
`;

const SpaceBottom = styled.div`
  margin-bottom: 24px;
`;

const FormWrapper = styled.div`
  margin: 0 0 15px;
  width: 100%;
  margin-bottom: 0;
`;

const Form = styled.form`
  display: grid;
  grid-auto-columns: 1fr;
  grid-column-gap: 12px;
  grid-row-gap: 12px;
  // grid-template-areas: ". . . . Area";
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
`;

const FormGridHalves = styled.div`
  display: grid;
  grid-column-gap: 12px;
  grid-row-gap: 12px;
  grid-template-rows: auto;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  height: 48px; /* Increased height for better readability */
  padding: 8px 12px;
  margin-bottom: 10px;
  font-size: 16px;
  line-height: 1.42857143;
  color: #333; /* Dark text color */
  background-color: #fff; /* White background */
  border: 1px solid #ccc; /* Light grey border */
  border-radius: 6px; /* Added border-radius for better aesthetics */
`;

const FormInput = styled(Input)`
  margin-bottom: 0;
  padding-right: 20px;
  padding-left: 20px;
  background-color: #fff; /* White background */
  transition: background-color 0.2s;
  color: #333; /* Dark text color */
  font-size: 16px;
  line-height: 24px;
  &.large {
    height: 60px;
    padding-right: 24px;
    padding-left: 24px;
    background-color: #fff; /* White background */
  }
`;

const Textarea = styled.textarea`
  overflow: auto;
  color: #333; /* Dark text color */
  font: inherit;
  margin: 0;
  width: 100%;
  height: auto;
  padding: 8px 12px;
  margin-bottom: 10px;
  font-size: 16px;
  line-height: 1.42857143;
  background-color: #fff; /* White background */
  border: 1px solid #ccc; /* Light grey border */
  height: 168px;
  border-radius: 6px; /* Added border-radius for better aesthetics */
`;

const Button = styled.button`
  display: inline-block;
  padding: 9px 15px;
  background-color: #007bff; /* Blue background */
  color: #fff; /* White text */
  border: 0;
  line-height: inherit;
  text-decoration: none;
  cursor: pointer;
  border-radius: 6px; /* Added border-radius for better aesthetics */
  display: flex;
  height: 60px;
  padding-right: 36px;
  padding-left: 36px;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0 0 20px 20px transparent;
  transition: box-shadow 0.2s;
  font-weight: 600;
  text-align: center;
`;

const FormSuccess = styled.div`
  display: none;
  padding: 20px;
  text-align: center;
  background-color: #ddd;
  &.success {
    display: block;
    padding: 12px;
    border-radius: 6px;
    background-color: #3ccf91; /* Green background for success */
    color: #fff; /* White text */
    text-align: center;
  }
`;

const FormError = styled.div`
  display: none;
  margin-top: 10px;
  padding: 10px;
  background-color: #ffdede;
  &.error {
    display: block;
    padding: 12px;
    border-radius: 6px;
    background-color: #ff715b; /* Red background for error */
    color: #fff; /* White text */
    text-align: center;
  }
`;

const CircleLarge = styled.div`
  display: flex;
  width: 96px;
  height: 96px;
  margin-bottom: 24px;
  justify-content: center;
  align-items: center;
  flex: 0 0 auto;
  border-radius: 48px;
  background-color: #007bff; /* Blue background */
  &.bg-primary-4 {
    background-color: #007bff; /* Blue background */
  }
`;

const EmailText = styled.div`
  font-family: Inter, sans-serif;
  font-size: 20px;
  padding-left: 20px;
  line-height: 28px;
  font-weight: 500;
  letter-spacing: 0;
`;

const Heading3 = styled.h3`
  margin-top: 0;
  margin-bottom: 24px;
  font-family: Inter, sans-serif;
  font-size: 28px;
  line-height: 36px;
  font-weight: 600;
  letter-spacing: -0.01em;
  display: inline;
  color: #333; /* Dark text color */
`;

const Heading4 = styled.h4`
  margin-top: 0;
  margin-bottom: 16px;
  font-family: Inter, sans-serif;
  font-size: 24px;
  line-height: 30px;
  font-weight: 600;
  letter-spacing: 0;
`;

const Contact: React.FC = () => {
  const [userData, setUserData] = useState<UserData>({
    yourName: "",
    emailAddress: "",
    yourMessage: "",
  });

  const postUserData = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const submitData = async (event: FormEvent) => {
    event.preventDefault();
    const { yourName, emailAddress, yourMessage } = userData;

    if (yourName && emailAddress && yourMessage) {
      const res = await fetch(
        "https://apexfinanceuserdata-default-rtdb.firebaseio.com/userDatabase.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            yourName,
            emailAddress,
            yourMessage,
          }),
        }
      );
      if (res.ok) {
        setUserData({ yourName: "", emailAddress: "", yourMessage: "" });
        alert("Data Stored");
      } else {
        alert("Failed to store data");
      }
    } else {
      alert("Fill the data properly");
    }
  };

  return (
    <Section>
      <div className="row">
        <Container>
          <GridTwoThirdsCopy>
            <Panel>
              <PanelBody>
                <div className="col-xs-pull-12 col-sm-pull-12 col-lg-12">
                  <SpaceBottom>
                    <Heading3>Contact us.</Heading3>
                  </SpaceBottom>
                  <FormWrapper>
                    <Form
                      id="wf-form-Contact-Form"
                      name="wf-form-Contact-Form"
                      data-name="Contact Form"
                      method="POST"
                      aria-label="Contact Form"
                    >
                      <FormGridHalves>
                        <FormInput
                          type="text"
                          name="yourName"
                          placeholder="Your Name"
                          id="contact-name"
                          required
                          value={userData.yourName}
                          onChange={postUserData}
                          className="large"
                        />
                        <FormInput
                          type="email"
                          name="emailAddress"
                          placeholder="Email Address"
                          id="contact-email"
                          required
                          value={userData.emailAddress}
                          onChange={postUserData}
                          className="large"
                        />
                      </FormGridHalves>
                      <Textarea
                        placeholder="Your Message"
                        maxLength={5000}
                        id="Message"
                        name="yourMessage"
                        value={userData.yourMessage}
                        onChange={postUserData}
                      ></Textarea>
                      <Button type="submit" onClick={submitData}>
                        Submit
                      </Button>
                    </Form>
                    <FormSuccess className="form-success">
                      Thank you! Your submission has been received!
                    </FormSuccess>
                    <FormError className="form-error">
                      Oops! Something went wrong while submitting the form.
                    </FormError>
                  </FormWrapper>
                </div>
              </PanelBody>
            </Panel>
            <Panel style={{ paddingRight: "100" }}>
              <div className="mail-box">
                <PanelBody className="justify-content-center">
                  <div
                    className="emote"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <CircleLarge className="bg-primary-4">
                      <img
                        src="https://uploads-ssl.webflow.com/5f2c87246b17fcf662282594/5f2c87244e4a4867e4b25ca6_icon-mail.svg"
                        width="48"
                        height="48"
                        alt=""
                      />
                    </CircleLarge>
                    <Heading4>Email</Heading4>
                    <EmailText>
                      <a href="mailto:hello@panels.io?subject=Website%20Enquiry">
                        lilpumpkin@gmail.com
                      </a>
                    </EmailText>
                  </div>
                </PanelBody>
              </div>
            </Panel>
          </GridTwoThirdsCopy>
        </Container>
      </div>
    </Section>
  );
};

export default Contact;

import { useState } from "react";
import styled from "styled-components";
import { SoftRedBtn } from "./Buttons";
import iconError from "../assets/icon-error.svg";

export const ErrorIcon = styled.img`
  position: absolute;
  top: 0.775rem;
  right: 1.05rem;
`;

export const ErrorMsg = styled.p`
  color: var(--White);
  font-size: 0.9rem;
  font-style: italic;
  margin: 0;
`;

export const ErrorMsgBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  background-color: var(--Soft-red);
  border-radius: 0.2rem;
  padding: 0.35rem;
`;

export const EmailInput = styled.input.attrs({ type: "email" })`
  color: var(--Dark-blue);
  width: 100%;
  border: none;
  border-radius: 0.5rem;
  padding: 1rem 3.25rem 1rem 1rem;

  &:focus {
    outline: 0.15rem solid var(--Dark-blue);
  }
`;

export const EmailInputBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex-grow: 1;
  gap: 0.5rem;
`;

export const ContactInputBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 70%;
  gap: 1rem;
`;

const ContactInput = ({ className }) => {
  const [input, setInput] = useState("");
  const [errorDisplay, setErrorDisplay] = useState(false);

  const handleSubmit = () => {
    var re = /\S+@\S+\.\S+/;
    if (re.test(input)) {
      setInput("");
      setErrorDisplay(false);
    } else {
      setErrorDisplay(true);
    }
  };

  return (
    <ContactInputBox className={className}>
      <EmailInputBox>
        <EmailInput value={input} onChange={(e) => setInput(e.target.value)} />
        {errorDisplay && (
          <>
            <ErrorMsgBox>
              <ErrorMsg>Whoops, make sure it's an email</ErrorMsg>
            </ErrorMsgBox>
            <ErrorIcon src={iconError} alt="error-icon" />
          </>
        )}
      </EmailInputBox>
      <SoftRedBtn onClick={handleSubmit}>Contact Us</SoftRedBtn>
    </ContactInputBox>
  );
};

export default ContactInput;

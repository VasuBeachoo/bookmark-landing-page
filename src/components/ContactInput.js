import styled from "styled-components";
import { SoftRedBtn } from "./Buttons";
import iconError from "../assets/icon-error.svg";

export const ErrorIcon = styled.img``;

export const ErrorMsg = styled.p`
  color: var(--White);
  font-style: italic;
  margin: 0;
`;

export const ErrorMsgBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`;

export const EmailInput = styled.input.attrs({ type: "email" })`
  width: 100%;
`;

export const EmailInputBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const ContactInputBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;

const ContactInput = ({ className }) => {
  return (
    <ContactInputBox className={className}>
      <EmailInputBox>
        <EmailInput />
        <ErrorMsgBox>
          <ErrorMsg>Whoops, make sure it's an email</ErrorMsg>
        </ErrorMsgBox>
        <ErrorIcon src={iconError} alt="error-icon" />
      </EmailInputBox>
      <SoftRedBtn>Contact Us</SoftRedBtn>
    </ContactInputBox>
  );
};

export default ContactInput;

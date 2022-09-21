import styled from "styled-components";
import Button from "./Buttons";
import iconError from "../assets/icon-error.svg";

export const ErrorIcon = styled.img``;

export const ErrorMsg = styled.p``;

export const ErrorMsgBox = styled.div``;

export const EmailInput = styled.input.attrs({ type: "email" })``;

export const EmailInputBox = styled.div``;

export const ContactInputBox = styled.div``;

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
      <Button>Contact Us</Button>
    </ContactInputBox>
  );
};

export default ContactInput;

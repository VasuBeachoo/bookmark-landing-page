import styled from "styled-components";
import {
  mixinSectionHeading,
  mixinSectionParagraph,
  mixinSection,
} from "../../GlobalStyle";
import Accordion from "../Accordion";
import Button from "../Buttons";

export const FaqItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const FaqParagraph = styled.p`
  ${mixinSectionParagraph}
`;

export const FaqHeading = styled.h2`
  ${mixinSectionHeading}
`;

export const FaqBox = styled.section`
  ${mixinSection}
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const Faq = ({ className }) => {
  const faqItems = [
    {
      heading: "What is Bookmark?",
      dropdown:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
    },
    {
      heading: "How can I request a new browser?",
      dropdown:
        "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
    },
    {
      heading: "Is there a mobile app?",
      dropdown:
        "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.",
    },
    {
      heading: "What about other Chromium browsers?",
      dropdown:
        "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.",
    },
  ];

  const displayFaqItems = () => {
    let key = 3000;

    return faqItems.map((item) => (
      <Accordion key={key++} heading={item.heading} dropdown={item.dropdown} />
    ));
  };

  return (
    <FaqBox className={className}>
      <FaqHeading>Frequently Asked Questions</FaqHeading>
      <FaqParagraph>
        Here are some of our FAQs. If you have any other questions you'd like
        answered please feel free to email us.
      </FaqParagraph>
      <FaqItems>{displayFaqItems()}</FaqItems>
      <Button>More Info</Button>
    </FaqBox>
  );
};

export default Faq;

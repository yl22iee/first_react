import { styled } from "styled-components";
import { baseLayoutSize } from "../../../GlobalStyled";

const Section = styled.section`
  height: 70vh;
  background-color: lightgray;
  padding: ${baseLayoutSize.padding};
  h3 {
    font-size: 80px;
    font-weight: 900;
  }
`;

export const Section_1 = () => {
  return (
    <Section>
      <h3>1st section</h3>
    </Section>
  );
};

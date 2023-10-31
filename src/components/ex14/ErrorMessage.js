import { styled } from "styled-components";

const Message = styled.span`
  color: crimson;
  font-weight: 700;
`;

export const ErrorMessage = (data) => {
  return (
    <span>
      <Message>{data}</Message>
    </span>
  );
};

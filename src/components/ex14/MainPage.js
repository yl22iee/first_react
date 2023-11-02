import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Wrap = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightgray;
`;

const ConWrap = styled.ul`
  background-color: lightgray;
`;

const Con = styled.li``;

export const MainPage = () => {
  return (
    <Wrap>
      <ConWrap>
        <Con></Con>
      </ConWrap>
    </Wrap>
  );
};

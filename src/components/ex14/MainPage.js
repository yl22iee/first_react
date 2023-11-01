import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Wrap = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MenuWrap = styled.ul`
  background-color: lightgray;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Con = styled.div``;

export const MainPage = () => {
  return (
    <Wrap>
      <MenuWrap>
        <Con>
          <Link to={"/login"}>Login</Link>
        </Con>
        <Con>
          <Link to={"/signup"}>SignUP</Link>
        </Con>
      </MenuWrap>
    </Wrap>
  );
};

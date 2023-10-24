import { useState } from "react";
import { styled } from "styled-components";

const Wrap = styled.div`
  max-width: 450px;
  width: 100%;
  height: 100vh;
  border: 1px solid #eee;
  margin: 0 auto;
`;

const MHeader = styled.header`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  border: 1px solid #eee;
  position: relative;
`;

const Logo = styled.div`
  font-size: 20px;
  font-weight: 900;
  text-transform: uppercase;
`;

const MenuBtn = styled.div`
  font-size: 20px;
  font-weight: 900;
  cursor: pointer;
  z-index: 10;
`;

const MenuWrap = styled.ul`
  position: absolute;
  top: 0;
  left: ${(props) => props.$HandleLeft};
  max-width: 450px;
  width: 100%;
  height: 100vh;
  background-color: lightblue;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: 0.5s;
  li {
    margin-bottom: 20px;
    font-size: 50px;
    font-weight: 900;
    text-transform: uppercase;
  }
`;

export const EventPr = () => {
  const [Left, setLeft] = useState(0);
  const [Num, setNum] = useState(0);

  const ClickBtn = () => {
    if (Num === 0) {
      setLeft("0%");
      setNum(Num + 1);
    } else if (Num === 1) {
      setLeft("100%");
      setNum(Num - 1);
    }
  };

  return (
    <div>
      <Wrap>
        <MHeader>
          <Logo>logo</Logo>
          <MenuBtn onClick={ClickBtn}>=</MenuBtn>

          <MenuWrap $HandleLeft={Left}>
            <li>menu</li>
            <li>menu</li>
            <li>menu</li>
            <li>menu</li>
          </MenuWrap>
        </MHeader>
      </Wrap>
    </div>
  );
};

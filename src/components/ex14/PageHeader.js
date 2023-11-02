import { Link } from "react-router-dom";
import { styled } from "styled-components";

const WhatHeader = styled.header`
  padding: 30px 20%;
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h3`
  font-size: 20px;
  font-weight: 700;
`;

const MenuWrap = styled.ul`
  display: flex;
  li {
    margin-right: 10%;
    font-size: 20px;
    font-weight: 700;
  }
`;

export const PageHeader = () => {
  return (
    <div>
      <WhatHeader>
        <Logo>
          <Link to={"/"}>Main_Page</Link>
        </Logo>

        <MenuWrap>
          <li>
            <Link to={"/login"}>Login</Link>
          </li>
          <li>
            <Link to={"/signup"}>SignUP</Link>
          </li>
        </MenuWrap>
      </WhatHeader>
    </div>
  );
};

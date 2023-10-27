import { Link } from "react-router-dom";
import { styled } from "styled-components";

const HELLOheader = styled.header`
  padding: 40px 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
`;

const MenuWrap = styled.ul`
  display: flex;
  li {
    margin-right: 50px;
    font-size: 20px;
    font-weight: 700;
  }
`;

const Logo = styled.div`
  font-size: 20px;
  font-weight: 700;
`;

export const HHeader = () => {
  return (
    <div>
      <HELLOheader>
        <Logo>
          <Link to={"/"}>Main Page</Link>
        </Logo>

        <MenuWrap>
          <li>
            <Link to={"sub01"}>Sub_Page01</Link>
          </li>
          <li>
            <Link to={"sub02"}>Sub_Page02</Link>
          </li>
        </MenuWrap>
      </HELLOheader>
    </div>
  );
};

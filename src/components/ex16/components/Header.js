import { Link } from "react-router-dom";
import { styled } from "styled-components";

const SHeader = styled.div`
  padding: 20px 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 26px;
  font-weight: 700;
`;

const Nav = styled.ul`
  display: flex;
  align-items: center;
  li {
    margin-left: 50px;
    font-size: 18px;
    font-weight: 500;
  }
`;

export const Header = () => {
  return (
    <SHeader>
      <Logo>
        <Link to={"/"}>LOGO</Link>
      </Logo>

      <Nav>
        <li>
          <Link to={"/signup"}>SignUP</Link>
        </li>

        <li>
          <Link to={"/signup"}>SignUP</Link>
        </li>
      </Nav>
    </SHeader>
  );
};

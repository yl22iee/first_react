import { faBars, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "styled-components";
import { colors } from "../../../GlobalStyled";

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MoreBtn = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.darkGray};
  border-radius: 50%;
`;

const MenuBtn = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;

export const MenuHeader = () => {
  return (
    <Header>
      <MoreBtn>
        <FontAwesomeIcon icon={faCaretDown} />
      </MoreBtn>
      <MenuBtn>
        <FontAwesomeIcon icon={faBars} />
      </MenuBtn>
    </Header>
  );
};

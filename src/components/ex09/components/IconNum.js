import { faDocker } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
  faBell,
} from "@fortawesome/free-regular-svg-icons";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "styled-components";

const MenuWrap = styled.div`
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  border: 1px solid #eee;
  border-radius: 20px;
  background-color: lightgray;
`;

export const IconNum = () => {
  return (
    <div>
      <MenuWrap>
        <FontAwesomeIcon icon={faDocker} style={{ fontSize: "30px" }} />
        <FontAwesomeIcon
          icon={faArrowAltCircleLeft}
          style={{ fontSize: "30px" }}
        />
        <FontAwesomeIcon icon={faMusic} style={{ fontSize: "30px" }} />
        <FontAwesomeIcon
          icon={faArrowAltCircleRight}
          style={{ fontSize: "30px" }}
        />
        <FontAwesomeIcon icon={faBell} style={{ fontSize: "30px" }} />
      </MenuWrap>
    </div>
  );
};

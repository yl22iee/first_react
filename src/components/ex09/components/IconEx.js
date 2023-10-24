import { faCircle } from "@fortawesome/free-regular-svg-icons";
import {
  faBars,
  faCircleArrowDown,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "styled-components";

const FontHeader = styled.header`
  padding: 30px;
  display: flex;
  justify-content: space-between;
`;

export const IconEx = () => {
  return (
    <div>
      <FontHeader>
        <FontAwesomeIcon
          icon={faCircleArrowDown}
          style={{ fontSize: "30px" }}
        />
        <FontAwesomeIcon icon={faBars} style={{ fontSize: "30px" }} />
      </FontHeader>
    </div>
  );
};

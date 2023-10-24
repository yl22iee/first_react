import { faCircle } from "@fortawesome/free-regular-svg-icons";
import {
  faBars,
  faCircleArrowDown,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const IconEx = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faCircleArrowDown} style={{ fontSize: "20px" }} />
      <FontAwesomeIcon icon={faBars} style={{ fontSize: "20px" }} />
    </div>
  );
};

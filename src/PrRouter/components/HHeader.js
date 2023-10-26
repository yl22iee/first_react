import { Link } from "react-router-dom";

export const HHeader = () => {
  return (
    <div>
      <header>
        <Link to={"/"}>Main Page</Link>

        <ul>
          <li>
            <Link to={"sub01"}>Sub_Page01</Link>
          </li>
          <li>
            <Link to={"sub02"}>Sub_Page02</Link>
          </li>
        </ul>
      </header>
    </div>
  );
};

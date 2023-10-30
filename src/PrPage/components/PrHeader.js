import { Link } from "react-router-dom";

export const PrHeader = () => {
  return (
    <div>
      <HelloHeader>
        <Logo>
          <Link to={"/"}>MainPage</Link>
        </Logo>
      </HelloHeader>
    </div>
  );
};

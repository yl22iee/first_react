import { Helmet } from "react-helmet";
export const PageTitle = ({ name }) => {
  return (
    <div>
      <Helmet>
        <title>{name}</title>
        {/* title 이름 설정 */}
      </Helmet>
    </div>
  );
};

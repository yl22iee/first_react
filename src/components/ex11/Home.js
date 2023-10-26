import { PageTitle } from "./components/PageTitle";

export const Home = () => {
  return (
    <div>
      <PageTitle name="Home" />
      <hr />
      <h3>This is Main Page Home!!</h3>
    </div>
  );
};

// *router
// => 경로설정
// ex)
// <BrowserRouter>
// <Routes>
//     <Route path="경로1" element={컴포넌트} /> (각각 라우터 설정)
//     <Route path="경로2" element={컴포넌트} />
//     <Route path="/*" element={404에러 페이지 컴포넌트} />
// </Routes>
// </BrowserRouter>

// *링크를 사용할땐 a태그가 아닌 Link컴포넌트를 사용함
//ex)
//  <Link to={"sub02"}>Sub02</Link>

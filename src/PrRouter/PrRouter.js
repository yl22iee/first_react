import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainP } from "./MainP";
import { SubP01 } from "./SubP01";
import { SubP02 } from "./SubP02";
import { PrError } from "./PrError";
import { HHeader } from "./components/HHeader";

export const PrRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <HHeader />
        <Routes>
          <Route path="/" Component={MainP}></Route>
          <Route path="Sub01" Component={SubP01}></Route>
          <Route path="Sub02" Component={SubP02}></Route>
          <Route path="/*" Component={PrError}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

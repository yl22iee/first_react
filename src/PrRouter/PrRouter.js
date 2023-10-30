import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainP } from "./MainP";
import { Sub } from "./Sub";
import { PrError } from "./PrError";
import { HHeader } from "./components/HHeader";

export const PrRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <HHeader />
        <Routes>
          <Route path="/" Component={MainP}></Route>
          <Route path="sub/:id" Component={Sub}></Route>
          <Route path="/*" Component={PrError}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

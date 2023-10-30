import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PrHeader } from "./components/PrHeader";
import { PrMain } from "./PrMain";
import { PrSub } from "./PrSub";
import { PrError } from "./PrError";

export const PrcRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <PrHeader />
        <Routes>
          <Route path="/" element={PrMain}></Route>
          <Route path="/sub" element={PrSub}></Route>
          <Route path="/*" element={PrError}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

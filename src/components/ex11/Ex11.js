import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Sub01 } from "./Sub01";
import { Sub02 } from "./Sub02";
import { PageError } from "./PageError";
import { WHeader } from "./components/WHeader";

export const Ex11 = () => {
  return (
    <BrowserRouter>
      <WHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sub01" element={<Sub01 />} />
        <Route path="sub02" element={<Sub02 />} />
        <Route path="/*" element={<PageError />} />
      </Routes>
    </BrowserRouter>
  );
};

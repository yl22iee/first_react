import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "./MainPage";
import { SignUP } from "./SignUP";
import { Login } from "./pages/Login";

export const Routers = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={MainPage}></Route>
          <Route path="/login" element={Login}></Route>
          <Route path="/signup" element={SignUP}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

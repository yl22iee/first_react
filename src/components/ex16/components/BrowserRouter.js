import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Signup } from "../pages/Signup";
import { PageNot } from "../pages/PageNot";
import { Header } from "./Header";

export const BrouserRouter = () => {
  return (
    <BrouserRouter>
      <Header />
      <Routes>
        <Route path="/" element={Home}></Route>
        <Route path="/login" element={Login}></Route>
        <Route path="signup" element={Signup}></Route>
        <Route path="/*" element={PageNot}></Route>
      </Routes>
    </BrouserRouter>
  );
};

import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const baseLayoutSize = {
  padding: "150px 15%",
};

export const fontSize = {
  title: "80px",
  menu: "18px",
  desc: "16px",
};

export const GlobalStyled = createGlobalStyle`
    ${reset}
    *{
        box-sizing: border-box;
    }
    body{
        font-family: 'Noto Sans KR', sans-serif;
    }

    a{
      text-decoration:none;
      color:#1d1d1d;
    }
`;

export const colors = {
  darkGray: "#1d1d1d",
};
// 전체 영역에서 사용할 수 있는 스타일 처리법

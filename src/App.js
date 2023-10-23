// import { IntroEx } from "./components/ex04/IntroEx";
// import MapFnEx from "./components/ex04/MapFnEx";
// import { ViewSiteEx } from "./components/ex04/ViewSiteEx";

import { PraEx } from "./PracticeEX/components/PraEx";

// import { MainP } from "./PracticeEX/components/MainP";
// import { Ex07 } from "./components/ex07/Ex07";

// import { Ex06 } from "./components/ex06/Ex06";

// import { Props } from "./PracticeEX/Props";

// import { Ex05 } from "./components/ex05/Ex05";

const App = () => {
  return (
    <div>
      {/* <PropsEx /> */}
      {/* 3일차 */}

      {/* <MapFnEx /> */}
      {/* <ViewSiteEx /> */}
      {/* <IntroEx /> */}
      {/* <Props /> */}

      {/* 4일차 -> Html, css 속성을 추가하는 중*/}
      {/* <Ex05 /> */}
      {/* <Props /> */}

      {/* 5일차 */}
      {/* <Ex06 /> */}
      {/* <MainP /> */}

      {/* 6일차 */}
      {/* <Ex07 /> */}
      <PraEx />
    </div>
  );
};

export default App;

// 기본적으로 아무 함수를 하나 작성해줘야 오류를 일으키지 않는다 => const App 함수를 작성한뒤 exportf를 해주었다.
//component를 작성할때는 App.js의 파일명 App을 따라가되 대문자이면 대문자를 따라간다.

// *jsx 문법 규칙
// => 태그가 2개 이상일땐 반드시 부모 태그로 닫아줘야 됨(형제 태그 단독으로 사용불가)
// => component 제작시 파일명과 함수명은 동일해야되며, 첫 글자는 대문자로 시작할 것
// => 컴포넌트 함수를 제작후 내보내기 export를 해줘야됨

// *내보내기 ,불러오기
// - import 불러오기
// - export 내보내기
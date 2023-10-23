import { styled } from "styled-components";

const Box = styled.div`
  width: 300px;
  height: 300px;
  background-color: ${(props) => props.$bg_color};
  // 1번 Box에는 teal의 값이 들어가고 2번 Box에는 salmon으로 변경되었음
  // 모든 Box Components에게 속성값을 따로 적어주는 것보다 더욱 효율적이다.
`;

const Box_2 = styled.div`
  width: 300px;
  height: 300px;
  background-color: slateblue;
  border: 2px solid black;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledEx = () => {
  return (
    <div>
      <Box $bg_color="salmon">what?</Box>
      <Box $bg_color="royalblue">
        <h2>hello</h2>
      </Box>
      <Box_2></Box_2>
    </div>
  );
};

// styled-component 설치과정
// https://styled-components.com/docs/basics#installation

// # with npm
// npm install styled-components <= command + j로 Terminal 연뒤 + 눌러서 zsh에서 입력해주었음
// 설치확인은 pakage.jason파일에서 확인할 수 있다.

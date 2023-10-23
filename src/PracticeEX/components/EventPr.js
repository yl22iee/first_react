import { useState } from "react";
import { styled } from "styled-components";

const Box = styled.div`
  width: 300px;
  height: 300px;
  background-color: ${(props) => props.$bg};
  border: 3px solid black;
`;

const ColorBox = styled.div`
  width: 300px;
  height: 300px;
  background-color: ${(props) => props.$hello};
`;

export const EventPr = () => {
  const [bgColor, setColor] = useState("royalblue");
  const [Num, setNum] = useState(0);
  const ChColor = "salmon";

  const ClickBox = () => {
    if (Num === 0) {
      setColor("salmon");
      setNum(Num + 1);
    } else if (Num === 1) {
      setColor("royalblue");
      setNum(Num - 1);
    }
  };

  return (
    <div>
      <Box $bg={bgColor} onClick={ClickBox}></Box>
      <ColorBox $hello={ChColor}></ColorBox>
    </div>
  );
};

import { styled } from "styled-components";
import { IconEx } from "./IconEx";
import { IconNum } from "./IconNum";

const Wrap = styled.section`
  max-width: 450px;
  width: 100%;
  height: 100vh;
  border: 1px solid #eee;
  margin: 0 auto;
  border-radius: 10px;
  padding: 20px 20px;
`;

const WHeader = styled.header`
  /* display: flex; */
  /* justify-content: space-between; */
  /* border: 1px solid #eee; */
  /* padding: 30px; */
  cursor: pointer;
`;

const MenuBtn = styled.div``;

const WSection = styled.div`
  height: 660px;
`;

const Bg = styled.div`
  height: 500px;
  border: 1px solid #eee;
  border-radius: 20px;
  margin: 20px;
  background-color: #dbdbdb;
  background-image: url(${(props) => props.$Link});
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Arrow = styled.div`
  cursor: pointer;
`;

export const MusicApp = () => {
  return (
    <div>
      <Wrap>
        <WHeader>
          <MenuBtn>
            <IconEx />
          </MenuBtn>
        </WHeader>

        <WSection>
          <Bg $Link="https://img.freepik.com/premium-photo/abstract-black-textured-background-with-scratches_130265-12474.jpg"></Bg>
          <Title>
            <div>Blue</div>
            <div>hello</div>
          </Title>

          <Arrow>
            <IconNum />
          </Arrow>
        </WSection>
      </Wrap>
    </div>
  );
};

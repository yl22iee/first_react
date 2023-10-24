import { styled } from "styled-components";
import { IconEx } from "./IconEx";

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
  display: flex;
  justify-content: space-between;
  /* border: 1px solid #eee; */
  padding: 30px;
`;

const MenuBtn = styled.div``;

const WSection = styled.div`
  height: 660px;
  /* border: 1px solid #eee; */
`;

const Bg = styled.div`
  height: 500px;
  border: 1px solid #eee;
  border-radius: 20px;
  margin: 20px;
  background-color: #dbdbdb;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Arrow = styled.div``;

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
          <Bg></Bg>
          <Title>
            <div>Blue</div>
            <div>hello</div>
          </Title>
          <Arrow></Arrow>
        </WSection>
      </Wrap>
    </div>
  );
};

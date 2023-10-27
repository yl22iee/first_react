import { styled } from "styled-components";

const Wrap = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  /* background-color: lightgray; */
`;

const TitleWrap = styled.div`
  width: 40%;
  height: 100vh;
  background-color: lightblue;
  display: flex;
`;

const HelloWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const BgImg = styled.div`
  width: 300px;
  height: 100vh;
  background-color: salmon;
`;

const Title = styled.div`
  margin: 0 auto;
`;

const Document = styled.div``;

export const SubP01 = () => {
  return (
    <div>
      <hr />
      <Wrap>
        <TitleWrap>
          <BgImg>BG</BgImg>

          <HelloWrap>
            <Title>This is Title</Title>
            <Document>
              <h3>This is about Apple</h3>
              <p>Today is sunnyDay!</p>
            </Document>
          </HelloWrap>
        </TitleWrap>
      </Wrap>
    </div>
  );
};

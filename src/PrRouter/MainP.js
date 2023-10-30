import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { data } from "./Api";

const Wrap = styled.div`
  height: 100vh;
`;

const MainTitle = styled.div`
  height: 50vh;
  display: flex;
  justify-content: center;
  background-color: lightgray;
  align-items: center;
  flex-direction: column;
  h2 {
    font-size: 80px;
    font-weight: 900;
  }
  p {
    font-size: 18px;
    font-weight: 600;
    color: #eee;
    margin-top: 30px;
  }
`;

const BoxWrap = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
`;

const Box = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 700px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
`;

const Con = styled.ul`
  width: 40%;
  height: 400px;
  background: url(${(props) => props.$url});
  box-shadow: 20px 20px 15px rgba(0, 0, 0, 0.3);
  transition: 0.5s;
  &:hover {
    transform: translate(20px, 20px);
    box-shadow: none;
  }
  a {
    /* Link태그 = a태그 inline 속성이라 block요소로 바꿔준뒤 크기값을 주었다 */
    width: 100%;
    height: 600px;
    display: block;
  }
`;

export const MainP = () => {
  return (
    <div>
      <Wrap>
        <MainTitle>
          <h2>REACT</h2>
          <p>background</p>
        </MainTitle>

        <BoxWrap>
          <Box>
            <Con $url={data[0].img}>
              <Link to={"/Sub/0"}></Link>
            </Con>
            <Con $url={data[1].img}>
              <Link to={"/Sub/1"}></Link>
            </Con>
          </Box>
        </BoxWrap>
      </Wrap>
    </div>
  );
};

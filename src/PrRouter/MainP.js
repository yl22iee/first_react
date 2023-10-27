import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Wrap = styled.div`
  height: 100vh;
`;

const MainTitle = styled.div`
  height: 50vh;
  display: flex;
  justify-content: center;
  background-image: url(https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTZ8fGJhY2tncm91bmQlMjBpbWFnZXxlbnwwfHx8fDE2OTgxNjg2MzZ8MA&ixlib=rb-4.0.3);
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

const Boxone = styled.div`
  width: 450px;
  height: 400px;
  background-color: lightblue;
  background-image: url(https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?cs=srgb&dl=pexels-guillaume-meurice-1591447.jpg&fm=jpg);
  box-shadow: 20px 20px 25px rgba(0, 0, 0, 0.3);
  transition: 0.5s;
  &:hover {
    transform: translate(20px, 20px);
    box-shadow: none;
  }
`;

const Boxtwo = styled.div`
  width: 450px;
  height: 400px;
  background-color: lightblue;
  background-image: url(https://images.unsplash.com/photo-1631631480669-535cc43f2327?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFja2dyb3VuZCUyMGltYWdlfGVufDB8fDB8fHww);
  box-shadow: 20px 20px 25px rgba(0, 0, 0, 0.3);
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
      <hr />
      <Wrap>
        <MainTitle>
          <h2>REACT</h2>
          <p>background</p>
        </MainTitle>

        <BoxWrap>
          <Box>
            <Boxone>
              <Link to={"/sub01"}></Link>
            </Boxone>
            <Boxtwo>
              <Link to={"/sub02"}></Link>
            </Boxtwo>
          </Box>
        </BoxWrap>
      </Wrap>
    </div>
  );
};

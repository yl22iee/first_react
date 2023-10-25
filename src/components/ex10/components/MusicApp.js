import {
  faBackward,
  faBars,
  faCaretDown,
  faForward,
  faForwardStep,
  faPause,
  faRepeat,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "styled-components";
import { colors } from "../../../GlobalStyled";
import { MenuHeader } from "./MenuHeader";
import { useState } from "react";

const Wrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: #555;
  color: white;
`;

const Container = styled.div`
  max-width: 400px;
  width: 100%;
  background-color: ${colors.darkGray};
  padding: 50px 20px;
  position: relative;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MoreBtn = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.darkGray};
  border-radius: 50%;
`;

const Cover = styled.div`
  margin: 50px auto;
  max-width: 300px;
  width: 100%;
`;

const Bg = styled.div`
  height: 320px;
  background-color: lightgray;
  border-radius: 20px;
`;

const TitleWrap = styled.div`
  text-align: center;
  margin-top: 30px;
  h3 {
    font-size: 22px;
    font-weight: 700;
  }
  p {
    font-size: 14px;
    color: #808080;
    margin-top: 10px;
  }
`;

const PlayTime = styled.div``;

const Progress = styled.div`
  height: 6px;
  background-color: #555;
  border-radius: 3px;
  overflow: hidden;
`;

const Bar = styled.div`
  width: 10%;
  height: 100%;
  background-color: #eee;
`;

const TimeWrap = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #808080;
  margin-top: 5px;
`;

const BtnWrap = styled.ul`
  display: flex;
  justify-content: space-between;
  margin: 50px 0;
  font-size: 18px;
  li:nth-child(3) {
    width: 60px;
    height: 60px;
    background-color: lightblue;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    color: #333;
  }
`;

const MenuWrap = styled.ul`
  position: absolute;
  top: 0;
  /* left: ${(props) => props.$isActive} */
  width: 100%;
  height: 100%;
  background-color: lightgray;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30% 0%;
  flex-direction: column;
  font-weight: 900;
  font-size: 30px;
  color: white;
  text-transform: uppercase;
`;

const UserCon = styled.div`
  padding: 20px;
  border-radius: 50px;
  background-color: #f1f1f1;
  color: ${colors.darkGray};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const User = styled.div`
  display: flex;
  align-items: center;
`;

const Avartar = styled.div`
  width: 40px;
  height: 40px;
  background-color: lightgray;
  border-radius: 50%;
  margin-right: 10px;
`;

const NextBtn = styled.div``;

const faShuffle = styled.div``;

const MenuBtn = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  z-index: 10;
`;

export const MusicApp = () => {
  const [leftResult, setLeftResult] = useState("100%");

  const onClickMenu = () => {
    leftResult === "100%" ? setLeftResult(0) : setLeftResult("100%");
   }
  };

  return (
    <div>
      <Wrap>
        <Container>
          <Header>
            <MoreBtn onClick={onClickMenu}>
              <FontAwesomeIcon icon={faCaretDown} />
            </MoreBtn>
            <MenuBtn>
              <FontAwesomeIcon icon={faBars} />
            </MenuBtn>

            <MenuWrap $isActive={setLeftResult}>
              <li>menu</li>
              <li>menu</li>
              <li>menu</li>
              <li>menu</li>
            </MenuWrap>
          </Header>

          <Cover>
            <Bg />
            <TitleWrap>
              <h3>Blue Bird</h3>
              <p>Pick Dreams</p>
            </TitleWrap>
          </Cover>

          <PlayTime>
            <Progress>
              <Bar />
            </Progress>

            <TimeWrap>
              <p>00:00</p>
              <p>03:40</p>
            </TimeWrap>
          </PlayTime>

          <BtnWrap>
            <li>
              <FontAwesomeIcon icon={faShuffle} />
            </li>
            <li>
              <FontAwesomeIcon icon={faBackward} />
            </li>
            <li>
              <FontAwesomeIcon icon={faPause} />
            </li>
            <li>
              <FontAwesomeIcon icon={faForward} />
            </li>
            <li>
              <FontAwesomeIcon icon={faRepeat} />
            </li>
          </BtnWrap>

          <UserCon>
            <User>
              <Avartar />
              <h3>Pncoding</h3>
            </User>

            <NextBtn>
              <FontAwesomeIcon icon={faForwardStep} />
            </NextBtn>
          </UserCon>
        </Container>
      </Wrap>
    </div>
  );
};

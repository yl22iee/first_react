import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import { data } from "./Api";

const Section = styled.section`
  padding: 150px 20%;
  display: flex;
  justify-content: space-between;
`;

const Bg = styled.div`
  width: 40%;
  height: 600px;
  /* background-color: lightgray; */
  background: url(${(props) => props.$url});
`;

const Title = styled.div`
  width: 48%;
  padding-top: 50px;
  h3 {
    font-size: 50px;
    font-weight: 700;
    margin-bottom: 20px;
  }
  p {
    color: #808080;
    font-size: 18px;
  }
`;

export const Sub = () => {
  const { id } = useParams();
  console.log(data[id].title);

  return (
    <Section>
      <Bg $url={data[id].img} />
      <Title>
        <h3>{data[id].title}</h3>
        <p>{data[id].dec} 문단</p>
      </Title>
    </Section>
  );
};

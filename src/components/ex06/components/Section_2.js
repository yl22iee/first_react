import { styled } from "styled-components";
import { baseLayoutSize, fontSize } from "../../../GlobalStyled";

const Section = styled.section`
  padding: ${baseLayoutSize.padding};
  h3 {
    font-size: ${fontSize.title};
  }
`;

const ConWrap = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
`;

const Con = styled.div`
  width: 30%;
  height: 400px;
  background-image: url(${(props) => props.$bgImg};) no-repeat center / cover;

  transition: 0.5s;
  &:hover {
    opacity: 0.5;
  }
`;

export const Section_2 = () => {
  return (
    <Section>
      <h3>2st Section</h3>
      <ConWrap>
        <Con
          $bgImg={
            "https://t3.ftcdn.net/jpg/00/86/56/12/360_F_86561234_8HJdzg2iBlPap18K38mbyetKfdw1oNrm.jpg"
          }
        ></Con>
        <Con
          $bgImg={
            "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v1016-c-08_1-ksh6mza3.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=f584d8501c27c5f649bc2cfce50705c0"
          }
        ></Con>
        <Con
          $bgImg={
            "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v546batch3-mynt-34-badgewatercolor_1.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=89288ef4b47127f7f34a5998b50e4470"
          }
        ></Con>
      </ConWrap>
    </Section>
  );
};

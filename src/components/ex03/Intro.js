export const Intro = (props) => {
  //   const name = props.name;
  //   const age = props.age;

  const { name, age, job } = props;
  // 갯체

  return (
    <div>
      <h2>자기소개</h2>
      <h3>이름 : {name}</h3>
      <h3>나이 : {age}</h3>
      <h3>직업 : {job}</h3>
      <hr></hr>
    </div>
  );
};

// *jsx문법 내부에서 변수를 사용할땐 중괗로를 사용할 것

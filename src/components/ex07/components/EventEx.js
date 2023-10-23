import { useState } from "react";

export const EventEx = () => {
  const [num, setNum] = useState(0);
  //   const [변수명, set+변수명] = useState('hello') => let 변수명 = 'hello';

  const plusHandler = () => {
    setNum(num + 1); // setNum은 변경하고 싶은 num에 대해 정의
  };

  const minusHandler = () => setNum(num - 1);

  //   let num = 0;

  //   const plusHandler = () => {
  //     console.log(num);
  //     num++;
  //   };

  return (
    <div>
      <h3>클릭할 때 숫자 증감</h3>
      <h3>{num}</h3>

      {/* <button onClick={plusHandler}>+</button>
      <button>-</button> */}

      <button onClick={() => setNum(num + 1)}>+</button>
      <button onClick={minusHandler}>-</button>
    </div>
  );
};

// *uesState()
// => react hool 종류중 하나로 변수를 정의하고 값ㅎㅇ르 변경할때 사용한다.
// => 배열 비구조화 할당을 이용하며 첫번째 값은 변수 두번째값은 변수를 변경할 수 있는 함수로 정의

// ex)
// const [변수명, set변수명] = useState(변수값)

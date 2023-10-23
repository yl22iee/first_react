export const ComEx01 = () => {
  return (
    <div>
      <h3>component 01</h3>
    </div>
  );
};

export const ComEx02 = () => {
  return (
    <div>
      <h3>component 02</h3>
    </div>
  );
};

// export default ComEx01;
// export default ComEx02;
// - 기본 내보내기는 반드시 파일당 하나만 가능 함

// *export를 함수 앞에 붙여서 내보낼 수 있다. => export const ComEx02 () => {}
//  단 import 할땐 {}를 이용하여 다중 컴포넌트를 불러 올 수 있다.

const nums = [
  {
    naver: "https://www.naver.com",
  },
  {
    kakao: "https://www.kakao.com",
  },
  {
    google: "https://www.google.com",
  },
];

const MapFnEx = () => {
  //   nums.map((n) => console.log(n * 2 + "fuck"));
  // *map
  // - 배열을 기준으로 배열의 요소값을 새로운 값으로 반환하는 역할을 함
  return (
    <div>
      {nums.map((hello) => (
        // <i key={hello}>{hello}</i>
        // 반드시 유니크한(고유값)을 넣어줘야 한다.
        <>
          <h2>즐겨찾기</h2>
          <h3>
            <a href="https://www.naver.com">{nums[0].naver}</a>
          </h3>
          <h3>
            <a href="https://www.kakao.com">{nums[1].kakao}</a>
          </h3>
          <hr />
        </>
      ))}
    </div>
  );
};

export default MapFnEx;

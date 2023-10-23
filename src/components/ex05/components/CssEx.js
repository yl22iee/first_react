// import "../Css/style.css";

export const CssEx = () => {
  return (
    <div>
      <div
        className="box"
        style={{ width: "300px", height: "300px", backgroundColor: "teal" }}
      >
        1번 박스
        {/* 내부에서 호출 */}
      </div>

      <div className="box_2">2번박스</div>
      {/* 외부에서 호출 */}
    </div>
  );
};

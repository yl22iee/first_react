export const FoodMenu = ({ menus }) => {
  return (
    <>
      <div>
        <h2>{menus[0].week}메뉴</h2>
        <h3>아침 : {menus[0].breakfast}</h3>
        <h3>점심 : {menus[0].lunch}</h3>
        <h3>저녁 : {menus[0].dinner}</h3>
      </div>

      <div>
        <h2>{menus[1].week}메뉴</h2>
        <h3>아침 : {menus[1].breakfast}</h3>
        <h3>점심 : {menus[1].lunch}</h3>
        <h3>저녁 : {menus[1].dinner}</h3>
      </div>

      <div>
        <h2>{menus[2].week}메뉴</h2>
        <h3>아침 : {menus[2].breakfast}</h3>
        <h3>점심 : {menus[2].lunch}</h3>
        <h3>저녁 : {menus[2].dinner}</h3>
      </div>
    </>
  );
};

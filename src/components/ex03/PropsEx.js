import { Intro } from "./Intro";
import { FoodMenu } from "./FoodMenu";

const menus = [
  {
    week: "Monday",
    breakfast: "Pizza",
    lunch: "salad",
    dinner: "hamburger",
  },
  {
    week: "Tuesday",
    breakfast: "Salmon",
    lunch: "apple",
    dinner: "lemon",
  },
  {
    week: "Wednesday",
    breakfast: "orange",
    lunch: "Grapes",
    dinner: "coke",
  },
];

const PropsEx = () => {
  return (
    <div>
      <Intro name="Dowon" age={12} job={"soccer"} />
      <Intro name="hello" age={11} job={"Bee"} />
      <br />
      <br />

      {/* <FoodMenu
        week={Menu[0].week}
        breakfast={Menu[0].breakfast}
        lunch={Menu[0].lunch}
        dinenr={Menu[0].dinner}
      /> */}
    </div>
  );
};

export default PropsEx;

import { useForm } from "react-hook-form";
import { styled } from "styled-components";
import { ErrorMessage } from "../ErrorMessage";
import { data } from "../../../PrRouter/Api";

const Wrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const Form = styled.form`
  max-width: 450px;
  width: 100%;
  height: 550px;
  border: 1px solid #dbdbdb;
  margin-top: 18vh;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px;
`;

const Title = styled.h3`
  font-size: 50px;
  font-weight: 700;
  letter-spacing: -2px;
  margin-bottom: 30px;
`;

const Input = styled.input`
  all: unset;
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  border: 1px solid #dbdbbd;
  border-radius: 10px;
  padding: 0 15px;
  margin-top: 10px;
`;

const Button = styled.button`
  all: unset;
  width: 100%;
  height: 50px;
  background-color: hotpink;
  text-align: center;
  margin-top: 20px;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 600;
  color: white;
`;

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(errors?.username?.message);
  //   &&연산자로 객체에 접근한는것 보다 옵셔널 체이닝()을 이용하여 객체 안에 있는 객체를 쉽게 접근할 수 있음
  // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Optional_chaining

  const loginHandler = (data) => {
    //이벤트 함수 매개변수의 첫번째 자리는 유저가 입력한 내용을 개체옇태로 반환함
    // console.log(data);
  };

  return (
    <Wrap>
      <Form onSubmit={handleSubmit(loginHandler)}>
        <Title>Login</Title>

        <Input
          {...register("username", {
            required: "ID는 필수입력입니다.",
          })}
          type="text"
          placeholder="ID"
        />
        {/* <ErrorMessage data={errors?.username?.message} /> */}
        <span>{errors?.username?.message}</span>

        <Input
          {...register("password", {
            required: true,
          })}
          type="text"
          placeholder="PassWord"
        />

        <Button>Login</Button>
      </Form>
    </Wrap>
  );
};

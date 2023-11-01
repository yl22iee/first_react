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
  opacity: ${(props) =>
    props.$isActive ? 1 : 0.5}; // => 참이라면 1 거짓이람녀 0.5;
  cursor: ${(props) => (props.isValid ? "pointer" : "default")};
`;

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange", // 실시간으로 errors, isValid를 반응시킨다.
  });

  console.log(errors?.username?.message);
  //   console.log(isValid); => 유효성 겁사 후 boolean값으로 반환합니다.

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
            required: "password는 필수입니다.",
            minLength: {
              value: 8,
              message: "password는 8자리 이상 작성",
            },
            pattern:
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/,
            message:
              "최소 8 자 및 최대 10 자, 하나 이상의 대문자, 하나의 소문자, 하나의 숫자 및 하나의 특수 문자 ",
          })}
          type="text"
          placeholder="PassWord"
        />
        <span>{errors?.password?.message}</span>

        <Button $isActive={isValid}>Login</Button>
      </Form>
    </Wrap>
  );
};

// useForm
// => form 관련 패키지
// ex)
// const {register, => input 태그 name 및 등럭 약힐
// handleSubmit, => form태그 이벤트 등록
// formState:{errors, isValid} => form 상태를 관리
// => errors: form 유효성 검사 후 에러를 객체로 반환함,
// => isValid : form 상태가 유효한지 boolean값으로 반환
// }= useForm({
// mode:"onChange"  -> form 모드로 유효성 검사를 어떻게 처리할지 값은 작성 할 수 있음
// });

{
  /* <inpit {...register("name명",{ */
}
// required: "" // 현 input값이 필수값인지 아닌지 boolean값 및 문자열로 작성 가능
// })} />

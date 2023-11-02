import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Wrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: space-between;
`;

const Form = styled.form`
  max-width: 450px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #dbdbdb;
  height: 600px;
  margin-top: 25%;
  padding: 100px 20px;
  border-radius: 10px;
`;

const Title = styled.h3`
  font-size: 60px;
  font-weight: 700;
  letter-spacing: -2px;
  margin-bottom: 30px;
`;

const Input = styled.input`
  all: unset;
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  border: 1px solid #dbdbdb;
  padding: 0 10px;
  margin-top: 5px;
`;

const Button = styled.button`
  all: unset;
  width: 100%;
  height: 50px;
  text-align: center;
  background-color: lightblue;
  border-radius: 10px;
  margin-top: 20px;
  font-size: 18px;
  font-weight: 600;
  color: white;
  opacity: ${(props) => (props.$isActive ? 1 : 0.5)};
  cursor: ${(props) => (props.$isActive ? "pointer" : "default")};
`;

const Separ = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    display: block;
    width: 45%;
    height: 1px;
    background-color: #dbdbdb;
  }
  b {
    font-weight: 600;
    color: #555;
  }
`;

const BottomInfo = styled.div``;

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  return (
    <Wrap>
      <Form onSubmit={handleSubmit(loginHandler)}>
        <Title>Login</Title>
        <Input
          {...register("username", {
            required: "아이디는 필수 입니다.",
          })}
          type="text"
          placeholder="login"
        />
        <ErrorMessage text={errors?.username?.message} />
        <Input
          {...register("password", {
            required: "패스워드는 필수 입니다.",
            minLength: {
              value: 8,
              message: "비밀번호는 최소 8자리 이상 입니다.",
            },
          })}
          type="password"
          placeholder="password"
        />
        <ErrorMessage text={errors?.password?.message} />

        <Button $isActive={isValid}>Login</Button>

        <Separ>
          <span></span>
          <b>OR</b>
          <span></span>

          <BottomInfo>
            아이디가 없으신가요? <Link to={"/signup"}>회원가입 &rarr;</Link>
          </BottomInfo>
        </Separ>
      </Form>
    </Wrap>
  );
};

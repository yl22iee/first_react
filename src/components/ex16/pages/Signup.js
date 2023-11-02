export const SignUP = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  return (
    <Wrap>
      <Form onSubmit={handleSubmit(loginHandler)}>
        <Title>SignUp</Title>
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

        <Button $isActive={isValid}>회원가입</Button>

        <Separ>
          <span></span>
          <b>OR</b>
          <span></span>

          <BottomInfo>
            아이디가 있으신가요? <Link to={"/login"}>로그인 &rarr;</Link>
          </BottomInfo>
        </Separ>
      </Form>
    </Wrap>
  );
};

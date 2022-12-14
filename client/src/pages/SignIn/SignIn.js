import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  loginFailure,
  loginStart,
  loginSuccess,
} from "../../redux/Slice/userSlice";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 56px);
  color: ${({ theme }) => theme.text};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bgLighter};
  border: 1px solid ${({ theme }) => theme.soft};
  padding: 20px 50px;
  gap: 10px;
`;

const Title = styled.h1`
  font-size: 24px;
`;

const SubTitle = styled.h2`
  font-size: 20px;
  font-weight: 300;
`;

const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.soft};
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
  width: 100%;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.button`
  border-radius: 3px;
  border: none;
  padding: 10px 20px;
  font-weight: 500;
  cursor: pointer;
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.textSoft};
`;

const More = styled.div`
  display: flex;
  margin-top: 10px;
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
`;

const Links = styled.div`
  margin-left: 50px;
`;

const Link = styled.span`
  margin-left: 30px;
`;

const SignIn = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSignIn = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      fetch("/auth/signin/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          password: password,
        }),
      })
        .then((res) => res.json())
        .then((data) => dispatch(loginSuccess(data)));
    } catch (error) {
      dispatch(loginFailure());
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    fetch("/auth/signup/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    }).then((res) => console.log(res.json()));
  };

  return (
    <Container>
      <Wrapper>
        <Title>Sign in</Title>
        <SubTitle>to continue to SupTube</SubTitle>
        <Input
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="username"
        />
        <Input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          placeholder="password"
        />
        <Button onClick={handleSignIn}>Sign in</Button>
        <Title>or</Title>
        <Input
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="username"
        />
        <Input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="email"
        />
        <Input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          placeholder="password"
        />
        <Button onClick={handleSignUp}>Sign up</Button>
      </Wrapper>
      <More>
        English(USA)
        <Links>
          <Link>Help</Link>
          <Link>Privacy</Link>
          <Link>Terms</Link>
        </Links>
      </More>
    </Container>
  );
};

export default SignIn;

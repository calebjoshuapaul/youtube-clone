import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 56px;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  padding: 0 20px;
  position: relative;
`;
const Search = styled.div`
  position: absolute;
  left: 0;
  right: 120px;
  margin: 0 auto;
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;
const Input = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  color: ${({ theme }) => theme.text};
`;
const Button = styled.div`
  width: 100px;
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5;
`;

function Navbar() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder="Search" />
          <SearchOutlinedIcon />
        </Search>
        <Link to="sign-in">
          <Button>
            <AccountCircleOutlinedIcon />
            {currentUser ? currentUser.name : "SIGN IN"}
          </Button>
        </Link>
      </Wrapper>
    </Container>
  );
}

export default Navbar;

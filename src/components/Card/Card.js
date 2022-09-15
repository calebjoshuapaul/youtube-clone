import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  color: ${({ theme }) => theme.text};
  width: 360px;
  margin-bottom: 40px;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  height: 202px;
  background-color: #999;
`;

const Details = styled.div`
  display: flex;
  margin-top: 16px;
  gap: 12px;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
`;

const Texts = styled.div``;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  margin: 0;
`;

const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  font-weight: 400;
  margin: 10px 0;
`;

const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

function Card() {
  return (
    <Link to="/video/test" style={{ textDecoration: "none" }}>
      <Container>
        <Image src="https://picsum.photos/200" />
        <Details>
          <ChannelImage src="https://picsum.photos/200" />
          <Texts>
            <Title>Test video</Title>
            <ChannelName>Sup supper</ChannelName>
            <Info>151,262 Views &#8226; 30days ago</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
}

export default Card;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { format } from "timeago.js";
import styled from "styled-components";

const Container = styled.div`
  color: ${({ theme }) => theme.text};
  width: ${(props) => props.type !== "sm" && "360px"};
  margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "45px")};
  cursor: pointer;
  display: ${(props) => props.type === "sm" && "flex"};
  gap: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: ${(props) => (props.type === "sm" ? "100px" : "202px")};
  background-color: #999;
  flex: 1;
`;

const Details = styled.div`
  display: flex;
  margin-top: ${(props) => props.type !== "sm" && "16px"};
  gap: 12px;
  flex: 1;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  display: ${(props) => props.type === "sm" && "none"};
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

function Card({ type, video }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    (async () => {
      fetch(`/users/find/${video.userId}`)
        .then((res) => res.json())
        .then((data) => setUser(data));
    })();
  }, [video.userId]);

  return (
    <Link to={`/video/${video._id}`} style={{ textDecoration: "none" }}>
      <Container type={type}>
        <Image type={type} src={video.imgUrl} />
        <Details type={type}>
          <ChannelImage type={type} src={user.img} />
          <Texts>
            <Title>{video.title}</Title>
            <ChannelName>{user.name}</ChannelName>
            <Info>
              {video.views} Views &#8226; {format(video.createdAt)}
            </Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
}

export default Card;

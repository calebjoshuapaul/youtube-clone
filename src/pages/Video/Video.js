import React from "react";
import styled from "styled-components";
import Comments from "../../components/Comments/Comments";
import ThumbUpOffAltOutlinedIcon from "@mui/icons-material/ThumbUpOffAltOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";

const Container = styled.div`
  display: flex;
  gap: 24px;
  color: ${({ theme }) => theme.text};
`;

const Content = styled.div`
  flex: 5;
`;

const VideoWrapper = styled.div``;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  justify-content: center;
  cursor: pointer;
`;

const Hr = styled.hr`
  margin: 15px 0;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Recommendation = styled.div`
  flex: 2;
`;

const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
`;

const ChannelName = styled.span`
  font-weight: 500;
`;

const ChannelCounter = styled.span`
  margin-bottom: 20px;
  margin-top: 5px;
  font-size: 12px;
`;

const Description = styled.p`
  font-size: 14px;
`;

const Subscribe = styled.button`
  background-color: #cc1a00;
  color: white;
  border: none;
  border-radius: 3px;
  font-weight: 500;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
`;

function Video() {
  return (
    <Container>
      <Content>
        <VideoWrapper style={{ objectFit: "cover" }}>
          <iframe
            width="100%"
            height="510"
            src="https://www.youtube.com/embed/k3Vfj-e1Ma4"
            title="Youtube video player"
            frameBorder="0"
            allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture"
            allowFullScreen
          />
        </VideoWrapper>
        <Title>Test video</Title>
        <Details>
          <Info>151,262 Views &#8226; 30days ago</Info>
          <Buttons>
            <Button>
              <ThumbUpOffAltOutlinedIcon />
              123
            </Button>
            <Button>
              <ThumbDownOffAltOutlinedIcon /> Dislike
            </Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <Image src="https://picsum.photos/50" />
            <ChannelDetail>
              <ChannelName>Sup supper</ChannelName>
              <ChannelCounter>200k subscribers</ChannelCounter>
              <Description>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Description>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe>Subscribe</Subscribe>
        </Channel>
        <Hr />
        <Comments />
      </Content>
      <Recommendation>Recommendation</Recommendation>
    </Container>
  );
}

export default Video;

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../../components/Card/Card";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

function Home({ type }) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    (async () => {
      fetch(`/videos/${type}`)
        .then((res) => {
          return res.json();
        })
        .then((data) => setVideos(data))
        .catch(function (res) {
          console.log(res);
        });
    })();
  }, [type]);

  return (
    <Container>
      {videos.map((video) => (
        <Card key={video._id} video={video} />
      ))}
    </Container>
  );
}

export default Home;

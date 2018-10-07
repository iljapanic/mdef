import React from 'react';
import Anime from 'react-anime';

// components
import Container from '../components/Container';
import Maze from '../components/Maze';

export default ({ data }) => {
  var pageTitle = 'Hello IAAC!';

  return (
    <Container>
      <div className="wrap">
        <h1>{pageTitle}</h1>
      </div>
      <Anime
        // strokeDashoffset={[offset, 0]}
        duration={1000}
        // delay={anime.random(0, 2000)}
        loop={true}
        direction="alternate"
        easing="easeInOutSine"
        autoplay={true}
      >
        <Maze />
      </Anime>
    </Container>
  );
};

import React from 'react';
import { graphql, withPrefix } from 'gatsby';
import Img from 'gatsby-image';
import 'processing-js';

// components
import Container from '../components/Container';

export default ({ data }) => {
  // var pageTitle = 'Hello IAAC!';
  var helloIaac = data.file.childImageSharp.fluid;

  return (
    <Container>
      <div className="wrap-l">
        <Img fluid={helloIaac} />
        <canvas data-processing-sources={withPrefix('/sketches/mdef/mdef.pde')} />
      </div>
    </Container>
  );
};

export const query = graphql`
  query {
    file(relativePath: { eq: "hello-iaac.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

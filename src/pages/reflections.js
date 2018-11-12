import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

// components
import Container from '../components/Container';
import ReflectionLink from '../components/ReflectionLink';

export default ({ data }) => {
  const pageTitle = 'Term 1';
  const allReflections = data.allMarkdownRemark.edges;
  const Reflections = allReflections.map(edge => (
    <ReflectionLink key={edge.node.id} reflection={edge.node} />
  ));

  return (
    <Container>
      <Helmet>
        <title>Reflections</title>
      </Helmet>
      <div className="wrap">
        <h1>{pageTitle}</h1>
        <div className="ta-center m-1">{Reflections}</div>
      </div>
    </Container>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___date] }
      limit: 1000
      filter: {
        frontmatter: { published: { eq: true } }
        fileAbsolutePath: { regex: "/reflections/" }
      }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "D MMMM")
            endDate(formatString: "D MMMM YYYY")
            slug
            title
          }
        }
      }
    }
  }
`;

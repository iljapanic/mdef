import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

// components
import Container from '../components/Container';
import ReflectionLink from '../components/ReflectionLink';

// styles
import styles from '../css/pages/reflections.module.css';

export default ({ data }) => {
  const pageTitle = 'Term 1';
  const allReflections = data.allMarkdownRemark.edges;
  const reflections = allReflections.map(edge => (
    <ReflectionLink key={edge.node.id} reflection={edge.node} />
  ));

  return (
    <Container>
      <Helmet>
        <title>Reflections</title>
      </Helmet>
      <div className="wrap-l">
        <h1>{pageTitle}</h1>
        <div className="ta-center m-1">
          <div className={styles.reflections}>{reflections}</div>
        </div>
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
            hero {
              childImageSharp {
                fluid(maxWidth: 1600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;

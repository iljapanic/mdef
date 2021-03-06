import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

// components
import Container from '../components/Container';
import ReflectionLink from '../components/ReflectionLink';

// styles
import styles from '../css/pages/reflections.module.css';

export default ({ data }) => {
  const pageTitle = 'Reflections';
  const allReflections = data.allMarkdownRemark.edges;
  const reflections = allReflections.map(edge => (
    <ReflectionLink key={edge.node.id} reflection={edge.node} />
  ));

  return (
    <Container>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <div className="page-title">
        <h1>{pageTitle}</h1>
        <p>Weekly musings from the programme</p>
      </div>
      <div className={styles.reflections}>{reflections}</div>
    </Container>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
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
                fluid(maxWidth: 1200) {
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

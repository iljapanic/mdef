import React from 'react';
import { graphql } from 'gatsby';

// components
import Container from '../components/Container';
import NoteLink from '../components/NoteLink';

export default ({ data }) => {
  const pageTitle = 'Term 1';
  const allNotes = data.allMarkdownRemark.edges;
  const Notes = allNotes.map(edge => <NoteLink key={edge.node.id} note={edge.node} />);

  return (
    <Container>
      <div className="wrap">
        <h1>{pageTitle}</h1>
        <div className="ta-center m-1">{Notes}</div>
      </div>
    </Container>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___date] }
      limit: 1000
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "D MMMM")
            endDate(formatString: "D MMMM, YYYY")
            slug
            title
          }
        }
      }
    }
  }
`;

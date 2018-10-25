import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';

// components
import Container from '../components/Container';
import Book from '../components/Book';

// styles
import styles from '../css/pages/bookshelf.module.css';

export default ({ data }) => {
  const pageTitle = 'Bookshelf';
  const allNonFiction = data.allBooksNonfictionJson.edges;
  const allFiction = data.allBooksFictionJson.edges;
  const nonfiction = allNonFiction.map(edge => <Book key={edge.node.id} book={edge.node} />);
  const fiction = allFiction.map(edge => <Book key={edge.node.id} book={edge.node} />);

  return (
    <Container>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>

      <h1 className="ta-center">{pageTitle}</h1>
      <div className="wrap-xl m-1">
        <h2 className="ta-center">Non-Fiction</h2>
        <div className={styles.bookshelf}>{nonfiction}</div>
        <h2 className="ta-center m-4">Fiction</h2>
        <div className={styles.bookshelf}>{fiction}</div>
      </div>
    </Container>
  );
};

export const query = graphql`
  query {
    allBooksNonfictionJson(sort: { fields: year, order: ASC }) {
      edges {
        node {
          id
          title
          author
          year
          goodreads
          image {
            childImageSharp {
              fluid(maxWidth: 280) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }

    allBooksFictionJson(sort: { fields: year, order: ASC }) {
      edges {
        node {
          id
          title
          author
          year
          goodreads
          image {
            childImageSharp {
              fluid(maxWidth: 280) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;

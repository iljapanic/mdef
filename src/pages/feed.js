import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

// components
import Container from '../components/Container';
import FeedPost from '../components/FeedPost';

// styles
import styles from '../css/pages/feed.module.css';

export default ({ data }) => {
  const pageTitle = 'Feed';
  const postData = data.allAirtable.edges;
  const posts = postData.map(item => <FeedPost key={item.node.id} post={item.node.data} />);

  return (
    <Container>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <div className="wrap">
        <div className="page-title">
          <h1>{pageTitle}</h1>
          <p>Bits and pieces from around the cyberspace</p>
        </div>
      </div>
      <div className="wrap-s">
        <section className={styles.feed}>{posts}</section>
      </div>
    </Container>
  );
};

export const query = graphql`
  query {
    allAirtable(
      filter: { table: { eq: "feed" } }
      sort: { fields: data___timestamp, order: DESC }
    ) {
      edges {
        node {
          id
          data {
            title
            url
            timestamp
            notes {
              childMarkdownRemark {
                html
              }
            }
            tags {
              id
              data {
                name
              }
            }
          }
        }
      }
    }
  }
`;

import React from 'react';
import { graphql } from 'gatsby';

// components
import Container from '../components/Container';
import FeedPost from '../components/FeedPost';

// styles
import styles from '../css/pages/feed.module.css';

export default ({ data }) => {
  const postData = data.allAirtable.edges;
  const posts = postData.map(item => <FeedPost key={item.node.id} post={item.node.data} />);

  return (
    <Container>
      <div className="wrap-s">
        <section className={styles.feed}>{posts}</section>
      </div>
    </Container>
  );
};

export const query = graphql`
  query {
    allAirtable(
      filter: { table: { eq: "Feed" } }
      sort: { fields: data___Timestamp, order: DESC }
    ) {
      edges {
        node {
          id
          data {
            Title
            URL
            Timestamp
            Notes {
              childMarkdownRemark {
                html
              }
            }
            Tags {
              id
              data {
                Name
              }
            }
          }
        }
      }
    }
  }
`;

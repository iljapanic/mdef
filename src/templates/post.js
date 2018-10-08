import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

// components
import Container from '../components/Container';

// styles
import styles from '../css/templates/post.module.css';

class PostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const meta = post.frontmatter;
    const postHtml = post.html;
    // const { previous, next } = this.props.pageContext;

    return (
      <Container>
        <Helmet>
          <title>{meta.title}</title>
        </Helmet>
        <article className={styles.post}>
          <header className={styles.post__header}>
            <h1 className={styles.post__title}>{meta.title}</h1>
            <span className={styles.post__date}>
              {meta.date} – {meta.endDate}
            </span>
          </header>
          <div className={styles.post__body} dangerouslySetInnerHTML={{ __html: postHtml }} />
          <footer className={styles.post__footer}>
            <span>This document was last updated on {meta.lastUpdated} </span>
          </footer>
        </article>
      </Container>
    );
  }
}

export default PostTemplate;

export const pageQuery = graphql`
  query PostBySlug($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        date(formatString: "D MMMM")
        endDate(formatString: "D MMMM YYYY")
        lastUpdated(formatString: "D MMMM YYYY")
        slug
        title
      }
    }
  }
`;

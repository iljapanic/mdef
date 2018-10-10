import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import Img from 'gatsby-image';

// components
import Container from '../components/Container';

// styles
import styles from '../css/templates/post.module.css';

class PostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const meta = post.frontmatter;
    const postHtml = post.html;
    const heroImage = meta.hero.childImageSharp.fluid;
    // const { previous, next } = this.props.pageContext;

    return (
      <Container>
        <Helmet>
          <title>{meta.title}</title>
        </Helmet>
        <article className={styles.post}>
          <header className={styles.header}>
            <h1 className={styles.title}>{meta.title}</h1>
            <span className={styles.date}>
              {meta.date} – {meta.endDate}
            </span>
            <div className={styles.hero}>
              <Img fluid={heroImage} />
            </div>
          </header>
          <div className={styles.body} dangerouslySetInnerHTML={{ __html: postHtml }} />
          <footer className={styles.footer}>
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
      frontmatter {
        date(formatString: "D MMMM")
        endDate(formatString: "D MMMM YYYY")
        lastUpdated(formatString: "D MMMM YYYY")
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
      html
    }
  }
`;

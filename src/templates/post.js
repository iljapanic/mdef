import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import Img from 'gatsby-image';
import tocbot from 'tocbot';
import anchorJS from 'anchor-js';

import '../css/utils/toc.css';

// import 'tocbot/src/scss/tocbot-core';
// import 'tocbot/src/scss/tocbot-default-theme';

// components
import Container from '../components/Container';

// styles
import styles from '../css/templates/post.module.css';

class PostTemplate extends React.Component {
  componentDidMount() {
    const anchors = new anchorJS();
    anchors.add('h2');
    anchors.add('h3');
    tocbot.init({
      tocSelector: '.toc',
      contentSelector: '.toc-content',
      headingSelector: 'h2, h3'
    });
  }

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
        <div className="toc" />
        <article className={styles.post + ` toc-content`}>
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

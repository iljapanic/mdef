import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import Img from 'gatsby-image';
import anchorJS from 'anchor-js';
// import rehypeReact from 'rehype-react';

// components
import Container from '../components/Container';
// import LinkPreview from '../components/LinkPreview';
// import Quote from '../components/Quote';

// styles
import styles from '../css/templates/post.module.css';
import '../css/utils/footnotes.css';

// const renderAst = new rehypeReact({
//   createElement: React.createElement,
//   components: {
//     link: LinkPreview
//   }
// }).Compiler;

class PostTemplate extends React.Component {
  componentDidMount() {
    const anchors = new anchorJS();
    anchors.add('h2');
  }

  render() {
    const post = this.props.data.markdownRemark;
    const meta = post.frontmatter;
    const postHtml = post.html;
    const heroImage = meta.hero.childImageSharp.fluid;
    const author = this.props.data.site.siteMetadata.author;
    const absolutePath = post.fileAbsolutePath;

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
            {absolutePath}
            <div>
              Authored by{' '}
              <span itemProp="author" itemScope itemType="http://schema.org/Person">
                <span itemProp="name">{author}</span>
              </span>
            </div>
            <div>This document was last updated on {meta.lastUpdated}</div>
          </footer>
        </article>
      </Container>
    );
  }
}

export default PostTemplate;

export const pageQuery = graphql`
  query PostBySlug($slug: String!) {
    site {
      siteMetadata {
        author
        name
        email
      }
    }
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      id
      html
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
    }
  }
`;

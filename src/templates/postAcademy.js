import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import Img from 'gatsby-image';
import anchorJS from 'anchor-js';
import tocbot from 'tocbot';

// import rehypeReact from 'rehype-react';

// components
import Container from '../components/Container';
// import LinkPreview from '../components/LinkPreview';
// import Quote from '../components/Quote';

// css
import css from '../css/templates/post.module.css';
import '../css/utils/footnotes.css';

// const renderAst = new rehypeReact({
//   createElement: React.createElement,
//   components: {
//     link: LinkPreview
//   }
// }).Compiler;

class File extends React.Component {
  render() {
    const name = this.props.name;
    const filename = this.props.filename;

    return (
      <li>
        <a href={`/${filename}`} target="_blank" rel="noopener noreferrer">
          {name}
        </a>
      </li>
    );
  }
}

class PostTemplate extends React.Component {
  componentDidMount() {
    const anchors = new anchorJS();
    anchors.add('h2');
    tocbot.init({
      tocSelector: '.toc',
      contentSelector: '.toc-content',
      headingSelector: 'h2'
    });
  }

  render() {
    const post = this.props.data.markdownRemark;
    const meta = post.frontmatter;
    const postHtml = post.html;
    const heroImage = meta.hero.childImageSharp.fluid;
    const readingTime = post.timeToRead;
    const methodsSorted = meta.methods.sort();
    const methods = methodsSorted.map((method, index) => <li key={index}>{method}</li>);

    var files = '';
    if (meta.files) {
      files = meta.files.map((file, index) => (
        <File key={index} name={file.name} filename={file.filename} />
      ));
    }

    return (
      <Container>
        <Helmet>
          <title>{meta.title}</title>
        </Helmet>
        <article className={css.post}>
          <header>
            <h1 className={css.title}>{meta.title}</h1>
            <div className={css.header}>
              <div className={css.cover}>
                <Img fluid={heroImage} />
              </div>
              <div className={css.meta}>
                <dl>
                  <dt>Period</dt>
                  <dd>
                    {meta.date} – {meta.endDate}
                  </dd>
                  <dt>Reading time</dt>
                  <dd>{readingTime} minutes</dd>
                  <dt>Methods</dt>
                  <dd>
                    <ul>{methods}</ul>
                  </dd>
                  <dt>Contents</dt>
                  <dd>
                    <div className="toc" />
                  </dd>
                </dl>
                <span className={css.date} />
              </div>
            </div>
          </header>
          <div
            className={css.body + ` toc-content`}
            dangerouslySetInnerHTML={{ __html: postHtml }}
          />
          <div className={css.files}>
            {files.length > 0 && <h2>Project files</h2>}
            {files.length > 0 && <ul>{files}</ul>}
          </div>
          <footer className={css.footer}>
            This document was last updated on {meta.lastUpdated}
          </footer>
        </article>
      </Container>
    );
  }
}

export default PostTemplate;

export const pageQuery = graphql`
  query AcademyPostBySlug($slug: String!) {
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
      timeToRead
      frontmatter {
        date(formatString: "D MMMM")
        endDate(formatString: "D MMMM YYYY")
        lastUpdated(formatString: "D MMMM YYYY")
        files {
          name
          filename
        }
        methods
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

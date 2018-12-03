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

class Person extends React.Component {
  render() {
    const name = this.props.name;
    const website = this.props.website;

    if (website) {
      return (
        <li>
          <a href={website} target="_blank" rel="noopener noreferrer">
            {name}
          </a>
        </li>
      );
    } else {
      return <li>{name}</li>;
    }
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
    // const author = this.props.data.site.siteMetadata.author;

    const people = meta.people.map((person, index) => (
      <Person key={index} name={person.name} website={person.website} />
    ));

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
                  <dt>Tutors</dt>
                  <dd>
                    <ul>{people}</ul>
                  </dd>
                  <dt>Reading time</dt>
                  <dd>{readingTime} minutes</dd>
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
  query PostBySlug($slug: String!) {
    site {
      siteMetadata {
        author
        name
        email
      }
    }
    markdownRemark(
      frontmatter: { slug: { eq: $slug } }
      fileAbsolutePath: { regex: "/reflections/" }
    ) {
      id
      html
      timeToRead
      frontmatter {
        date(formatString: "D MMMM")
        endDate(formatString: "D MMMM YYYY")
        lastUpdated(formatString: "D MMMM YYYY")
        people {
          name
          website
        }
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

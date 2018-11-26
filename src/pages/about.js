import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

// components
import Container from '../components/Container';

export default ({ data }) => {
  const pageTitle = 'About';
  const aboutHtml = data.markdownRemark.html;
  const title = data.markdownRemark.frontmatter.title;
  const heroImage = data.markdownRemark.frontmatter.hero.childImageSharp.fluid;

  return (
    <Container>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>

      <div className="wrap">
        <div className="page-title">
          <h1>{title}</h1>
          <p>Personal profile</p>
        </div>
        <div>
          <Img fluid={heroImage} />
        </div>
      </div>
      <div className="wrap-s m-1">
        <div dangerouslySetInnerHTML={{ __html: aboutHtml }} />
      </div>
    </Container>
  );
};

export const query = graphql`
  query {
    markdownRemark(frontmatter: { slug: { eq: "about" } }) {
      html
      frontmatter {
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

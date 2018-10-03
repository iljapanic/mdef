import React from 'react';
import { graphql, link } from 'gatsby';
import ReactHtmlParser from 'react-html-parser';

// components
import Container from '../components/Container';

export default function Template({ data }) {
  const note = data.markdownRemark;
  const meta = note.frontmatter;
  const noteHtml = ReactHtmlParser(note.html);

  return (
    <Container>
      <artilce className="note">
        <div className="wrap-s">
          <h1>{meta.title}</h1>
          <div className="note__text">{noteHtml}</div>
        </div>
      </artilce>
    </Container>
  );
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`;

import React from 'react';
import { graphql } from 'gatsby';
import ReactHtmlParser from 'react-html-parser';
import { Helmet } from 'react-helmet';

// components
import Container from '../components/Container';

// styles
import styles from '../css/templates/noteTemplate.module.css';

export default function Template({ data }) {
  const note = data.markdownRemark;
  const meta = note.frontmatter;
  const noteHtml = ReactHtmlParser(note.html);

  return (
    <Container>
      <Helmet>
        <title>{meta.title}</title>
      </Helmet>
      <article className={styles.note}>
        <header className={styles.note__header}>
          <h1 className={styles.note__title}>{meta.title}</h1>
          <span className={styles.note__date}>
            {meta.date} – {meta.endDate}
          </span>
        </header>
        <div className={styles.note__body}>{noteHtml}</div>
        <footer className={styles.note__footer}>
          <span>This document was last updated on {meta.lastUpdated} </span>
        </footer>
      </article>
    </Container>
  );
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
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

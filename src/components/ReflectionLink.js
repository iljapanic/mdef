import React from 'react';
import { Link } from 'gatsby';

// styles
import styles from '../css/components/ReflectionLink.module.css';

const ReflectionLink = ({ reflection }) => (
  <article className={styles.reflectionLink}>
    <Link to={`reflections/` + reflection.frontmatter.slug + `/`}>
      <h2 className={styles.reflectionLink__title}>{reflection.frontmatter.title}</h2>
      <div className={styles.reflectionLink__meta}>
        {reflection.frontmatter.date} – {reflection.frontmatter.endDate}
      </div>
    </Link>
  </article>
);

export default ReflectionLink;

import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

// styles
import styles from '../css/components/ReflectionLink.module.css';

const ReflectionLink = ({ reflection }) => {
  const title = reflection.frontmatter.title;
  const slug = reflection.frontmatter.slug;
  const startDate = reflection.frontmatter.date;
  const endDate = reflection.frontmatter.endDate;
  const period = startDate + ' – ' + endDate;
  const heroImage = reflection.frontmatter.hero.childImageSharp.fluid;

  return (
    <article className={styles.reflection}>
      <Link to={`reflections/` + slug + `/`}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.cover}>
          <Img fluid={heroImage} />
        </div>
        <div class={styles.body}>
          <div className={styles.period}>{period}</div>
        </div>
      </Link>
    </article>
  );
};

export default ReflectionLink;

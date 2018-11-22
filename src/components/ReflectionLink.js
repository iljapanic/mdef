import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

// css
import css from '../css/components/ReflectionLink.module.css';

const ReflectionLink = ({ reflection }) => {
  const title = reflection.frontmatter.title;
  const slug = reflection.frontmatter.slug;
  const startDate = reflection.frontmatter.date;
  const endDate = reflection.frontmatter.endDate;
  const period = startDate + ' – ' + endDate;
  const heroImage = reflection.frontmatter.hero.childImageSharp.fluid;

  return (
    <article className={css.reflection}>
      <Link to={`reflections/` + slug + `/`} className={css.inner}>
        <div className={css.cover}>
          <Img fluid={heroImage} />
        </div>
        <div className={css.body}>
          <h2 className={css.title}>{title}</h2>
          {/* <div className={css.period}>{period}</div> */}
        </div>
      </Link>
    </article>
  );
};

export default ReflectionLink;

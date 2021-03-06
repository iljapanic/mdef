import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

// css
import css from '../css/components/FabLink.module.css';

const FabLink = ({ post }) => {
  const title = post.frontmatter.title;
  const slug = post.frontmatter.slug;
  const startDate = post.frontmatter.date;
  const endDate = post.frontmatter.endDate;
  const period = startDate + ' – ' + endDate;
  const heroImage = post.frontmatter.hero.childImageSharp.fluid;


  return (
    <article className={css.post}>
      <Link to={`fabacademy/` + slug + `/`} className={css.inner} title="Read more">
        <div className={css.body}>
          <div className={css.innerBody}>
            <h2 className={css.title}>{title}</h2>
            <p className={css.period}>{period}</p>
          </div>
        </div>
        <div className={css.cover}>
          <Img fluid={heroImage} />
        </div>
      </Link>
    </article>
  );
};

export default FabLink;

import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Dialogues from '../../components/Dialogues';
import css from '../../css/pages/reflection.module.css';

export default ({ data }) => {
  const fungiImage = data.fungiImage.childImageSharp.fluid;

  return (
    <Dialogues>
      <Helmet>
        <title>Reflection</title>
      </Helmet>
      <div className={css.reflection}>
        <div className={css.extended}>
          <div className={css.image}>
            <Img fluid={fungiImage} />
          </div>
          <div className={css.body}>
            <h2>Exploring meta-consciousness</h2>
            <p>
              It was the Extended Intelligence course that nudged me to explore notions of
              intelligence beyond the human realm.
            </p>
          </div>
        </div>
      </div>
    </Dialogues>
  );
};

export const query = graphql`
  query {
    fungiImage: file(name: { eq: "fungi" }, dir: { regex: "/dialogues/" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Dialogues from '../../components/Dialogues';
import css from '../../css/pages/reflection.module.css';

export default ({ data }) => {
  const plantyImage = data.plantyImage.childImageSharp.fluid;

  return (
    <Dialogues>
      <Helmet>
        <title>Reflection</title>
      </Helmet>
      <div className={css.rightImage}>
        <div className={css.image}>
          <Img fluid={plantyImage} />
        </div>
        <div className={css.body}>
          <h2>Living with a plant</h2>
          <p>aa</p>
        </div>
      </div>
    </Dialogues>
  );
};

export const query = graphql`
  query {
    plantyImage: file(name: { eq: "planty" }, dir: { regex: "/dialogues/" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

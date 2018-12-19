import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Dialogues from '../../components/Dialogues';
import css from '../../css/pages/instrumentation.module.css';

import plantGif from '../../images/dialogues/plant-touch.gif';
import sassy1 from '../../images/dialogues/sassy1.gif';
import sassy2 from '../../images/dialogues/sassy2.gif';
import sassyControl from '../../images/dialogues/sassy-control.jpg';

export default ({ data }) => {
  const kitImage = data.kitImage.childImageSharp.fluid;

  return (
    <Dialogues>
      <Helmet>
        <title>Instrumentation</title>
      </Helmet>
      <div className={css.plants}>
        <div className={css.images}>
          <img src={plantGif} alt="plant that reacts to touch via capacitors" />
          <img src={sassy1} alt="spinning wheel" />
          <img src={sassy2} alt="sassy plant" />
          <img src={sassyControl} alt="control interface for sassy plant" />
        </div>
        <div className={css.body}>
          <h2>Interfacing with plants</h2>
          <p>
            In How Things Work and From Bits to Atoms courses I joined forces with nature-inclined
            classmates to connect plants to the internet and enhance them with electronics.
          </p>
        </div>
      </div>
      <div className={css.kit}>
        <div className={css.image}>
          <Img fluid={kitImage} />
        </div>
        <div className={css.body}>
          <h2>Fungal ambitions</h2>
          <p>
            One of the first maker projects that I collaborated on at the ouset of the first term
            was a box for growing mushrooms out of used coffee grounds aided by various
            environmental sensors.
          </p>
        </div>
      </div>
    </Dialogues>
  );
};

export const query = graphql`
  query {
    sassyImage: file(name: { eq: "sassy-control" }, dir: { regex: "/dialogues/" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    kitImage: file(name: { eq: "kit" }, dir: { regex: "/dialogues/" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

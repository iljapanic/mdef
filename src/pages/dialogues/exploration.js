import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Dialogues from '../../components/Dialogues';
import { BookDialogues } from '../../components/Book';

import css from '../../css/pages/exploration.module.css';

import themesCloud from '../../images/dialogues/themes.svg';

export default ({ data }) => {
  const genesisImage = data.genesisImage.childImageSharp.fluid;
  const books = data.allDialoguesReferencesJson.edges.map(edge => (
    <BookDialogues key={edge.node.id} book={edge.node} />
  ));

  return (
    <Dialogues>
      <Helmet>
        <title>Exploration</title>
      </Helmet>

      <div className={css.exploration}>
        <div className={css.genesis}>
          <div className={css.image}>
            <Img fluid={genesisImage} />
          </div>
          <div className={css.body}>
            <h2>Genesis</h2>
            <p>
              The initial idea to explore mycelium occured during the Design for the Real World
              course when our group made a coffee corner with a mushroom growing box.
            </p>
          </div>
        </div>

        <div className={css.quote}>
          <blockquote className={css.quoteText}>
            “I see the mycelium as the Earth’s natural Internet, a consciousness with which we might
            be able to communicate. Through cross-species interfacing, we may one day exchange
            information with these sentient cellular networks. Because these externalized
            neurological nets sense any impression upon them, from footsteps to falling tree
            branches, they could relay enormous amounts of data regarding the movements of all
            organisms through the landscape.”
          </blockquote>
          <span className={css.author}>— Paul Stamets, Mycelium Running (2005)</span>
        </div>

        <div className={css.themes}>
          <img src={themesCloud} alt="project themes" />
        </div>

        <div className={css.references}>{books}</div>
      </div>
    </Dialogues>
  );
};

export const query = graphql`
  query {
    genesisImage: file(name: { eq: "genesis" }, dir: { regex: "/dialogues/" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    allDialoguesReferencesJson(sort: { fields: year, order: ASC }) {
      edges {
        node {
          id
          title
          author
          year
          goodreads
          image {
            childImageSharp {
              fluid(maxWidth: 280) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;

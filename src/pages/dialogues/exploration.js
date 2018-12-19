import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Dialogues from '../../components/Dialogues';
import { BookDialogues } from '../../components/Book';

import css from '../../css/pages/exploration.module.css';

export default ({ data }) => {
  const genesisImage = data.genesisImage.childImageSharp.fluid;
  const fungiImage = data.fungiImage.childImageSharp.fluid;
  const books = data.allDialoguesReferencesJson.edges.map(edge => (
    <BookDialogues key={edge.node.id} book={edge.node} />
  ));

  return (
    <Dialogues>
      <Helmet>
        <title>Exploration</title>
      </Helmet>

      <div className={css.exploration}>
        <div className={css.left}>
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

        <div className={css.right}>
          <div className={css.body}>
            <h2>Exploring meta-consciousness</h2>
            <p>
              It was the Extended Intelligence course that nudged me to explore notions of
              intelligence beyond the human realm.
            </p>
          </div>
          <div className={css.image}>
            <Img fluid={fungiImage} />
          </div>
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
    fungiImage: file(name: { eq: "fungi" }, dir: { regex: "/dialogues/" }) {
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

import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Dialogues from '../../components/Dialogues';

import css from '../../css/pages/exploration.module.css';

import themesCloud from '../../images/dialogues/themes.svg';

export default ({ data }) => {
  const genesisImage = data.genesisImage.childImageSharp.fluid;
  const plantArt = data.plantArt.childImageSharp.fluid;
  const filament = data.filament.childImageSharp.fluid;
  const filament2 = data.filament2.childImageSharp.fluid;
  const nomadic = data.nomadic.childImageSharp.fluid;
  const nomadic2 = data.nomadic2.childImageSharp.fluid;
  const startrek = data.startrek.childImageSharp.fluid;

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

        <div className={css.inspiration}>
          <h2 className="ta-center">Inspiration</h2>

          <div className={css.plantArt}>
            <figure>
              <Img fluid={plantArt} />
              <figcaption>
                Visualising electric signals of plants [
                <a
                  href="https://github.com/robbiebarrat/plant-art"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  source
                </a>
                ]
              </figcaption>
            </figure>
          </div>

          <div className={css.nomadic}>
            <div className={css.split}>
              <Img fluid={nomadic2} />
              <Img fluid={nomadic} />
            </div>
            <figcaption>
              Nomadic plants in search of waste to feed on [
              <a
                href="https://3dprint.com/7279/3d-print-fungus-mycelium/"
                target="_blank"
                rel="noopener noreferrer"
              >
                http://plantasnomadas.com/
              </a>
              ]
            </figcaption>
          </div>

          <div className={css.startrek}>
            <Img fluid={startrek} />
            <figcaption>
              Traversing the universe through mycelial networks [
              <a
                href="https://www.tor.com/2018/02/21/mycelium-running-star-trek-discovery/"
                taget="_blank"
                rel="noopener noreferrer"
              >
                source
              </a>
              ]
            </figcaption>
          </div>

          <div className={css.filament}>
            <div className={css.split}>
              <Img fluid={filament} />
              <Img fluid={filament2} />
            </div>
            <figcaption>
              3D printing with mycelium filament [
              <a
                href="https://3dprint.com/7279/3d-print-fungus-mycelium/"
                target="_blank"
                rel="noopener noreferrer"
              >
                source
              </a>
              ]
            </figcaption>
          </div>
        </div>
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
    plantArt: file(name: { eq: "plant-art" }, dir: { regex: "/dialogues/" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    filament: file(name: { eq: "3d" }, dir: { regex: "/dialogues/" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    filament2: file(name: { eq: "3d-2" }, dir: { regex: "/dialogues/" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    nomadic: file(name: { eq: "nomadic" }, dir: { regex: "/dialogues/" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    nomadic2: file(name: { eq: "nomadic2" }, dir: { regex: "/dialogues/" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    startrek: file(name: { eq: "startrek" }, dir: { regex: "/dialogues/" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

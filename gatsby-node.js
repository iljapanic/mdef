const _ = require('lodash');
const path = require('path');
const Promise = require('bluebird');
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const postTemplate = path.resolve(`./src/templates/post.js`);

    resolve(
      graphql(`
        {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            limit: 1000
            filter: {
              frontmatter: { published: { eq: true } }
              fileAbsolutePath: { regex: "/reflections/" }
            }
          ) {
            edges {
              node {
                frontmatter {
                  slug
                  title
                }
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        // create Reflections pages

        const reflections = result.data.allMarkdownRemark.edges;

        _.each(reflections, (reflection, index) => {
          const previous = index === reflections.length - 1 ? null : reflections[index + 1].node;
          const next = index === 0 ? null : reflections[index - 1].node;

          createPage({
            path: `reflections/${reflection.node.frontmatter.slug}`,
            component: postTemplate,
            context: {
              slug: reflection.node.frontmatter.slug,
              previous,
              next
            }
          });
        });
      })
    );

    resolve(
      graphql(`
        {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            limit: 1000
            filter: {
              frontmatter: { published: { eq: true } }
              fileAbsolutePath: { regex: "/fabacademy/" }
            }
          ) {
            edges {
              node {
                frontmatter {
                  slug
                  title
                }
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        // create Reflections pages

        const fabacademy = result.data.allMarkdownRemark.edges;

        _.each(fabacademy, (post, index) => {
          const previous = index === fabacademy.length - 1 ? null : fabacademy[index + 1].node;
          const next = index === 0 ? null : fabacademy[index - 1].node;

          createPage({
            path: `fabacademy/${post.node.frontmatter.slug}`,
            component: postTemplate,
            context: {
              slug: post.node.frontmatter.slug,
              previous,
              next
            }
          });
        });
      })
    );
  });
};

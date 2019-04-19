const _ = require('lodash');
const path = require('path');
const Promise = require('bluebird');
const { createFilePath } = require(`gatsby-source-filesystem`);

// exports.createPages = async function({actions, graphql}) {
//   const { createPage } = actions

//   await graphql(`    {
//     allMarkdownRemark(
//       sort: { order: DESC, fields: [frontmatter___date] }
//       limit: 1000
//       filter: {
//         frontmatter: { published: { eq: true } }
//         fileAbsolutePath: { regex: "/reflections/" }
//       }
//     ) {
//       edges {
//         node {
//           frontmatter {
//             slug
//             title
//           }
//         }
//       }
//     }
//   }
//   `
// ).then(result => {
//   if (result.errors) {
//     console.log(result.errors);
//     reject(result.errors);
//   }

//   // create Reflections pages

//   const reflections = result.data.allMarkdownRemark.edges;

//   _.each(reflections, (reflection, index) => {
//     const previous = index === reflections.length - 1 ? null : reflections[index + 1].node;
//     const next = index === 0 ? null : reflections[index - 1].node;

//     createPage({
//       path: `reflections/${reflection.node.frontmatter.slug}`,
//       component: postTemplate,
//       context: {
//         slug: reflection.node.frontmatter.slug,
//         previous,
//         next
//       }
//     });
//   });
//   })
// }

// exports.createPages = async function({actions, graphql}) {
//   const { createPage } = actions

//   await graphql(`    {
//     allMarkdownRemark(
//       sort: { order: DESC, fields: [frontmatter___date] }
//       limit: 1000
//       filter: {
//         frontmatter: { published: { eq: true } }
//         fileAbsolutePath: { regex: "/fabacademy/" }
//       }
//     ) {
//       edges {
//         node {
//           frontmatter {
//             slug
//             title
//           }
//         }
//       }
//     }
//   }
//   `
// ).then(result => {
//   if (result.errors) {
//     console.log(result.errors);
//     reject(result.errors);
//   }

//   // create Reflections pages

//   const fabacademy = result.data.allMarkdownRemark.edges;

//   _.each(fabacademy, (post, index) => {
//     const previous = index === fabacademy.length - 1 ? null : fabacademy[index + 1].node;
//     const next = index === 0 ? null : fabacademy[index - 1].node;

//     createPage({
//       path: `fabacademy/${post.node.frontmatter.slug}`,
//       component: postTemplate,
//       context: {
//         slug: post.node.frontmatter.slug,
//         previous,
//         next
//       }
//     });
//   });
//   })
// }

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const postTemplate = path.resolve(`./src/templates/post.js`);
    const postAcademyTemplate = path.resolve(`./src/templates/postAcademy.js`);

    resolve(
      graphql(`
        {
          reflections: allMarkdownRemark(
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
          fabacademy: allMarkdownRemark(
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

        const reflections = result.data.reflections.edges;
        const fabacademy = result.data.fabacademy.edges;

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

        _.each(fabacademy, (post, index) => {
          const previous = index === fabacademy.length - 1 ? null : fabacademy[index + 1].node;
          const next = index === 0 ? null : fabacademy[index - 1].node;

          createPage({
            path: `minilab/${post.node.frontmatter.slug}`,
            component: postAcademyTemplate,
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

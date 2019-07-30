require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  pathPrefix: '/2018/ilja.panic',
  siteMetadata: {
    name: `MDEF Diary`,
    email: `ilja.aleksandar.panic@iaac.net`,
    author: `Ilja A. Panic`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/reflections`,
        name: 'reflections'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/fabacademy`,
        name: 'fabacademy'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data`,
        name: 'data'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images/`,
        name: `images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/`,
        name: `content`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: true
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1600,
              showCaptions: true,
              backgroundColor: 'transparent',
              quality: 85
            }
          },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: null
            }
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          `gatsby-remark-embed-video`,
          `gatsby-remark-responsive-iframe`
        ]
      }
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`postcss-import`),
          require(`postcss-custom-selectors`),
          require(`postcss-custom-media`),
          require(`postcss-css-variables`),
          require(`postcss-color-function`),
          require(`postcss-hexrgba`),
          require(`postcss-calc`),
          require(`autoprefixer`)
        ]
      }
    },
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        typekit: {
          id: 'qal5cyi'
        }
      }
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.GATSBY_AIRTABLE_API_KEY,
        tables: [
          {
            baseId: process.env.GATSBY_AIRTABLE_BASE_ID,
            tableName: `feed`,
            tableView: `published`,
            queryName: `allFeeds`,
            mapping: {
              notes: `text/markdown`
            },
            tableLinks: [`tags`]
          },
          {
            baseId: process.env.GATSBY_AIRTABLE_BASE_ID,
            tableName: `tags`,
            tableView: `sorted`,
            queryName: `allTags`,
            tableLinks: [`feed`]
          }
        ]
      }
    },
    `gatsby-plugin-twitter`,
    `gatsby-plugin-react-helmet`
  ]
};

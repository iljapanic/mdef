require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  pathPrefix: '/ilja.panic',
  siteMetadata: {
    name: `MDEF Diary`,
    email: `ilja.aleksandar.panic@iaac.net`,
    author: `Ilja A. Panic`
  },
  plugins: [
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
        },
        google: {
          families: ['Merriweather', 'PT Mono', 'Merriweather Sans', 'Open Sans']
        }
      }
    },
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
        path: `${__dirname}/src/data`,
        name: 'data'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: `images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content`,
        name: `content`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1600,
              showCaptions: true,
              backgroundColor: 'transparent',
              quality: 75
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
          // `gatsby-remark-component`
        ]
      }
    },
    {
      resolve: `gatsby-plugin-matomo`,
      options: {
        siteId: '1',
        matomoUrl: 'https://analytics.infomatics.io',
        siteUrl: 'https://mdef.gitlab.io/ilja.panic/'
      }
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.GATSBY_AIRTABLE_API_KEY,
        tables: [
          {
            baseId: process.env.GATSBY_AIRTABLE_BASE_ID,
            tableName: `Feed`,
            tableView: `Published`,
            queryName: `allFeeds`,
            tableLinks: `Tags`,
            mapping: { Notes: 'text/markdown' }
          },
          {
            baseId: process.env.GATSBY_AIRTABLE_BASE_ID,
            tableName: `Tags`,
            tableView: `Sorted`,
            queryName: `allTags`,
            tableLinks: `Feed`
          }
        ]
      }
    },
    `gatsby-plugin-twitter`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`
  ]
};

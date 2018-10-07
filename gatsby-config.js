module.exports = {
  pathPrefix: '/ilja.panic',
  siteMetadata: {
    name: `MDEF Diary`,
    email: `ilja.aleksandar.panic@iaac.net`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`postcss-import`),
          require(`postcss-custom-selectors`),
          require(`postcss-custom-media`),
          require(`postcss-css-variables`),
          require(`postcss-color-function`),
          require(`postcss-calc`),
          require(`autoprefixer`)
        ]
      }
    },
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: [`Rubik:300,400,500`]
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/notes`,
        name: 'notes'
      }
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: './src/images/favicon.png'
      }
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1000,
              quality: 75,
              showCaptions: true
            }
          },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: null
            }
          },
          `gatsby-remark-smartypants`,
          `gatsby-remark-copy-linked-files`
        ]
      }
    },
    `gatsby-plugin-react-helmet`
  ]
};

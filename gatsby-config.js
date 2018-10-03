module.exports = {
  pathPrefix: `/ilja.panic`,
  siteMetadata: {
    title: `Ilja Panic | MDEF`,
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
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`
  ]
};

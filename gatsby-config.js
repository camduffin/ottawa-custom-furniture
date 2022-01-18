module.exports = {
  siteMetadata: {
    title: `Ottawa Custom Furniture`,
    description: `Custom furniture designed and built by Murray Spencer in Ottawa, Canada.`,
    author: `@camduffin`,
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `yz3pi6anpbei`,
        accessToken: `13N5ZbXsBqb9AGD6mDOBhFpTb5ibI2m6Qx40xiHGEAA`
      }
    },
    `gatsby-plugin-transition-link`,
    `react-icons`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-background-image`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ottawa Custom Furniture`,
        short_name: `OCF`,
        start_url: `/`,
        background_color: `#F5F5EF`,
        theme_color: `#883F39`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-offline`,
  ],
}

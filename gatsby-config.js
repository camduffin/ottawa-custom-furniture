module.exports = {
  siteMetadata: {
    title: `Ottawa Custom Furniture`,
    description: `Custom furniture designed and built by Murray Spencer in Ottawa, Canada.`,
    siteUrl: `https://www.ottawacustomfurniture.ca/`,
    keywords: `ottawa custom furniture, furniture, ottawa furniture, custom furniture, murray spencer, nepean furniture, cabinet, ottawa cabinet, ottawa cabinetry, handmade furniture ottawa, handmade furniture, ottawa west furniture, woodworking ottawa, ottawa table, ottawa chair, ottawa handmade chair, ottawa handmade table, ottawa handmade desk, ottawa custom table, ottawa custom chair, ottawa custom desk`,
    image: `src/images/conferenceThree.jpg`,
    author: `@camduffin`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-L2C6EMEFNM", // Google Analytics / GA
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    `gatsby-plugin-sitemap`,
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
        background_color: `#FDEFE2`,
        theme_color: `#2D2F83`,
        display: `fullscreen`,
        icon: `src/images/transparent-white.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-offline`,
  ],
}

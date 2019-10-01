module.exports = {
  pathPrefix: "/wtch",
  siteMetadata: {
    title: `wtch`,
    description: `Kick off your next, great Gatsby project with this starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        name: `wtch`,
        short_name: `wtch`,
        start_url: `/`,
        background_color: `#e0e0e0`,
        theme_color: `#e0e0e0`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}

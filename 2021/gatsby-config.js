module.exports = {
  pathPrefix: `/2021`,
  siteMetadata: {
    title: `JSConf JP`,
    description: `jsconf.jp is a JavaScript festival in Japan powered by Japan Node.js Association. This is the first event of jsconf in Japan. We would love to become a bridge between Japanese Web Developers and International Web Developers.`,
    author: `JSConf JP`,
    twitter: `jsconfjp`,
    siteUrl: `https://jsconf.jp`,
    ticketUrl: ``,
    sponsorFormUrl: `https://docs.google.com/forms/d/e/1FAIpQLSeGwPvfFFiodywybwRZ5EU-dSU37SR_L0vj9aLX7MnYNgeiFg/viewform?usp=sf_link`,
    cfpFormUrl: `https://docs.google.com/forms/d/e/1FAIpQLScJN0ManJjQ33QYqqSFIgCYLLxVqwygGw0WfNYy0V4d-VILyw/viewform?usp=sf_link`
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-zopfli`,
    `gatsby-plugin-brotli`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `G-NT6G523KSJ`,
        anonymize: true,
        respectDNT: true,
        defer: true,
        enableWebVitalsTracking: true
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Lato:400,700`],
        display: "swap"
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `articles`,
        path: `${__dirname}/src/data`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/data`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-external-links`
        ]
      }
    },
    `gatsby-transformer-yaml`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-sharp`,
      options: {
        checkSupportedExtensions: false
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `JSConf JP`,
        short_name: `JSConf JP`,
        start_url: `/2021/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`
      }
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: ["**/*"]
      }
    },
    `gatsby-plugin-image`
  ]
}

module.exports = {
  siteMetadata: {
    title: `Sreehari Sreedev`,
    author: {
      name: `Sreehari Sreedev`,
    },
    description: `Sreehari's blog`,
    siteUrl: `https://ssree.dev/`,
    social: {
      github: `sreehax`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sreehari Sreedev`,
        short_name: `Sreehari Sreedev`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/profile-pic.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`
    //`gatsby-plugin-offline`,
  ],
}

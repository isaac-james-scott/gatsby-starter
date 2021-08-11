module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Herbs Studio",
  },
  plugins: [
    // Add when we have a contentful account
    // {
    //   resolve: "gatsby-source-contentful",
    //   options: {
    //     accessToken: "",
    //     spaceId: "",
    //   },
    // },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    // Add when we have the GA value
    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //     trackingId: "",
    //   },
    // },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-plugin-typescript",
    'gatsby-plugin-root-import',
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};

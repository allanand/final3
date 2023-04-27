require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const config = require("./package.json");

const { title, description, author, repository, homepage } = config;

const siteMetadata = {
  companyName: `test`,
  companyUrl: repository.url,
  authorName: author.name,
  authorUrl: author.url,
  siteUrl: homepage,
  siteDescription: description,
  title: `test`
};


module.exports = {
  siteMetadata,
  plugins: [
    "gatsby-plugin-resolve-src",
    {
      resolve: "gatsby-plugin-sass",
      options: {
        implementation: require("sass"),
      },
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    "gatsby-plugin-react-leaflet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: siteMetadata.companyName,
        short_name: siteMetadata.companyName,
        start_url: "/",
        icon: "src/assets/images/react-leaflet-icon.png",
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "STARTGG",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "startgg",
        // Url to query from
        url: "https://api.start.gg/gql/alpha",
        headers: {
          Authorization: `Bearer b613581b58f81f3d2c74a19c3a7e848a`,
        },
      },
    },
  ]
};




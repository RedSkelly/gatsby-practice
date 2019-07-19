module.exports = {
  siteMetadata: {
    title: 'Gatsby Practice',
    author: 'Shaun Kelly',
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: `j9ugr3szekf1`,
        accessToken: `GRHqqyOZ85YE3NpHS5tQ4DW5rFKNsAldj9w0qCIB8g0`,
      },
    },
  ],
}

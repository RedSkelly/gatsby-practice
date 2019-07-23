// generate a slug for each post

// node.js docs: path.basename(path[, ext])
// gatsby docs: gatsby node api: onCreateNode
const path = require('path')

// gatsby docs: gatsby node api: createPages
module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // path to template
  const blogTemplate = path.resolve('./src/templates/blog.js')
  const res = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  res.data.allContentfulBlogPost.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}

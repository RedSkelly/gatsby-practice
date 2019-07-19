// generate a slug for each post

// node.js docs: path.basename(path[, ext])
const path = require('path')

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'MarkdownRemark') {
    const slug = path.basename(node.fileAbsolutePath, '.md')

    // make sure slug prints in terminal (look for the noticeable '@@@@@@...')
    console.log('@@@@@@@@@@@@@@@@@@', slug)
    // console.log(JSON.stringify(node, undefined, 4))
  }
}

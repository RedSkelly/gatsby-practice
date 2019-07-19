module.exports.onCreateNode = (node, actions) => {
  const { createNodeField } = actions

  // JSON.stringify instead of console.log(node) so that it can be viewed in terminal
  console.log(JSON.stringify(node, undefined, 4))
}

const Promise = require('bluebird')
const path = require('path')
const fs = require('fs')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post.js')
    resolve(
      graphql(
        `
          {
            allContentfulBlogPost {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
          `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.allContentfulBlogPost.edges
        posts.forEach((post, index) => {
          createPage({
            path: `/blog/${post.node.slug}/`,
            component: blogPost,
            context: {
              slug: post.node.slug
            },
          })
        })
      })
    )
  })
}

jsonFile = fs.readFileSync('static.json');
staticJson = JSON.parse(jsonFile);
var root = staticJson['root'];
var header = staticJson['header'];

exports.onCreateDevServer = ({ app }) => {
  app.use(function (req, res, next) {
    console.log("Request = ",req.url);
    for(var itemHeader in header){
      re = globToRegExp(itemHeader);
      var isSet = re.test(req.url);
      if(isSet){
        res.set(header[itemHeader]);
      }
    }
      next();
  });
}

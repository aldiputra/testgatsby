const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-blog-js": hot(preferDefault(require("/Users/aldi_p/testgatsby/src/pages/blog.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/aldi_p/testgatsby/src/pages/index.js"))),
  "component---src-templates-blog-post-js": hot(preferDefault(require("/Users/aldi_p/testgatsby/src/templates/blog-post.js")))
}


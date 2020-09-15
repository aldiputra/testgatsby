require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
}

// if you want to use the preview API please define
// CONTENTFUL_HOST in your environment config
// the `host` property should map to `preview.contentful.com`
// https://www.contentful.com/developers/docs/references/content-preview-api/#/reference/spaces/space/get-a-space/console/js
if (process.env.CONTENTFUL_HOST) {
  contentfulConfig.host = process.env.CONTENTFUL_HOST
}

const { spaceId, accessToken } = contentfulConfig

if (!spaceId || !accessToken) {
  throw new Error(
    'Contentful spaceId and the access token need to be provided.'
  )
}

module.exports = {
  siteMetadata: {
    title: 'Gatsby Contentful starter',
  },
  pathPrefix: '/gatsby-contentful-starter',
  plugins: [
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          "/page-data/*.json": [
            "cache-control: public",
            "cache-control: max-age=1000",
            "cache-control: must-revalidate",
          ],
          "/**.js": [
            "cache-control: public",
            "cache-control: max-age=2592000",
          ],
          "/**.css": [
            "cache-control: public",
            "cache-control: max-age=2592000",
          ],
          "/static/*": [
            "cache-control: public",
            "cache-control: max-age=31536000",
            "cache-control: immutable",
          ],
          "/": [
            "cache-control: private",
            "cache-control: no-cache",
            "cache-control: max-age=3600",
          ],
          "/blog/**": [
            "cache-control: private",
            "cache-control: no-cache",
            "cache-control: max-age=3600",
          ],
        },
      },
    },
  ],
}

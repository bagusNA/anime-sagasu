module.exports = {
  client: {
    service: {
      name: 'anime-sagasu',
      // URL to the GraphQL API
      url: 'https://graphql.anilist.co',
    },
    // Files processed by the extension
    includes: [
      'src/**/*.vue',
      'src/**/*.js',
    ],
  },
}
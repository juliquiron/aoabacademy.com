module.exports = {
  siteMetadata: {
    title: 'AOAB Academy',
    description: 'Academia Online de Acuicultura de Barcelona',
    siteUrl: 'https://aoabacademy.com',
    author: 'Julià Mestieri',
    twitter: 'julimestieri',
    adsense: '',
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Poppins', 'Poppins:blod'],
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Gatstrap',
        short_name: 'Gatstrap',
        description: 'Gatsby starter for bootstrap a blog',
        homepage_url: 'https://gatstrap.netlify.com',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#673ab7',
        display: 'standalone',
        icons: [
          {
            src: '/img/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/img/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-119761864-2',
      },
    },
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        mergeSecurityHeaders: true,
        mergeLinkHeaders: true,
        mergeCachingHeaders: true,
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sass',
    'gatsby-plugin-sitemap',
    'gatsby-transformer-sharp',
    'react-bootstrap',
  ],
}

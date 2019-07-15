module.exports = {
  siteTitle: 'Jacob Ashcraft - Software Engineer',
  siteDescription: 'A Software Engineer specializing in Web Development and Digital Media Design.',
  authorName: 'Jacob Ashcraft',
  twitterUsername: 'TechReaderJake',
  authorAvatar: 'avatar.jpeg', // file in content/images
  multilangPosts: false, // enable/disable flags in post lists
  authorDescription: `
  For the last five years, Jacob Ashcraft has worked towards a Bachelors in Software Enineering at Snow College. 
  He currently is a husband, and a father of two children. He focuses on front-end development and enjoys C# and the Javascript languages.
  He enjoys reading fantasy novels, anything techy, and enjoying spending time with family.
  `,
  // authorDescription: `
  // For the last decade, Maxence Poutord has worked with a variety of web technologies. He is currently focused on front-end development.
  // On his day to day job, he is working as a senior front-end engineer at VSware. He is also a frequent tech speaker and a mentor.
  // As a new digital nomad, he is living where the WIFI and sun is 😎 <br>
  // Do you want to know more? <a href="https://www.maxpou.fr/about" target="_blank">Visit my website!</a>
  // `,
  siteUrl: 'https://techreaderjake.github.io/',
  disqusSiteUrl: 'https://jacobashcraft.disqus.com/',
  // Prefixes all links. For cases when deployed to maxpou.fr/gatsby-starter-morning-dew/
  pathPrefix: '/', // Note: it must *not* have a trailing slash.
  siteCover: 'cover-baymax.jpeg', // file in content/images
  googleAnalyticsId: '',
  background_color: '#ffffff',
  theme_color: '#ffc671',
  display: 'standalone',
  icon: 'content/images/ja-logo-brown.png',
  postsPerPage: 2,
  disqusShortname: 'jacobashcraft',
  headerTitle: 'Jacob Ashcraft',
  headerLinksIcon: 'ja-logo-brown.png', //  (leave empty to disable: '')
  headerLinks: [
    {
      label: 'Cover Letter',
      url: '/cover-letter',
    },
    {
      label: 'Work Experience',
      url: '/work-experience',
    },
    {
      label: 'Education',
      url: '/education',
    },
    {
      label: 'Skills',
      url: '/skills',
    },
    {
      label: 'Blog',
      url: '/blog',
    },
  ],
  // Footer information (ex: Github, Netlify...)
  websiteHost: {
    name: 'GitHub',
    url: 'https://github.com',
  },
  footerLinks: [
    {
      sectionName: 'Explore',
      links: [
        {
          label: 'Sitemap',
          url: '/sitemap',
        },
        {
          label: 'Policy',
          url: '/policy',
        },
        {
          label: 'Installation',
          url: '/how-to-install',
        },
      ],
    },
    {
      sectionName: 'Follow the author',
      links: [
        {
          label: 'Github',
          url: 'https://github.com/techreaderjake',
        },
        {
          label: 'Website',
          url: 'https://www.jacobashcraft.com',
        },
        {
          label: 'Linkedin',
          url: 'https://www.linkedin.com',
        },
      ],
    },
  ],
}

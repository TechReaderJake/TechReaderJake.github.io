module.exports = {
  siteTitle: 'Jacob Ashcraft',
  siteDescription: 'A Software Engineer specializing in Web Development and Digital Media Design.',
  authorName: 'Jacob Ashcraft',
  twitterUsername: 'TechReaderJake',
  authorAvatar: 'avatar.jpg', // file in content/images
  multilangPosts: false, // enable/disable flags in post lists
  authorDescription: `
  For the last five years, Jacob Ashcraft has worked towards a Bachelors in Software Engineering at Snow College while raising a family. 
  He currently is a husband, and a father of two children. He focuses on front-end development and enjoys C# and the Javascript languages.
  He enjoys reading fantasy novels, anything techy, and spending time with family.
  `,

  siteUrl: 'https://jacobashcraft.com/',
  disqusSiteUrl: 'https://jacobashcraft.disqus.com/',
  pathPrefix: '', // Note: it must *not* have a trailing slash.
  siteCover: 'roadway.jpg', // file in content/images
  googleAnalyticsId: 'UA-143944390-1',
  background_color: '#ffffff',
  theme_color: '#ffc671',
  display: 'standalone',
  icon: 'content/images/ja-logo-brown.png',
  postsPerPage: 10,
  disqusShortname: 'jacobashcraft',
  headerTitle: 'Jacob Ashcraft',
  headerLinksIcon: 'ja-logo-brown.png', //  (leave empty to disable: '')
  headerLinks: [
    {
      label: 'Cover Letter',
      url: '/cover-letter',
    },
    {
      label: 'Design',
      url: '/design/'
    },
    /*{
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
    },*/
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
        /*{
          label: 'Sitemap',
          url: '/sitemap',
        },*/
        {
          label: 'Terms of Use',
          url: '/terms-of-use',
        },
        {
          label: 'About Me',
          url: '/about-me',
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
        /*{
          label: 'Github Secondary',
          url: 'https://www.github.com/chillica',
        },*/
        {
          label: 'Linkedin',
          url: 'https://www.linkedin.com',
        },
      ],
    },
  ],
}

import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '28fca66117df44d387e6bbba00c7e245',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'El blog de ImpaKta',
  domain: 'www.impakta.org',
  author: 'Equipo ImpaKta',
  email: 'info@impakta.org',
  license: 'CC BY-NC 4.0',

  // open graph metadata (optional)
  description: 'Impakta team blog',

  // social usernames (optional)
  reddit: 'impakta',
  //twitter: 'transitive_bs',
  //github: 'transitive-bullshit',
  //linkedin: 'fisch2',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon:
    'https://impakta-blog.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fe927f761-65f8-437d-89dc-b7577676e57e%2Fb75737b2-9a9e-42d9-a013-a24323120c95%2Flogo-impakta-modified.png?table=block&id=28fca661-17df-44d3-87e6-bbba00c7e245&spaceId=e927f761-65f8-437d-89dc-b7577676e57e&width=250&userId=&cache=v2',
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  pageUrlOverrides: {
    '/members': '83e616356bfc469f99504021a713f0dd',
    '/posts': 'c015ff87a5aa44e0903c25fe12e9209f'
  },

  // whether to use the default notion navigation style or a custom one with links to
  // important pages. To use `navigationLinks`, set `navigationStyle` to `custom`.
  // navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'Miembros',
      pageId: '83e616356bfc469f99504021a713f0dd'
    },
    {
      title: 'Artículos',
      pageId: 'c015ff87a5aa44e0903c25fe12e9209f'
    }
  ]
})

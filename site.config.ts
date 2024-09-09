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
  defaultPageIcon: null,
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
     '/members': '83e616356bfc469f99504021a713f0dd'
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
   },

  // whether to use the default notion navigation style or a custom one with links to
  // important pages. To use `navigationLinks`, set `navigationStyle` to `custom`.
  // navigationStyle: 'default'
   navigationStyle: 'custom',
   navigationLinks: [
     {
       title: 'Members',
       pageId: '83e616356bfc469f99504021a713f0dd'
    }
  //   {
  //     title: 'Contact',
  //     pageId: '6a29ebcb935a4f0689fe661ab5f3b8d1'
  //   }
   ]
})

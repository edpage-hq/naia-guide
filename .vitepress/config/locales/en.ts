import type { DefaultTheme, LocaleInterface, NavType, SidebarItemType } from '@viteplus/versions'

export const en: LocaleInterface = {
  lang: 'en',
  label: 'English',
  description: "Naia's user guide, edPage group's project management platform.",

  themeConfig: {
    nav: nav(),
    siteTitle: 'Naia Guide',

    // @viteplus/versions prepends the locale segment to `base` itself
    // (see its populateSidebar step) — writing `/en/guide/` here too
    // doubled it into `/en/en/guide/`, which silently broke VitePress'
    // prev/next page footer for every English page (it couldn't match
    // the current route against that base, so it always fell back to
    // the first sidebar entry). The French locale never hit this since
    // its locale prefix is empty. Keep this relative, like `fr.ts`'s
    // `/guide/`.
    sidebar: {
      '/en/guide/': { base: '/guide/', items: sidebarGuide() },
    },

    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} <a href="https://edpage.net" target="_blank">edPage</a>`,
    },
  },
}

function nav(): NavType {
  return {
    root: [
      {
        text: 'Read the guide',
        link: '/en/guide/introduction',
        activeMatch: '/en/guide/',
      },
      {
        text: 'Report a problem',
        link: 'https://github.com/edpage-hq/naia-guide/issues',
        target: '_blank',
        rel: 'noopener',
      },
      { component: 'VersionSwitcher' },
    ],
  }
}

function sidebarGuide(): SidebarItemType[] {
  return [
    {
      text: 'Welcome',
      collapsed: false,
      items: [
        { text: 'Introduction', link: 'introduction' },
        { text: 'Need help?', link: 'support' },
      ],
    },
    {
      text: 'Guides by role',
      collapsed: false,
      items: [
        { text: 'Client', link: 'client' },
        { text: 'Partner', link: 'partenaire' },
        { text: 'Referrer', link: 'apporteur-affaires' },
        { text: 'Project manager & Collaborators', link: 'chef-projet-collaborateurs' },
        { text: 'Administrator', link: 'administrateur' },
        { text: 'Direction', link: 'direction' },
        { text: 'External contributor', link: 'contributeur-externe' },
      ],
    },
  ]
}

export const search: DefaultTheme.LocalSearchOptions['locales'] = {
  en: {
    translations: {
      button: {
        buttonText: 'Search',
        buttonAriaLabel: 'Search',
      },
      modal: {
        displayDetails: 'Display detailed list',
        resetButtonTitle: 'Reset search',
        backButtonTitle: 'Close search',
        noResultsText: 'No results for',
        footer: {
          selectText: 'to select',
          navigateText: 'to navigate',
          closeText: 'to close',
        },
      },
    },
  },
}

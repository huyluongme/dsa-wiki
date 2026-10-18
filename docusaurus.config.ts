import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'DSA Wiki',
  tagline: 'Learn and look up data structures and algorithms',
  favicon: 'img/favicon.svg',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Production URL of the site (GitHub Pages: https://<user>.github.io)
  url: 'https://huyluongme.github.io',
  // GitHub Pages serves a project site under /<repo-name>/
  baseUrl: '/dsa-wiki/',
  trailingSlash: false,

  // GitHub pages deployment config.
  organizationName: 'huyluongme',
  projectName: 'dsa-wiki',

  onBrokenLinks: 'throw',

  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'throw',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'vi'],
    localeConfigs: {
      en: {label: 'English', htmlLang: 'en-US'},
      vi: {label: 'Tiếng Việt', htmlLang: 'vi-VN'},
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          // Docs-only mode: the docs are the site, served from the root.
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/huyluongme/dsa-wiki/tree/master/',
          editLocalizedFiles: true,
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    '@docusaurus/theme-mermaid',
    [
      '@easyops-cn/docusaurus-search-local',
      {
        // Offline search index, built at `npm run build` (not available in `npm start`).
        hashed: true,
        language: ['en', 'vi'],
        indexDocs: true,
        indexBlog: false,
        indexPages: false,
        docsRouteBasePath: '/',
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        // KaTeX renders each formula three times (visual, MathML, LaTeX source);
        // index only the MathML text so results do not repeat it.
        ignoreCssSelectors: ['.katex-html', '.katex-mathml annotation'],
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      // Always start in light mode regardless of the OS setting.
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'DSA Wiki',
      logo: {
        alt: 'DSA Wiki logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/huyluongme/dsa-wiki',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      copyright: 'Copyright © huyluongme. Built with Docusaurus.',
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'c', 'cpp', 'java', 'python'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

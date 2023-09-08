// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SINOHOPE',
  tagline: 'All-in-one Platform for Digital Assets Custody',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.sinohope.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'sinohope', // Usually your GitHub org/user name.
  projectName: 'sinohope-docs', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-Hant'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: "docs",
          sidebarPath: require.resolve('./sidebars.js'),
          docLayoutComponent: "@theme/DocPage",
          docItemComponent: "@theme/ApiItem" // add @theme/ApiItem here
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/social-card.png',
      navbar: {
        title: 'SINOHOPE',
        logo: {
          alt: 'SINOHOPE Logo',
          src: 'img/logo.svg',
        },
        items: [
          // Use
          {
            label: 'Use',
            position: 'left',
            items: [
              {
                type: 'docSidebar',
                sidebarId: 'solutionsSidebar',
                label: 'Products&Solutions',
                to: '/docs/use/cases',
              },
              {
                type: 'docSidebar',
                sidebarId: 'userGuideSidebar',
                label: 'User Guide',
                to: '/docs/use/user-guide/',
              },
            ],
          },

          // Learn
          {
            label: 'Learn',
            position: 'left',
            items: [
              {
                type: 'docSidebar',
                sidebarId: 'newsSidebar',
                label: 'News',
                to: '/docs/learn/news/',
              },
              {
                label: 'Blog',
                to: 'blog',
              },
              {
                label: 'Sinohope Lecture',
                href: 'https://space.bilibili.com/3493266041342842/channel/series',
              },
            ],
          },

          // Develop
          {
            label: 'Develop',
            position: 'left',
            items: [
              {
                type: 'docSidebar',
                sidebarId: 'getStartedSidebar',
                label: 'Get Started',
                to: '/docs/develop/get-started/quick-start',
              },
              {
                type: 'docSidebar',
                sidebarId: 'openLoopApiSidebar',
                label: 'OpenLoop API',
                to: '/docs/category/openloop-api',
              },
              {
                type: 'docSidebar',
                sidebarId: 'mpcApiSidebar',
                label: 'MPC WaaS API',
                to: '/docs/category/mpc-waas-api',
              },
              {
                type: 'docSidebar',
                sidebarId: 'fullCustodyApiSidebar',
                label: 'Full Custody WaaS API',
                to: '/docs/category/full-custody-waas-api',
              }
            ],
          },

          //right
          {
            href: 'https://github.com/sinohope',
            label: 'GitHub',
            position: 'right',
          },

          {
            type: 'localeDropdown',
            position: 'right',
          },

        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'User Guide',
                to: '/docs/use/user-guide/SUMMARY',
              }, {
                label: 'Developer Guide',
                to: '/docs/develop/get-started/quick-start',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/SinohopeGroup',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/SINOHOPE_DEV',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Feedback',
                href: 'https://github.com/sinohope/feedback',
              },
            ],
          },

        ],
        copyright: `Copyright © ${new Date().getFullYear()} SINOHOPE. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  plugins: [
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "openapi",
        docsPluginId: "classic", // e.g. "classic" or the plugin-content-docs id
        config: {
          'mpc-waas-api': { // "petstore" is considered the <id> that you will reference in the CLI
            specPath: "openapi/mpc-waas-api/openapi.yaml", // path or URL to the OpenAPI spec
            outputDir: "docs/develop/mpc-waas-api", // output directory for generated *.mdx and sidebar.js files
            template: "api.mustache", // Customize API MDX with mustache template
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
          'full-cusotdy-waas-api': { // "petstore" is considered the <id> that you will reference in the CLI
            specPath: "openapi/full-custody-waas-api/openapi.yaml", // path or URL to the OpenAPI spec
            outputDir: "docs/develop/full-custody-waas-api", // output directory for generated *.mdx and sidebar.js files
            template: "api.mustache", // Customize API MDX with mustache template
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
          'openloop-api': { // "petstore" is considered the <id> that you will reference in the CLI
            specPath: "openapi/openloop-api/openapi.yaml", // path or URL to the OpenAPI spec
            outputDir: "docs/develop/openloop-api", // output directory for generated *.mdx and sidebar.js files
            template: "api.mustache", // Customize API MDX with mustache template
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          }
        }
      },]
  ],

  themes: ["docusaurus-theme-openapi-docs"] // exports ApiItem and ApiDemoPanel

};

module.exports = config;

/* eslint-disable no-multi-spaces */
import { defineConfig } from 'vitepress'
import { buildEnd } from './buildEnd.config'
import markdownItFootnote from 'markdown-it-footnote'

export default defineConfig({
  title: '@gerardroche',
  description: 'Tips and opinions from a software developer.',
  lang: 'en',
  srcDir: 'src',
  srcExclude: ['reusables/**'],
  cleanUrls: true,

  locales: {
    root: {
      label: 'English',
      lang: 'en',
    },
    // es: { label: 'Spanish', lang: 'es' },
    // fr: { label: 'French', lang: 'fr' },
    // ga: { label: 'Irish', lang: 'ga' },
    // ru: { label: 'Russian', lang: 'ru' },
    // zh: { label: '简体中文', lang: 'zh' },
    // ...
  },

  sitemap: {
    hostname: 'https://blog.gerardroche.com',
  },

  markdown: {
    config: (md) => {
      md.use(markdownItFootnote)
    },
  },

  buildEnd,

  themeConfig: {

    logo: '/avatar.svg',

    lastUpdated: true,

    editLink: {
      pattern: 'https://github.com/gerardroche/gerardroche.github.io/edit/master/src/:path',
    },

    socialLinks: [
      { icon: 'x', link: 'https://x.com/gerardroche_' },
      { icon: 'github', link: 'https://github.com/gerardroche' },
    ],

    search: {
      provider: 'local',
    },

    nav: [
      { text: 'Writing', link: '/writing/' },
      { text: 'Projects', link: '/projects/' },
      { text: 'Toolbox', link: '/toolbox/' },
      { text: 'About', link: '/about/' },
    ],

    sidebar: {

      '/projects/': [
        {
          text: 'Projects',
          link: '/projects/',
          items: [
            {
              text: 'Sublime Text',
              collapsed: true,
              items: [
                { text: 'Sesame', link: '/projects/sublime-sesame' },
                { text: 'PHPUnit', link: '/projects/sublime-phpunit' },
              ],
            },
          ],
        },
      ],

      '/20': [
        {
          text: 'Writing',
          collapsed: true,
          items: [
            { link: '/2017/11/01/neovintageous-1.4.0/',  text: 'NeoVintageous 1.4.0' },
            { link: '/2018/02/16/renaming-git-submodules/',  text: 'Renaming Git submodules' },
            { link: '/2018/02/17/ubuntu-keymaps/',  text: 'Ubuntu keymaps' },
            { link: '/2018/02/18/git-interactive-patching/',  text: 'Git interactive patching' },
            { link: '/2018/02/21/neovintageous-1.5.0/',  text: 'NeoVintageous 1.5.0' },
            { link: '/2018/05/21/neovintageous-1.6.0/',  text: 'NeoVintageous 1.6.0' },
            { link: '/2018/07/22/bash-prompt-snobbery/',  text: 'Bash-prompt-snobbery' },
            { link: '/2018/09/02/neovintageous-1.7.0/',  text: 'NeoVintageous 1.7.0' },
            { link: '/2019/02/12/neovintageous-1.8.0/',  text: 'NeoVintageous 1.8.0' },
            { link: '/2019/02/12/toggle-sidebar/',  text: 'Toggle sidebar' },
            { link: '/2019/02/21/neovintageous-1.9.0/',  text: 'NeoVintageous 1.9.0' },
            { link: '/2019/02/26/toggle-zoom/',  text: 'Toggle zoom' },
            { link: '/2019/03/05/neovintageous-1.10.0/',  text: 'NeoVintageous 1.10.0' },
            { link: '/2019/03/26/neovintageous-1.11.0/',  text: 'NeoVintageous 1.11.0' },
            { link: '/2019/05/09/neovintageous-1.12.0/',  text: 'NeoVintageous 1.12.0' },
            { link: '/2019/05/14/neovintageous-1.13.0/',  text: 'NeoVintageous 1.13.0' },
            { link: '/2019/05/14/neovintageous-1.14.0/',  text: 'NeoVintageous 1.14.0' },
            { link: '/2019/05/22/neovintageous-1.15.0/',  text: 'NeoVintageous 1.15.0' },
            { link: '/2019/06/05/neovintageous-1.16.0/',  text: 'NeoVintageous 1.16.0' },
            { link: '/2019/07/11/neovintageous-1.17.0/',  text: 'NeoVintageous 1.17.0' },
            { link: '/2019/08/28/neovintageous-plugins/',  text: 'NeoVintageous plugins' },
            { link: '/2020/02/01/neovintageous-1.18.0/',  text: 'NeoVintageous 1.18.0' },
            { link: '/2020/02/19/neovintageous-1.19.0/',  text: 'NeoVintageous 1.19.0' },
            { link: '/2020/03/22/neovintageous-1.20.0/',  text: 'NeoVintageous 1.20.0' },
            { link: '/2020/04/29/neovintageous-1.21.0/',  text: 'NeoVintageous 1.21.0' },
            { link: '/2020/10/25/neovintageous-1.22.0/',  text: 'NeoVintageous 1.22.0' },
            { link: '/2020/12/11/the-curious-case-of-vim-search/',  text: 'The curious case of vim search' },
            { link: '/2020/12/12/neovintageous-1.23.0/',  text: 'NeoVintageous 1.23.0' },
            { link: '/2021/07/09/neovintageous-1.24.0/',  text: 'NeoVintageous 1.24.0' },
            { link: '/2021/07/09/php-cs-fixer-pre-commit-hook/',  text: 'Php cs fixer pre commit hook' },
            { link: '/2021/12/14/neovintageous-1.25.0/',  text: 'NeoVintageous 1.25.0' },
            { link: '/2022/01/10/neovintageous-1.26.0/',  text: 'NeoVintageous 1.26.0' },
            { link: '/2022/09/22/neovintageous-ctrl-keys/',  text: 'NeoVintageous ctrl keys' },
            { link: '/2022/09/22/neovintageous-key-handler/',  text: 'NeoVintageous key handler' },
            { link: '/2022/09/22/neovintageous-super-keys/',  text: 'NeoVintageous super keys' },
            { link: '/2022/10/01/neovintageous-1.27.0/',  text: 'NeoVintageous 1.27.0' },
            { link: '/2022/11/13/undoing-diff-hunks-in-neovintageous/',  text: 'Undoing diff hunks in neovintageous' },
            { link: '/2022/11/21/vimrc-and-neovintageousrc/',  text: 'Vimrc and neovintageousrc' },
            { link: '/2023/04/05/neovintageous-1.28.0/',  text: 'NeoVintageous 1.28.0' },
            { link: '/2023/04/06/neovintageous-1.29.0/',  text: 'NeoVintageous 1.29.0' },
            { link: '/2023/05/05/running-phpunit-tests-within-sublime-text/',  text: 'Running phpunit tests within Sublime Text' },
            { link: '/2023/05/14/neovintageous-help-pages/',  text: 'NeoVintageous help pages' },
            { link: '/2023/05/15/neovintageous-toggle-sidebar/',  text: 'NeoVintageous toggle sidebar' },
            { link: '/2023/05/16/neovintageous-mapping-sublime-text-commands/',  text: 'NeoVintageous mapping Sublime Text commands' },
            { link: '/2023/05/17/neovintageous-edit-neovintageousrc/',  text: 'NeoVintageous edit neovintageousrc' },
            { link: '/2023/05/18/neovintageous-reveal-in-side-bar/',  text: 'NeoVintageous reveal in side bar' },
            { link: '/2023/05/19/sesame-a-sublime-text-plugin/',  text: 'Sesame a Sublime Text plugin' },
            { link: '/2023/05/22/neovintageous-revert-hunk/',  text: 'NeoVintageous revert hunk' },
            { link: '/2023/05/23/neovintageous-goto-symbol/',  text: 'NeoVintageous goto symbol' },
            { link: '/2023/05/24/neovintageous-jumping-to-errors/',  text: 'NeoVintageous jumping to errors' },
            { link: '/2023/05/25/monokai-free-a-sublime-text-color-scheme/',  text: 'Monokai free a Sublime Text color scheme' },
            { link: '/2023/05/30/neovintageous-jumping-to-conflicts/',  text: 'NeoVintageous jumping to conflicts' },
            { link: '/2023/05/31/neovintageous-jumping-to-diffs/',  text: 'NeoVintageous jumping to diffs' },
            { link: '/2023/06/01/remapping-capslock-to-escape/',  text: 'Remapping capslock to escape' },
            { link: '/2023/06/02/neovintageous-jumping-to-misspelled-words/',  text: 'NeoVintageous jumping to misspelled words' },
            { link: '/2023/06/05/neovintageous-1.30.0/',  text: 'NeoVintageous 1.30.0' },
            { link: '/2023/06/05/neovintageous-options/',  text: 'NeoVintageous options' },
            { link: '/2023/06/06/neovintageous-visual-bells/',  text: 'NeoVintageous visual bells' },
            { link: '/2023/06/07/fix-laggy-key-presses/',  text: 'Fix laggy key presses' },
            { link: '/2023/06/08/git-open-a-shell-script/',  text: 'Git open a shell script' },
            { link: '/2023/06/09/sublime-text-git-open/',  text: 'Sublime Text Git open' },
            { link: '/2023/06/12/my-sublime-text-setup/',  text: 'My Sublime Text setup' },
            { link: '/2023/07/13/neovintageous-1.31.0/',  text: 'NeoVintageous 1.31.0' },
            { link: '/2023/07/25/add-a-file-to-the-staging-area/',  text: 'Add a file to the staging area' },
            { link: '/2023/08/12/neovintageous-1.32.0/',  text: 'NeoVintageous 1.32.0' },
            { link: '/2023/09/28/neovintageous-1.33.0/',  text: 'NeoVintageous 1.33.0' },
          ],
        },
      ],

    },
  },
})

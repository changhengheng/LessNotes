import { defineUserConfig, defaultTheme } from 'vuepress'

export default defineUserConfig({
    lang: 'zh-CN',
    title: '你好， VuePress ！',
    description: '这是我的第一个 VuePress 站点',
    base: '/LessNotes/',
    dest: './dist',
    repo:
        'https://github.com/changhengheng/LessNotes',
    theme: defaultTheme({
        navbar: [
            '/lessLph/README.md',
        ],
        sidebar: [
            '/lessLph/README.md',
        ],
        repo: 'https://github.com/changhengheng/LessNotes',
        repoLabel: "GitHub",
    }),
})
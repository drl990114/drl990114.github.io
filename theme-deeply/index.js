const setFrontmatter = require('./nodeUtil/setFrontmatter')

// Theme API.
module.exports = (options, ctx) => {
    const { sourceDir, themeConfig, siteConfig } = ctx
    setFrontmatter(sourceDir, themeConfig)
    return {
        extend: '@vuepress/theme-default',
        plugins: [
            ['@vuepress/search', {
                searchMaxSuggestions: 10
            }]
        ]
    }
}


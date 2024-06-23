import { getPosts, getPostLength } from "./theme/serverUtils";

async function config() {
  return {
    lang: "en-US",
    title: "RuiLin Dong",
    description: "Home of RuiLin Dong",
    head: [
      [
        "meta",
        {
          name: "author",
          content: "drl990114",
        },
      ],
      [
        "meta",
        {
          property: "og:title",
          content: "Home",
        },
      ],
      [
        "meta",
        {
          property: "og:description",
          content: "Home of RuiLin Dong",
        },
      ],
    ],
    // cleanUrls: "with-subfolders",
    lastUpdated: false,
    themeConfig: {
      logo: "",
      avator: "",
      search: {
        provider: "local",
      },
      docsDir: "/",
      // docsBranch: "master",
      posts: await getPosts(),
      pageSize: 12,
      postLength: await getPostLength(),
      nav: [
        {
          text: "🏡Blogs",
          link: "/",
        },
        {
          text: "🔖Tags",
          link: "/tags",
        },
        {
          text: "📃Archives",
          link: "/archives",
        },
      ],
      socialLinks: [
        { icon: "github", link: "https://github.com/drl990114" },
      ],
      // outline: 2, //设置右侧aside显示层级
      aside: false,
      // blogs page show firewokrs animation
      showFireworksAnimation: false,
    },
    markdown: {
      config: (md) => {
        md.use(require("markdown-it-mathjax3"));
      },
    },
  };
}
export default config();

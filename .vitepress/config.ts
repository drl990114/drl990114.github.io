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
        {
          icon: {
            svg: `<svg role="img" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="20">
            <path d="M874.666667 375.189333V746.666667a64 64 0 0 1-64 64H213.333333a64 64 0 0 1-64-64V375.189333l266.090667 225.6a149.333333 149.333333 0 0 0 193.152 0L874.666667 375.189333zM810.666667 213.333333a64.789333 64.789333 0 0 1 22.826666 4.181334 63.616 63.616 0 0 1 26.794667 19.413333 64.32 64.32 0 0 1 9.344 15.466667c2.773333 6.570667 4.48 13.696 4.906667 21.184L874.666667 277.333333v21.333334L553.536 572.586667a64 64 0 0 1-79.893333 2.538666l-3.178667-2.56L149.333333 298.666667v-21.333334a63.786667 63.786667 0 0 1 35.136-57.130666A63.872 63.872 0 0 1 213.333333 213.333333h597.333334z" ></path>
            </svg>`,
          },
          link: "mailto:drl990114@foxmail.com",
        },
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

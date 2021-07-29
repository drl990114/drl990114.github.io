 <template>
  <div class="labBackground">
    <div class="labPage">
      <div class="labMy">
        <Avatar style="margin: 0 auto" :WH="64" />
        <h1>分享生活，分享代码</h1>
        <li><router-link :to="'/home/'"> 博客 </router-link></li>
        <li><router-link :to="'/about/'"> 关于我 </router-link></li>
        <li>
          <a :href="githubConfig.link"> {{ githubConfig.name }} </a>
        </li>
      </div>

      <div class="labInfo">
        <div class="organization">
          <h1>DEMO平台</h1>
          <p>
            <a :href="githubConfig.link"
              ><span id="num-repos">{{ repos.length || 0 }}</span> 个仓库</a
            >
            <br />
            <a :href="githubConfig.link"
              ><span id="num-members">1</span> 位成员</a
            >
          </p>
          <p v-if="labPageConfig.email">
            <a :href="labPageConfig.email.link">{{
              labPageConfig.email.name
            }}</a>
          </p>
        </div>

        <div class="recentlyUpdated">
          <h1>最近更新</h1>
          <a :href="githubConfig.link" target="_blank"
            >在 github 上查看所有demo</a
          >
        </div>
      </div>

      <li class="repo" v-for="repo in repos" :key="repo.id">
        <a :href="repo.labLink" target="blank">
          <h2>{{ repo.name }}</h2>
          <h5>{{ repo.language || "" }}</h5>
          <p>{{ repo.description || "" }}</p>
        </a>
      </li>
    </div>
  </div>
</template>
<script>
import Avatar from "./Avatar.vue";
import axios from "axios";
export default {
  name: "Lab",
  components: { Avatar },
  created() {
    const reposArr = [];
    axios.get(this.githubConfig.repos).then((res) => {
      res.data.forEach((repo) => {
        if (!repo.fork) {
          repo.labLink = repo.homepage || repo.html_url;
          reposArr.push(repo);
        }
      });
      this.repos = reposArr;
    });
  },
  data() {
    return {
      repos: [],
    };
  },
  computed: {
    labPageConfig() {
      return this.$themeConfig.labPageConfig;
    },
    githubConfig() {
      return this.$themeConfig.labPageConfig.github;
    },
  },
};
</script>
 <style lang="stylus">
 .labBackground {
   width: 100vw;
   min-height: 100vh;
   background: url('../public/bg.png') repeat;
   font: 13px 'HelveticaNeue', Helvetica, Arial, sans-serif;
   color: #666;
   padding: 20px 50px 50px 50px;

   &>* {
     transition: all 0.3s;
   }

   h1 {
     margin: 20px 0;
     font-weight: bold;
     font-size: 20px;
     color: #333;
   }

   .labPage {
     display: grid;
     grid-template-columns: repeat(4, 220px);
     grid-template-rows: repeat(10, 130px);
     grid-auto-flow: row;
     grid-row-gap: 20px;
     grid-column-gap: 20px;
     width: 70%;
     height: 100%;
     margin: 0 auto;

     .labMy {
       height: 390px;
       width: 180px;
       background: rgba(255, 255, 255, 0.7);
       box-shadow: 0px 0px 5px 1px #0000001a;
       margin-bottom: 20px;
       padding: 20px;
       grid-row-start: 1;
       grid-row-end: 4;

       li {
         text-align: center;
         list-style-type: none;
       }
     }

     .labInfo {
       display: inline-block;
       width: 800px;
       height: 130px;
       padding: 0;
       grid-column-start: 2;
       grid-column-end: 5;
       grid-row-start: 1;
       grid-row-end: 1;

       h1 {
         margin: 0;
       }

       .organization {
         float: left;
         width: 160px;
         height: 100px;
         margin-right: 20px;
         padding: 20px 30px 10px 30px;
         background: rgba(255, 255, 255, 0.7);
         box-shadow: 0px 0px 5px 1px #0000001a;
       }

       .recentlyUpdated {
         float: left;
         width: 400px;
         height: 100px;
         padding: 20px 30px 10px 30px;
         background: rgba(255, 255, 255, 0.7);
         box-shadow: 0px 0px 5px 1px #0000001a;

         h1 {
           display: inline-block;
         }
       }
     }

     .repo {
       position: relative;
       display: inline-block;
       width: 180px;
       height: 240px;
       padding: 20px;
       grid-row-start: span 2;
       list-style-type: none;
       background: rgba(255, 255, 255, 0.7);
       box-shadow: 0px 0px 5px 1px #0000001a;
       transition: all 0.3s;

       &:hover {
         background: #0000000D;
       }

       &:after {
         content: '';
         position: absolute;
         right: 0;
         top: 0;
         width: 0;
         height: 0;
         border-bottom: 50px solid transparent;
         border-left: 50px solid transparent;
         border-right: 50px solid #0080b0;
         pointer-events: none;
       }

       a {
         display: inline-block;
         width: 100%;
         height: 100%;
         cursor: alias;

         h2 {
           font-weight: bold;
           font-size: 18px;
           color: #0084b4;
           max-width: 160px;
           overflow: hidden;
           border: none;
         }

         h5 {
           font-size: 11px 'Helvetica Neue', Helvetica, Arial, sans-serif;
           color: #999;
           font-weight: lighter;
           margin-bottom: 5px;
         }

         p {
           margin-top: 10px;
           color: #666;
         }
       }
     }
   }
 }
</style>
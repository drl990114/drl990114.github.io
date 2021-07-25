 <template>
  <div class="labBackground">
    <div class="labPage">
      <div class="labMy">
        <Avatar style="margin: 0 auto" :WH="64" />
        <h1>分享生活，分享代码</h1>
        <li><router-link :to="'/home/'"> 博客 /</router-link></li>
        <li><router-link :to="'/about/'"> 关于我 </router-link></li>
        <li><a :href="'/lab/'"> github </a></li>
      </div>

      <div class="labInfo">
        <div class="organization">
          <h1>DEMO平台</h1>
          <p>
            <a href="https://github.com/demo-platform/repositories"
              ><span id="num-repos">12</span> 个仓库</a
            >
            <br />
            <a href="https://github.com/demo-platform?tab=members"
              ><span id="num-members">1</span> 位成员</a
            >
          </p>
          <p class="email">
            <a href="mailto:barret.china@gmail.com">barret.china@gmail.com</a>
          </p>
        </div>

        <div class="recentlyUpdated">
          <h1>
            最近更新
            <a
              href="https://github.com/demo-platform/repositories"
              target="_blank"
              >在 github 上查看所有demo</a
            >
          </h1>
          <ol id="recently-updated-repos">
            <li>
              <span class="name"
                ><a href="https://github.com/demo-platform/resolve-blob"
                  >resolve-blob</a
                ></span
              ><span class="time"
                ><a href="https://github.com/demo-platform/resolve-blob/commits"
                  >Nov 2, 2016</a
                ></span
              ><span class="bullet">⋅</span
              ><span class="watchers"
                ><a
                  href="https://github.com/demo-platform/resolve-blob/watchers"
                  >4 stargazers</a
                ></span
              ><span class="bullet">⋅</span
              ><span class="forks"
                ><a href="https://github.com/demo-platform/resolve-blob/network"
                  >4 forks</a
                ></span
              >
            </li>
          </ol>
        </div>
      </div>

      <li class="repo"></li>
      <li class="repo"></li>
      <li class="repo"></li>
      <li class="repo"></li>
      <li class="repo"></li>
      <li class="repo"></li>
      <li class="repo"></li>
      <li class="repo"></li>
      <li class="repo"></li>
      <li class="repo"></li>
      <li class="repo"></li>
      <li class="repo"></li>
    </div>
  </div>
</template>
<script>
import Avatar from "./Avatar.vue";
export default {
  name: "Lab",
  components: { Avatar },
};
</script>
 <style lang="stylus">
 .labBackground {
   width: 100vw;
   min-height: 100vh;
   background: url('../public/bg.png') repeat;
   font: 13px 'HelveticaNeue', Helvetica, Arial, sans-serif;
   color: #666;
   padding: 50px;

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
     width: 68%;
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
       }
     }

     .repo {
       display: inline-block;
       width: 220px;
       height: 280px;
       grid-row-start: span 2;
       list-style-type: none;
       background: rgba(255, 255, 255, 0.7);
       box-shadow: 0px 0px 5px 1px #0000001a;
     }
   }
 }
</style>
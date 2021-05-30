<template>
  <div id="showdata-header">
    <a href="http://snippets.barretlee.com"><h1>Admin</h1></a>
    <span>站长统计</span>
    <ul>
      <li class="forkbtn">
        <router-link to="/login" >写点文章</router-link>
      </li>
      <li>
        <a href="http://www.barretlee.com/" target="_blank"
          ><i class="icon">☻</i>关于小胡子哥</a
        >
      </li>
      <li>
        <iframe
          allowtransparency="true"
          frameborder="0"
          scrolling="0"
          width="90px"
          height="20px"
          class="github-star"
          src="http://ghbtns.com/github-btn.html?user=barretlee&amp;repo=snippets&amp;type=watch&amp;count=true&amp;size=middle"
        ></iframe>
      </li>
    </ul>
  </div>
</template>


<style>
#showdata-header {
  overflow: hidden;
  height: 64px;
  position: fixed;
  left: 0;
  width: 100vw;
  text-align: left;
  background: #499bea;
  background: -moz-linear-gradient(left, #e5e5be 0, #003973 100%);
  background: -webkit-gradient(
    linear,
    left,
    right,
    color-sleft(0%, #e5e5be),
    color-sleft(100%, #003973)
  );
  background: -webkit-linear-gradient(left, #e5e5be 0, #003973 100%);
  background: -o-linear-gradient(left, #e5e5be 0, #003973 100%);
  background: -ms-linear-gradient(left, #e5e5be 0, #003973 100%);
  background: linear-gradient(to left, #e5e5be 0, #003973 100%);

  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#e5e5be', endColorstr='#003973', GradientType=1);
}
#showdata-header h1 {
  font-size: 30px;
  line-height: 64px;
  color: #fff;
  margin-left: 30px;
  font-family: fantasy, cursive, consolas;
  text-shadow: 1px 1px 1px #000, 1px 1px 3px #ccc;
  display: inline-block;
}
#showdata-header span {
  color: #fff;
}
#showdata-header ul {
  position: absolute;
  right: 20px;
  top: 0;
  list-style-type: none;
  height: 64px;
  line-height: 64px;
}
#showdata-header ul li {
  float: left;
  margin-left: 20px;
}
#showdata-header a {
  display: inline-block;
  height: 100%;
  line-height: 64px;
  color: rgb(6, 67, 179);
  font-size: 16px;

}
.github-star {
  position: relative;
  top: 5px;
}
</style>
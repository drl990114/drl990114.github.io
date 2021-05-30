<template>
  <div class="showdata-body">
    <div class="showdata-body-left" id="codeTypes">
      <ul>
        <li class="on"><span data-type="htaccess">htaccess</span></li>
        <li><span data-type="html">html</span></li>
        <li><span data-type="javascript">javascript</span></li>
        <li><span data-type="sass">sass</span></li>
        <li><span data-type="mac">mac</span></li>
      </ul>
    </div>
    <div class="showdata-body-right"></div>
  </div>
</template>


<style>
.showdata-body {
  display: flex;
  flex-wrap: wrap;
  position: relative;
  min-width: 400px;
  width: 80vw;
  max-height: 100vh;
  /* min-height: 400px; */
  top: 160px;
  left: 50%;
  transform: translateX(-50%);
}
.showdata-body-left {
  min-width: 10vw;
  min-height: 41px;
  max-width: 1000px;
  }
.showdata-body-left ul {
  list-style-type: none;
}
.showdata-body li {
  color: #555;
  border: 1px solid #f5f5f5;
  margin-bottom: -1px;
  cursor: pointer;
  list-style-type: none;
}
.showdata-body span {
  line-height: 40px;
  display: block;
  padding: 0 15px;
  text-transform: uppercase;
  font-family: "lucida grande", "lucida sans unicode", lucida, "Helvetica Neue",
    helvetica, "Hiragino Sans GB", "Microsoft YaHei", "WenQuanYi Micro Hei",
    sans-serif;
  font-size: 14px;
}
.showdata-body-right {
  border: 4px solid transparent;
  min-height: 30vw;
  max-width: 731px;
  width: 100%;
  background: #fff;
}
@media screen and (max-width: 1065px) {
  .showdata-body-left {
    width: 1000px;
    height: 41px;
  }
  .showdata-body-left li {
    float: left;
  }
  .showdata-body-right {
    border-color: #e5e5be;
  }
}
@media screen and (min-width: 1065px) {
  .showdata-body-right {
    border-left-color: #e5e5be;
  }
}
</style>
<template>
  <div class="gwh_Home">
    <van-tabbar route>
      <van-tabbar-item replace to="/index" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/course" icon="bar-chart-o">课程</van-tabbar-item>
      <van-tabbar-item replace to="/record" icon="records">约课记录</van-tabbar-item>
      <van-tabbar-item replace to="/practice" icon="label-o">练习</van-tabbar-item>
      <van-tabbar-item replace to="/user" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang='scss'>
* {
  margin: 0;
  padding: 0;
}
body,
html,
#app {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
</style>

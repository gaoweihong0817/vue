<template>
  <div class="box">
    <div class="header">
      <header>
        <span class="back" @click="$router.go(-1)">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAPCAYAAADd/14OAAAA/ElEQVQoU33RsUvWYRTF8c8hQmgIE4e2IFDQIfCPcHGIlBpqcWtPcFHBFgWdHGxykURxUtfWZkfHtkZBCBzcrjzxe+P9ha/P9sD33nPuOfHIq6pJnOBZRnFVNYdzvML+g2BVfcIBnuJLkm89sKqeYAcruMaHJD+b6j+wqiZwinlcYinJ74G1v2BVven8vMYRPie5G/afqnqPQ4xhNcneQwc28AYvsJ1kfVQKDVzAMZ5jE1tJ6v+BgcdpXGAGZ1hOctvzOPhUVdvYDnmLKywm+dW7eghuCl+xgT/4mORHL8dhmap6h++tY6wl2X2s69nO91SLbyTYFTHebX55D93jTsSH0JDDAAAAAElFTkSuQmCC"
            alt
          />
        </span>
        <h3>讲师详情</h3>
      </header>
    </div>
    <!-- <div class="top">
      <div class="top1">
        <img :src="commentList.teacher.avatar" alt />
        <div class="name">
          <p class="p1">
            <span>{{ commentList.teacher.teacher_name }}</span>
            <font>{{ commentList.teacher.level_name }}</font>
          </p>
          <p class="p2">
            <span v-if="commentList.teacher.sex == 0">男</span>
            <span v-else>女</span>
            <font>{{ commentList.teacher.teach_age }}年教龄</font>
          </p>
        </div>
        <button class="nabum">关注</button>
      </div>
    </div>
    <br />
    <van-tabs v-model="active">
      <van-tab title="讲师介绍">
        <div class="color">
          <p
            v-for="(item,index) in comment.attr"
            :key="index"
            class="jsp"
          >{{ item.attr_name }}:{{ item.attr_value[0].attr_value_name }}</p>
          <div class="xqjs">
            <span>老师简介</span>
            <font>{{ list.intro }}</font>
          </div>
    </div>-->
    <!-- </van-tab>
      <van-tab title="主讲课程">主讲课程</van-tab>
      <van-tab title="学员评分">学员评分</van-tab>
    </van-tabs>-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      commment: [],
      commentList: []
    };
  },
  mounted() {
    // this.getcommment();
    // this.getcommentList();
  },
  methods: {
    // async getcommment() {
    //   let query = this.$route.query;
    //   let id = query.id;
    //   console.log(id);
    //   const { data: res } = await this.$http.get("teacher/info/" + id);
    //   this.commment = res.data;
    //   if (res.code == 200) {
    //     console.log(this.commment);
    //   }
    // },
    // async getcommentList() {
    //   let query = this.$route.query;
    //   let id = query.id;
    //   console.log(id);
    //   const { data: res } = await this.$http.get("teacher/" + id);
    //   this.commentList = res.data;
    //   if (res.code == 200) {
    //     console.log(this.commentList);
    //   }
    // }
  }
};
</script>

<style lang="scss">
.box {
  min-height: 100vh;
  background: #f0f2f5;
  padding-bottom: 1.6rem;
  box-sizing: border-box;
}
.header {
  height: 2.66667rem;
  line-height: 1.17333rem;
  background: linear-gradient(180deg, #63b7fe, #4e7de3);
}
header {
  height: 1.17333rem;
  width: 100%;
  padding-right: 0.66667rem;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
}
.back {
  width: 0.66667rem;
  height: 100%;
  padding-left: 0.26667rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.back img {
  width: 0.24rem;
  height: 0.42667rem;
}
header h3 {
  flex: 2;
  text-align: center;
  font-size: 0.48rem;
  color: #fff;
}
.top {
  margin: -1.52rem auto 0;
  width: 7.06rem;
  padding: 0 0.4rem;
  background: #fff;
  border-radius: 0.10667rem;
  box-sizing: border-box;
}
.top1 {
  height: 2.02667rem;
  display: flex;
  align-items: center;
}
.top1 img {
  width: 1.06667rem;
  height: 1.06667rem;
  margin-right: 0.32rem;
  border-radius: 50%;
  flex: none;
}
.name {
  flex: 1;
}
.name .p1 {
  padding-bottom: 0.8vw;
}
.name .p1 span {
  font-size: 0.4rem;
  color: #595959;
  line-height: 0.56rem;
  padding-right: 0.13rem;
}
.name .p1 font {
  font-size: 0.29rem;
  color: #ea7a2f;
}
.name .p2 {
  font-size: 0.32rem;
  color: #b7b7b7;
  line-height: 0.45rem;
}
.name .p2 .span {
  font-size: 0.32rem;
  color: #b7b7b7;
  line-height: 0.45rem;
}
.name .p2 font {
  font-size: 0.32rem;
  color: #b7b7b7;
  line-height: 0.45rem;
  margin-left: 0.05rem;
}
.nabum {
  width: 1.65333rem;
  height: 0.74667rem;
  background: #ebeefe;
  border-radius: 0.41333rem;
  font-size: 0.34667rem;
  font-family: PingFangSC-Regular;
  font-weight: 400;
  /* color: #4169ff; */
  color: #eb6100;
  border: 0;
}
.jsp {
  font-size: 0.34667rem;
}
.color {
  background: white;
}
.xqjs {
  display: flex;
  line-height: 1.06667rem;
  font-size: 0.34667rem;
  color: #8c8c8c;
  padding-top: 0.26667rem;
}
.xqjs span {
  margin-left: 0.1333rem;
  margin-right: 0.53333rem;
}
.xqjs font {
  padding-top: 0.13333rem;
  line-height: 0.8rem;
  flex: 1;
}
</style>

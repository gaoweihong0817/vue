<template>
  <div class="gwh_login">
    <section>
      <img src="@/assets/logo1.png" alt />
    </section>
    <div class="tel">
      <input type="text" placeholder="请输入手机号" maxlength="11" class="telInput" />
    </div>
    <div class="tel">
      <input type="password" placeholder="请输入密码" class="telYzm" />
    </div>
    <div class="tip">
      <span style="color:#b7b7b7;">找回密码</span>
      <span style="color:#999;" @click="edit">注册/验证码登录</span>
    </div>
    <div class="btn">
      <van-button color="linear-gradient(to right, #FF944A, #FD5803)" block round>登录</van-button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    edit() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped lang='scss'>
.gwh_login {
  padding: 10vw;
  box-sizing: border-box;
  section {
    img {
      width: 80%;
      display: block;
      margin: 13.3333vw auto;
    }
  }
  .tel {
    height: 13.33333vw;
    background-color: #fff;
    border-bottom: 1px solid #f1f1f1;
    .telInput {
      box-sizing: border-box;
      padding: 4vw 0;
      border: 0;
      height: 100%;
      font-size: 4vw;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      line-height: 5.33333vw;
      float: left;
      outline: none;
    }
    .telYzm {
      box-sizing: border-box;
      padding: 4vw 0;
      border: 0;
      height: 100%;
      font-size: 4vw;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      line-height: 5.33333vw;
      float: left;
      outline: none;
    }
    span {
      height: 6.66667vw;
      margin-top: 3.33333vw;
      margin-right: 1.33333vw;
      color: #eb6100;
      border-radius: 0.4vw;
      float: right;
      padding: 0;
      text-align: center;
      font-size: 3.2vw;
      font-family: PingFangSC-Regular;
      font-weight: 400;
    }
  }
  .tip {
    width: 100%;
    margin-top: 4vw;
    display: flex;
    justify-content: space-between;
    span {
      font-size: 3.2vw;
      font-family: PingFangSC-Regular;
      font-weight: 400;
    }
  }
  .btn {
    margin: 15.73333vw auto 0;
    font-family: PingFangSC-Medium;
    .van-button {
      background: #000;
    }
  }
}
</style>
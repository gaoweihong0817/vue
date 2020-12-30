<template>
  <div class="gwh_index">
    <!-- 轮播 -->
    <section>
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <img src="@/assets/1.png" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="@/assets/2.png" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="@/assets/3.png" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="@/assets/4.png" alt />
        </van-swipe-item>
      </van-swipe>
    </section>
    <!-- 数据 -->
  <div class="content">
    <p>
      <img src="@/assets/5.png" alt="">
      <section class="font">特色课</section>
    </p>
    <p>
      <img src="@/assets/6.png" alt="">
      <section class="font">一对一辅导</section>
    </p>
    <p>
      <img src="@/assets/7.png" alt="">
      <section class="font">学习日历</section>
    </p>
  </div>
  <!-- 列表内容 -->
  <div class="List">
    <span></span><p class="name">{{ List.channel_info.name }}</p>
   <section>
      <dl v-for="(it,index) in List.list" :key="index" @click="detail(it.teacher_id)">
      <dt><img :src=" it.teacher_avatar" alt=""></dt>
      <dd>
        <p class="pOne">{{ it.teacher_name }}</p>
        <p class="pTwo">{{ it.introduction }}</p>
      </dd>
    </dl>
   </section>

  </div>
  <!-- 2 -->
  <div class="ListOne">
    <span class="spanF"></span><p class="nameone">{{ ListOwn.channel_info.name }}</p>
   <section>
      <dl v-for="(it,index) in ListOwn.list" :key="index">
      <dt>{{ it.title }}</dt>
      <dd class="borber">
        <img :src="it.teachers_list[0].teacher_avatar " alt="">
        <p class="pOne">{{ it.teachers_list[0].teacher_name }}</p>
      </dd>
      <dd class="dd">
        <span>{{ it.sales_num }}人已报名</span>
        <span class="spanT">免费</span>
      </dd>
    </dl>
   </section>
  </div>
  <!-- 3 -->
<div class="Listtwo">
    <span class="spanF"></span><p class="nameone">{{ ListTwo.channel_info.name }}</p>
   <section>
      <dl v-for="(it,index) in ListTwo.list" :key="index">
      <dt>{{ it.title }}</dt>
      <dd class="borber">
        <img :src="it.teachers_list[0].teacher_avatar " alt="">
        <p class="pOne">{{ it.teachers_list[0].teacher_name }}</p>
      </dd>
      <dd class="dd">
        <span>{{ it.sales_num }}人已报名</span>
        <span class="spanT">免费</span>
      </dd>
    </dl>
   </section>
  </div>
  <!-- 4 -->
   <div class="List">
    <span></span><p class="name">{{ ListFour.channel_info.name }}</p>
   <section>
      <dl v-for="(it,index) in ListFour.list" :key="index">
      <dt><img :src=" it.teacher_avatar" alt=""></dt>
      <dd>
        <p class="pOne">{{ it.teacher_name }}</p>
        <p class="pTwo">{{ it.introduction }}</p>
      </dd>
    </dl>
   </section>

  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      List:[],
      ListOwn:[],
      ListTwo:[],
      ListFour:[]
    }
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList() {
      this.$http.ListContent().then(res => {
        // console.log(res)
        this.List=res.data.data[0]
        this.ListOwn=res.data.data[1]
        this.ListTwo=res.data.data[2]
        this.ListFour=res.data.data[3]
      });
    },
    detail(id) {
      this.$router.push({path:"/detail/"+id})
    }
  }
};
</script>

<style lang='scss'>
.gwh_index {
  width: 100%;
  height: 100%;
  background: #F0F2F5;
  section {
    .my-swipe .van-swipe-item {
      color: #fff;
      text-align: center;
      img {
        width: 100%;
        height: 54vw;
      }
    }
  }
  // 数据
  .content{
    padding: 0 2.66667vw;
    margin-top: -6.66667vw;
    margin-bottom: 5.33333vw;
    position: relative;
    font-family: PingFangSC-Regular;
    display: flex;
    justify-content: space-around;
    p{
    flex-direction: column;
    background: #fff;
    border-radius: 2.66667vw;
    width: 27.46667vw;
    height: 27.46667vw;
    img{
    width: 5.6vw;
    height: 5.33333vw;
    margin: 0 auto;
    display: block;
    }
    .font{
    margin-top: 4vw;
    font-size: 3.2vw;
    font-weight: 400;
    color: #8c8c8c;
    }
    }
    p{
    display: flex;
    justify-content: center;
    align-items: center;
    }
  }
  // 列表
  .List{
    display: block;
    span{
    position: absolute;
    content: "";
    // left: .4rem;
    left: 4vw;
    top: 47.2%;
    transform: translateY(-50%);
    // width: .08rem;
    width: .8vw;
    // height: .42667rem;
    height: 4.26667vw;
    background: #eb6100;
    }
    .name{
      font-family: PingFangSC-Medium;
    font-weight: 500;
    color: #595959;
    position: relative;
    padding-left: 7.2vw;
    line-height: 5.33333vw;
    height: 5.33333vw;
    font-size: 4.26667vw;
    // border-left: 4px solid #EB6100;
    }
    section{
       padding: 1.33333vw 2.66667vw 5.33333vw;
      dl{
    display: flex;
    padding: 0 4vw;
    align-items: center;
    padding: 0 4vw;
    background: #fff;
    border-radius: 1.06667vw;
    height: 2.16rem;
    height: 21.6vw;
    margin-top: 2.66667vw;
    img{
    width: 10.66667vw;
    height: 10.66667vw;
    margin-right: 3.2vw;
    border-radius: 50%;
    }
    dd{
      .pOne{
    font-size: 4vw;
    color: #595959;
    line-height: 5.6vw;
    padding-right: 1.33333vw;
      }
      .pTwo{
    width: 73.33333vw;
    font-size: 3.2vw;
    height: .4rem;
    height: 4vw;
    padding-top: 1.33333vw;
    color: #b7b7b7;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
      }
    }
    }
    }
}
// 2
.ListOne{
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: #595959;
    position: relative;
    line-height: 5.33333vw;
    height: 5.33333vw;
    font-size: 4.26667vw;
    .spanF{
    position: absolute;
    content: "";
    // left: .4rem;
    left: 4vw;
    top: 47.2%;
    transform: translateY(-50%);
    // width: .08rem;
    width: .8vw;
    // height: .42667rem;
    height: 4.26667vw;
    background: #eb6100;
    }
    .nameone{
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: #595959;
    position: relative;
    padding-left: 7.2vw;
    line-height: 5.33333vw;
    height: 5.33333vw;
    font-size: 4.26667vw;
    }
    section{
      padding: 1.33333vw 2.66667vw 5.33333vw;
      background: #F0F2F5;
      dl{
    background: #fff;
    border-radius: 1.33333vw;
    margin-bottom: 4vw;
    padding: 0 2vw;
    position: relative;
    dt{
      padding-top: 4vw;
    }
    &>dd{
    height: 17.33333vw;
    line-height: 17.33333vw;
    display: flex;
  }
  img{
    width: 7.2vw;
    height: 7.2vw;
    border-radius: 50%;
    margin-top: 5.4vw;
    margin-right: 6vw;
    }
    .borber{
      border-bottom: 1px solid #ddd;
    }
    .dd .spanT{
      position: absolute;
      right: 8vw;
      color: rgb(12, 185, 26);
    }
    }
    }
}


}




</style>
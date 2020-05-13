<template>
  <van-row type="flex" justify="center" align="center" id="noData">
    <img src="" alt="1111" />
    <p>
      您还没领取任务课程，在喜欢的课程包详情页， 点击“领取本课程包”即可哦~
    </p>

    <a href="#" class="btn">
      查看课程包
    </a>
  </van-row>
</template>

<script>
export default {
  name: "noData",
  components: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  methods: {}
};
</script>

<style lang="less" scoped >
#noData {
  flex-direction: column;
  img {
    margin-top: 141px;
  }

  p {
    width: 452px;
    margin-top: 116px;
    font-size: 22px;
    font-weight: 400;
    color: rgba(60, 60, 60, 1);
    line-height: 40px;
  }

  .btn {
    width: 400px;
    height: 80px;
    display: block;
    background: rgba(255, 186, 0, 1);
    border-radius: 40px;
    margin-top: 106px;

    font-size: 30px;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 80px;
    text-align: center;
  }
}
</style>


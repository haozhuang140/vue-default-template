<template>
  <van-overlay :show="isLoading" id="loading" z-index="999">
    <div class="wrapper">
      <van-loading type="spinner" color="#FFBA00" />
    </div> 
  </van-overlay>
</template>

<script>
import { Loading, Overlay } from "vant";
export default {
  name: "noData",
  components: {
    "van-loading": Loading,
    "van-overlay": Overlay
  },
  data() {
    return {};
  },
  computed: {
    isLoading() {
      return this.$store.state.Loading.isLoading;
    }
  },
  created() {},
  methods: {}
};
</script>

<style lang="less" scoped >
#loading {
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
}
</style>


<template>
  <div class="tabBar" @click="tabSwitch">
    <div class="tab" :data-idx="idx" v-for="(val, idx) in tabList" :key="idx">
      <!-- <img class="tabIcon" :data-idx="idx" :src='"../images/icons/svg_tab_bar_"+iconList[idx]+"_hl.png"' v-show="current==idx">
                        <img class="tabIcon" :data-idx="idx" :src='"../images/icons/svg_tab_bar_"+iconList[idx]+".png"' v-show="current!=idx"> -->
      <span class="tabText" :data-idx="idx" :class="{ current: current == idx }">{{val}}</span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'navBar',
  data() {
    return {

      current: 0
    }
  },
  computed: {
    tabList() {
      return ['首页', '课程', '推广', '联盟', '我的']
    },
    routeList() {
      return ['/', '/train', '/article', '/alliance', '/mine']
    }
  },
  methods: {
    tabSwitch(e) {
      this.current = e.target.dataset.idx;
      this.$router.push(`${this.routeList[this.current]}`);
    },
    updateTab(path) {
      this.current = this.routeList.indexOf(path);
    }
  },
  created() {
    let path = this.$route.path;
    this.updateTab(path);
  },
  mounted() {

  },
  watch: {
    $route: function (newRoute) {
      this.updateTab(newRoute.path);
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>
.tabBar {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: .56rem;
  color: #333;
  background: #fefefe;
  border-top: .01rem solid rgba(0, 0, 0, 0.1);
  display: flex;
  text-align: center;
  z-index: 999;
  .tab {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center; // align-items: center;
    height: 100%;
    font-size: .16rem;
    .tabIcon {
      width: 0.24rem;
      height: 0.22rem;
    }
    .tabText {
      margin-top: 0.02rem;
      font-size: 0.12rem;
    }
  }
}

.current {
  color: #ff6454;
}
</style>



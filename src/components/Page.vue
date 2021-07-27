<template>
  <section class="page">
    <header class="page-header">
      <!-- <div class="status-bar" :style="{ height: getStatusBarHeight + 'px'}"></div> -->
      <div :style="{ height: getHeadNavHeight + 'px'}">
        <div :style="{paddingTop: getHeadContentOffset + 'px',lineHeight: getHeadContentHeight + 'px'}">
          <slot v-if="headSlot" ></slot>
          <div v-else class="header-content" >
            <i v-if="showBack" class="material-icons icon" @click="navBack">keyboard_arrow_left</i>
            <div class="header-title">
              <div>{{title}}</div>
            </div>
            <!-- <span :style="{lineHeight: getHeadContentHeight + 'px'}">123</span> -->
          </div>
        </div>
        
      </div>
    </header>
    <div class="main" :style="{marginTop: getHeadNavHeight + 'px'}">
      <slot name="body"></slot>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  props: {
    headSlot: Boolean,
    title: String,
    showBack: Boolean,
  },
  data() {
    return {
      // statusBarHeight: 0,
    };
  },
  computed: {
    ...mapGetters('pageHeader',['getHeadNavHeight', 'getHeadContentOffset', 'getHeadContentHeight'])
  },
  methods: {
    navBack(){
      HWH5.navigateBack().catch(error => {
        console.log('系统返回异常', error);
      });
    }
  },
  created(){
    
  }
};
</script>

<style lang="less" scoped>
.page-header{
  position: fixed;
  top: 0;
  width: 100%;
  // background-color: var(--page-header-color);
  background-color: var(--theme-color-bg);
}
.header-content{
  padding-left: 10px;
  width: 100%;
  color: var(--theme-color-text);
  display: flex;
  align-items: center;
  // justify-content: center;
  .icon{
    font-size: 30px;
  }

  .header-title{
    // position: absolute;
    // left: calc(50% - 40px);
    font-size: 16px;
    padding-left: 4px;
  }
}


</style>

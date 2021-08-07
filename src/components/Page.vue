<template>
  <section class="page">
    <header class="page-header" :style="{height: getHeadNavHeight + 'px'}">
      <div :style="{paddingTop: getHeadContentOffset + 'px',lineHeight: getHeadContentHeight + 'px'}">
        <slot name="headbar">
          <div class="header-content" >
            <i v-if="showBack" class="material-icons icon" @click="navBack">keyboard_arrow_left</i>
            <div class="header-title">
              <div>{{title}}</div>
            </div>
          </div>
        </slot>
      </div>
    </header>
    <div class="main" :style=" {marginTop: getHeadNavHeight + 'px'}">
      <slot name="body" class="main-body">
        <div>
          <div>456</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>456</div>
        </div>
      </slot>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  props: {
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
.page{
  height: 100%;
}
.page-header{
  position: fixed;
  top: 0;
  width: 100%;
  // background-color: var(--page-header-color);
  background-color: var(--theme-color-bg);
  z-index: 100;
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
.main{
  // height: 100%;
  // width: 100%;
  overflow: hidden;
  .main-body{
    // height: 100%;
      overflow: hidden;
  }
}

</style>

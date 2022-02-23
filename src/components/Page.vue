<template>
  <section class="h-100">
    <header class="position-fixed top-0 w-100 theme-color-bg" :style="{height: getHeadNavHeight + 'px', zIndex: 100}">
      <div :style="{paddingTop: getHeadContentOffset + 'px',lineHeight: getHeadContentHeight + 'px'}">
        <slot name="headbar">
          <!-- slot 默认内容 -->
          <div class="ps-3 d-flex align-items-center  text-white" >
            <!-- 左上角返回图标 -->
            <i v-if="showBack" class="material-icons icon " @click="navBack">keyboard_arrow_left</i>
            <!-- 顶部导航文字 -->
            <div class="fs-5 ">
              <div>{{title}}</div>
            </div>

          </div>
        </slot>
      </div>
    </header>

    <div class="main" :style=" {marginTop: getHeadNavHeight + 'px'}" :class="{ 'p-2': padding }">
      <slot name="body" >
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
    padding: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      // statusBarHeight: 0,
    };
  },
  computed: {
    ...mapGetters('systemInfo',['getHeadNavHeight', 'getHeadContentOffset', 'getHeadContentHeight'])
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


</style>

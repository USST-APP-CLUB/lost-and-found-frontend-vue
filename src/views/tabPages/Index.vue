<template>
  <div>
    <page title="首页">
      
    </page>
  </div>
</template>

<script>
import Page from '@/components/Page' 
import { mapActions } from 'vuex';
export default {
  name: 'index',
  components:{  /* 前面的组件名称不能和HTML标签一样*/
    Page,
  },
  created(){
    this.switchTab(1) // index界面
  },
  methods: {
    ...mapActions(['switchTab']),
  }

}
</script>

<style>

</style>
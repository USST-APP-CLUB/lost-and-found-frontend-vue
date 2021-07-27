<template>
  <div>
    <page title="我的">
      <div slot="body">
        <div class="head-block">
          <avatar show-border></avatar>
        </div>
        
      </div>
    </page>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Page from '@/components/Page' 
import Avatar from '@/components/Avatar'
export default {
  name: 'me',
  components:{
    Page,
    Avatar
  },
  created(){
    this.switchTab(5) // me界面
  },
  methods: {
    ...mapActions(['switchTab']),
  }
}
</script>

<style lang="less" scoped>
.head-block{
  height: 150px;
  width: 100%;
  background-color: var(--theme-color-bg);
  border-radius: 0 0 50% 50%;
}
.avatar-bg{
  background-color: white;
}
</style>
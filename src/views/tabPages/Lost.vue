<template>
  <div>
    <page title="挂失"></page>
  </div>
</template>

<script>
import Page from '@/components/Page' 
import { mapActions } from 'vuex';
export default {
  name: 'lost',
  components: {
    Page
  },
  created(){
    this.switchTab(2) // lost界面
  },
  methods: {
    ...mapActions(['switchTab']),
  }
}
</script>

<style>

</style>
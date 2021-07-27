<template>
  <div>
    <page title="招领"></page>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Page from '@/components/Page' 
export default {
  name: 'found',
  components: {
    Page
  },
  created(){
    this.switchTab(4) // found界面
  },
  methods: {
    ...mapActions(['switchTab']),
  }
}
</script>

<style>

</style>
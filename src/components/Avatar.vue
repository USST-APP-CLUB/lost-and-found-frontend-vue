<template>
  <div>
    <div v-if="showBorder" class="circle avatar-bg" :style="{width: avatarBgSize + 'px', height: avatarBgSize + 'px'}" >
      <img class="responsive-img circle avatar" :src="src" :style="{width: size + 'px'}">
    </div>
    <img v-else class="responsive-img circle avatar" :src="src" :style="{width: size + 'px'}">
    
  </div>
</template>

<script>
export default {
  name: 'avatar',
  created(){
      console.log(this)
  },
  props: {
    src: {
        type: String,
        default: 'https://api.multiavatar.com/Sunforge.png'
    },
    showBorder: Boolean,
    borderWidth: {
        type: Number,
        default: 2,
    },
    size: {
        type: Number,
        default: 40,
    }
  },
  computed: {
      avatarBgSize(){
          return this.borderWidth + this.size;
      },
  }
}
</script>

<style lang="less" scoped>
.avatar-bg{
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    // height: 100px;
}
</style>
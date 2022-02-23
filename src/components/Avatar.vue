<template>
  <div>
    <!-- <div v-if="showBorder" class="circle avatar-bg" :style="{width: (size + 2) + 'px', height: (size + 2) + 'px'}" >
      <img class="responsive-img circle avatar" :src="src" :style="{width: size + 'px'}">
    </div>
    <img v-else class="responsive-img circle avatar" :src="src" :style="{width: size + 'px'}"> -->
    <div v-if="avatarType==='img'" class="img" :style="{width: size + 'px'}">
      <img :src="src" class="img-fluid" alt="...">
    </div>
    <div v-else 
      :style="{
        width: size + 'px', 
        height: size + 'px', 
        borderRadius: '50%', 
        backgroundColor: bgColor,
        color: textColor,
      }"
      class="d-flex justify-content-center align-items-center"
    >
      <span v-if="avatarType==='text'">{{textShown}}</span>
      <div v-else-if="avatarType==='icon'" class="d-flex justify-content-center align-items-center" >
        <i v-if="iconType==='material'" class="material-icons" :style="{fontSize: computedSize}">{{iconName}}</i>
        <i v-if="iconType==='bootstrap'" class="bi" :class="iconName" :style="{fontSize: computedSize}"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'avatar',
  props: {
    src: {
      type: String,
      default: 'https://api.multiavatar.com/Sunforge.png'
    },
    size: {
      type: [String, Number],
      default: 40,
    },
    avatarType: {
      type: String,
      default: 'img', // 'img', 'icon', 'text'
    },
    iconType: {
      type: String,
      default: 'material', // 'material', 'bootstrap'
    },
    iconName: {
      type: String,
      default: 'add',
    },
    iconSize: {
      type: [String, Number],
      default: 'normal', // 'small'  'normal'  'large' 'x-large'  and all numbers
    },
    textContent: {
      type: String,
      default: '测试',
    },
    bgColor: {
      type: String,
      default: 'grey', // 'red' '#111111' 
    },
    textColor: {
      type: String, // 'red' '#111111' 
      default: 'white',
    }
  },
  computed: {
    textShown: function () {
      return this.textContent.substring(0,1);
    },
    computedSize: function() {
      let inSize = this.iconSize; // 输入的
      if(inSize === 'small'){
        return '18px';
      }
      if(inSize === 'large'){
        return '36px'
      }
      if(inSize === 'x-large'){
        return '48px'
      }
      let outSize = Number(inSize);
      if(isNaN(outSize)){
        return '24px'
      }
      return outSize + 'px'
    }
  }
}
</script>

<style lang="less" scoped>
// .avatar-bg{
//     background-color: white;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     // height: 100px;
// }
</style>
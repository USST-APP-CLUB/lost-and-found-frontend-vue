<template>
  <div class="d-flex align-items-center justify-content-between">
    <div 
      v-for="(item, index) of imgLocalPathArr" :key="index"
      class="position-relative"
      :style="{width: getOneThirdsScreenWidth + 'px', height: getOneThirdsScreenWidth + 'px'}" 
    >
    <img 
      :src="item"  @click="imgPreview(index)"
      class="rounded"  alt="..."
      :style="{width: getOneThirdsScreenWidth + 'px', height: getOneThirdsScreenWidth + 'px'}" 
    >
    <span @click="removeImg(index)" class="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-secondary p-1">
      <i class="bi bi-x"></i>
    </span>
    </div>
    <div 
      v-for="index of (3-imgCount)" class="rounded d-flex align-items-center justify-content-center" :key="index"
      :style="{width: getOneThirdsScreenWidth + 'px', height: getOneThirdsScreenWidth + 'px', background: 'whitesmoke'}" 
    >
    <i v-if="index == 1" class="bi bi-plus-circle-dotted text-black-50" style="fontSize: 50px" @click="chooseImg"></i>
    </div> 
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'imgWall',
  props: {
    imgUploadPathArr: {
      type: Array,
      default: () => []
    },
    imgLocalPathArr: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    chooseImg(){
      HWH5.chooseImage({
        type: 0,
        flag: 1,
        imagePickerMode: 'IMAGE',
        maxSelectedCount: 3-this.imgCount,
        showOrigin: false,
        btntxtEN: 'Done',
        btntxtCN: '完成',
        // cameraFacing: 0,
        compress: '0.25'
      }).then(data => {
        console.log(data);
        for(let item of data){
          console.log(item);
          this.imgLocalPathArr.push(item);
        }
      }).catch(error => {
        console.log('访问相册异常', error);
      });
    },
    removeImg(index){
      console.log(index);
      this.imgLocalPathArr.splice(index,1)
    },
    imgPreview(index){
      HWH5.previewImage({
        index: index,
        imageArray: JSON.stringify(this.imgLocalPathArr),
        watermark: true
      }).catch(error => {
        console.log('打开失败', error);
      });
    },
  },
  computed: {
    imgCount: function(){
      return this.imgLocalPathArr.length;
    },
    ...mapGetters('systemInfo',['getOneThirdsScreenWidth'])
  }
}
</script>

<style>

</style>
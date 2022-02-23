<template>
  <div>
    <page title="发布挂失/招领" showBack padding>
      <div slot="body">
        <!-- 挂失招领选择↓ -->
        <div class="w-100 btn-group mb-3 " role="group" aria-label="Basic example">
          <div class="w-50 btn btn-outline-secondary" :class="[mode=='lost'?'active':'']" @click="switchMode('lost')">挂失</div>
          <div class="w-50 btn btn-outline-secondary" :class="[mode=='found'?'active':'']" @click="switchMode('found')">招领</div>
        </div>
        <div class="shadow mb-3 p-2 rounded-2">
          <!-- 物品类型选择（弹出框）↓ -->
          <div class="mb-3">
            <label for="itemType" class="form-label">{{modeCn}}类型</label>
            <input type="text" class="form-control" id="itemType" aria-describedby="itemSelectionHelp">
            <div id="itemSelectionHelp" class="form-text">点击选择一个物品类型</div>
          </div>
          <!-- 物品细节描述↓ -->
          <div class="mb-3">
            <label for="detailInfo" class="form-label">物品细节描述</label>
            <textarea class="form-control" id="detailInfo" aria-describedby="detailHelp" rows="3"></textarea>
            <div id="detailHelp" class="form-text">从{{modeAction}}时间、{{modeAction}}地点、物品外观等方面描述{{modeCn}}的物品</div>
          </div>
          <!-- 物品图片 -->
          <div class="mb-3">
            <div>
              <label class="form-label">物品图片</label>

            </div>
            <img-wall></img-wall>
            <div class="d-flex align-items-center justify-content-between">
              <div 
                v-for="(item, index) of imgArr" :key="index"
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
          </div>
        </div>
        

      </div>
    </page>
  </div>
</template>

<script>
import Page from '@/components/Page' 
import ImgWall from '@/components/ImgWall' 
import { mapGetters } from 'vuex';
export default {
  name: 'post',
  components:{  /* 前面的组件名称不能和HTML标签一样*/
    Page,
    ImgWall
  },
  created(){

  },
  data() {
    return {
      mode: 'lost',
      imgArr: [], // 这里是本地路径（即回显路径） 区分 上传路径和回显路径
    };
  },
  mounted(){ // 每一次进入页面都执行挂载,触发这个函数
    console.log('before destory');
  },
  computed:{
    modeCn:function(){
      if(this.mode === 'lost') return '挂失'
      if(this.mode === 'found') return '招领'
      return '错误';
    },
    modeAction: function(){
      if(this.mode === 'lost') return '丢失'
      if(this.mode === 'found') return '拾获'
      return '错误';
    },
    imgCount: function(){
      return this.imgArr.length;
    },
    ...mapGetters('systemInfo',['getOneThirdsScreenWidth'])
  },
  methods: {
    switchMode(mode){
      this.mode = mode;
    },
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
          this.imgArr.push(item);
        }
      }).catch(error => {
        console.log('访问相册异常', error);
      });
    },
    removeImg(index){
      console.log(index);
      this.imgArr.splice(index,1)
    },
    imgPreview(index){
      HWH5.previewImage({
        index: index,
        imageArray: JSON.stringify(this.imgArr),
        watermark: true
      }).catch(error => {
        console.log('打开失败', error);
      });
    }
    
  },
  
}
</script>

<style lang="less" scoped>

</style>
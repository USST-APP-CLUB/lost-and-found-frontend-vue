<template>
  <div>
    <div class="d-flex shadow p-3 mb-3 bg-body rounded">
      <avatar avatar-type="icon" bg-color="#4caf50" icon-name="extension" icon-size='small'></avatar>
      <div class="ps-3 w-100">
        <div id="project-name" class="fs-5 fw-light">{{projectName}}</div>
        <div id="organization-author" class=" fs-6 text-secondary pt-1">
          <span>{{author}}</span>
          <span>@{{organization}}</span>
        </div>
         <!-- @click="giveFeedBack"  -->
        <div class="rounded w-100 d-flex align-items-center p-2 mt-2" style="backgroundColor: whitesmoke" @click="giveFeedBack" >
          <div class="rounded" style="backgroundColor: #DCDCDC; height:35px; width:35px">logo</div>
          <div class="px-2 text-body d-flex flex-column">
            <div class="fs-6 fw-light ">welink畅想沟通群</div>
            <div id="contact-us" class="fw-light text-black-50 " style="fontSize: 12px">{{promptInfo}}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="alert shadow theme-color-lighten theme-color-text" role="alert">
      <h4 class="alert-heading">加入我们</h4>
      <p>我们将着手开发更多校园应用，欢迎各位同学提出宝贵想法和创意。也欢迎相关专业的同学加入我们，共建智慧校园</p>
      <hr>
      <p class="mb-0">点击按钮提交申请，将由专人与你联系</p>
      <div class="d-flex justify-content-end">
        <div class="btn btn-outline-danger mt-3">提交入社申请</div>
      </div>
    </div>
    
  </div>
</template>

<script>
import Avatar from '@/components/Avatar'
export default {
  name:'AboutUs',
  components:{
    Avatar,
  },
  props:{
    projectName: {
      type: String,
      default: '寻物·上理失物招领平台'
    },
    organization: {
      type: String,
      default: '智慧校园应用开发社'
    },
    author: {
      type: String,
      default: 'Sunforge',
      required: true
    },
    promptInfo: {
      type: String,
      default: '点击提交建议与反馈'
    }
  },
  methods: {
    giveFeedBack(){
      // 打开群聊
      HWH5.openIMChat({
        // chatID: '243515952631656448', // 开发小组群
        chatID: '342493887949975552', // 畅想沟通群
        chatType: '1',
      }).catch((error)=>{
        console.log('打开IM异常', error);
      });
      
    }
  }
}
</script>

<style lang="less" scoped>

</style>
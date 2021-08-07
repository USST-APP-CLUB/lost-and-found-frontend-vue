<template>
  <div>
     <ul class="collection z-depth-1">
      <li class="collection-item avatar  ">
        <i class="material-icons circle green">extension</i>
        <p class="title">{{title}}</p>
        <p class="grey-text text-darken-2"> @{{author}} </p>
        <p class="promptInfo grey-text"> {{promptInfo}} </p>
        <a href="#!" @click="giveFeedBack" class="secondary-content"><i class="material-icons">feedback</i></a>
      </li>
    </ul>
    <blockquote>
       后续我们将着手开发更多校园应用，欢迎大家提出宝贵想法。也欢迎大家加入我们，一起进行智慧校园开发
    </blockquote>
  </div>
</template>

<script>
export default {
  name:'AboutUs',
  props:{
    title: {
      type: String,
      default: '智慧校园应用开发社'
    },
    author: {
      type: String,
      default: 'sunforge'
    },
    promptInfo: {
      type: String,
      default: '点击右侧图标，提交建议与反馈'
    }
  },
  methods: {
    giveFeedBack(){
      // 打开群聊【后面不会直接打开群聊，会做成表单形式，然后往群聊中发送一条消息】
      HWH5.openIMChat({
        chatID: '243515952631656448',
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
<template>
    <div class="weui-tab">
        <div class="weui-tab__panel"></div>
        <div class="weui-tabbar">
            <!-- :class="{weui-bar__item_on: num }"  -->
            <router-link to="/home" class="weui-tabbar__item" :class="{'weui-bar__item_on': select === 1}" >
                <span style="display: inline-block; position:relative;">
                    <i class="icon-tab icon-tab-messageCurrent"></i>
                </span>
                <p class="weui-tabbar__label">首页</p>
            </router-link>
            <router-link to="/lost" class="weui-tabbar__item" :class="{'weui-bar__item_on': select === 2}">
                <i class="icon-tab icon-tab-email"></i>
                <p class="weui-tabbar__label">挂失</p>
            </router-link>
            <router-link to="/found" class="weui-tabbar__item" :class="{'weui-bar__item_on': select === 3}">
                <span style="display: inline-block; position:relative;">
                    <i class="icon-tab icon-tab-contact"></i>
                </span>
                <p class="weui-tabbar__label">招领</p>
            </router-link>
            <router-link to="/me" class="weui-tabbar__item" :class="{'weui-bar__item_on': select === 4}">
                <i class="icon-tab icon-tab-business"></i>
                <p class="weui-tabbar__label">我的</p>
            </router-link>
            <!-- <router-link to="/me" class="weui-tabbar__item" :class="{'weui-bar__item_on': select === 4}">
                <i class="icon-tab icon-tab-business"></i>
                <p class="weui-tabbar__label">我的</p>
            </router-link> -->
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TabBar',
        props: {

        },
        data: function () {
            return {
                
            }
        },
    }
</script>

<style scoped>
    .tab-bar {
        background-color: white;
        height: 54px;
        border: 0 solid rgb(210, 210, 210);
        border-top-width: 1px;
        position: fixed;
        margin: auto;
        bottom: 0;
        width: 100%;
    }

    .tab-bar-item {
        height: 54px;
    }

    .active {
        color: #1E90FF;
    }

    i {
        font-size: 25px;
    }
</style>
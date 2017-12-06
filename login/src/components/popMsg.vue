<template>
	<div class="popMsg animated" :class="{'fadeInDown' : getCodeOK&&!out , 'hide' : !getCodeOK, 'fadeOutUp': out }">
    <div class="normal clearfix">
      <img class="left" src="../../static/img/timg.jpeg">
      <span>信息</span>
      <span class="right">现在</span>
    </div>
    <div class="msg">
      <p>10690716159995199</p>
      <p>【loginTest】您的验证码是{{ code }}，请于5分钟内正确输入</p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    props:[ 'getCodeOK', 'out', 'code'],
    created () {
    },
    components: {},
    methods: { 
    },
    watch:{
    },
  }
</script>
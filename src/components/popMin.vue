<template>
	<div class="popMin animated" :class="{'fadeIn' : popMin&&!popOut , 'hide' : !popMin, 'fadeOut': popOut }">
    <span class="icon_imp" :class="popClass"></span>
    <p class="txt">{{ msg }}</p>
  </div>
</template>


<script>
  export default {
    data() {
      return {
      }
    },
    props:[ 'popMin', 'popOut', 'popClass', 'msg'],
    created () {
    },
    components: {},
    methods: { 
    },
    watch:{
    },
  }
</script>
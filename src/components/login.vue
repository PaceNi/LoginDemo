<template>
  <section>
    <div class="loginMain " v-if="loginMain">
      <div class="loginTitle">登陆/注册</div>
      <ul>
        <li class="first">
          <input class="input" type="number" name="phone" v-model="phoneVal" maxlength="11"  @keyup.enter="getCodeF()" placeholder="请输入手机号" />
          <button class="getCode" @click="getCodeF()" :class="{active:rightPhone,hide:beginCount || reSend || sending}">获取验证码</button>
          <button class="getCode status" v-if="sending">发送中...</button>
          <button class="getCode status" v-if="beginCount" @click="getPopMin()">已发送({{timeLeng}}s)</button>
          <button class="getCode active status" @click="getCodeF()" v-if="reSend">重新获取</button>
          <span class="clearTel clear" v-if="hasPhone" @click="clearPhoneF()">
            <img src="../../static/img/cha.jpg" alt="" />
          </span>
        </li>
        <li class="second">
          <input class="input" type="number" name="code" v-model="codeVal"  @keyup.enter="loginFun()"  placeholder="请输入验证码" />
          <span class="clearCode clear" @click="clearCodeF()" v-show="hasCode">
            <img src="../../static/img/cha.jpg" alt="" />
          </span>
        </li>
        <li class="third">
          <div class="loginButton" :class="{active:rightPhone && rightCode}" @click="loginFun()" >
            {{ loginTxt }}
          </div>
        </li>
      </ul>
    </div>
    <div class="popMin animated" :class="{'fadeIn' : popMin&&!popOut , 'hide' : !popMin, 'fadeOut': popOut }">
      <span class="icon_imp" :class="popClass"></span>
      <p class="txt">{{ msg }}</p>
    </div>
    <div class="popMsg animated2" :class="{'fadeInDown' : getCodeOK&&!out , 'hide' : !getCodeOK, 'fadeOutUp': out }">
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
  </section>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      pageTitle: '登陆/注册',
      loginTxt: '登录',
      phoneVal: '',
      codeVal: '',
      hasPhone: false,
      rightPhone: false,
      hasCode: false,
      rightCode: false,
      isgetCode: false,
      timeLeng: 60,
      timeInt: null,
      reSend: false,
      beginCount: false,
      sending: false,
      code: '',
      getCodeOK: false,
      out: false,
      logined: false,
      popClass: 'icon-sign',
      popMin: false,
      popOut: false,
      msg: '',
      loginMain: true,
      flag: 1,
    }
  },
  components: {
  },
  created() {
  },
  methods: { 
    // 获取验证码
    getCodeF: function() {
      this.checkPhone()
      if (this.rightPhone){
        if(this.flag){
          this.sendfunc()  // 发送中

          // 用延迟模拟ajax请求
          setTimeout(() => {
            if(this.phoneVal=='18852956186' || this.phoneVal=='18521796320'){
              this.timefunc()//倒计时
              this.isgetCode = true
              console.log('开始倒计时')
              // 模拟短信发送
              this.createCode()
              this.getCodeOK = true//已获取验证码，发送信息
              setTimeout(() => this.out = true,5000);//隐藏发送验证码样式
              setTimeout(() => {
                this.getCodeOK = false
                this.out = false
              },6000);//恢复验证码初始样式

            } else {
              this.popMinShow("icon-sign","发送失败")
              // 发送失败后重置
              console.log('发送失败')
              this.sending = false
              this.reSend = true
            }
          },1000);//隐藏验证码样式
        }

      } else if (!this.rightPhone){
        if(this.hasPhone){
          this.popMinShow("icon-sign","请填写正确的手机号")
        } else if(!this.hasPhone){
          this.popMinShow("icon-sign","请输入手机号")
        }
      }
    },
    createCode: function() {
      let code = "";    
      let codeLength = 4;//验证码的长度
      for(let i = 0; i < codeLength; i++) {//循环操作
        code += Math.floor(Math.random()*10);//根据索引取得随机数加到code上
      }
      this.code = code
    },
    clearPhoneF: function(){
      this.phoneVal = ''
    },
    clearCodeF: function() {
      this.codeVal = ''
    },
    countDown: function(){  //倒计时函数
      // console.log("开始倒计时")
      if (this.rightPhone) {
        this.timeLeng--
        if (this.timeLeng <= 0) {
          this.clearCountF()
        }
      }
    },
    clearCountF: function(){
      if (this.timeInt) {
        clearInterval(this.timeInt)
        this.timeLeng = 60
        this.timeInt = null
        this.beginCount = false
        this.reSend = true
      }
    },
    sendfunc: function(){
      this.sending = true
      this.reSend = false
    },
    timefunc: function(){
      this.sending = false
      this.beginCount = true
      this.reSend = false
      this.timeInt = setInterval(this.countDown,1000)
    },
    getPopMin: function(str) {
      this.popMinShow("icon-sign","60s后重新获取")
    },
    loginFun: function() {
      if(this.rightCode && this.rightCode && !this.logined){
        this.logined = true
        this.loginTxt = '登录中...'

        // 模拟登录成功
        setTimeout(() => {
          this.loginTxt = '登录'
          this.loginMain = false//登录成功后移除组件
        },3000);

      }
    },
    popMinShow: function(icon, msg){
      if(this.flag){
        this.flag = 0
        this.popMin = true
        this.popClass = icon
        this.msg = msg
        setTimeout(() => this.popOut = true ,2000);
        setTimeout(() => {
          this.popOut = false//2s后提示消失
          this.popMin = false
          this.popClass = ''
          this.msg = ''
          this.flag = 1
        },3000);
      }
    },
    checkPhone: function() {
      let phonTest = (/^1[34578]\d{9}$/.test(this.phoneVal));
      if (this.phoneVal.length > 0){
        this.hasPhone = true
      } else {
        this.hasPhone = false
      }
      if (phonTest) {
        this.rightPhone = true
      } else {
        this.rightPhone = false
      }
    }
  },
  watch:{
    phoneVal: function(){
      let phonTest = (/^1[34578]\d{9}$/.test(this.phoneVal));
      if (this.phoneVal.length > 0 && this.phoneVal.length < 12){
        this.hasPhone = true
      } else if (this.phoneVal.length > 11){
        this.phoneVal = this.phoneVal.slice(0,11)
        this.hasPhone = false
      } else {
        this.hasPhone = false
      }
      if (phonTest) {
        this.rightPhone = true
      } else {
        this.rightPhone = false
      }
    },
    codeVal: function() {
      if (this.codeVal.length > 0){
        this.hasCode = true
      } else {
        this.hasCode = false
      }
      if (this.codeVal.length == 4 && this.isgetCode) {
        this.rightCode = true
      } else {
        this.rightCode = false
      }
    }
  },
}
</script>

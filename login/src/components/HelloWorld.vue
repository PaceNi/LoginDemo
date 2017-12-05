<template>
  <section>
    <div class="popBg than"></div>
    <div class="loginMain ">
      <div class="loginTitle">登陆/注册</div>
      <ul>
        <li class="first">
          <input class="input" type="number" name="phone" v-model="phoneVal"  @keyup.enter="getCodeF()" placeholder="请输入手机号" />
          <button class="getCode" @click="getCodeF()" :class="{active:rightPhone,hide:beginCount || reSend || sending}">获取验证码</button>
          <button class="getCode" v-show="sending" @click="getPopMin('sending')">发送中...</button>
          <button class="getCode" v-show="beginCount" @click="getPopMin('counting')">已发送({{timeLeng}}s)</button>
          <button class="getCode active" @click="getCodeF()" v-show="reSend">重新发送</button>
          <span class="clearTel clear" v-show="hasPhone" @click="clearPhoneF()">
            <img src="../../static/img/cha.png" alt="" />
          </span>
        </li>
        <li class="second">
          <input class="input" type="number" name="code" v-model="codeVal"  @keyup.enter="loginFun()"  placeholder="请输入验证码" />
          <span class="clearCode clear" @click="clearCodeF()" v-show="hasCode">
            <img src="../../static/img/cha.png" alt="" />
          </span>
        </li>
        <li class="third">
          <div class="loginButton" :class="{active:rightPhone && rightCode}" @click="loginFun()" >
            {{ loginTxt }}
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import _axios from 'axios'
import popMin from '@/components/popMin.js'
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
      timeTxt: '',
      timeInt: null,
      reSend: false,
      beginCount: false,
      sending: false,
      loginType: '',
      isWeChat: true,
    }
  },
  created () {

  },
  components: {},
  methods: { 
    getCodeF: function() {
      var _this = this
      var _codeUrl = "./getCode.json"
      if (_this.rightPhone){
        this.sendfunc()  // 发送中
        setTimeout(function(){
          _this.timefunc()
        },1000)
        _axios.post(_codeUrl,function(obj){
          // if(obj.code == '200'){
          //   _this.isgetCode = true
          //   _this.countDown()
          // }
          console.log(obj)
        })
      } else if (!_this.rightPhone){
        if(this.hasPhone){
          popMin.show("icon-sign","请填写正确的手机号")
        } else {
          popMin.show("icon-sign","请输入手机号")
        }
      }
    },
    clearPhoneF: function(){
      this.phoneVal = ''
    },
    clearCodeF: function() {
      this.codeVal = ''
    },
    countDown: function(){  //倒计时函数
      var _this = this
      console.log("开始倒计时")
      if (_this.rightPhone) {
        _this.timeLeng--
        if (_this.timeLeng <= 0) {
          _this.clearCountF()
        }
      }
    },
    clearCountF: function(){
      var _this = this
      if (_this.timeInt) {
        clearInterval(_this.timeInt)
        _this.timeLeng = 60
        _this.timeInt = null
        _this.beginCount = false
        _this.reSend = true
      }
    },
    sendfunc: function(){
      this.sending = true
      // this.beginCount = true
      this.reSend = false
      // this.timeInt = setInterval(this.countDown,1000)
    },
    timefunc: function(){
      this.sending = false
      this.beginCount = true
      this.reSend = false
      this.timeInt = setInterval(this.countDown,1000)
    },
    getPopMin: function(str) {
      if ( str==='sending' ) {
        popMin.show("icon-sign","发送中，请稍候")
      } else if ( str==='counting' ) {
        popMin.show("icon-sign","60s后重新获取")
      }
    }
  },
  watch:{
    phoneVal: function(){
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

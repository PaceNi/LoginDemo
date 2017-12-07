# LoginDemo

> A Vue.js project

## 运行步骤

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# build for test
npm run unit

```

## 测试用例


* 可获取短信验证码的手机号如下，其余手机号会toast提示 `发送失败`

	* `18852956186` & `18521796320`

* 手机号通过正则验证，输入不正确会toast提示 `请填写正确的手机号`,为空时会提示`请输入手机号`

* 点击获取验证码会显示 `发送中` ，发送成功进行60s倒计时；发送失败或者倒计时结束会显示 `重新发送`

* 倒计时状态下 点击 会toast提示`60s后重新获取`

* 获取验证码成功并且输入四位验证码，登录按钮点亮可进行登录操作

* *以上需要与后台交互的接口形式均采用延迟操作模拟*

##  Github Pages
* https://paceni.github.io/LoginDemo/dist/#/


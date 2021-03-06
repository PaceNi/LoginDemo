import Vue from 'vue'
import login from '@/components/login'

describe('login.vue', () => {
	
	it('输入‘’toast提示请输入手机号', () => {
		const Constructor = Vue.extend(login)
		const vm = new Constructor().$mount()
		vm.phoneVal=''
		const button = vm.$el.querySelector('.getCode');
		const clickEvent = new window.Event('click');
		button.dispatchEvent(clickEvent);
		vm._watcher.run();
		const txt = vm.$el.querySelector('.popMin .txt');
		expect(txt.textContent).toEqual('请输入手机号')
	})

	it('输入‘11111111111’toast提示请填写正确的手机号', () => {
		const Constructor = Vue.extend(login)
		const vm = new Constructor().$mount()
		vm.phoneVal='11111111111'
		const button = vm.$el.querySelector('.getCode');
		const clickEvent = new window.Event('click');
		button.dispatchEvent(clickEvent);
		vm._watcher.run();
		const txt = vm.$el.querySelector('.popMin .txt');
		expect(txt.textContent).toEqual('请填写正确的手机号')
	})

  it('输入‘18852956186’返回发送中', () => {
  	const Constructor = Vue.extend(login)
		const vm = new Constructor().$mount()
		vm.phoneVal='18852956186'
		const button = vm.$el.querySelector('.getCode');
		const clickEvent = new window.Event('click');
		button.dispatchEvent(clickEvent);
		vm._watcher.run();
		const status = vm.$el.querySelector('.status');
		expect(status.textContent).toEqual('发送中...')
  })
	// var originalTimeout;
 //  beforeEach(function() {
 //      originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
 //      jasmine.DEFAULT_TIMEOUT_INTERVAL = 11000;
 //  });

 //  afterEach(function() {
 //    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
 //  });

	it('输入‘18852956186’异步之后倒计时', done => {
  	const Constructor = Vue.extend(login)
		const vm = new Constructor().$mount()
		vm.phoneVal='18852956186'
		const button = vm.$el.querySelector('.getCode');
		const clickEvent = new window.Event('click');
		button.dispatchEvent(clickEvent);
		vm._watcher.run();
		Vue.nextTick(() => {
			const status = vm.$el.querySelector('.status');
			expect(status.textContent).toMatch('已发送')
			done()
		})
  })
  // 两者不能同时进行
  // it('输入‘18852956187’重新获取', done => {
  // 	const Constructor = Vue.extend(login)
		// const vm = new Constructor().$mount()
		// vm.phoneVal='18852956187'
		// const button = vm.$el.querySelector('.getCode');
		// const clickEvent = new window.Event('click');
		// button.dispatchEvent(clickEvent);
		// vm._watcher.run();
		// Vue.nextTick(() => {
		// 	const status = vm.$el.querySelector('.status');
		// 	expect(status.textContent).toEqual('重新获取')
		// 	done()
		// })
  // })
  
  })

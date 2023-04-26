<script>
	export default {
		// 全局属性
		globalData: {
			
		},
		onLaunch: function() {
			console.warn('当前组件仅支持 uni_modules 目录结构 ，请升级 HBuilderX 到 3.1.0 版本以上！')
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		uni.getSystemInfo({
		    success: res => {
		     //导航高度
		     let statusBarHeight = res.statusBarHeight,
		      navTop = menuButtonObject.top,
		      navObjWid = res.windowWidth - menuButtonObject.right + menuButtonObject
		      .width, // 胶囊按钮与右侧的距离 = windowWidth - right+胶囊宽度
		      navHeight = statusBarHeight + menuButtonObject.height + (menuButtonObject.top -
		       statusBarHeight) * 2;
		     this.globalData.navHeight = navHeight;
		     this.globalData.navTop = navTop;
		     this.globalData.navObj = menuButtonObject.height;
		     this.globalData.navObjWid = navObjWid;
		    },
		    fail(err) {
		     console.log(err);
		    }
		})
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import '@/uni_modules/uni-scss/index.scss';
	/* #ifndef APP-NVUE */
	@import '@/static/customicons.css';
	// 设置整个项目的背景色

	/* #endif */
	.example-info {
		font-size: 14px;
		color: #333;
		padding: 10px;
	}
</style>

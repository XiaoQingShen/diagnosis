<template>
	<div class="yyczc_container" :style="headerstop">
		<div class="header_left">
			<img src="../../assets/images/logo.png">
			<p class="header_date">{{cur_date}}</p>
			<p class="header_time">{{cur_time}}</p>
		</div>
		<div class="header_right">
			<ul class="header_opts">
				<li v-if="false">
					<i class="icon icon-qhdpa"></i>
					<p>{{qpmsg}}</p>
					<div class="header_opts_fgx"></div>
					<div class="clear_float"></div>
				</li>
				<li @click="qhpf">
					<i class="icon icon-pfa"></i>
					<p>切换皮肤</p>
					<div class="header_opts_fgx"></div>
					<div class="clear_float"></div>
				</li>
				<li v-if="false" @click="toqbxt">
					<i class="icon icon-qbxta"></i>
					<p>全部系统</p>
					<div class="clear_float"></div>
				</li>
				<div class="clear_float"></div>
			</ul>
			<i class="icon icon-usertx header_userimg"></i>
			<p class="header_username">{{username}}</p>
			<div class="header_useropts">
				<i class="icon icon-useroptsa header_user_opts"></i>
				<div class="header_user_opts_nav optsnav">
					<ul class="optsnav">
						<!-- <li @click="toqhdpset" class="optsnav"><p class="optsnav">设置</p></li> -->
						<li class="optsnav"><p class="optsnav">退出</p></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				headerstop:{
					backgroundImage:"url("+require('../../assets/images/headers_topyy.png')+")",
        			backgroundSize:"100% 100%"
				},
				cur_date:null,  //日期
				cur_time:null,  //时间
				username:'管理员',
				qpmsg:'切换全屏',  //全屏信息
				fullScreenstatu:false,  //是否全屏状态
			}
		},
		created(){
			var _this = this;
			_this.initTime();
		},
		mounted(){

		},
		methods:{
			initTime(){
		      var _this = this;
		      var timerID = setInterval(_this.updateTime, 1000);
		      _this.updateTime();
		    },
		    //时间
		    updateTime(){
		      var _this = this;
		      var cd = new Date();
		      _this.cur_time = _this.zeroPadding(cd.getHours(),2)+':'+_this.zeroPadding(cd.getMinutes(),2)+':'+_this.zeroPadding(cd.getSeconds(),2);
		      _this.cur_date = _this.zeroPadding(cd.getFullYear(),4)+'年'+_this.zeroPadding(cd.getMonth()+1,2)+'月'+_this.zeroPadding(cd.getDate(),2)+'日';
		    },
		    zeroPadding(num,digit){
		      var zero = '';
		      for(var i=0;i<digit;i++){
		        zero += '0';
		      }
		      return (zero+num).slice(-digit);
		    },
		    // 跳转到全部系统页面
		    toqbxt(){
		    	var _this = this;
		    	_this.$router.push({path: '/qbxt'});
		    },
		    // 跳转到切换大屏设置页面
		    toqhdpset(){
		    	var _this = this;
		    	_this.$router.push({path: '/qhdpset'});
		    },
		    // 切换皮肤
		    qhpf(){
		    	var _this = this;
		    	var totheme = '';
		    	if(this.$store.state.theme == 'a'){
		    		totheme = 'b';
		    	}else{
		    		totheme = 'a';
		    	};
		    	this.$store.commit({  
                    type:"settheme",
                    theme:totheme 
                });
		    	document.getElementById('app').className ='theme'+this.$store.state.theme; 
		    }
		}
	}
</script>
<style>
	.yyczc_container{
		width:100%;
		height:100%;
	}
</style>
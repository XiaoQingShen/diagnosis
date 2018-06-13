<template>
	<div class="header_container" :style="header_container">
	</div>
</template>
<script>
	export default{
		data(){
			return{
				header_container:{
					backgroundImage:"url("+require('../../assets/images/headerb.png')+")",
        			backgroundSize:"100% 100%"
				},
				cur_date:null,  //日期
				cur_time:null,  //时间
				username:'演示用户',
				qpmsg:'切换全屏',  //全屏信息
				fullScreenstatu:false,  //是否全屏状态
			}
		},
		created(){
			var _this = this;
			_this.initTime();
			window.addEventListener('resize', ()=> {
				console.log("全屏状态改变");
	          	var sfqp = document.fullScreen||document.mozFullScreen||document.webkitIsFullScreen;
	          	if(_this.fullScreenstatu || sfqp){
	          		_this.fullScreenstatu = true;
	          		// _this.qpmsg = "切换全屏";
	          	}else{
	          		_this.fullScreenstatu = false;
	          		// _this.qpmsg = "退出全屏";
	          	};
		    });
		},
		mounted(){
			var _this = this;
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
		    // 全屏
		    fullScreen(el){
		    	var _this = this;
		    	console.log("全屏方法");
		    	var isFullscreen=document.fullScreen||document.mozFullScreen||document.webkitIsFullScreen;
				if(!isFullscreen){//进入全屏,多重短路表达式
					_this.qpmsg = "退出全屏";
					// _this.fullScreenstatu = true;
					var docElm = document.documentElement;
					(docElm.requestFullscreen&&docElm.requestFullscreen())||
					(docElm.mozRequestFullScreen&&docElm.mozRequestFullScreen())||
					(docElm.webkitRequestFullscreen&&docElm.webkitRequestFullscreen())||(docElm.msRequestFullscreen&&docElm.msRequestFullscreen());
				}else{	//退出全屏,三目运算符
					_this.qpmsg = "切换全屏";
					// _this.fullScreenstatu = false;
					document.exitFullscreen?document.exitFullscreen():
					document.mozCancelFullScreen?document.mozCancelFullScreen():
					document.webkitExitFullscreen?document.webkitExitFullscreen():'';
				};
		    },
		    // 退出全屏
		    exitScreen(el){
		    	var _this = this;
		    	console.log("esc键");
		    	if(el.keyCode == 27){
		    		_this.qpmsg = "切换全屏";
		    	}
		    }
		}
	}
</script>
<style>
	.header_container{
		width:100%;
		height:100%;
	}
	.header_left{
		float:left;
		font-size: 0.14rem;
		margin-left:0.34rem;
	}
	.header_left >img{
		margin-top:0.16rem;
		margin-right:0.38rem;
		float:left;
	}
	.header_left >p{
		float: left;
		font-size: 0.14rem;
		margin-top:0.2rem;
	}
	.header_time{
		margin-left:0.1rem;
		margin-top:0.22rem!important;
	}
	.header_right{
		float:right;
		margin-right:0.34rem;
		font-size: 0.14rem;
	}
	.header_right >ul{
		margin:0px;
		padding:0px;
		list-style: none;
		margin-top:0.2rem;
		margin-right:0.42rem;
		float:left;
	}
	.header_right >ul >li{
		float:left;
	}
	.header_right >ul >li >i{
		float:left;
	}
	.header_right >ul >li >p{
		float:left;
		margin-left:0.09rem;
	}
	.header_right >ul >li >p:hover{
		cursor: pointer;
	}
	.header_right >ul >li >img:hover{
		cursor: pointer;
	}
	.header_right >ul >li >div{
		float:left;
	}
	.header_opts_fgx{
		width:0.01rem;
		height:0.11rem;
		margin-top:0.03rem;
		margin-left:0.15rem;
		margin-right:0.15rem;
		opacity: 0.47;
	}
	.header_right >i{
		float:left;
		margin-top:0.15rem;
	}
	.header_username{
		margin-top:0.2rem;
		font-size: 0.12rem;
		float:left;
		font-weight: bold;
	}
	.header_userimg{
		width:0.28rem;
		height:0.28rem;
		margin-right:8px;
		/*border:1px solid #e8e8e8;*/
	}
	.header_user_opts{
		margin-left:0.1rem;
		margin-top: 0.25rem!important;
	}
	.header_useropts{
		float:right;
		height:0.7rem;
		/*border:1px solid red;*/
	}
	.header_user_opts_nav{
		position: absolute;
		width:0.96rem;
		right: 0.3rem;
    	top: 0.6rem;
    	opacity:0.95;
    	border-radius: 0rem 0rem 0.05rem 0.05rem;
    	display: none;
    	z-index: 22222222;
	}
	.header_useropts:hover .optsnav{
		display:block!important;
	}
	.optsnav:hover{
		display:block;
	}
	.header_user_opts_nav >ul{
		margin:0px;
		padding:0px;
		list-style: none;
		text-align: center;
		font-size: 0.12rem;
	}
	.header_user_opts_nav >ul >li{
		height:0.4rem;
	}
	.header_user_opts_nav >ul >li:hover{
		cursor: pointer;
	}
	.header_user_opts_nav >ul >li:last-child{
		border:none!important;
	}
	.header_user_opts_nav >ul >li >p{
		padding-top:0.1rem;
		float:none;
	}
</style>
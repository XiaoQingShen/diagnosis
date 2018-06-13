<template>
	<div :id="qstid" class="group_qst_container">
		<div class="group_qst_top">
			<div class="group_qst_top_title">
				<p>{{bt}}</p>
			</div>
			<div class="group_qst_top_opt">
				<p @click="qstClose" class="group_qst_top_close">x</p>
				<div class="group_qst_top_opt_downloaddiv">
					<!-- <img class="group_qst_top_opt_download" src="../../assets/group/download.png"> -->
					<i class="icon icon-download group_qst_top_opt_download"></i>
					<div class="group_qst_download_opts downcharts">
						<ul class="downcharts">
							<li class="downcharts" @click="exportImg"><p class="downcharts">导出图片</p></li>
							<li class="downcharts"><p class="downcharts">导出Excel</p></li>
						</ul>
					</div>
				</div>
				<!-- <img class="group_qst_top_opt_yj" v-show="false" src="../../assets/group/yj.png"> -->
				<i class="icon icon-yj group_qst_top_opt_yj" v-show="false"></i>
			</div>
			<div class="clear_float"></div>
		</div>
		<div class="group_qst_content">
			<div class="group_qst_content_div">
				<fxt :fxtid="fxtid" :isClick="false" :groupparams="groupparams" :isLast="true" :showbt="showbt" @parentgetbt="getchildbt"></fxt>
			</div>
		</div>
	</div>
</template>
<script>
	import fxt from '../fxt/main'  //分析图主入口
	import html2canvas from 'html2canvas'   //div转图片工具
	export default{
		// showbt   是否显示标题
		props:['fxtid','showbt'],   //趋势图的分子模型id
		data(){
			return{
				qstid:this.fxtid+this.getRandom(),  //趋势图div  id
				groupparams:{}, //
				bt:'',   //趋势图标题
			}
		},
		components:{fxt},
		created(){

		},
		mounted(){

		},
		methods:{
			//关闭趋势图
			qstClose(){
				var _this = this;
				_this.$emit("groupQstParent",false);
			},
			// 获取回传的bt
			getchildbt(bt){
				var _this = this;
				console.log("********bt");
				console.log(bt);
				_this.bt = bt;
			},
			//随机数+时间戳  避免模型id重复
		    getRandom(){
		    	var timestamp = new Date().getTime();
		    	var randomNum = parseInt(10000 * Math.random());
		    	return timestamp+""+randomNum;
		    },
			// 导出图片
		    exportImg(){
		    	var _this = this;
		    	// var cur_fxtid = _this.group_fxtIdList[_this.cur_fxtindex];
		    	// var down_real_fxtid = cur_fxtid.split("_")[0];
		    	// 生成图片
		    	html2canvas(document.getElementById(_this.qstid),{
					async:true
				}).then(function(canvas) {
					var fxtDataUrl = canvas.toDataURL('image/png');  //用于图片保存到服务器
				    // document.body.appendChild(canvas);
				    //导出到本地
				    _this.saveFile(canvas.toDataURL('image/png'),_this.bt+".png");  //全局导出方法
				});
		    }
		}
	}
</script>
<style>
	.group_qst_container{
		padding:0.2rem 0.3rem 0.1rem 0.3rem;
		width:calc(100% - 0.6rem);
		height:calc(100% - 0.6rem);
	}
	.group_qst_top{
		height:0.36rem;
		/*border:1px solid red;*/
	}
	.group_qst_top_title{
		float:left;
	}
	.group_qst_top_opt{
		float:right;
	}
	.group_qst_top_title >p{
        font-size:0.16rem; 
        font-weight: bold;
        color:rgba(51,51,51,1);
	}
	.group_qst_top_opt >p{
		width:0.1rem;
		height:0.1rem;
		font-size: 0.2rem;
		color: #2184C5;
	}
	.group_qst_content{
		width:100%;
		height:calc(100% - 0.2rem);
		background:rgba(255,255,255,1);
		border-radius: 4px; 
		box-shadow:4px 0px 10px rgba(170,170,170,0.2);
	}
	.group_qst_content_div{
		width:100%;
		height:100%;
		/*border:1px solid yellow;*/
	}
	.group_qst_top_close{
		float:right;
		cursor: pointer;
	}
	.group_qst_top_opt_downloaddiv{
		float:right;
		padding-left:0.14rem;
		padding-right:0.14rem;
		height:0.2rem;
	}
	.group_qst_top_opt_download{
		float:right;
		font-size:0.12rem;
		margin-top:0.06rem;
		cursor: pointer;
	}
	.group_qst_top_opt_yj{
		float:right;
		margin-top:0.06rem;
		cursor: pointer;
	}
	.group_qst_download_opts{
		position:absolute;
		width:0.72rem;
		height:0.7rem; 
		background:rgba(255,255,255,1);
		border-radius: 4px;
		box-shadow:2px 0px 8px rgba(222,215,215,1) ;
		right:0.3rem;
		top:0.4rem; 
		display: none;
	    z-index: 22222222;
	}
	.group_qst_top_opt_downloaddiv:hover .downcharts{
		display:block;
	}
	.downcharts:hover{
		display: block;
	}
	.group_qst_download_opts >ul{
		margin:0px;
		padding:0px;
		list-style: none;
		font-size:12px;
		color:rgba(153,153,153,1);
		text-align: center;
	}
	.group_qst_download_opts > ul >li{
		height:0.26rem;
		text-align: center;
		border:1px solid #ffffff;
	}
	.group_qst_download_opts >ul >li >p{
		margin-top:0.05rem;
		float:none;
	}
	.group_qst_download_opts > ul >li:hover{
		background:rgba(246,248,249,1);
		color:rgba(119,119,119,1);
		cursor: pointer;
	}
</style>
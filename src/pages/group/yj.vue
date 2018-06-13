<template>
	<div class="yj_container">
		<div class="yj_container_top">
			<div class="yj_container_top_title">
				<p>预警设置</p>
			</div>
			<div class="yj_container_top_opt">
				<p @click="yjClose" class="yj_container_top_close">x</p>
			</div>
			<div class="clear_float"></div>
			<p class="yj_tips">请选择要开启的预警通知，当数据触发预设条件后，手机将收到推送（预警最多设置20个）</p>
			<div class="clear_float"></div>
		</div>
		<div class="yj_content">
			<p class="yj_content_tj">主坐标轴</p>
			<div class="clear_float"></div>
			<div class="yj_content_yjxx">
				<ul>
					<li>
						<p class="yj_yjxx_name">测试（标题）</p>
						<div class="yj_yjxx_opt">
							<p class="yj_yjxx_edit">编辑</p>
							<p class="yj_yjxx_del">删除</p>
						</div>
						<div class="clear_float"></div>
					</li>
					<li>
						<p class="yj_yjxx_name">测试（标题）</p>
						<div class="yj_yjxx_opt">
							<p class="yj_yjxx_edit">编辑</p>
							<p class="yj_yjxx_del">删除</p>
						</div>
						<div class="clear_float"></div>
					</li>
				</ul>
				<p class="add_yjxx">添加自定义预警</p>
			</div>
		</div>
		<div class="submit_cancle">
			<div class="btn_div">
				<div class="submit_btn"><p>保存</p></div>
				<div @click="yjClose" class="cancle_btn"><p>取消</p></div>
				<div class="clear_float"></div>
			</div>
			
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{

			}
		},
		created(){

		},
		mounted(){

		},
		methods:{
			yjClose(){
				var _this = this;
				_this.$emit('groupYjParent',false);
			}
		}
	}
</script>
<style>
	.yj_container{
		padding:0.2rem 0.3rem 0.1rem 0.3rem;
		width:calc(100% - 0.6rem);
		height:calc(100% - 0.6rem);
		position: relative;
	}
	.yj_container_top{
		/*min-height:0.36rem;*/
	}
	.yj_container_top_title{
		float:left;
	}
	.yj_container_top_opt{
		float:right;
	}
	.yj_container_top_title >p{
        font-size:0.16rem; 
        font-weight: bold;
        color:rgba(51,51,51,1);
	}
	.yj_container_top_opt >p{
		width:0.1rem;
		height:0.1rem;
		font-size: 0.2rem;
		color: #2184C5;
	}
	.yj_container_top_close{
		float:right;
		cursor: pointer;
	}
	.yj_tips{
		font-size:0.12rem;
		color:rgba(153,153,153,1);
		line-height:0.24rem;
		text-align: left;
	}
	.yj_content{
		margin-top:0.1rem;
	}
	.yj_content_tj{
		font-size:0.12rem;
		font-family:MicrosoftYaHei;
		color:rgba(119,119,119,1);
		line-height:0.24rem;
	}
	.yj_content_yjxx{
		height:0.77rem; 
		background:rgba(255,255,255,1);
		border-radius: 0.04rem ;
		box-shadow:4px 0px 10px rgba(170,170,170,0.2);
		padding:0.16rem 0.34rem 0.15rem 0.25rem;
	}
	.yj_content_yjxx >ul{
		margin:0px;
		padding:0px;
		margin-bottom:0.1rem;
		list-style: none;
	}
	.yj_yjxx_name{
		float:left;
		font-size:0.12rem;
		font-family:MicrosoftYaHei;
		color:rgba(153,153,153,1);
		line-height:0.24rem;
	}
	.yj_yjxx_opt{
		float:right;
		font-size:0.12rem;
		font-family:MicrosoftYaHei;
		color:rgba(153,153,153,1);
		line-height:0.24rem;
	}
	.yj_yjxx_edit{
		float:left;
		cursor: pointer;
	}
	.yj_yjxx_del{
		float:left;
		margin-left:0.13rem;
		cursor: pointer;
	}
	.add_yjxx{
		font-size:0.12rem;
		font-family:MicrosoftYaHei;
		color:rgba(33,132,197,1);
		line-height:0.24rem;
		text-decoration:underline;
		cursor: pointer;
	}
	.submit_cancle{
		position: absolute;
		bottom: 0px;
		width:calc(100% - 0.6rem);
		height:0.4rem;
		text-align: center;
	}
	.btn_div{
		width:1.32rem;
		margin-left:auto;
		margin-right:auto;
	}
	.submit_btn{
		width:0.52rem;
		height:0.24rem; 
		border:1px solid rgba(33,132,197,1);
		border-radius: 0.12rem;
		float:left;
		cursor: pointer;
	}
	.submit_btn >p{
		font-size:0.12rem;
		font-family:MicrosoftYaHei;
		color:rgba(33,132,197,1);
		line-height:0px;
	    margin-top: 0.1rem;
    	margin-left: 0.13rem;
	}
	.cancle_btn{
		width:0.52rem;
		height:0.24rem; 
		border: 1px solid rgba(153,153,153,1);
		border-radius: 0.12rem;
		float:left;
		margin-left:0.24rem;
		cursor: pointer;
	}
	.cancle_btn >p{
		font-size:0.12rem;
		font-family:MicrosoftYaHei;
		color:rgba(153,153,153,1);
		line-height:0px;
		margin-top: 0.1rem;
    	margin-left: 0.13rem;
	}
</style>
<template>
	<div class="mypersonal1_container">
		<div class="mypersonal1_pname">
			<p>个人信息</p>
		</div>
		<div class="gr_tx_xm">
			<i class="icon icon-yh_mr_tx"></i>
			<p>范朋</p>
		</div>
		<div class="gr_infos">
			<p>工号：<span>63884</span></p>
			<p>在职状态：<span>在职</span></p>
			<div class="clear_float"></div>
			<p>出生日期：<span>19840310</span></p>
			<p>民族：<span>汉族</span></p>
			<p>政治面貌：<span>中共党员</span></p>
			<p>来校工作时间：<span>无</span></p>
			<p>所属学院：<span>旅游学院</span></p>
			<p>任职专业：<span>旅游管理</span></p>
			<p>职称：<span>无</span></p>
			<p>最高学历：<span>硕士研究生</span></p>

		</div>
	</div>
</template>
<script>
	
</script>
<style>
	.mypersonal1_container{
		width:100%;
		height:100%;
	}
	.mypersonal1_pname{
		margin-left:0.32rem;
	}
	.mypersonal1_pname >p{
		font-size: 0.14rem;
		font-weight: bold;
		/*color: #FFFFFF;*/
		float: none;
		padding-top:0.18rem;
	}
	.gr_tx_xm{
		display:flex;
		flex-direction:column;
		justify-content:center;
		align-items:center;
		margin-top:0.28rem;
		margin-bottom:0.2rem;
	}
	.gr_tx_xm >p{
		font-size: 0.14rem;
		font-weight: bold;
		/*color: #FFFFFF;*/
		float: none;
		margin-top:0.08rem;
	}
	.gr_infos >p{
		font-size: 0.12rem;
		/*color: rgba(255,255,255,0.4);*/
		float:none;
		margin-left:0.39rem;
		margin-top:0.05rem;
	}
	.gr_infos >p >span{
		/*color: #EEEEEE;*/
	}
	.gr_infos >p:nth-child(1){
		float:left;
	}
	.gr_infos >p:nth-child(2){
		float:left;
	}
</style>
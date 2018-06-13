<template>
	<div class="mysearch1_container">
		<div class="mysearch1_inputbtn">
			<input class="mysearch1_input" type="text" name="" placeholder="请输入">
			<div class="mysearch1_btn">
				<i v-bind:class="[this.$store.state.theme=='a'?'icon-zb_search':'icon-zb_search1','icon']"></i>
				<p>搜索</p>
			</div>
		</div>
	</div>
</template>
<script>
	
</script>
<style>
	.mysearch1_container{
		width:100%;
		height:100%;
		display:flex;
		justify-content:center;
		align-items:center;
	}
	.mysearch1_inputbtn{
		width:80%;
		max-width: 6.3rem;
	}
	.mysearch1_input{
		float:left;
		width:80%;
		max-width: 5.38rem;
		height:0.12rem;
		/*border:1px solid #C4C4C4;*/
		border-radius: 4px 0px 0px 4px;
		padding-left:0.31rem;
		padding-top:0.13rem;
		padding-bottom:0.13rem;
		/*color: #555555;*/
		/*background-color: transparent;*/
	}
	.mysearch1_btn{
		float:left;
		width:0.92rem;
		height:0.4rem;
		margin-left:-0.01rem;
		/*background-color: #2184C5;*/
		display:flex;
		justify-content:center;
		align-items:center;
		border-radius: 0px 4px 4px 0px;
	}
	.mysearch1_btn >i{
		float:left;
		margin-right:0.08rem;
	}
	.mysearch1_btn >p{
		float:left;
		font-size: 0.12rem;
		/*color: #FFFEFF;*/
	}
</style>
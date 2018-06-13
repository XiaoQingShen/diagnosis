<template>
	<div class="myzb4_container">
		<div class="myzb4_zbname">
			<p>{{zbname}}</p>
		</div>
		<div class="myzb4_center">
			<p class="myzb4_center_zbz">{{zbz}}</p>
			<p class="myzb4_center_dx">{{zbdx}}</p>
			<div class="myzb4_center_dbs">
				<div class="myzb4_center_db">
					<i class="icon icon-zb_db"></i>
					<p class="myzb4_center_zbdb">{{zbdb1}}<span>{{zbdb1z}}</span></p>
				</div>
				<div class="myzb4_center_db">
					<i class="icon icon-zb_db"></i>
					<p class="myzb4_center_zbdb">{{zbdb2}}<span>{{zbdb2z}}</span></p>
				</div>
				<div class="clear_float"></div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		// zbname 指标名称
		// zbz  指标值
		// zbdx 指标对象
		// zbdb1 指标对比对象1
		// zbdb1z 指标对比对象1值
		// zbdb2 指标对比对象2
		// zbdb2z 指标对比对象2值
		props:['zbname','zbz','zbdx','zbdb1','zbdb1z','zbdb2','zbdb2z'],
		data(){
			return{

			}
		}
	}
</script>
<style>
	.myzb4_container{
		width:100%;
		height:100%;
	}
	.myzb4_zbname{
		height:0.45rem;
	}
	.myzb4_zbname >p{
		font-weight: bold;
		padding-top:0.25rem;
		padding-left:0.32rem;
		font-size: 0.14rem;
		color: #FFFFFF;
		float:none;
	}
	.myzb4_center{
		width:auto;
		height:calc(100% - 0.55rem);
		display:flex;
		flex-direction:column;
		justify-content:center;
		align-items:center;
	}
	.myzb4_center_zbz{
		font-size:0.28rem;
		font-family:STHeiti;
		color: #FFFFFF;
	}
	.myzb4_center_dx{
		font-size:0.12rem;
		color: #A7A7A7;
	}
	.myzb4_center_db{
		margin-top:0.24rem;
		float:left;
	}
	.myzb4_center_db:first-child{
		margin-right:0.18rem;
	}
	.myzb4_center_db >i{
		float:left;
		margin-top:0.04rem;
	}
	.myzb4_center_zbdb{
		float:left;
		margin-left:0.05rem;
		font-size: 0.12rem;
		color: #E8E8E8;
	}
	.myzb4_center_zbdb >span{
		font-size: 0.14rem;
		font-family:STHeiti;
		margin-left:0.03rem;
		color: #40B3FF;
	}
</style>
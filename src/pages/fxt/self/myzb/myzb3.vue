<template>
	<div class="myzb3_container">
		<div class="myzb3_zbname">
			<p>{{zbname}}</p>
		</div>
		<div class="myzb3_center">
			<p class="myzb3_center_zbz">{{zbz}}</p>
			<p class="myzb3_center_dx">{{zbdx}}</p>
			<div class="myzb3_center_db">
				<i class="icon icon-zb_db"></i>
				<p class="myzb3_center_zbdb">{{zbdb1}}<span>{{zbdb1z}}</span></p>
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
		props:['zbname','zbz','zbdx','zbdb1','zbdb1z'],
		data(){
			return{
				
			}
		}
	}
</script>
<style>
	.myzb3_container{
		width:100%;
		height:100%;
	}
	.myzb3_zbname{
		height:0.45rem;
	}
	.myzb3_zbname >p{
		font-weight: bold;
		padding-top:0.25rem;
		padding-left:0.32rem;
		font-size: 0.14rem;
		float:none;
	}
	.myzb3_center{
		width:auto;
		height:calc(100% - 0.55rem);
		display:flex;
		flex-direction:column;
		justify-content:center;
		align-items:center;
	}
	.myzb3_center_zbz{
		font-size:0.28rem;
		font-family:STHeiti;
	}
	.myzb3_center_dx{
		font-size:0.12rem;
	}
	.myzb3_center_db{
		margin-top:0.24rem;
	}
	.myzb3_center_db >i{
		float:left;
		margin-top:0.04rem;
	}
	.myzb3_center_zbdb{
		float:left;
		margin-left:0.05rem;
		font-size: 0.12rem;
	}
	.myzb3_center_zbdb >span{
		font-size: 0.14rem;
		font-family:STHeiti;
		margin-left:0.03rem;
	}
</style>
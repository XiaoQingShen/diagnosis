<template>
	<div class="myzb2_container">
		<div class="myzb2_zbname">
			<p >{{zbname}}</p>
		</div>
		<div class="myzb2_center">
			<p class="myzb2_center_z">{{zbz}}</p>
			<p class="myzb2_center_dx">{{zbdx}}</p>
		</div>
	</div>
</template>
<script>
	export default{
		// zbname 指标名称
		// zbz   指标值
		// zbdx  指标对象
		props:['zbname','zbz','zbdx'],
		data(){
			return{

			}
		}
	}
</script>
<style>
	.myzb2_container{
		width:100%;
		height:100%;
	}
	.myzb2_zbname{
		height:0.45rem;
	}
	.myzb2_zbname >p{
		font-weight: bold;
		padding-top:0.25rem;
		padding-left:0.32rem;
		font-size: 0.14rem;
		color: #FFFFFF;
		float:none;
	}
	.myzb2_center{
		width:auto;
		height:calc(100% - 0.55rem);
		display:flex;
		flex-direction:column;
		justify-content:center;
		align-items:center;
	}
	.myzb2_center_z{
		font-size:40px;
		font-family:STHeiti;
		color: #FFFFFF;
	}
	.myzb2_center_dx{
		font-size: 0.12rem;
		color: #A7A7A7;
	}
</style>
<template>
	<div class="myzb1_container" @click="tz()">
		<div class="zb_center">
			<div class="zb_center_iname">
				<i class="icon icon-zb_tz zb_tz_imgs" v-if="tzdz!='' && tzdz!=null"></i>
				<p class="zb_center_name">{{zbname}}</p>
			</div>
			<div class="clear_float"></div>
			<div class="zb_center_fstb">
				<p class="zb_center_fs">{{zbfs}}</p>
				<p class="zb_center_dw">分</p>
				<p class="zb_center_tb">同比</p>
				<p v-bind:class="[zf?'zb_center_z':'','zb_center_zf']" v-if="zf">+</p>
				<p v-bind:class="[!zf?'zb_center_f':'','zb_center_zf']" v-if="!zf" >-</p>
				<p v-bind:class="[zf?'zb_center_z':'zb_center_f','zb_center_bfb']">{{zbtb}}</p>
				<p v-bind:class="[zf?'zb_center_z':'zb_center_f','zb_center_bfh']">%</p>
				<i v-if="zf" class="icon icon-zb_up"></i>
				<i v-if="!zf" class="icon icon-zb_down"></i>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		props:['zbname','zbfs','zbtb','zf','tzdz'],
		data(){
			return{

			}
		},
		created(){

		},
		mounted(){

		},
		methods:{
			tz(){
				var _this = this;
				if(_this.tzdz!="" && _this.tzdz!=null){
					// window.open(window.location.origin +'/#'+_this.tzdz);
					// window.open(window.location.origin +_this.tzdz);
					// window.open(window.location.origin +'/diagnosis/#'+_this.tzdz);
					_this.$router.push({path:_this.tzdz});
				};
			}
		}
	}
</script>
<style>
	.myzb1_container{
		width:100%;
		height:100%;
		display:flex;
		align-items:center;
	}
	.zb_center_iname{
		margin-left:0.31rem;
	}
	.zb_tz_imgs{
		float:left;
		margin-top:0.02rem;
		margin-right:0.08rem;
	}
	.zb_center_name{
		font-size: 0.14rem;
	}
	.zb_center_fstb{
		margin-left:0.31rem;
	}
	.zb_center_fstb >p{
		float: left;
	}
	.zb_center_fstb >i{
		float: left;
		margin-top: 0.27rem;
   	 	margin-left: 0.08rem;
	}
	.zb_center_fs{
		font-family:'STHeiti';
		font-size: 0.36rem;
		/*color: #555555;*/
	}
	.zb_center_dw{
		font-family:PingFang-SC-Medium;
		font-size: 0.14rem;
		/*color: #333333;*/
		margin-top: 0.2rem;
	}
	.zb_center_tb{
		font-family:"PingFang SC";
		font-size: 0.12rem;
		/*color: #777777;*/
		margin-top: 0.22rem;
		margin-left:0.13rem;
	}
	.zb_center_zf{
		font-size: 0.16rem;
		font-family:PingFang-SC-Medium;
		margin-top: 0.2rem;
		margin-left:0.05rem;
	}
	.zb_center_f{
		/*color:rgba(34,172,56,1);*/
	}
	.zb_center_z{
		/*color:#FF2424;*/
	}
	.zb_center_bfb{
		font-family:PingFang-SC-Medium;
		font-size: 0.16rem;
		margin-top: 0.2rem;
		/*margin-left:0.05rem;*/
	}
	.zb_center_bfh{
		font-family:PingFang-SC-Medium;
		font-size: 0.12rem;
		/*color: #22AC38;*/
		margin-top: 0.24rem;
	}
</style>
<template>
	<div class="layout_container">
		<div class="group" v-for="(item,index) in groupIdList" :style="{width:item.wid*100+'px',height:item.hei*100+'px'}">
			<group :groupid="item.groupid" :showenlarge="true" :qjcs="qjcs"></group>
		</div>
		<div class="clear_float"></div>
	</div>
</template>
<script>
	//group 全局组件
	export default{
		data(){
			return{
				groupIdList:[],  //组合id列表
				qjcs:{},  //全局接收参数
			}
		},
		mounted(){
			var _this = this;
			_this.getQJCS();
			_this.getData();
		},
		created(){

		},
		methods:{
			//获取布局数据
			getData(){
				var _this = this;
				_this.$axios({
					method:'post',
					url:_this.$apiUrls.GroupChart
				}).then((res)=>{
					var res_data = res.data;
					if(res_data.code=="40001"){
						_this.groupIdList = res_data.content;
						console.log("获取数据成功");
					}else{
						//获取数据失败
					};
				});
			},
			// 获取外部参数
			getQJCS(){
				var _this = this;
				var jscs = sessionStorage.getItem("jscs",jscs);
				_this.qjcs = jscs;
				// _this.groupid = JSON.parse(jscs).groupid;
			}
		}
	}
</script>
<style>
	.layout_container{
		width:100%;
		background-color: #f7f7f7;
		height:100%;
	}
	.qj_select{
		height:20px;
		clear: both;
	}
	.group{
		background:rgba(255,255,255,1);
		border-radius: 6px ;
		box-shadow:2px 0px 0px rgba(235,238,240,1);
		margin:10px 0px 10px 10px;
		float:left;
	}
</style>
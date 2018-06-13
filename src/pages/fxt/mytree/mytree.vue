<template>
	<div class="mytree_container">
		<el-tree :data="data" :props="defaultProps" :expand-on-click-node="false" @node-click="zjclick(data)" @node-contextmenu="yjclick(data,$event)"></el-tree>
		<!-- <el-tree :data="data" :props="defaultProps" :expand-on-click-node="false" @node-click="zjclick(data)"></el-tree> -->
		<div class="bjk" ref="bjk"></div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				data:[
					{label:'一级',children:[
						{label:'一级-1'},
						{label:'一级-2'},
						{label:'一级-3'},
						{label:'一级-4'}
					]},
					{label:'二级',children:[
						{label:'二级-1'},
						{label:'二级-2'},
						{label:'二级-3'},
						{label:'二级-4'}
					]},
					{label:'三级',children:[
						{label:'三级-1'},
						{label:'三级-2'},
						{label:'三级-3'},
						{label:'三级-4'}
					]},
					{label:'四级',children:[
						{label:'四级-1'},
						{label:'四级-2'},
						{label:'四级-3'},
						{label:'四级-4'}
					]},
					{label:'五级',children:[
						{label:'五级-1'},
						{label:'五级-2'},
						{label:'五级-3'},
						{label:'五级-4'}
					]},
					{label:'六级',children:[
						{label:'六级-1'},
						{label:'六级-2'},
						{label:'六级-3'},
						{label:'六级-4'}
					]}
				],
				defaultProps:{
					children:'children',
					label:'label'
				}
			}
		},
		created(){

		},
		mounted(){

		},
		methods:{
			// 左键点击
			zjclick(data){
				var _this = this;
				alert("左键点击");
			},
			// 右键点击
			yjclick(data,event){
				var _this = this;
				_this.$refs.bjk.style.left = 200+"px";
				_this.$refs.bjk.style.top = event.pageY+"px";
			}
		}
	}
</script>
<style>
	.mytree_container{
		width:100%;
		height:100%;
	}
	.bjk{
		position: absolute;
		width:100px;
		height:100px;
		border:1px solid green;
	}
</style>
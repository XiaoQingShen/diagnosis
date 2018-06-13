<template>
	<div class="enlarge_container">
		<div class="enlarge_content">
			<group :groupid="groupid" :showenlarge="showenlarge" :qjcs="qjcs"></group>
		</div>
	</div>
</template>
<script>
	// import group from './main'  //组合模型
	export default{
		// name:'enlarge',
		// groupid  组合模型id
		// showenlarge  是否显示放大图标 
		// qjcs  全局参数
		props:['groupid','showenlarge','qjcs'],
		data(){
			return{

			}
		},
		// components:{group},
		created(){

		},
		mounted(){

		},
		methods:{

		}
	}
</script>
<style>
	.enlarge_container{
	    position: fixed;
		width:100%;
		height:100%;
		background-color: #fff;
		overflow: hidden;
		overflow-y: hidden;
		padding:1.1rem 0.74rem;
	}
	.enlarge_content{
		width:calc(100% - 1.48rem);
		height:calc(100% - 2.2rem);
		border:1px solid red;
	}
</style>
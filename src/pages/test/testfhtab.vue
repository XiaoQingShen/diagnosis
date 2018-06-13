<template>
	<div class="testfhtab_container">
		<!-- <fhtab1 :fxtid="''" :dataurl="''"></fhtab1> -->
		<!-- <fhtab2 :fxtid="''" :dataurl="''"></fhtab2> -->
		<!-- <group :groupid="groupid" :showenlarge="false" :qjcs="qjcs"></group> -->
		<!-- <hbhtab1></hbhtab1> -->
		<mytree></mytree>
	</div>
</template>
<script>
import fhtab1 from '../fxt/self/mytable/myfhtab1'  //复合tab1
import fhtab2 from '../fxt/self/mytable/myfhtab2'  //复合tab2
import group from '../group/main'  //
import hbhtab1 from '../fxt/self/mytable/myhbhtab1'  //合并行表格
import mytree from '../fxt/mytree/mytree'  //树状菜单
	export default{
		data(){
			return{
				groupid:'',
			}
		},
		components:{fhtab1,fhtab2,group,hbhtab1,mytree},
		created(){
			var _this = this;
			_this.getQJCS();
		},
		mounted(){

		},
		methods:{
			// 获取外部参数
			getQJCS(){
				var _this = this;
				var jscs = sessionStorage.getItem("jscs",jscs);
				_this.qjcs = jscs;
				console.log(jscs);
				_this.groupid = JSON.parse(jscs).groupid;
				console.log("test");
				console.log(_this.groupid);
			}
		}
	}
</script>
<style>
	.testfhtab_container{
		width:100%;
		height:800px;
		border:1px solid red;
	}
</style>
<template>
	<div class="mytab4_container">
		<el-table :data="tableData" border style="width: 100%" :row-style="stripeFun">
		    <el-table-column label="排名" width="90" header-align="center">
		      	<template slot-scope="scope">
		      		<i class="icon icon-pm1" v-if="scope.row.pm==1"></i>
		      		<i class="icon icon-pm2" v-if="scope.row.pm==2"></i>
		      		<i class="icon icon-pm3" v-if="scope.row.pm==3"></i>
		        	<!-- <img src="../../../../assets/group/pm1.png" v-if="scope.row.pm==1"/>
		        	<img src="../../../../assets/group/pm2.png" v-if="scope.row.pm==2"/>
		        	<img src="../../../../assets/group/pm3.png" v-if="scope.row.pm==3"/> -->
		        	<p v-show="scope.row.pm>3">{{scope.row.pm}}</p>
		      	</template>
		    </el-table-column>
		    <el-table-column label="专业" prop="zy" header-align="center"></el-table-column>
	  	</el-table>
	  	<div class="mytab4_pagination">
	  		<el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage1"
	      		:page-size="5" layout="pager,jumper" :total="20">
	    	</el-pagination>
    	</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				currentPage1:1,
				tableData:[
					{pm: 1,zy: '专业1'},
					{pm: 2,zy: '专业2'}, 
					{pm: 3,zy: '专业3'},
					{pm: 4,zy: '专业4'}
		        ],
			}
		},
		created(){

		},
		mounted(){

		},
		methods:{
			handleSizeChange(val) {
	        	console.log('每页 ${val} 条');
	        },
	        handleCurrentChange(val) {
	        	console.log('当前页: ${val}');
	      	},
	      	//单行颜色
	      	stripeFun({row,rowIndex}){
	      		if(rowIndex%2 == 0){
	      			return 'background:rgba(247,248,249,1)';
	      		}
	      	}
		}
	}
</script>
<style>
	.mytab4_container{
		width:100%;
		height:100%;
	}
	.mytab4_container .el-table td, .el-table th{
		padding:0.06rem 0px;
	}
	.mytab4_container .el-table th{
		/*background:rgba(223,228,231,1);*/
	}
	.mytab4_container .el-table thead {
	    color: rgba(119,119,119,1);
	    font-weight: 500;
	}
	.mytab4_pagination{
		margin-top:0.27rem;
		float:right;
	}
	.mytab4_pagination .el-pagination button, .el-pagination span:not([class*=suffix]){
		font-size:0.1rem;
		height:0.16rem;
		line-height:0.16rem;
	}
	.mytab4_pagination .el-input {
		font-size: 0.1rem;
	}
	.mytab4_pagination .el-pagination__editor{
		height:0.16rem;
	}
	.mytab4_pagination .el-pagination__editor.el-input .el-input__inner{
		height:0.16rem;
	}
	.mytab4_pagination .el-pagination.is-background .el-pager li{
		width:0.16rem;
		height:0.16rem;
		min-width:0.16rem;
		background-color: #ffffff;
		border:1px solid rgba(120,142,175,1);
	}
	.mytab4_pagination .el-pager li{
		font-size: 0.1rem;
		line-height:0.16rem;
	}
	.mytab4_pagination .el-pagination.is-background .el-pager li:not(.disabled).active{
	    background-color: rgba(120,142,175,1);
	}
	.mytab4_pagination .el-pagination__editor.el-input {
	    width: 0.36rem;
	}
	.mytab4_container .el-table .dhstripe{
		background: red;
	}
	.dhstripe{
		background: yellow;
	}
</style>
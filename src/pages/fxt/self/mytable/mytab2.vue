<template>
	<div class="mytable2_container">
		<el-table :data="tableData" border style="width: 100%" :cell-class-name="ranking">
	    	<el-table-column prop="pm" label="排名" header-align="center" width="90"></el-table-column>
	    	<el-table-column prop="zy" label="专业" header-align="center"></el-table-column>
	  	</el-table>
	  	<div class="mytable2_pagination">
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
	      	//单元格样式
			ranking(row,column,rowIndex,columnIndex){
				if(row.columnIndex==0 && row.row.pm==1){
					return 'pm1';
				};
				if(row.columnIndex==0 && row.row.pm==2){
					return 'pm2';
				};
				if(row.columnIndex==0 && row.row.pm==3){
					return 'pm3';
				};
			}
		}
	}
</script>
<style>
	.mytable2_container{
		width:100%;
		height:100%;
	}
	.el-table .pm1{
		background: #ea0000;
	}
	.el-table .pm2{
		background: #ff359a;
	}
	.el-table .pm3{
		background: #ff00ff;
	}
	.mytable2_container .el-table td, .el-table th{
		padding:0.06rem 0px;
	}
	.mytable2_container .el-table th{
		background:rgba(223,228,231,1);
	}
	.mytable2_container .el-table thead {
	    color: rgba(119,119,119,1);
	    font-weight: 500;
	}
	.mytable2_pagination{
		margin-top:0.27rem;
		float:right;
	}
	.mytable2_pagination .el-pagination button, .el-pagination span:not([class*=suffix]){
		font-size:0.1rem;
		height:0.16rem;
		line-height:0.16rem;
	}
	.mytable2_pagination .el-input {
		font-size: 0.1rem;
	}
	.mytable2_pagination .el-pagination__editor{
		height:0.16rem;
	}
	.mytable2_pagination .el-pagination__editor.el-input .el-input__inner{
		height:0.16rem;
	}
	.mytable2_pagination .el-pagination.is-background .el-pager li{
		width:0.16rem;
		height:0.16rem;
		min-width:0.16rem;
		background-color: #ffffff;
		border:1px solid rgba(120,142,175,1);
	}
	.mytable2_pagination .el-pager li{
		font-size: 0.1rem;
		line-height:0.16rem;
	}
	.mytable2_pagination .el-pagination.is-background .el-pager li:not(.disabled).active{
	    background-color: rgba(120,142,175,1);
	}
	.mytable2_pagination .el-pagination__editor.el-input {
	    width: 0.36rem;
	}
</style>
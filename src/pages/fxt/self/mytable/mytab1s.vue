<template>
	<div class="mytab1s_container">
		<div class="fxt_titles_opt">
			<p class="fxt_fbt">{{bt}}</p>
			<div class="fxt_opt">
				<myselect class="fxt_opt_checks" v-for="(item,index) in checksUrlList" :key="index" :checkUrlxx="item" @myselectParents="myselectChild"></myselect>
				<div class="clear_float"></div>
			</div>
		</div>
		<el-table :data="tableData" stripe border style="width: 100%">
    		<el-table-column v-for="(item,index) in fieldsList" :key="index" :prop="item.zd" :label="item.zdmc" header-align="center"></el-table-column>
  		</el-table>
  		<div class="mytab1_pagination">
	  		<el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pagenum"
	      		:page-size="pagesize" layout="pager,jumper" :total="totals">
	    	</el-pagination>
    	</div>
	</div>
</template>
<script>
	export default{
		// fxtid  分析模型id
		// type  分析模型类型
		// dataurl 分析模型接口地址
		// checksUrlList  分析模型筛选条件接口地址数组
		// fxtparams  fxt层传回的参数
		// isClick  图形是否可点击
		// xlmc  小类名称 
		// csList  参数KEY值列表
		// bt  图形标题
		// isLast 是否是组合模型的最后一个图形
		props:['fxtid','type','dataurl','checksUrlList','fxtparams','isClick','xlmc','csList','bt','isLast'],
		data(){
			return{
				real_fxtid:'',  //真实图形id
				//字段信息
				fieldsList:[],
				// 表格数据
				tableData: [],
		        totals:0,  //数据总条数
		        pagenum: 1,  //当前显示页数
		        pagesize:10, //每页显示数据条数
		        curParams:{}
			}
		},
		created(){
			var _this = this;
			_this.getData();
		},
		mounted(){

		},
		methods:{
			getData(){
				var _this = this;
				_this.curParams = _this.fxtparams;
				_this.real_fxtid = _this.fxtid.split("_")[0];
				_this.curParams.fxtid = _this.real_fxtid;
				_this.curParams.pagenum = _this.pagenum;
				_this.curParams.pagesize = _this.pagesize;
				_this.$axios({
					type:'post',
					url:_this.dataurl,
					params:_this.curParams
				}).then(function(res){
					var res_data = res.data;
					if(res_data.code=="40001"){
						_this.fieldsList = res_data.content.fieldsList;
						_this.tableData = res_data.content.datas;
						_this.totals = res_data.content.total;
					}else{
						// 异常处理
					}
				});
			},
			handleSizeChange(val) {
	        	console.log('每页 ${val} 条');
	        },
	        handleCurrentChange(val) {
	        	var _this = this;
	        	_this.pagenum = val;
	        	_this.getData();
	      	}
		}
	}
</script>
<style>
	.mytab1s_container{
		width:100%;
		height:100%;
		overflow: auto;
	}
</style>
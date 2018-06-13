<template>
	<div class="mytab3_container">
		<el-table :data="tableData" border stripe style="width: 100%" header-align="center" @row-click="rowclick">
		    <el-table-column label="排名" width="90" align="center">
		      	<template slot-scope="scope">
		      		<i class="icon icon-pm1" v-if="scope.row.pm==1"></i>
		      		<i class="icon icon-pm2" v-if="scope.row.pm==2"></i>
		      		<i class="icon icon-pm3" v-if="scope.row.pm==3"></i>
		        	<p v-show="scope.row.pm>3">{{scope.row.pm}}</p>
		      	</template>
		    </el-table-column>
		    <el-table-column v-for="(item,index) in fieldsList" v-if="index!=0" :key="index" :prop="item.zd" :label="item.zdmc" align="center"></el-table-column>
	  	</el-table>
	  	<div class="mytab3_pagination">
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
				fieldsList:[
					{"zd":"pm","zdmc":"排名"},
					{"zd":"zy","zdmc":"专业"}
				],
				// 表格数据
				tableData: [
					{pm: 1,zy: '专业1'},
					{pm: 2,zy: '专业2'}, 
					{pm: 3,zy: '专业3'},
					{pm: 4,zy: '专业4'}
		        ],
				totals:0,  //数据总条数
		        pagenum: 1,  //当前页数
		        pagesize:10, //每页数据条数
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
			// 获取数据
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
			// 表格行点击事件
			rowclick(row,event,column){
				var _this = this;
				if(row.pm=='1'){
					// if(_this.real_fxtid=='6D6A2BC58866A32BE050007F010066A8'){  //学校第二个页面
					// 	_this.$router.push({path:'/college_js',query:{userid:111}});
					// };
					// if(_this.real_fxtid=='6D6A2BC5886AA32BE050007F010066A8'){  //学校第三个页面
					// 	_this.$router.push({path:'/college_js_ky',query:{userid:111}});
					// };
					// if(_this.real_fxtid=='6D6A2BC5886CA32BE050007F010066A8'){  //学校第四个页面
					// 	_this.$router.push({path:'/college_js_ky_jgxm',query:{userid:111}});
					// };
					// if(_this.real_fxtid=='6D6A2BC58875A32BE050007F010066A8'){  //学院第一个页面
					// 	_this.$router.push({path:'/major_js',query:{userid:111}});
					// };
					// if(_this.real_fxtid=='6D6A2BC5887AA32BE050007F010066A8'){  //学院第二个页面
					// 	_this.$router.push({path:'/major_js_jgky',query:{userid:111}});
					// };
					// if(_this.real_fxtid=='6D6A2BC5887DA32BE050007F010066A8'){  //学院第三个页面
					// 	_this.$router.push({path:'/major_js_jgky_jgxm',query:{userid:111}});
					// };
					// if(_this.real_fxtid=='6D6A2BC58886A32BE050007F010066A8'){  //专业第一个页面
					// 	_this.$router.push({path:'/js_gr',query:{userid:111}});
					// };
					// if(_this.real_fxtid=='6D6A2BC5888BA32BE050007F010066A8'){  //专业第二个页面
					// 	_this.$router.push({path:'/js_gr_jgky',query:{userid:111}});
					// };
					// if(_this.real_fxtid=='6D6A2BC5888EA32BE050007F010066A8'){  //专业第三个页面
					// 	_this.$router.push({path:'/js_gr_jgky_jgxm',query:{userid:111}});
					// };
				};
			},
			handleSizeChange(val) {
	        	console.log('每页 ${val} 条');
	        },
	        handleCurrentChange(val) {
	        	console.log('当前页: ${val}');
	      	}
		}
	}
</script>
<style>
	.mytab3_container{
		width:100%;
		height:100%;
		overflow: auto;
	}
	.mytab3_container .el-table td, .el-table th{
		padding:0.06rem 0px;
	}
	.mytab3_container .el-table th{
		background:rgba(223,228,231,1);
	}
	.mytab3_container .el-table thead {
	    color: rgba(119,119,119,1);
	    font-weight: 500;
	}
	.mytab3_pagination{
		margin-top:0.27rem;
		float:right;
		height:0.2rem;
	}
	.mytab3_pagination .el-pagination button, .el-pagination span:not([class*=suffix]){
		font-size:0.1rem;
		height:0.16rem;
		line-height:0.16rem;
	}
	.mytab3_pagination .el-input {
		font-size: 0.1rem;
	}
	.mytab3_pagination .el-pagination__editor{
		height:0.16rem;
	}
	.mytab3_pagination .el-pagination__editor.el-input .el-input__inner{
		height:0.16rem;
	}
	.mytab3_pagination .el-pagination.is-background{
		height:0.2rem;
		font-size: 0.1rem;
	}
	.mytab3_pagination .el-pagination.is-background .el-pager li{
		/*width:0.16rem;*/
		height:0.16rem;
		min-width:0.16rem;
		background-color: #ffffff;
		border:1px solid rgba(120,142,175,1);
	}
	.mytab3_pagination .el-pager li{
		font-size: 0.1rem;
		line-height:0.16rem;
	}
	.mytab3_pagination .el-pager .more::before {
	    line-height: inherit;
	}
	.mytab3_pagination .el-pagination.is-background .el-pager li:not(.disabled).active{
	    background-color: rgba(120,142,175,1);
	}
	.mytab3_pagination .el-pagination__editor.el-input {
	    width: 0.36rem;
	}
</style>
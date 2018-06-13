<template>
	<div class="mytab1_container">
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
				fieldsList:[
					{"zd":"date","zdmc":"录取人数"},
					{"zd":"name","zdmc":"报到人数"}
				],
				// 表格数据
				tableData: [{
			          date: '2016-05-02',
			          name: '王小虎'
			        }, {
			          date: '2016-05-04',
			          name: '王小虎'
			        }, {
			          date: '2016-05-01',
			          name: '王小虎'
			        }, {
			          date: '2016-05-03',
			          name: '王小虎'
		        	}
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
		computed: {  
            listenchangetheme() {  
                return this.$store.state.theme;  
            },
            listenchangexn(){
            	return this.$store.state.SC_YEAR_LONG_DESC;
            },
            listenchangexq(){
            	return this.$store.state.SC_HALF_LONG_DESC;
            },
            listenchangexy(){
            	return this.$store.state.XYMC;
            },
            listenchangezy(){
            	return this.$store.state.ZYMC;
            }  
        },  
		watch:{
			listenchangetheme: function(a, b) {  
                var _this = this;
                if(_this.$store.state.theme == 'a'){
                	//浅色主题
                	_this.chartstheme = _this.$white;
                }else{
                	//深色主题
                	_this.chartstheme = _this.$black;
                };
				_this.getData();  //获取图形基本信息
            },
            listenchangexn:function(a,b){
            	var _this = this;
            	_this.setStore();
				_this.getData();  //获取图形基本信息
            },
            listenchangexq:function(a,b){
            	var _this = this;
            	_this.setStore();
				_this.getData();  //获取图形基本信息
            },
            listenchangexy:function(a,b){
            	var _this = this;
            	_this.setStore();
				_this.getData();  //获取图形基本信息
            },
            listenchangezy:function(a,b){
            	var _this = this;
            	_this.setStore();
				_this.getData();  //获取图形基本信息
            }
		},
		methods:{
			// 设置全局参数的值
			setStore(){
				var _this = this;
				if(_this.$store.state.SC_HALF_LONG_DESC!='请选择'){
            		_this.curParams['SC_YEAR_LONG_DESC'] = _this.$store.state.SC_YEAR_LONG_DESC;
            		_this.curParams['SC_HALF_LONG_DESC'] = _this.$store.state.SC_HALF_LONG_DESC;
            	}else{
            		_this.curParams['SC_HALF_LONG_DESC'] = '';
            	};
            	if(_this.$store.state.XYMC!='全校'){
            		_this.curParams['XYMC'] = _this.$store.state.XYMC;
            	}else{
            		_this.curParams['SC_HALF_LONG_DESC'] = '';
            	};
            	if(_this.$store.state.ZYMC!='请选择'){
            		_this.curParams['ZYMC'] = _this.$store.state.ZYMC;
            	}else{
            		_this.curParams['ZYMC'] = '';
            	};
			},
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
	.mytab1_container{
		width:100%;
		height:100%;
		overflow: auto;
	}
	.mytab1_container .el-table td, .el-table th{
		padding:0.06rem 0px;
	}
	.mytab1_container .el-table th{
		background:rgba(223,228,231,1);
	}
	.mytab1_container .el-table thead {
	    color: rgba(119,119,119,1);
	    font-weight: 500;
	}
	.mytab1_pagination{
		margin-top:0.27rem;
		float:right;
		height:0.2rem;
		/*border:1px solid yellow;*/
	}
	.mytab1_pagination .el-pagination button, .el-pagination span:not([class*=suffix]){
		font-size:0.1rem;
		height:0.16rem;
		line-height:0.16rem;
	}
	.mytab1_pagination .el-input {
		font-size: 0.1rem;
	}
	.mytab1_pagination .el-pagination__editor{
		height:0.16rem;
	}
	.mytab1_pagination .el-pagination__editor.el-input .el-input__inner{
		height:0.16rem;
	}
	.mytab1_pagination .el-pagination.is-background{
		height:0.2rem;
		font-size: 0.1rem;
	}
	.mytab1_pagination .el-pagination.is-background .el-pager li{
		/*width:0.16rem;*/
		height:0.16rem;
		min-width:0.16rem;
		background-color: #ffffff;
		border:1px solid rgba(120,142,175,1);
	}
	.mytab1_pagination .el-pager li{
		font-size: 0.1rem;
		line-height:0.16rem;
	}
	.mytab1_pagination .el-pager .more::before {
	    /*line-height: 30px;*/
	    line-height: inherit;
	}
	.mytab1_pagination .el-pagination.is-background .el-pager li:not(.disabled).active{
	    background-color: rgba(120,142,175,1);
	}
	.mytab1_pagination .el-pagination__editor.el-input {
	    width: 0.36rem;
	}
</style>
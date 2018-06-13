<template>
	<div class="myfhta1_container">
		<ul class="myfhtab1_ul">
			<li @click="changetab(index)" v-bind:class="[index==curindex?'myfhtab_active':'']" v-for="(item,index) in fhtablist"><p>{{item.bt}}</p></li>
			<div class="clear_float"></div>
		</ul>
		<div class="fhtab_zj" v-if="curindex==0">
			<el-table v-if="tableData1!=null"  :data="tableData1.datas" stripe border style="width: 100%" @row-click="rowclick">
	    		<el-table-column v-for="(fields,inde) in tableData1.fieldsList" :key="inde" :prop="fields.zd" :label="fields.zdmc" header-align="center"></el-table-column>
	  		</el-table>
	  		<div class="mytab1_pagination">
		  		<el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pagenum"
		      		:page-size="pagesize" layout="pager,jumper" :total="totals">
		    	</el-pagination>
	    	</div>
		</div>
		<div class="fhtab_zj" v-if="curindex==1">
			<el-table v-if="tableData2!=null" :data="tableData2.datas" stripe border style="width: 100%">
	    		<el-table-column v-for="(item,index) in tableData2.fieldsList" :key="index" :prop="item.zd" :label="item.zdmc" header-align="center"></el-table-column>
	  		</el-table>
	  		<div class="mytab1_pagination">
		  		<el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pagenum"
		      		:page-size="pagesize" layout="pager,jumper" :total="totals">
		    	</el-pagination>
	    	</div>
		</div>
	</div>
</template>
<script>
import table1 from './mytab1'  //表格1   无排序，分页
import table1s from './mytab1s'  //表格1s  无排序，无分页
import table3 from './mytab3'   //表格3  排序，分页，顶部灰色，2,4行有颜色
import table4 from './mytab4'   //表格4  排序，分页，顶部白色，1,3行有颜色
	export default{
		// fxtid   分析图id
		// dataurl  获取数据地址
		props:['fxtid','dataurl','type'],
		data(){
			return{
				fhtablist:[],   //复合  table列表
				curindex:0,
				tableData1:null,   //表格1数据
				tableData2:null,   //表格2数据
				totals:0,  //数据总条数
		        pagenum: 1,  //当前页数
		        pagesize:10, //每页数据条数
		        curParams:{}
			}
		},
		components:{table1,table1s,table3,table4},
		created(){
			var _this = this;
			console.log("进入复合table");
			_this.getfhtabdata();
		},
		mounted(){

		},
		methods:{
			// 获取复合table数据
			getfhtabdata(){
				var _this = this;
				console.log(_this.dataurl);
				_this.$axios({
					type:'get',
					url:_this.dataurl,
					params:{"pagenum":_this.pagenum,"pagesize":_this.pagesize}
				}).then(function(res){
					var res_data = res.data;
					if(res_data.code=="40001"){
						_this.fhtablist = res_data.content;
						console.log(_this.fhtablist);
						_this.tableData1 = _this.fhtablist[0];
						console.log(_this.tableData1);
						_this.tableData2 = _this.fhtablist[1];
						console.log(_this.tableData2);
					}else{
						// 数据获取失败
						console.log("数据获取失败");
					}
				});
			},
			// 切换表格
			changetab(index){
				var _this = this;
				_this.curindex = index;
			},
			handleSizeChange(val) {
	        	console.log('每页 ${val} 条');
	        },
	        handleCurrentChange(val) {
	        	var _this = this;
	        	_this.pagenum = val;
	        	_this.getData();
	      	},
	      	rowclick(row,event,column){
	      		var _this = this;
	      		var real_fxtid = _this.fxtid.split("_")[0];
	      		if(row.pm=='1'){
	      			if(real_fxtid=='6E324D23A74C58E8E050007F01006D74'){  //全校学院总体
	      				_this.$router.push({path:'/college_xj',query:{userid:111}});
	      			};
	      			if(real_fxtid=='6E55232BB8F1F5E2E050007F0100588E'){
	      				_this.$router.push({path:'/major_xj',query:{userid:111}});
	      			};
	      			if(real_fxtid=='6E55232BB8F8F5E2E050007F0100588E'){
	      				_this.$router.push({path:'/js_gr',query:{userid:111}});
	      			};
	      		}
	      	}
		}
	}
</script>
<style>
	.myfhta1_container{
		width:100%;
		height:100%;
		position: absolute;
	}
	.myfhtab1_ul{
		margin:0px;
		padding:0px;
		list-style: none;
		font-size: 0.14rem;
		text-align: center;
	}
	.myfhtab1_ul >li{
		min-width: 1.1rem;
		width:auto;
		height:0.28rem;
		float:left;
		text-align: center;
		border-radius: 0.14rem;
		background-color: #EDEDED;
		margin-left:-14px;
		z-index:1111;
		cursor:pointer;
	}
	.myfhtab1_ul >li:first-child{
		margin-left:0px!important;
	}
	.myfhtab_active{
		position: relative;
		background-color: #7289AB!important;
		color:#FFFFFF!important;
		z-index:2222;
	}
	.myfhtab1_ul >li >p{
		margin-top:0.04rem;
		float:none;
	}
	.fhtab_zj{
		width:100%;
		height:calc(100% - 0.6rem);
		overflow: auto;
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
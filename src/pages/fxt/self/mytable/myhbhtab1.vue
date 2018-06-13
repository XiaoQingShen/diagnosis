<!-- 合并行 表格 -->
<template>
	<div class="myhbhtab_container">
		<el-table :data="tableData" :span-method="objectSpanMethod" border style="width:100%;">
			<el-table-column prop="id" label="ID" width="180"></el-table-column>
			<el-table-column prop="name" label="姓名"></el-table-column>
			<el-table-column prop="amount1" label="数值1（元）"></el-table-column>
			<el-table-column prop="amount2" label="数值2（元）"></el-table-column>
			<el-table-column prop="amount3" label="数值3（元）"></el-table-column>
		</el-table>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				tableData:[
					{id: '12987122',name: '王小虎',amount1: '234',amount2: '3.2',amount3: 10},  
			        { id: '12987122', name: '王小虎',  amount1: '165',  amount2: '4.43',  amount3: 12  },  
			        { id: '12987122',  name: '王小虎',  amount1: '324',  amount2: '1.9', amount3: 9  },  
			        { id: '12987125',name: '王小虎',  amount1: '621',  amount2: '2.2',amount3: 17  },  
			        { id: '12987126', name: '王小虎', amount1: '539', amount2: '4.1', amount3: 15  },
			        { id: '12987126', name: '王小虎', amount1: '539', amount2: '4.1', amount3: 15  },
			        { id: '12987126', name: '王小虎', amount1: '539', amount2: '4.1', amount3: 15  },
			        { id: '12987126', name: '王小虎', amount1: '539', amount2: '4.1', amount3: 15  },
			        { id: '12987126', name: '李小虎', amount1: '539', amount2: '4.1', amount3: 15  },
			        { id: '12987126', name: '李小虎', amount1: '539', amount2: '4.1', amount3: 15  }  
				],
				fieldsList:[
					{"zd":"id","zdmc":"ID"},
					{"zd":"name","zdmc":"姓名"},
					{"zd":"amount1","zdmc":"数值1（元）"},
					{"zd":"amount2","zdmc":"数值2（元）"},
					{"zd":"amount3","zdmc":"数值3（元）"}
				],
				// 合并行数据
				column_row_offset:{
					id:[3,1,1,1,4],
					name:[2,1,1,1,1,2,2],
					amount1:[1,1,1,1,1,1,1,1,1,1],
					amount2:[1,1,1,1,1,1,1,1,1,1],
					amount3:[1,1,1,1,1,1,1,1,1,1]
				},
				now_col_row_num:{},
				now_col_offset:{}
			}
		},
		created(){
			var _this = this;
		},
		mounted(){
			var _this = this;
			_this.jspannum(_this.tableData);
		},
		methods:{
			// 计算合并行数据
			jspannum(data){
				var _this = this;
				for(var i=0;i<_this.fieldsList.length;i++){
					_this.column_row_offset[_this.fieldsList[i].zd] = [];
				};
				// 计算数据重复数 作为合并行数据
				for(var j=0;j<data.length;){
					var count = 0;
					for(var k=0;k<data.length;k++){
						if(data[j]["id"] === data[k]["id"]){
							count++;
						};
					};
					_this.column_row_offset["id"].push(count);
					j+=count;
				};
				_this.column_row_offset["name"] = [1,1,1,1,1,1,1,1,1,1];
				_this.column_row_offset["amount1"] = [1,1,1,1,1,1,1,1,1,1];
				_this.column_row_offset["amount2"] = [1,1,1,1,1,1,1,1,1,1];
				_this.column_row_offset["amount3"] = [1,1,1,1,1,1,1,1,1,1];
				console.log(_this.column_row_offset);
			},
			//合并行
			objectSpanMethod({ row, column, rowIndex, columnIndex }) {
				var _this = this;  
		      	if(!_this.now_col_row_num[column.property]) {  
			        _this.now_col_row_num[column.property] = Object.assign([], _this.column_row_offset[column.property]);  
			        let a = _this.now_col_row_num[column.property].shift();  
			        _this.now_col_offset[column.property] = a;  
			        return {  
			          	rowspan: a,  
			          	colspan: 1  
			        };  
			    } else if (rowIndex >= _this.now_col_offset[column.property]) {  
		        	let a = _this.now_col_row_num[column.property].shift();  
		        	_this.now_col_offset[column.property] += a;  
		        	return {  
		          		rowspan: a,  
		          		colspan: 1  
		        	};  
		      	} else {  
			        return {  
			          	rowspan: 0,  
			          	colspan: 0  
			        };  
	      		}  
		    } 
		}
	}
</script>
<style>
	.myhbhtab_container{
		width:100%;
		height:100%;
	}
</style>
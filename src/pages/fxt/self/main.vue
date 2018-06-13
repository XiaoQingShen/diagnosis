+<template>
	<div class="fxt_self">
		<table1 v-if="type=='table1'" :fxtid="fxtid" :type="type" :dataurl="dataurl" :checksUrlList="checksUrlList" :fxtparams="fxtparams" :isClick="isClick" :xlmc="xlmc" :csList="csList" :bt="bt" :isLast="isLast"></table1>
		<table1s v-if="type=='table1s'" :fxtid="fxtid" :type="type" :dataurl="dataurl" :checksUrlList="checksUrlList" :fxtparams="fxtparams" :isClick="isClick" :xlmc="xlmc" :csList="csList" :bt="bt" :isLast="isLast"></table1s>
		<table3 v-if="type=='table3'" :fxtid="fxtid" :type="type" :dataurl="dataurl" :checksUrlList="checksUrlList" :fxtparams="fxtparams" :isClick="isClick" :xlmc="xlmc" :csList="csList" :bt="bt" :isLast="isLast"></table3>
		<!-- <table5 v-if="type=='table5'" :fxtid="fxtid" :type="type" :dataurl="dataurl" :checksUrlList="checksUrlList" :fxtparams="fxtparams" :isClick="isClick" :xlmc="xlmc" :csList="csList" :bt="bt" :isLast="isLast"></table5> -->
		<fhtable1 v-if="type=='fhtable1'" :fxtid="fxtid" :type="type" :dataurl="dataurl"></fhtable1>
	</div>
</template>
<script>
import table1 from './mytable/mytab1'  //表格1   无排序，分页
import table1s from './mytable/mytab1s'  //表格1s  无排序，无分页
import table3 from './mytable/mytab3'   //表格3  排序，分页，顶部灰色，2,4行有颜色
import table4 from './mytable/mytab4'   //表格4  排序，分页，顶部白色，1,3行有颜色
import fhtable1 from './mytable/myfhtab1' //表格5  标签页表格  
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
				table1statu:false,   //table1显示状态   无排序，分页
				table2statu:false,   //table2显示状态   无排序，无分页
				table3statu:false,   //table3显示状态   排序，分页
				table4statu:false,   //table4显示状态   排序，无分页
			}
		},
		components:{table1,table1s,table3,table4,fhtable1},
		created(){

		},
		mounted(){

		},
		methods:{

		}
	}
</script>
<style>
	.fxt_self{
		width:100%;
		height:100%;
	}
</style>
<template>
	<div class="charts_mian">
		<div class="fxt" v-if="echartsStatu">
			<myecharts :fxtid="fxtid" :type="type" :dataurl="dataurl" :checksUrlList="checksUrlList" :fxtparams="groupparams" :isClick="isClick" :xlmc="xlmc" :csList="csList" :bt="bt" :showbt="showbt" :isLast="isLast" @fxtparents="chartschild"></myecharts>
		</div>
		<div class="fxt" v-if="selfStatu">
			<selfcharts :fxtid="fxtid" :type="type" :dataurl="dataurl" :checksUrlList="checksUrlList" :fxtparams="groupparams" :isClick="isClick" :xlmc="xlmc" :csList="csList" :bt="bt" :showbt="showbt" :isLast="isLast" @fxtparents="chartschild"></selfcharts>
		</div>
		<div class="fxt" v-if="radarStatu">
			<myradar :fxtid="fxtid" :type="type" :dataurl="dataurl" :checksUrlList="checksUrlList" :fxtparams="groupparams" :isClick="isClick" :xlmc="xlmc" :csList="csList" :bt="bt" :showbt="showbt" :isLast="isLast" @fxtparents="chartschild"></myradar>
		</div>
	</div>
</template>
<script>
import myecharts from './myecharts/main'  //echarts图形
import myradar from './myradar/main'   //radar图形点击维度
import selfcharts from './self/main'   //自定义图形
	export default{
		// fxtid 图形id
		// isClick  图形是否可点击  根据该组合模型的分子模型个数决定
		// groupparams  group层参数
		// isLast  是否是组合模型的最后一个图形
		// curfxtindex  当前显示分子模型下标
		// showbt   是否显示标题
		props:['fxtid','isClick','groupparams','isLast','curfxtindex','showbt'],
		data(){
			return{
				echartsType:['bar1','bar2','bar3','line1','pie1','pie2','radar1','radar2','barline1','barline2'],  //echarts 封装模型类型
				selfType:['self1','self2','self3','table1','table2','table3','table4','fhtable1'],  //自定义  封装模型类型
				radarType:['radarself1'],   //自定义雷达图形  点击雷达图的维度，非数据
				type:'',  //模型类型
				echartsStatu:false,  //echarts 图形状态
				selfStatu:false,  //自定义 图形状态
				radarStatu:false,   //自定义雷达图状态
				dataurl:'',  //图形接口地址
				checksUrlList:[],  //图形筛选条件接口地址数组
				// fxtparams:{},  //fxt  参数
				real_fxtid:'',  //真实分析图id
				xlmc:'',  //小类名称  组合模型副标题
				csList:[],  //参数KEY值数组 
				bt:'',  //图形标题 
			}
		},
		components:{myecharts,selfcharts,myradar},
		mounted(){
			var _this = this;
		},
		created(){
			var _this = this;
			_this.getData();
		},
		watch:{
			groupparams:{
				handler(curVal,oldVal){
					var _this = this;
					_this.getData();  //获取图形基本信息
				},
				deep:true
			},
			curfxtindex:{
				handler(curVal,oldVal){
					var _this = this;
					console.log(curVal);
					console.log(oldVal);
					// this.chart.resize();
					_this.getData();  //获取图形基本信息
				},
				deep:true
			},
		},
		methods:{
			//获取图形type数据
			getData(){
				var _this = this;
				_this.real_fxtid = _this.fxtid.split("_")[0];
				// console.log("进入fxt");
				_this.$axios({
					method:'post',
					// url:'./static/fxt.json',
					url:_this.$apiUrls.chartParamter,
					params:{"fxtid":_this.real_fxtid}
				}).then(function(res){
					var res_data = res.data;
					if(res_data.code=="40001"){
						_this.type = res_data.content.fxttype;
						_this.dataurl = _this.$apiUrls.baseUrl+''+res_data.content.dataurl;
						// _this.checksUrlList = res_data.content.checksurl;
						_this.checksUrlList = res_data.content.params;
						_this.xlmc = res_data.content.xlmc;
						// _this.csList = res_data.content.csList;
						_this.bt = res_data.content.bt;
						_this.$emit('groupcurfxtinfo',_this.bt);   //回传标题，作为下载图片名称
						_this.bttoparent();  //回传标题  趋势图标题
						console.log("*******111111111");
						console.log(_this.type);
						if(_this.echartsType.in_array(_this.type)){  //echarts基础图形
							//echarts图形
							_this.echartsStatu = true;
							_this.selfStatu = false;
							_this.radarStatu = false;
						}else{
							if(_this.selfType.in_array(_this.type)){  //自定义图形
								//自定义图形
								_this.echartsStatu = false;
								_this.selfStatu = true;
								_this.radarStatu = false;
							}else{
								//自定义雷达图  维度点击
								_this.echartsStatu = false;
								_this.selfStatu = false;
								_this.radarStatu = true;
							};
						}
					}else{
						//获取数据失败
					}
				});
			},
			// 图形点击事件传回的参数
			chartschild(val,fxtid,xlmc){
				var _this = this;
				_this.$emit('groupparents',val,fxtid);
			},
			// 向父级回传bt参数
			bttoparent(){
				var _this = this;
				_this.$emit('parentgetbt',_this.bt);
			}
		}
	}
</script>
<style>
	.charts_mian{
		width:100%;
		height:100%;
	}
	.fxt{
		width:100%;
		height:100%;
	}
</style>
<template>
	<div class="fxt_myradar">
		<div class="fxt_titles_opt">
			<p class="fxt_fbt">{{bt}}</p>
			<div class="fxt_opt">
				<myselect class="fxt_opt_checks" v-for="(item,index) in checksUrlList" :key="index" :checkUrlxx="item" @myselectParents="myselectChild"></myselect>
				<div class="clear_float"></div>
			</div>
		</div>
		<div v-show="chartsstatu" class="myradar_div" :id="fxtid"></div>
		<div class="errorinfo" v-show="nodatastatu"><p>{{errormsg}}</p></div>
	</div>
</template>
<script>
	import {chartPaint} from '../../../tools/paint_charts.js'  //echarts 图形方法
	import myselect from '../myselect/main'  //筛选条件
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
				// fakefxtid:'',  //分析模型假id  加上时间戳和随机数，避免模型id重复
				chart:null,  //图形
				real_fxtid:'',  //真实图形id
				checkUrl:'',
				radarData:null,  //雷达图数据
				errormsg:'',    //错误提示信息
				nodatastatu:false,  //无数据状态
				chartsstatu:true,   //图形显示状态
			}
		},
		components:{myselect},
		mounted(){
			var _this = this;
			_this.echarts_init();  //图形初始化
	        _this.chart.resize();
			if(_this.checksUrlList.length>0){
	        	//存在参数时 先获取默认参数再获取图形数据
	        }else{
	        	_this.getData();
	        };
		},
		created(){
			var _this = this;
		},
		watch:{
			fxtparams:{
				handler(curVal,oldVal){
					var _this = this;
					console.log(curVal);
					console.log(oldVal);
					this.chart.resize();
					_this.getData();  //获取图形基本信息
				},
				deep:true
			},
		},
		methods:{
			//获取图形基本信息
			getbaseinfo(){
				var _this = this;
				_this.$axios({
					method:'get',
					// url:'./static/main_jxl.json',
					url:_this.dataurl,
					params:_this.fxtparams
				}).then(function(res){
					var res_data = res.data;
					if(res_data.code=="40001"){
						_this.radarData = res_data.content;
						if(res_data.content.datas.length>0){
							_this.setChartOption(res_data.content); //设置图形样式
						}else{
							// 无数据
							_this.errormsg = "暂无数据";
							_this.nodatastatu = true;
						};
					}else{
						//异常处理
						console.log("失败");
					}
				});	
			},
			//图形初始化
			echarts_init(){
				var _this = this;
				_this.chart = _this.$echarts.init(document.getElementById(_this.fxtid),_this.$theme);  //模型主题运用
				// loading 动画
				_this.chart.showLoading();
				//窗口变化
			    window.addEventListener('resize', ()=> {
		           _this.chart.resize();
			    });
			},
			//echarts 设置图形样式
			setChartOption(data){
				var _this = this;
				var option = chartPaint().radar2(data);
				_this.real_fxtid = _this.fxtid.split("_")[0];
				// option.title.text = _this.real_fxtid;
				_this.chart.setOption(option);
				_this.chart.hideLoading();  //配置成功后取消loading事件

			},
			// 图形点击事件
			echarts_click(){
				var _this = this;
				// if(_this.isClick && !_this.isLast){
					_this.chart.on('click',function(val){
						var wdname = val.name;
						var curParams = _this.fxtparams;
						curParams.xlmc = _this.xlmc;
						// var paramsObj = {"xlmc":_this.xlmc};
						var wdlist_len = _this.radarData.indicator.length;
						var wdlist = [];
						for(var i=0;i<wdlist_len;i++){
							wdlist.push(_this.radarData.indicator[i].name);
						};
						if(wdlist.in_array(wdname)){
							curParams[_this.radarData.indicatorkey] = wdname;
							curParams.name = wdname;
							_this.$emit('fxtparents',curParams,_this.fxtid);
						};
						// for(var key in val.data){
						// 	if(key!="value"){
						// 		paramsObj[key] = val.data[key];
						// 	};
						// };
				 		
				    });
				// }else{
					// console.log("该图形无下钻事件");
				// };
			},
			//echarts 获取图形数据
			getData(){
				var _this = this;
				var curParams = _this.fxtparams;
				_this.real_fxtid = _this.fxtid.split("_")[0];
				curParams.fxtid = _this.real_fxtid;
				_this.$axios({
					method:'post',
					// url:'./static/main_jxl.json',
					url:_this.dataurl,
					params:curParams
				}).then(function(res){
					var res_data = res.data;
					if(res_data.code=="40001"){
						_this.radarData = res_data.content;
						if(res_data.content.datas.length>0){
							_this.nodatastatu = false;
							_this.chartsstatu = true;
							_this.setChartOption(res_data.content); //设置图形样式
							_this.echarts_click();  //点击事件
						}else{
							_this.errormsg = "暂无数据";
							_this.nodatastatu = true;
							_this.chartsstatu = false;
							_this.chart.hideLoading();  //配置成功后取消loading事件
						}
					}else{
						//异常处理
						console.log("失败");
					}
				});
			},
			//随机数+时间戳  避免模型id重复
		    getRandom(){
		    	var timestamp = new Date().getTime();
		    	var randomNum = parseInt(10000 * Math.random());
		    	return timestamp+""+randomNum;
		    },
		    myselectChild(keys,val){
		    	var _this = this;
		    	_this.fxtparams[keys] = val;
		    	_this.getData();
		    }
		}
	}
</script>
<style>
	.fxt_myradar{
		width:100%;
		height:100%;
	}
	/*.fxt_titles_opt{
		min-height:0.3rem;
	}*/
	.fxt_fbt{
        font-size:0.12rem;
        color:rgba(153,153,153,1);
        /*line-height:9px;*/
	}
	.myradar_div{
		width:100%;
		height:calc(100% - 0.3rem);
	}
	.fxt_opt{
		float:right;
		height:100%;
	}
	.fxt_opt_checks{
		float:left;
		margin:0px;
	}
	.errorinfo{
		width:100%;
		text-align: center;
	}
	.errorinfo >p{
		font-size: 0.1rem;
		color:rgba(153,153,153,1);
		margin-left:45%;
		padding-top:5%;
	}
</style>
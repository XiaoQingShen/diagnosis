<template>
	<div class="fxt_myecharts">
		<div v-if="showbt" class="fxt_titles_opt">
			<p class="fxt_fbt">{{bt}}</p>
			<div class="fxt_opt">
				<myselect class="fxt_opt_checks" v-for="(item,index) in checksUrlList" :key="index" :checkUrlxx="item" @myselectParents="myselectChild"></myselect>
				<div class="clear_float"></div>
			</div>
		</div>
		<div v-show="chartsstatu" class="myecharts_div" :id="fxtid"></div>
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
		// showbt 是否显示标题  趋势图时不显示
		props:['fxtid','type','dataurl','checksUrlList','fxtparams','isClick','xlmc','csList','bt','isLast','showbt'],
		data(){
			return{
				// fakefxtid:'',  //分析模型假id  加上时间戳和随机数，避免模型id重复
				chart:null,  //图形
				real_fxtid:'',  //真实图形id
				checkUrl:'',
				errormsg:'',  //错误提示信息
				chartsstatu:true,   //图形显示状态
				nodatastatu:false,   //无数据提示状态
				chartstheme:this.$theme,  //图形主题
				curParams:this.fxtparams,   //当前参数条件
			}
		},
		components:{myselect},
		mounted(){
			var _this = this;
			if(_this.$store.state.theme == 'a'){
            	//浅色主题
            	_this.chartstheme = _this.$white;
            }else{
            	//深色主题
            	_this.chartstheme = _this.$black;
            };
			_this.echarts_init(_this.chartstheme);  //图形初始化
	        _this.chart.resize();
	        if(_this.checksUrlList.length>0){
	        	//存在参数时 先获取默认参数再获取图形数据
	        }else{
	        	_this.getData();
	        };
			_this.echarts_click();
		},
		created(){
			var _this = this;
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
			fxtparams:{
				handler(curVal,oldVal){
					var _this = this;
					console.log("fxtparams改变");
					// this.chart.clear();  //清空数据 示例不清空
					// this.chart.resize();
					// _this.getData();  //获取图形基本信息
				},
				deep:true
			},
			fxtid:{
				handler(curVal,oldVal){
					var _this = this;
					if(_this.$store.state.theme == 'a'){
	                	//浅色主题
	                	_this.chartstheme = _this.$white;
	                }else{
	                	//深色主题
	                	_this.chartstheme = _this.$black;
	                };
					_this.chart.clear(); //清空数据 示例不清空
					_this.chart.resize();
					_this.getData();  //获取图形基本信息
				},
			},
			listenchangetheme: function(a, b) {  
                var _this = this;
                if(_this.$store.state.theme == 'a'){
                	//浅色主题
                	_this.chartstheme = _this.$white;
                }else{
                	//深色主题
                	_this.chartstheme = _this.$black;
                };
				_this.chart.clear(); //清空数据 示例不清空
				_this.chart.dispose();
				_this.echarts_init(_this.chartstheme);  //图形初始化
				_this.chart.resize();
				_this.getData();  //获取图形基本信息
				_this.echarts_click();
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
			//图形初始化
			echarts_init(chartstheme){
				var _this = this;
				_this.chart = _this.$echarts.init(document.getElementById(_this.fxtid),chartstheme);  //模型主题运用
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
				var option = null;
				console.log(_this.type);
				if(_this.type=="line1"){ //判断图形样式
					option = chartPaint().line1(data);
				};
				if(_this.type=="bar1"){
					var option = chartPaint().opt2(data);
				};
				if(_this.type=="bar2"){
					var option = chartPaint().bar2(data);
				};
				if(_this.type=="bar3"){
					var option = chartPaint().bar3(data);
				};
				if(_this.type=="pie1"){
					var option = chartPaint().pie1(data);
				};
				if(_this.type=="pie2"){
					var option = chartPaint().pie2(data);
				};
				if(_this.type=="radar2"){
					var option = chartPaint().radar2(data);
				};
				if(_this.type=="radar1"){
					var option = chartPaint().radar1(data);
				};
				if(_this.type=="barline1"){
					var option = chartPaint().barline1(data);
				};
				if(_this.type=="barline2"){
					var option = chartPaint().barline2(data);
				};
				if(option!=null){
					_this.real_fxtid = _this.fxtid.split("_")[0];
					_this.chart.setOption(option);
					_this.chart.hideLoading();  //配置成功后取消loading事件
				};
			},
			// 图形点击事件
			echarts_click(){
				var _this = this;
				// if(_this.isClick && !_this.isLast){
					_this.chart.on('click',function(val){
						// _this.curParams = _this.fxtparams;
						_this.curParams.xlmc = _this.xlmc;
						for(var key in val.data){
							if(key!="value"){
								if(val.data[key] == '业务库无记录'){
									_this.curParams[key] = 'null';
								}else{
									_this.curParams[key] = val.data[key];
								};
							};
						};
						_this.curParams.name = val.name;
				 		_this.$emit('fxtparents',_this.curParams,_this.fxtid);
				    });
				// }else{
					// console.log("该图形无下钻事件");
				// };
			},
			//echarts 获取图形数据
			getData(){
				var _this = this;
				_this.real_fxtid = _this.fxtid.split("_")[0];
				_this.curParams.fxtid = _this.real_fxtid;
				_this.$axios({
					method:'post',
					url:_this.dataurl,
					params:_this.curParams
				}).then(function(res){
					var res_data = res.data;
					if(res_data.code=="40001"){
						if(res_data.content.datas!=null && res_data.content.datas.length>0){
							_this.nodatastatu = false;
							_this.chartsstatu = true;
							_this.setChartOption(res_data.content); //设置图形样式
						}else{
							// 无数据
							_this.errormsg = "暂无数据";
							_this.nodatastatu = true;
							_this.chartsstatu = false;
							_this.chart.hideLoading();  //配置成功后取消loading事件
						};
					}else{
						//异常处理
						// console.log("失败");
					}
				});
			},
			//随机数+时间戳  避免模型id重复
		    getRandom(){
		    	var timestamp = new Date().getTime();
		    	var randomNum = parseInt(10000 * Math.random());
		    	return timestamp+""+randomNum;
		    },
		    // 有参数时获取到默认参数再取图形数据
		    myselectChild(keys,val){
		    	var _this = this;
		    	_this.fxtparams[keys] = val;
		    	_this.getData();
		    }
		}
	}
</script>
<style>
	.fxt_myecharts{
		width:100%;
		height:100%;
	}
	.fxt_titles_opt{
		min-height:0.3rem;
	}
	.fxt_fbt{
        font-size:0.12rem;
        color:rgba(153,153,153,1);
        /*line-height:9px;*/
	}
	.myecharts_div{
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
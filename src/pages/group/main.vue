<template>
	<div :id="groupid" class="group_container">
		<div class="group_content">
			<div class="group_top">
				<div class="group_top_title">
					<i v-show="xzStatu" v-bind:class="[this.$store.state.theme=='a'?'icon-xza':'icon-xzb','icon']"></i>
					<p :title="groupTitle">{{groupTitle}}</p>
					<i v-bind:class="[this.$store.state.theme=='a'?'icon-zja':'icon-zjb','icon','group_top_zjicon']" @mouseover="title_show($event)" @mouseout="title_back($event)" :title="groupZj"></i>
					<div :id="titleDivId" class="title_div"></div> 
					<div class="clear_float"></div>
				</div>
				<div class="group_top_opt">
					<div class="group_top_opt_downloaddiv">
						<i v-bind:class="[this.$store.state.theme=='a'?'icon-downloada':'icon-downloadb','icon','group_top_opt_downloada']"></i>
						<div class="group_download_opts downcharts">
							<ul class="downcharts">
								<li class="downcharts" @click="exportImg"><p class="downcharts">导出图片</p></li>
								<li class="downcharts" @click="exportExl"><p class="downcharts">导出Excel</p></li>
							</ul>
						</div>
					</div>
					<i v-bind:class="[this.$store.state.theme=='a'?'icon-qsta':'icon-qstb','icon','group_top_opt_qst']"  @click="qstClick" v-show="qsticonStatu && cur_fxtindex==0"></i>
					<i @click="enlargeClick" v-show="showenlarge" v-bind:class="[this.$store.state.theme=='a'?'icon-enlargea':'icon-enlargeb','icon','group_top_opt_enlarge']" title="放大"></i>
					<i @click="yjClick" v-show="false" v-bind:class="[this.$store.state.theme=='a'?'icon-yja':'icon-yjb','icon','group_top_opt_yj']" title="预警"></i>
					<i v-show="groupsc==0" @click="scClick" v-bind:class="[this.$store.state.theme=='a'?'icon-sca':'icon-scb','icon','group_top_opt_sc']" title="收藏"></i>
					<i v-show="groupsc==1" @click="scClick" v-bind:class="[this.$store.state.theme=='a'?'icon-sc1a':'icon-sc1b','icon','group_top_opt_sc']" title="收藏"></i>
				</div>
				<div class="clear_float"></div>
			</div>
			<div class="group_charts">
				<div class="group_fxt" v-for="(item,index) in group_fxtIdList" v-if="index==cur_fxtindex">
					<fxt :fxtid="item" :isClick="index < (group_fxtIdList.length-1)" :groupparams="groupparams" @groupparents="fxtchild" @groupcurfxtinfo="fxtinfo" :isLast="index==(group_fxtIdList.length-1)" :curfxtindex="cur_fxtindex" :showbt="true"></fxt>
				</div>
			</div> 
			<div class="charts_nav" v-show="cur_fxtindex>0">
				<!-- 面包屑导航 -->
				<div class="mbx_nav" v-for="(item,index) in bottomNav">
					<p class="mbx_nav_name" @click="mbxnavClick(index,bottomNav.length)">{{item}}</p>
					<p class="mbx_nav_fonts">&nbsp;>&nbsp;</p>
				</div>
			</div>
			<div class="clear_float"></div>
		</div>
		<div class="group_qst" v-if="qstStatu">
			<groupqst :fxtid="groupQst" :showbt="false" @groupQstParent="qstCloseClick"></groupqst>
		</div>
		<div class="group_yjset" v-if="yjsetStatu">
			<yj :fxtid="groupQst" @groupYjParent="yjCloseClick"></yj>
		</div>
		<div class="group_enlarge" v-if="enlargeStatu">
			<enlarge :groupid="groupid" :showenlarge="false" :qjcs="qjcs"></enlarge>
		</div>
	</div>
</template>
<script>
	import fxt from '../fxt/main'  //分析图主入口
	import groupqst from './qst'  //趋势图窗口
	import yj from './yj'  //预警窗口
	import enlarge from './enlarge'  //放大
	import html2canvas from 'html2canvas'   //div转图片工具
	export default{
		name:'group',
		//groupid  组合模型id
		props:['groupid','showenlarge','qjcs'],
		data(){
			return{
				groupTitle:'',  //组合模型标题
				groupZj:'',  //组合模型注解
				groupsc:0,  //组合模型收藏状态
				groupQst:'',  //组合模型趋势图id
				group_fxtList:[],  //组合模型包含分子模型列表
				group_fxtIdList:[],  //组合模型包含分子模型id列表
				cur_fxtindex:0,  //当前显示分析图下标
				groupparams:{},  //group层参数
				bottomNav:["当前："],  //面包屑导航地址数据
				ishx:false,  //是否回写参数
				qstStatu:false,  //趋势图显示状态
				yjsetStatu:false,   //预警设置显示状态
				enlargeStatu:false,  //放大
				xzStatu:false,   //下钻状态
				qsticonStatu:false,   //趋势图状态
				curfxttitle:'',   //当前展示分析图标题
				titleDivId:this.groupid+this.getRandom(),  //显示注解div id
				// theme:this.$theme   //主题
			}
		},
		components:{fxt,groupqst,yj,enlarge},
		mounted(){
		},
		created(){
			var _this = this;
			console.log("groupid");
			console.log(_this.groupid);
			_this.getData();  //获取该组合模型包含的分子模型的数据
		},
		methods:{
			//获取该组合模型包含的分子模型的数据
			getData(){
				var _this = this;
				var qjcs = JSON.parse(_this.qjcs);
				_this.groupparams = qjcs;
				console.log(_this.groupid);
				qjcs.groupid = _this.groupid;
				_this.$axios({
					method:'get',
					url:_this.$apiUrls.groupByFxtIdList,
					// params:{"groupid":_this.groupid,userid:'1111'}
					params:qjcs
				}).then(function(res){
					var res_data = res.data;
					if(res_data.code=="40001"){
						_this.groupTitle = res_data.content.title;
						_this.groupZj = res_data.content.zj;
						_this.groupsc = res_data.content.sc;
						if(res_data.content.qstid==null || res_data.content.qstid=="" ||res_data.content.qstid==" "){
							//不存在趋势图  不显示趋势图的图标
							_this.qsticonStatu = false;
						}else{
							_this.qsticonStatu = true;
						};
						_this.groupQst = res_data.content.qstid+"_"+_this.getRandom();
						_this.group_fxtList = res_data.content.fxtList;
						var group_fxtIdList_len = res_data.content.fxtList.length;
						if(group_fxtIdList_len>1){
							_this.xzStatu = true;
						}else{
							_this.xzStatu = false;
						};
						for(var i=0;i<group_fxtIdList_len;i++){
							_this.group_fxtIdList.push(_this.group_fxtList[i].fxtid+"_"+_this.getRandom());
						};
						// _this.cur_fxtindex = 0;
					}else{
						//获取数据失败
						alert("获取数据失败");
					}
				});
			},
			//fxt层传回的参数
			fxtchild(val,fxtid){
				var _this = this;
				_this.fxtShowHide(fxtid); //切换图形显示隐藏
				// console.log("当前显示图形下标"+_this.cur_fxtindex);
				// console.log(_this.ishx);
				if(_this.cur_fxtindex <= _this.group_fxtIdList.length && _this.ishx){
					_this.groupparams = val;   //改变回传参数
					if(_this.cur_fxtindex==1){
						_this.bottomNav.push(val.xlmc); //第一层的小类名称
						console.log("传回的name");
						console.log(val.name);
						_this.bottomNav.push(val.name);  //当前点击的参数
					}else{
						if((_this.cur_fxtindex+1) == _this.bottomNav.length){
							_this.bottomNav[_this.cur_fxtindex+1] = val.name;  //当前点击的参数
						}else{
							//最后一层图形无点击事件，不再继续添加面包屑导航数据
						};
					};
				}else{
					//当前点击的图形为最后一个图形时，返回的参数，不写入回传的参数					
				};
			},
			//当前分析图信息 
			fxtinfo(title){
				var _this = this;
				_this.curfxttitle = title;
			},
			//点击模型显示下一个图形隐藏上一个图形
		    fxtShowHide(fxtid){
		    	var _this = this;
		    	var mxIdList_len = _this.group_fxtIdList.length;
		    	var flag = false;
		    	for(var i=0;i<mxIdList_len;i++){
	    			if(fxtid==_this.group_fxtIdList[i] && i!=(mxIdList_len-1)){
		    			//显示下一个图
		    			_this.cur_fxtindex = i+1;
		    			// var new_params3 = _this.groupparams
		    			// new_params3.curfxtindex3 = i+1;
		    			// _this.groupparams = new_params3;
		    			flag = true;
		    		};
		    	};
		    	if(flag){
		    		_this.ishx = true;
		    	}else{
		    		_this.ishx = false;
		    	}
		    	console.log(_this.ishx);
		    },
		    //随机数+时间戳  避免模型id重复
		    getRandom(){
		    	var timestamp = new Date().getTime();
		    	var randomNum = parseInt(10000 * Math.random());
		    	return timestamp+""+randomNum;
		    },
		    // 面包屑导航点击事件
		    mbxnavClick(index,navLen){
		    	var _this = this;
		    	if(index!=0 && index!=(navLen-1)){
		    		if(index==1){
		    			//返回显示第一个分子模型，当前位置隐藏
		    			_this.cur_fxtindex = 0;
		    			_this.bottomNav = ["当前："];
		    			// var new_params1 = _this.groupparams
		    			// new_params1.curfxtindex1 = 0;
		    			// _this.groupparams = new_params1;
		    		}else{
		    			_this.cur_fxtindex = index-1;
		    			_this.bottomNav.splice(index+1,navLen);
		    			// var new_params2 = _this.groupparams
		    			// new_params2.curfxtindex2 = index-1;
		    			// _this.groupparams = new_params2;
		    		};
		    	}
		    },
		    // 收藏点击事件
		    scClick(){
	    		var _this = this;
	    		console.log("点击");
	    		console.log(_this.groupsc);
	    		if(_this.groupsc==0){
	    			_this.groupsc = 1;
	    			//提交收藏请求
	    			console.log(_this.group_fxtList[_this.cur_fxtindex].fxtid);
	    		}else{
	    			_this.groupsc = 0;
	    			console.log(_this.group_fxtList[_this.cur_fxtindex].fxtid);
	    		}
		    },
		    // 趋势图图标点击事件
		    qstClick(){
		    	var _this = this;
		    	_this.qstStatu = true;  //显示组合模型趋势图
		    },
		    // 关闭趋势图
		    qstCloseClick(flag){
		    	var _this = this;
		    	_this.qstStatu = false;
		    },
		    // 预警图标点击事件
		    yjClick(){
		    	var _this = this;
		    	_this.yjsetStatu = true;
		    },
		    //关闭预警窗口
		    yjCloseClick(flag){
		    	var _this = this;
		    	_this.yjsetStatu = false;
		    },
		    // 放大
		    enlargeClick(){
		    	var _this = this;
		    	_this.enlargeStatu = true;
		    },
		    // 导出图片
		    exportImg(){
		    	var _this = this;
		    	var cur_fxtid = _this.group_fxtIdList[_this.cur_fxtindex];
		    	var down_real_fxtid = cur_fxtid.split("_")[0];
		    	//生成图片
		    	html2canvas(document.getElementById(_this.groupid),{
					async:true
				}).then(function(canvas) {
					var fxtDataUrl = canvas.toDataURL('image/png');  //用于图片保存到服务器
				    // document.body.appendChild(canvas);
				    //导出到本地
				    _this.saveFile(canvas.toDataURL('image/png'),_this.curfxttitle+".png");  //全局导出方法
				});
		    },
		    // 导出excel
		    exportExl(){
		    	var _this = this;
		    	var cur_fxtid = _this.group_fxtIdList[_this.cur_fxtindex];
		    	var down_real_fxtid = cur_fxtid.split("_")[0];
		    	//image   excel
		    	_this.$axios({
		    		type:'get',
		    		url:_this.$apiUrls+'exportChart',
		    		params:{"fxtid":down_real_fxtid,"bt":_this.curfxttitle,"exporttype":"excel"}
		    	}).then(function(res){
		    		var res_data = res.data;
		    		if(res_data.code == "40001"){
		    			//导出成功
		    		}else{
		    			//导出失败
		    		}
		    	});
		    },
		    // 显示group注解
		    title_show(e){
		    	var _this = this;
		    	// e.target 是你当前点击的元素
       			// e.currentTarget 是你绑定事件的元素 e.currentTarget.title  当前title
       			var div = document.getElementById(_this.titleDivId);
       			div.style.left = e.target.offsetLeft+"px";
       			var title = _this.split_str(_this.groupZj,10);
		    	div.innerHTML = title;
		    	div.style.display = 'block';
		    	e.currentTarget.title = ''; //去掉原有title显示
		    	console.log(title);
		    },
		    //隐藏group注解
		    title_back(e){
		    	var _this = this;
		    	e.currentTarget.title = _this.groupZj;
		    	var div = document.getElementById(_this.titleDivId);
		    	div.style.display = 'none';
		    }
		}
	}
</script>
<style>
	.group_container{
		/*width:100%;*/
		height:100%;
		/*padding-top:0.12rem;*/
		/*padding-left:0.2rem;*/
		/*padding-right:0.2rem;*/
		/*padding-bottom:0.19rem;*/
		position: relative;
	}
	.group_qst{
		width:100%;
		height:100%;
		background:rgba(232,238,241,1);
		/*opacity:0.9;*/
		border-radius: 6px; 
		box-shadow:0px 0px 6px rgba(228,232,234,1);
		position: absolute;
		margin-top:- calc(100% -0.42rem);
		/*border:1px solid green;*/
	}
	.group_yjset{
		width:100%;
		height:100%;
		background:rgba(232,238,241,1);
		opacity:0.9;
		border-radius: 6px; 
		box-shadow:0px 0px 6px rgba(228,232,234,1);
		position: absolute;
		margin-top:- calc(100% -0.42rem);
		/*border:1px solid green;*/
	}
	.group_content{
		margin-top:0.12rem;
		margin-left:0.2rem;
		margin-right:0.2rem;
		margin-bottom:0.19rem;
		width:calc(100% - 0.4rem);
		height:calc(100% - 0.42rem);
		position: absolute;
		/*border:1px solid pink;*/
	}
	.group_top{
		/*border:1px solid red;*/
		height:0.46rem;
	}
	.group_top_title{
		width:calc(100% - 1.63rem);
		min-width: 0.8rem;
		margin-top:0.02rem;
		/*height:16px;*/
		float:left;
		/*border:1px solid red;*/
	}
	.group_top_opt{
		/*width:1.5rem;*/
		font-size:0.16rem;
		float:right;
		display: none;
	}
	.group_container:hover .group_top_opt{
		display: block;
	}
	.group_top_title >img,p,i{
		float:left;
	}
	.group_top_title >img{
		margin-top:0.14rem;
		margin-right:0.07rem;
		/*cursor: help;*/
	}
	.group_top_title >i{
		margin-top:0.14rem;
		margin-right:0.07rem;
	}
	.group_top_zjicon{
		margin-right:-0.07rem!important;
	}
	.group_top_title >p{
		max-width:calc(100% - 0.4rem);
		/*border:1px solid yellow;*/
		font-size:0.14rem;
		font-family:'MicrosoftYaHei';
		font-weight: bold;
		color:rgba(51,51,51,1);
		line-height:0.16rem;
		/*margin-left:0.07rem;*/
		margin-right:0.08rem;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
		margin-top:0.12rem;
		text-align: left;
	}
	.group_top_opt >img{
		float:right;
		margin-left:0.14rem;
		cursor: pointer;
	}
	.group_top_opt >i{
		float:right;
		margin-left:0.14rem;
		cursor: pointer;
	}
	.group_top_opt_enlarge{
		/*margin-left:0px!important;*/
	}
	.group_top_opt_downloaddiv{
		float:right;
		padding-left:0.14rem;
		padding-right:0.14rem;
		padding-top:0.15rem;
		height: 0.31rem;
	}

	.group_top_opt_sc,.group_top_opt_yj,.group_top_opt_download{
		margin-top:0.16rem;
	}
	.group_top_opt_enlarge{
		margin-top:0.17rem;
	}
	.group_top_opt_qst{
		margin-top:0.1rem;
	}
	.group_download_opts{
		position:absolute;
		width:0.72rem;
		height:0.7rem; 
		background:rgba(255,255,255,1);
		border-radius: 4px;
		box-shadow:2px 0px 8px rgba(222,215,215,1) ;
	    right: 0.01rem;
    	top: 0.4rem;
		display: none;
	    z-index: 22222222;
	}
	.group_top_opt_downloaddiv:hover .downcharts{
		display:block;
	}
	.downcharts:hover{
		display: block;
	}
	.group_download_opts >ul{
		position: relative;
		margin:0px;
		padding-top:10px;
		list-style: none;
		font-size:12px;
		color:rgba(153,153,153,1);
		text-align: center;
	}
	.group_download_opts > ul >li{
		height:0.26rem;
		text-align: center;
		border: 1px solid transparent;
	}
	.group_download_opts > ul >li:hover{
		cursor: pointer;
	}
	.group_download_opts >ul >li >p{
		margin-top:0.05rem;
		float:none;
	}
	.group_download_opts > ul >li:hover{
		background:rgba(246,248,249,1);
		color:rgba(119,119,119,1);
	}
	.group_charts{
		height:calc(100% - 0.5rem);
		/*border:1px solid blue;*/
	}
	.group_fxt{
		width:100%;
		height:100%;
	}
	.group_fxt >p{
		font-size:14px;
	}
	.charts_nav{
		height:0.29rem;
	}
	.mbx_nav{
		float:left;
	}
	.mbx_nav_name{
		float:left;
		font-weight: bold;
		font-size: 0.1rem;
		line-height: 0.18rem;
		color:rgba(153,153,153,1);
		cursor: pointer;
	}
	.mbx_nav_fonts{
		float:left;
		font-weight: bold;
		font-size: 0.01rem;
		line-height: 0.18rem;
		color:rgba(204,204,204,1);
	}
	.charts_nav .mbx_nav:first-child >.mbx_nav_name{
		color:rgba(204,204,204,1);
		cursor:default;
	}
	.charts_nav .mbx_nav:first-child >.mbx_nav_fonts{
		display: none;
	}
	.charts_nav .mbx_nav:last-child >.mbx_nav_name{
		color:rgba(204,204,204,1);
		cursor:default;
	}
	.charts_nav .mbx_nav:last-child >.mbx_nav_fonts{
		display: none;
	}
	.group_enlarge{
		width:100%;
		position: fixed;
		overflow: hidden;
		z-index:333333;
    	top: 0;
    	right: 0;
    	bottom: 0;
    	left: 0;
	}
	.title_div{
		position: absolute;
		display: none;
		border:1px solid rgba(143,143,143,1);
		/*background: rgba(247,247,247,0.8);*/
		background: #ffffff;
		font-size:12px;
		color:rgba(51,51,51,1);
		text-align: left;
		top:0.35rem;
		margin-left:0.1rem;
		padding:0.05rem;
		border-radius: 2px;
		z-index:33;
	}
</style>
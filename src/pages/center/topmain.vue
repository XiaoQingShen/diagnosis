<template>
	<div class="nz_center_topmain">
		<div class="center_pagename_select">
			<p class="center_pagename">视角：{{zdsj}}</p>
			<p class="center_pagename">诊断对象：{{curzddx}}</p>
			<div v-if="backstatu" @click="reback" class="center_back"><p class="center_pagename">返回</p></div>
			<div class="center_selects">
				<topselect1 :searchstatu="searchstatu" :xnstatu="xnstatu" :xqstatu="xqstatu" :xystatu="xystatu" :zystatu="zystatu"></topselect1>
			</div>
		</div>
	</div>
</template>
<script>
import topselect1 from './topselect1'  //筛选1类  学年学期
	export default{
		// qxcj 全校层级
		// pagename  页面名称
		// zdys  诊断要素
		// ysdetail 要素详情
		// zdsj 诊断视角
		// searchstatu 搜索框状态
		// xnstatu  学年筛选状态
		// xqstatu  学期筛选状态
		// xystatu 学院筛选状态
		// zystatu 专业筛选状态
		props:['zddx','zdxm','zdys','ysdetail','ysd','zdsj','searchstatu','xnstatu','xqstatu','xystatu','zystatu','backstatu'],
		data(){
			return{
				curzddx:'',   //当前合成诊断对象
			}
		},
		components:{topselect1},
		created(){
			var _this = this;
			_this.comzddx();  //合成诊断对象
		},
		mounted(){

		},
		methods:{
			// 合成诊断对象
			comzddx(){
				var _this = this;
				_this.curzddx = _this.zddx;
				if(_this.zdxm!='' && _this.zdxm!=null){
					_this.curzddx = _this.curzddx+'-'+_this.zdxm;
				};
				if(_this.zdys!='' && _this.zdys!=null){
					_this.curzddx = _this.curzddx+'-'+_this.zdys;
				};
				if(_this.ysdetail!=''&& _this.ysdetail!=null){
					_this.curzddx = _this.curzddx+'-'+_this.ysdetail;
				};
				if(_this.ysd!=''&& _this.ysd!=null){
					_this.curzddx = _this.curzddx+'-'+_this.ysd;
				}
			},
			// 返回
			reback(){
				var _this = this;
				// alert("点击");
				_this.$router.go(-1);
				// _this.$router.back(-1);
				// window.history.go(-1) 
			}
		}
	}
</script>
<style>
	.nz_center_topmain{
		width:100%;
		height:100%;
	}
	.center_pagename_select{
		width:calc(100% - 0.48rem);
		height:0.46rem;
		padding-top:0.12rem;
		padding-left:0.24rem;
		padding-right:0.24rem;
		/*border-bottom:1px solid red;*/
	}
	.center_pagename{
		font-size: 0.14rem;
		font-weight: bold;
		/*color:#333333;*/
		float:left;
	}
	.center_pagename:first-child{
		margin-right:0.3rem;
	}
	.center_back{
		float:left;
		margin-left:0.2rem;
		/*text-align: center;*/
		/*width:0.8rem;*/
		height:0.2rem;
		/*background-color: #082E74;*/
		cursor: pointer;
		border:1px solid black;
	}
	.center_back >p{
		padding-left:0.2rem;
		padding-right:0.2rem;
		margin:0px!important;
		float:none;
	}
	.center_selects{
		float:right;
		font-size: 0.12rem;
	}
	/*.center_selects >select{
		font-size: 0.12rem;
		float:left;
		height:0.26rem;
		margin-left:0.08rem;
	}*/
</style>
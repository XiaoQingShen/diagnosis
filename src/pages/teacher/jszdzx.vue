<template>
	<div class="nz_jszdzx_container">
		<div class="header_top">
			<headers></headers>
		</div>
		<div class="header_yy">
			<yyczc></yyczc>
		</div>
		<div class="jszdzx_center">
			<div class="left_conatiner">
				<leftnavs :pageleve1index="'3'"></leftnavs>
			</div>
			<div class="rightcenters">
				<div class="center_top">
					<topmain :zdsj="zdsj" :zddx="zddx" :zdxm="zdxm" :searchstatu="true" :xnstatu="true" :xqstatu="true" :xystatu="true" :zystatu="true" :backstatu="false"></topmain>
				</div>
				<div class="center_center">
					<div class="center_center_mxs">
						<centermain :breadcrums="'全校教师总体'" :showbreadcrums="true" :dataURL="'./static/xj_js.json'"></centermain>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import headers from '../header/main'  //顶部
import yyczc from '../header/yyczc'   //顶部阴影操作层
import leftnavs from '../leftnavs/main'  //左侧导航
import topmain from '../center/topmain'   //右侧中心诊断对象，全局筛选条件
import centermain from '../center/centermain'  //右侧中心内容
	export default{
		data(){
			return{
				zdsj:"校级视角",
				zddx:"全校教师总体",
				zdxm:""
			}
		},
		components:{headers,yyczc,leftnavs,topmain,centermain}
	}
</script>
<style>
	.nz_jszdzx_container{
		width:100%;
		height:100%;
		position: absolute;
		overflow: hidden;
	}
	.jszdzx_center{
		width:100%;
		height:calc(100% - 0.58rem);
	}
	.center_top{
		width:100%;
		height:0.46rem;
	}
	.center_center{
		width:calc(100% - 0.48rem);
		height:100%;
		overflow: auto;
		overflow-y: auto;
		padding-left:0.24rem;
		padding-right:0.24rem;
		padding-bottom:0.24rem;
	}
	.center_center_mxs{
		width:100%;
		height:calc(100% - 0.35rem);
		overflow-y: auto;
		/*overflow:scroll;*/
		/*border:1px solid red;*/
	}
</style>
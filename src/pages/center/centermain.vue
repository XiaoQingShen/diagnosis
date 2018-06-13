<template>
	<div class="nz_center_centermain">
		<div class="nz_centermain_pname" v-if="showbreadcrums">
			<div class="nz_centermain_pnamefgx"></div>
			<p class="nz_centermain_p">{{breadcrums}}</p>
			<div class="clear_float"></div>
		</div>
		<div class="nz_centermain_group" :style="{height:zheight*100+'px'}">
			<div class="layout1" v-for="(item,index) in zdData" :data-gs-x="item.x" :data-gs-y="item.y" :data-gs-width="item.wid" :data-gs-height="item.hei">
				<div class="centermain_group_container">
					<group v-if="item.type=='group'" :groupid="item.groupid" :showenlarge="false" :qjcs="qjcs"></group>
					<myzb1 v-if="item.type=='myzb1'" :zbname="item.zbname" :zbfs="item.zbfs" :zbtb="item.zbtb" :zf="item.zf" :tzdz="item.tzdz"></myzb1>
					<myzb2 v-if="item.type=='myzb2'" :zbname="item.zbname" :zbz="item.zbz" :zbdx="item.zbdx"></myzb2>
					<myzb3 v-if="item.type=='myzb3'" :zbname="item.zbname" :zbz="item.zbz" :zbdx="item.zbdx" :zbdb1="item.zbdb1" :zbdb1z="item.zbdb1z"></myzb3>
					<myzb4 v-if="item.type=='myzb4'" :zbname="item.zbname" :zbz="item.zbz" :zbdx="item.zbdx" :zbdb1="item.zbdb1" :zbdb1z="item.zbdb1z" :zbdb2="item.zbdb2" :zbdb2z="item.zbdb2z"></myzb4>
					<mysearch1 v-if="item.type=='mysearch'"></mysearch1>
					<mypersonal1 v-if="item.type=='mypersonal1'"></mypersonal1>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import myzb1 from '../fxt/self/myzb/myzb1'  //指标1
import myzb2 from '../fxt/self/myzb/myzb2'  //指标2
import myzb3 from '../fxt/self/myzb/myzb3'  //指标3
import myzb4 from '../fxt/self/myzb/myzb4'  //指标4
import mysearch1 from '../fxt/self/mysearch/mysearch1'  //搜索框
import mypersonal1 from '../fxt/self/mypersonal/mypersonal1'  //个人信息
	export default{
		// breadcrums  诊断分类名称
		//  dataURL  诊断获取数据地址
		// showbreadcrums  是否显示诊断分类名称
		props:['breadcrums','dataURL','showbreadcrums'],
		data(){
			return{
				groupid1:'6D00040EF168BD1EE050007F01001466',   //组合模型id
				groupid2:'6C7694D4652300EDE050007F01001CE9',   //组合模型id
				qjcs:{},  //全局参数
				zdData:[],   //诊断数据
				zheight:5,  //总高度
			}
		},
		components:{myzb1,myzb2,myzb3,myzb4,mysearch1,mypersonal1},
		created(){
			var _this = this;
			_this.getQJCS();
		},
		mounted(){
			var _this = this;
			_this.getData();  //获取数据
		},
		methods:{
			// 获取外部参数
			getQJCS(){
				var _this = this;
				var jscs = sessionStorage.getItem("jscs",jscs);
				_this.qjcs = jscs;
			},
			getData(){
				var _this = this;
				_this.$axios({
					type:'get',
					url:_this.dataURL
				}).then(function(res){
					var res_data = res.data;
					if(res_data.code=="40001"){
						_this.zdData = res_data.content.datas;
						_this.zheight = res_data.content.zheight;
					}else{
						//获取数据失败
					}
				})
			}
		}
	}
</script>
<style>
	.nz_center_centermain{
		width:100%;
	}
	.nz_centermain_pname{
		/*border-bottom:1px solid blue;*/
	}
	.nz_centermain_pnamefgx{
		width:0.02rem;
		height:0.14rem;
		margin-top:0.03rem;
		/*background-color: #2184C5;*/
		float:left;
	}
	.nz_centermain_p{
		font-size: 0.14rem;
		/*color:#555555;*/
		font-weight: bold;
		float:left;
		margin-left:0.08rem;
	}
	.nz_centermain_group{
		margin-top:0.08rem;
		margin-bottom:0.08rem;
		margin-left:-0.05rem;
		width:100%;
		/*height:500px;*/
		position: relative;
		/*border:1px solid green;*/
	}
</style>
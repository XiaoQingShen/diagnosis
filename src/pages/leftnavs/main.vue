<template>
	<div class="leftnavs_container">
		<ul class="leftnavs_ul">
			<li v-if="true">
				<div v-bind:class="[pageleve1index==0?'activelevel1':'','leftnavs_level1']" @click="spreadlevel2(0)">
					<i class="icon icon-leftnavs_yx" v-if="pageleve1index!=0"></i>
					<i class="icon icon-leftnavs_yx1" v-if="pageleve1index==0"></i>
					<p>学校诊断中心（建设中）</p>
				</div>
				<div class="clear_float"></div>
			</li>
			<li v-if="true">
				<div v-bind:class="[pageleve1index==1?'activelevel1':'','leftnavs_level1']" @click="spreadlevel2(1)">
					<i class="icon icon-leftnavs_yx" v-if="pageleve1index!=1"></i>
					<i class="icon icon-leftnavs_yx1" v-if="pageleve1index==1"></i>
					<p>学院诊断中心（建设中）</p>
				</div>
				<div class="clear_float"></div>
			</li>
			<li v-if="true">
				<div v-bind:class="[pageleve1index==2?'activelevel1':'','leftnavs_level1']" @click="spreadlevel2(2)">
					<i class="icon icon-leftnavs_zy" v-if="pageleve1index!=2"></i>
					<i class="icon icon-leftnavs_zy1" v-if="pageleve1index==2"></i>
					<p>专业诊断中心（建设中）</p>
				</div>
				<div class="clear_float"></div>
			</li>
			<li>
				<div v-bind:class="[pageleve1index==3?'activelevel1':'','leftnavs_level1']" @click="spreadlevel2(3)">
					<i class="icon icon-leftnavs_js" v-if="pageleve1index!=3"></i>
					<i class="icon icon-leftnavs_js1" v-if="pageleve1index==3"></i>
					<p>教师诊断中心（建设中）</p>
					<!-- <i class="icon icon-leftnavs_down" v-if="cur_nav_index!=2"></i> -->
					<!-- <i class="icon icon-leftnavs_up" v-if="cur_nav_index==2"></i> -->
				</div>
				<div class="clear_float"></div>
				<!-- <div class="leftnavs_level2" v-show="cur_nav_index==2">
					<ul class="leftnavs_level2_ul">
						<li><p>教师画像</p></li>
						<li class="activelevel2"><p>教师结构</p></li>
						<li><p>育人管理</p></li>
						<li><p>成长培养</p></li>
					</ul>
				</div> -->
			</li>
			<li v-if="true">
				<div v-bind:class="[pageleve1index==4?'activelevel1':'','leftnavs_level1']" @click="spreadlevel2(4)">
					<i class="icon icon-leftnavs_xs" v-if="pageleve1index!=4"></i>
					<i class="icon icon-leftnavs_xs1" v-if="pageleve1index==4"></i>
					<p>学生诊断中心（建设中）</p>
				</div>
			</li>
			<li v-if="true">
				<div v-bind:class="[pageleve1index==5?'activelevel1':'','leftnavs_level1']" @click="spreadlevel2(5)">
					<i class="icon icon-leftnavs_kc" v-if="pageleve1index!=5"></i>
					<i class="icon icon-leftnavs_kc1" v-if="pageleve1index==5"></i>
					<p>课程诊断中心（建设中）</p>
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
	export default{
		// cur_page_leve1_index  当前页面一级导航下标
		props:['pageleve1index'],
		data(){
			return{
				// cur_page_leve1_index:2,  //当前页面一级导航下标
				cur_nav_index:2,  //当前展开导航下标
				cur_level2_index:1,   //二级导航选中状态
			}
		},
		created(){
			var _this = this;
		},
		mounted(){

		},
		methods:{
			spreadlevel2(index){
				var _this = this;
				if(index==0){
					_this.$router.push({path:'/xxzdzx',query:{userid:111}});
				};
				if(index==1){
					_this.$router.push({path:'/xyzdzx',query:{userid:111}});
				};
				if(index==2){
					_this.$router.push({path:'/zyzdzx',query:{userid:111}});
				};
				if(index==3){
					_this.$router.push({path:'/jszdzx',query:{userid:111}});
					// _this.$router.push({path:'/js_gr',query:{userid:111}});
				};
				if(index==4){
					_this.$router.push({path:'/xszdzx',query:{userid:111}});
				};
				if(index==5){
					_this.$router.push({path:'/kczdzx',query:{userid:111}});
				}; 
			}
		}
	}
</script>
<style>
	.leftnavs_container{
		width:100%;
		height:calc(100% - 0.01rem);
	}
	.leftnavs_container >ul{
		margin:0px;
		padding:0px;
		list-style: none;
		font-size: 0.12rem;
		margin-top:0.18rem;
	}
	.leftnavs_ul >li{
		min-height:0.4rem;
		cursor: pointer;
	}
	.leftnavs_level1{
		height:0.4rem;
	}
	.activelevel1{
		/*background-color: rgba(255,255,255,0.1)!important;*/
	}
	.leftnavs_level1 >i:first-child{
		float:left;
		margin-left:0.2rem;
		margin-top:0.1rem;
	}
	.leftnavs_level1 >i:last-child{
		float:right;
		margin-right:0.15rem;
		margin-top:0.15rem;
	}
	.leftnavs_level1 >p{
		float:left;
		margin-left:0.16rem;
		padding-top:0.1rem;
	}
	.leftnavs_level2_ul{
		margin:0px;
		padding:0px;
		list-style: none;
		/*text-align: center;*/
	}
	.leftnavs_level2_ul >li{
		height:0.4rem;
		/*background-color: #082E74;*/
		cursor: pointer;
	}
	.leftnavs_level2_ul >li >p{
		padding-top:0.12rem;
		margin-left:0.57rem;
	}
	.leftnavs_level2_ul >li:hover{
		/*background-color: #FFFFFF!important;*/
	}
	.leftnavs_level2_ul >li:hover >p{
		/*color:#002557!important;*/
	}
</style>
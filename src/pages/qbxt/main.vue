<template>
	<div class="qbxt_container">
		<div class="qbxt_header">
			<commheader :pagename="pagename"></commheader>
		</div>
		<div class="qbxt_center" :style="qbxt_center">
			<div class="qbxt_nav" :style="qbxt_nav">
				<div class="navs_row1">
					<div class="navs nav1" :style="curhoverindex==0?navsimg:false">
						<div class="navcenters nav1_center" @mouseover="navcentershover(0)" @mouseout="navcenterleave(0)">
							<img :src="navsnamecuricon[0]">
							<p class="navs_name">分析模型</p>
						</div>
					</div>
					<div class="navs nav2" :style="curhoverindex==1?navsimg:false">
						<div class="navcenters nav1_center" @mouseover="navcentershover(1)" @mouseout="navcenterleave(1)">
							<img :src="navsnamecuricon[1]">
							<p class="navs_name">部处关注</p>
						</div>
					</div>
				</div>
				<div class="navs_row2">
					<div class="navs nav3" :style="curhoverindex==2?navsimg:false">
						<div class="navcenters nav1_center" @mouseover="navcentershover(2)" @mouseout="navcenterleave(2)">
							<!-- <img :src="navsnamecuricon[2]"> -->
							<!-- <p class="navs_name">部处关注</p> -->
						</div>
					</div>
					<div class="navs nav4" :style="true?navsactiveimg:false">
						<div class="navcenters nav1_center">
							<img :src="navsnamecuricon[3]">
							<p class="navs_name navs_name_active">领导驾驶舱</p>
						</div>
					</div>
					<div class="navs nav5" :style="curhoverindex==4?navsimg:false">
						<div class="navcenters nav1_center" @mouseover="navcentershover(4)" @mouseout="navcenterleave(4)"></div>
					</div>
				</div>
				<div class="navs_row3">
					<div class="navs nav6" :style="curhoverindex==5?navsimg:false">
						<div class="navcenters nav1_center" @mouseover="navcentershover(5)" @mouseout="navcenterleave(5)">
							<img :src="navsnamecuricon[5]">
							<p class="navs_name">数据分析</p>
						</div>
					</div>
					<div class="navs nav7" :style="curhoverindex==6?navsimg:false">
						<div class="navcenters nav1_center" @mouseover="navcentershover(6)" @mouseout="navcenterleave(6)">
							<img :src="navsnamecuricon[6]">
							<p class="navs_name">报告中心</p>
						</div>
					</div>
				</div>
				<div class="navs_row4">
					<div class="navs nav8" :style="curhoverindex==7?navsimg:false">
						<div class="navcenters nav1_center" @mouseover="navcentershover(7)" @mouseout="navcenterleave(7)"></div>
					</div>
					<div class="navs nav9" :style="curhoverindex==8?navsimg:false">
						<div class="navcenters nav1_center" @mouseover="navcentershover(8)" @mouseout="navcenterleave(8)">
							<img :src="navsnamecuricon[8]">
							<p class="navs_name">综合校情</p>
						</div>
					</div>
					<div class="navs nav10" :style="curhoverindex==9?navsimg:false">
						<div class="navcenters nav1_center" @mouseover="navcentershover(9)" @mouseout="navcenterleave(9)"></div>
					</div>
				</div>
				<div class="navs_row5">
					<div class="navs nav11" :style="curhoverindex==10?navsimg:false">
						<div class="navcenters nav1_center" @mouseover="navcentershover(10)" @mouseout="navcenterleave(10)"></div>
					</div>
					<div class="navs nav12" :style="curhoverindex==11?navsimg:false">
						<div class="navcenters nav1_center" @mouseover="navcentershover(11)" @mouseout="navcenterleave(11)"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import qbxt_navs_a_1a from '../../assets/images/qbxt_navs_a_1a.png'   //分析模型
	import qbxt_navs_b_1a from '../../assets/images/qbxt_navs_b_1a.png'   
	import qbxt_navs_a_2a from '../../assets/images/qbxt_navs_a_2a.png'   //部处关注
	import qbxt_navs_b_2a from '../../assets/images/qbxt_navs_b_2a.png'   //部处关注
	import qbxt_navs_a_4a from '../../assets/images/qbxt_navs_a_4a.png'   //驾驶舱
	import qbxt_navs_b_4a from '../../assets/images/qbxt_navs_b_4a.png'
	import qbxt_navs_c_4a from '../../assets/images/qbxt_navs_c_4a.png'
	import qbxt_navs_a_6a from '../../assets/images/qbxt_navs_a_6a.png'   //数据分析
	import qbxt_navs_b_6a from '../../assets/images/qbxt_navs_b_6a.png'
	import qbxt_navs_a_7a from '../../assets/images/qbxt_navs_a_7a.png'   //报告中心
	import qbxt_navs_b_7a from '../../assets/images/qbxt_navs_b_7a.png'   //
	import qbxt_navs_a_9a from '../../assets/images/qbxt_navs_a_9a.png'   //综合校情
	import qbxt_navs_b_9a from '../../assets/images/qbxt_navs_b_9a.png'
	export default{
		data(){
			return{
				pagename:"全部系统",  //页面名称,
				qbxt_center:{
					backgroundImage:"url("+require('../../assets/images/comm_center'+this.$theme+'.png')+")",
    				backgroundSize:"100% 100%"
				},
				// 导航整体背景图片
				qbxt_nav:{
					backgroundImage:"url("+require('../../assets/images/qbxt_nav'+this.$theme+'.png')+")",
    				backgroundSize:"100% 100%"
				},
				// 导航hover状态背景图片
				navsimg:{
					backgroundImage:"url("+require('../../assets/images/qbxt_navshover'+this.$theme+'.png')+")",
    				backgroundSize:"100% 100%"
    			},
    			//当前导航状态背景图片
    			navsactiveimg:{
    				backgroundImage:"url("+require('../../assets/images/qbxt_navsactive'+this.$theme+'.png')+")",
    				backgroundSize:"100% 100%"
    			},
    			//正常图标
    			navsnamenormalicon:[qbxt_navs_a_1a,qbxt_navs_a_2a,null,qbxt_navs_a_4a,null,qbxt_navs_a_6a,qbxt_navs_a_7a,null,qbxt_navs_a_9a,null,null,null], 
    			//hover状态图标
    			navsnamehovericon:[qbxt_navs_b_1a,qbxt_navs_b_2a,null,qbxt_navs_b_4a,null,qbxt_navs_b_6a,qbxt_navs_b_7a,null,qbxt_navs_b_9a,null,null,null],
    			// 当前状态图标
    			navsnamecuricon:[qbxt_navs_a_1a,qbxt_navs_a_2a,null,qbxt_navs_c_4a,null,qbxt_navs_a_6a,qbxt_navs_a_7a,null,qbxt_navs_a_9a,null,null,null],
    			curhoverindex:null,  //当前hover导航下标
			}
		},
		created(){

		},
		mounted(){

		},
		methods:{
			// 导航鼠标上移事件
			navcentershover(index){
				var _this = this;
				_this.curhoverindex = index;
				_this.navsnamecuricon[index] = _this.navsnamehovericon[index];
				// console.log(navsnamecuricon[index]);
				// console.log(navsnamehovericon[index]);
			},
			// 导航鼠标移开时间
			navcenterleave(index){
				var _this = this;
				_this.curhoverindex = null;
				_this.navsnamecuricon[index] = _this.navsnamenormalicon[index];
			}
		}
	}
</script>
<style>
	.qbxt_container{
		width:100%;
		height:100%;
	}
	.qbxt_header{
		width:100%;
		height:0.61rem;
		/*border-bottom:1px solid rgba(44,173,227,0.12);*/
	}
	.qbxt_center{
		width:100%;
		height:calc(100% - 0.61rem);
		display:flex;
		justify-content:center;
		align-items:center;
	}
	.qbxt_nav{
		width:59.75%;
		height:5.79rem;
		/*border:1px solid red;*/
	}
	.navs_row1{
		width:100%;
		height:221px;
		/*margin-top:-0.13rem;*/
		/*border:1px solid red;*/
	}
	.navs_row2{
		width:100%;
		height:221px;
		margin-top:-1.31rem;
		/*border:1px solid yellow;*/
	}
	.navs_row3{
		width:100%;
		height:221px;
		margin-top:-1.32rem;
		/*border:1px solid pink;*/
	}
	.navs_row4{
		width:100%;
		height:221px;
		margin-top:-1.32rem;
		/*border:1px solid green;*/
	}
	.navs_row5{
		width:100%;
		height:220px;
		margin-top:-1.31rem;
		/*border:1px solid white;*/
	}
	/*暂时不用*/
	.navs{
		position: absolute;
		width:12.722%;
		height:2.21rem;
		/*border:1px solid black;*/
	}
	.nav1{
		left:35.45%;
	}
	.nav2{
		left:51.7%;
	}
	.nav3{
		left:27.4%;
	}
	.nav4{
		left:43.66%;
	}
	.nav5{
		left:59.85%;
	}
	.nav6{
		left:35.45%;
	}
	.nav7{
		left:51.7%;
	}
	.nav8{
		left:27.4%;
	}
	.nav9{
		left:43.66%;
	}
	.nav10{
		left:59.85%;
	}
	.nav11{
		left:35.45%;
	}
	.nav12{
		left:51.7%;
	}
	.navcenters:before{   
        content:"";　　//不需要展现文字等内容,所以设置为空字符   
        width:0px;   
        border-bottom:0.9rem solid transparent;   
        border-top:0.9rem solid transparent;   
        /*border-right:50px solid green;   */
        position:absolute;   
        left:-0.5rem;   
        top:0px;
    }
	.navcenters{
		position: absolute;
		width:41%;
		height:1.75rem;
		/*border:1px solid red;*/
		display:flex;
		flex-direction:column;
		justify-content:center;
		align-items:center;
		/*background: green;*/
	}
	.navcenters:after{   
        content:"";　　//不需要展现文字等内容,所以设置为空字符   
        width:0px;   
        border-bottom:0.9rem solid transparent;   
        border-top:0.9rem solid transparent;   
        border-left-width:0.5rem;   
        position:absolute;   
        right:-0.5rem;   
        top:0px;   
    }
	.nav1_center{
		left:28.5%;
		top:0.21rem;
	}
	.navs_name{
		font-size: 0.14rem;
		margin-top:0.2rem;
	}
	.navcenters:hover{
		cursor: pointer;
	}
</style>
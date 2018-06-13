<template>
	<div class="topselect1_container center_select" >
		<input v-if="searchstatu" type="" name="" placeholder="请输入搜索关键字">
		<select v-if="xnstatu" v-model="SC_YEAR_LONG_DESC" @change="xnchange">
			<option v-for="(xn,inde) in xnoptions" :key="inde">{{xn}}</option>
		</select>
		<select v-if="xqstatu" v-model="SC_HALF_LONG_DESC" @change="xqchange">
			<option v-for="(xq,inde) in xqoptions" :key="inde">{{xq}}</option>
		</select>
		<select v-if="xystatu" v-model="college">
			<option>旅游学院</option>
			<option>信息工程学院</option>
			<option>国际学院</option>
			<option>公共管理学院</option>
			<option>财经学院</option>
			<option>艺术工程学院</option>
			<option>商学院</option>
			<option>建筑工程学院</option>
			<option>机电工程学院</option>
		</select>
		<select v-if="zystatu" v-model="major">
			<option>旅游管理</option>
			<option>烹饪工艺与营养（西餐工艺）</option>
			<option>西餐工艺</option>
			<option>国际邮轮乘务</option>
			<option>旅游管理（出国出境领队）</option>
			<option>酒店管理</option>
			<option>国际邮轮乘务管理</option>
			<option>旅游管理（出国出境领队方向）</option>
			<option>烹饪工艺与营养</option>
			<option>烹调工艺与营养</option>
			<option>旅游管理（旅游电子商务）</option>
			<option>景区开发与管理</option>
		</select>
	</div>
</template>
<script>
	export default{
		// searchstatu 搜索框状态
		// xnstatu 学年筛选状态
		// xqstatu 学期筛选状态
		// xystatu 学院筛选状态
		// zystatu 专业筛选状态
		props:['searchstatu','xnstatu','xqstatu','xystatu','zystatu'],
		data(){
			return{
				SC_YEAR_LONG_DESC:'',  //当前选择的学年
				SC_HALF_LONG_DESC:'2017-2018学年第一学期',  //当前选择的学期
				college:'旅游学院',
				major:'旅游管理',
				xnoptions:[],  //学年选项
				xqoptions:[],  //学期选项
			}
		},
		created(){
			var _this = this;
			_this.getXN();
			_this.getXQ();
		},
		mounted(){

		},
		methods:{
			// 获取学年学期数据
			getXN(){
				var _this = this;
				new Promise((resolve)=>{
				    _this.$axios({
				        type:'get',
				        url:'./static/xn.json'
				    }).then((res1)=>{
				        resolve(res1);
				    });
				}).then((res)=>{
					var res_data = res.data;
					if(res_data.code=="40001"){
						_this.xnoptions = res_data.content;
						_this.SC_YEAR_LONG_DESC = _this.xnoptions[0];
						_this.getXQ();
					}else{
						// 学年维度无数据
						alert("学年维度无数据");
					}
				});
			},
			// 获取学期数据
			getXQ(){
				var _this = this;
				_this.$axios({
					type:'get',
					url:'./static/xq.json',
					params:{'SC_YEAR_LONG_DESC':_this.SC_YEAR_LONG_DESC}
				}).then(function(res2){
					var res_data2 = res2.data;
					if(res_data2.code=="40001"){
						_this.xqoptions = res_data2.content;
						_this.SC_HALF_LONG_DESC = _this.xqoptions[0];
					}else{
						alert("学期维度无数据");
					}
				});
			},
			// 学年改变
			xnchange(){
				var _this = this;
				_this.getXQ();
				_this.$store.state.SC_YEAR_LONG_DESC = _this.SC_YEAR_LONG_DESC;
			},
			// 学期改变
			xqchange(){
				var _this = this;
				_this.$store.state.SC_HALF_LONG_DESC = _this.SC_HALF_LONG_DESC;
			},
		}
	}
</script>
<style>
	.topselect1_container{
		width:100%;
		height:100%;
	}
	.topselect1_container >input{
		height:0.24rem;
		/*margin-left:0.1rem;*/
		float:left;
	}
</style>
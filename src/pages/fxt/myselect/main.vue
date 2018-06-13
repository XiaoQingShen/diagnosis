<template>
	<div class="select_container">
		<!-- <p class="select_label">{{checkUrlxx.paramLable}}</p> -->
		<select v-model="selecteds" @change="getChecks">
			<option v-for="(checks,inde) in options" :key="checkUrlxx.paramName+getRandom()">{{checks}}</option>
		</select>
	</div>
</template>
<script>
	export default{
		// checkUrl  分析模型筛选条件接口地址
		// key  筛选条件KEY值
		props:['checkUrlxx'],
		data(){
			return{ 
				options:[],
				selecteds:'',
			}
		},
		mounted(){
			var _this = this;
			_this.getData();
		},
		created(){
			var _this = this;
		},
		methods:{
			getData(){
				var _this = this;
					_this.$axios({
						method:'post',
						// url:_this.checkUrl,
						url:_this.$apiUrls.chartParamterValueAll,
						// params:{"key":_this.keys}
						params:{paramId:_this.checkUrlxx.paramId}
					}).then((res)=>{
						var res_data = res.data;
						if(res_data.code=="40001"){
							_this.options = res_data.content;
							_this.selecteds = _this.options[0];
							//加载成功  传回默认参数给图形
							// console.log(_this.checkUrlxx.paramName);
							_this.$emit('myselectParents',_this.checkUrlxx.paramName,_this.selecteds);
						}else{
							//异常处理
							console.log("失败");
						};
					});
				;
			},
			//获取筛选
			getChecks(){
				var _this = this;
				// console.log(_this.checkUrlxx.paramName);
				_this.$emit('myselectParents',_this.checkUrlxx.paramName,_this.selecteds);
			},
			//随机数+时间戳 避免keys重复
		    getRandom(){
		    	var timestamp = new Date().getTime();
		    	var randomNum = parseInt(10000 * Math.random());
		    	return timestamp+""+randomNum;
		    },
		}
	}
</script>
<style>
	.select_container{
		/*width:100%;*/
		height:100%;
	}
	.select_container > select{
		margin:0px;
		padding:0px;
	    display: -webkit-box;
	    float:left;
	    color: rgba(153,153,153,1);
	    border: 1px solid #ececec;
	}
	.select_label{
		font-size: 0.14rem;
		float:left;
		margin-right:0.1rem;
	}
</style>
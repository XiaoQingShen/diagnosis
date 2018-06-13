function chartPaint(){
	var option1 = {
		grid:{
			top:27,
			// borderColor:'rgba(53,209,254,0.6)'
		},
		tooltip: {
	        trigger: 'axis',
	        position: function (pt) {
	            return [pt[0], '10%'];
	        }
	    },
		xAxis:{
			name:'时间',
			type:'category',
			boundaryGap:false,
			axisLabel:{
				// color:'rgba(53,209,254,0.6)'
			},
			axisLine:{
				lineStyle:{
					// color:'rgba(4,128,163,0.13)'
				}
			},
			nameTextStyle:{
				// color:'rgba(106,120,132,0.6)'
			},
			data:["8:00","9:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00"]
		},
		yAxis:{
			name:'到勤率',
			type:'value',
			axisLabel:{
				// color:'rgba(53,209,254,0.6)',
				formatter:function(val){
					return val+'%';
				}
			},
			axisLine:{
				lineStyle:{
					// color:'rgba(4,128,163,0.13)'
				}
			},
			splitLine:{
				lineStyle:{
					// color:'rgba(4,128,163,0.13)'
				}
			},
			nameTextStyle:{
				// color:'rgba(106,120,132,0.6)'
			}
		},
		series:[
			{
				type:'line',
				smooth:true,
				symbol:'circle',
				symbolSize:6,
				itemStyle: {
                normal: {
                    // color: '#35d1fe'
                }
            },
            areaStyle: {},
            data: [89,90,78,35,34,54,64,23,56,75,84,34,67,87,90]
			},
			{
				type:'line',
				smooth:true,
				symbol:'circle',
				symbolSize:6,
				itemStyle: {
                normal: {
                    // color: '#35d1fe'
                }
            },
            areaStyle: {},
            data: [81,92,71,32,31,74,14,73,36,95,34,24,97,27,80]
			},
			{
				type:'line',
				smooth:true,
				symbol:'circle',
				symbolSize:6,
				itemStyle: {
                normal: {
                    // color: '#35d1fe'
                }
            },
            areaStyle: {},
            data: [82,91,78,32,34,74,14,73,36,90,34,94,97,37,10]
			}
		]
	};
	var option2 = {
		title:{
			text:''
		},
		grid:{
			top:27,
			// borderColor:'rgba(53,209,254,0.6)'
		},
		tooltip: {
	        trigger: 'axis',
	        position: function (pt) {
	            return [pt[0], '10%'];
	        }
	    },
	    legend:{
	    	type:'scroll',
	    	orient:'vertical',
	    	show:true,
	    	right:10,
	    	top:20,
	    	bottom:20,
	    	data:[]
	    },
		xAxis:{
			name:'时间',
			type:'category',
			boundaryGap:false,
			axisLabel:{
				// color:'rgba(53,209,254,0.6)'
			},
			axisLine:{
				lineStyle:{
					// color:'rgba(4,128,163,0.13)'
				}
			},
			nameTextStyle:{
				// color:'rgba(106,120,132,0.6)'
			},
			data:["8:00","9:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00"]
		},
		yAxis:{
			name:'到勤率',
			type:'value',
			axisLabel:{
				// color:'rgba(53,209,254,0.6)',
				formatter:function(val){
					return val+'%';
				}
			},
			axisLine:{
				lineStyle:{
					// color:'rgba(4,128,163,0.13)'
				}
			},
			splitLine:{
				lineStyle:{
					// color:'rgba(4,128,163,0.13)'
				}
			},
			nameTextStyle:{
				// color:'rgba(106,120,132,0.6)'
			}
		},
		series:[]
	};
	//折线图1类
	var line1option = {
		title:{
			text:'line1',
			subtext:''
		},
		tooltip:{
			trigger:'axis'
		},
		legend:{
			type: 'scroll',
			pageIconSize:10,
			data:['男教职工人数','女教职工人数']
		},
		grid:{
			left:45,
			right:40,
			bottom:40
		},
		xAxis:{
			type:'category',
			data:['2015-2016学年','2016-2017学年','2017-2018学年'],
			axisTick: {
                alignWithLabel: true
            },
			axisLabel:{
	            // rotate:30
	        }
		},
		yAxis:{
			type:'value',
			name:'人数'
		},
		series:[
			{
				name:'男教职工人数',
				type:'line',
				data:[50,80,98]
			},
			{
				name:'女教职工人数',
				type:'line',
				data:[89,78,40]
			}
		]
	};
	//折线图2类
	var line2option = {
		title:{
			text:'line2',
			subtext:''
		},
		tooltip:{
			trigger:'axis'
		},
		legend:{
			type: 'scroll',
			pageIconSize:10,
			data:['男教职工人数','女教职工人数']
		},
		grid:{
			left:45,
			right:40,
			bottom:60
		},
		xAxis:{
			type:'category',
			data:['2015-2016学年','2016-2017学年','2017-2018学年'],
			axisTick: {
                alignWithLabel: true
            },
			axisLabel:{
	            rotate:30
	        }
		},
		yAxis:{
			type:'value',
			name:'人数'
		},
		series:[
			{
				name:'男教职工人数',
				type:'line',
				data:[50,80,98]
			},
			{
				name:'女教职工人数',
				type:'line',
				data:[89,78,40]
			}
		]
	};
	//折线图3类
	var line3option = {
		title:{
			text:'line3',
			subtext:''
		},
		tooltip:{
			trigger:'axis'
		},
		legend:{
			type: 'scroll',
			pageIconSize:10,
			data:['男教职工人数','女教职工人数']
		},
		grid:{
			left:45,
			right:40,
			bottom:120
		},
		xAxis:{
			type:'category',
			data:['2015-2016学年','2016-2017学年','2017-2018学年'],
			axisTick: {
                alignWithLabel: true
            },
			axisLabel:{
	            rotate:-90
	        }
		},
		yAxis:{
			type:'value',
			name:'人数'
		},
		series:[
			{
				name:'男教职工人数',
				type:'line',
				data:[50,80,98]
			},
			{
				name:'女教职工人数',
				type:'line',
				data:[89,78,40]
			}
		]
	};
	// 柱状图1类
	var bar1option = {
		title:{
			text:'bar1',
			subtext:''
		},
		tooltip:{
			trigger:'axis',
			axisPointer:{
				type:'shadow'
			}
		},
		xAxis:{
			type:'category',
			data:['专业1','专业2','专业3','专业4']
		},
		yAxis:{
			type:'value',
			name:'人数'
		},
		series:[
			{
				name:'专业教职工人数',
				type:'bar',
				data:[12,45,56,32],
				itemStyle:{
	                barBorderRadius:5
	            }
			}
		]
	};
	// 柱状图2类
	var bar2option = {
		title:{
			text:'bar2',
			subtext:''
		},
		tooltip:{
			trigger:'axis',
			axisPointer:{
				type:'shadow'
			}
		},
		legend:{
			data:['类别1','类别2','类别3']
		},
		grid:{
			left:45,
			right:40,
			bottom:120
		},
		xAxis:{
			type:'category',
			name:'',
			data:['专业1','专业2','专业3'],
			axisTick: {
                alignWithLabel: true
            },
			axisLabel:{
	            rotate:-90
	        }
		},
		yAxis:{
			type:'value',
			name:'',
		},
		series:[
			{
				name:'类别1',
				type:'bar',
				data:[34,56,78],
				itemStyle:{
	                barBorderRadius:5
	            }
			},
			{
				name:'类别2',
				type:'bar',
				data:[89,78,67],
				itemStyle:{
	                barBorderRadius:5
	            }
			},
			{
				name:'类别3',
				type:'bar',
				data:[89,78,96],
				itemStyle:{
	                barBorderRadius:5
	            }
			}
		]
	};
	// 堆叠柱状图1类
	var bar3option = {
		title:{
			text:'bar3',
			subtext:''
		},
		tooltip:{
			trigger:'axis',
			axisPointer:{
				type:'shadow'
			}
		},
		legend:{
			type:'scroll',
			data:['类别1','类别2','类别3','类别4']
		},
		xAxis:{
			type:'category',
			data:['专业1','专业2','专业3','专业4','专业5']
		},
		yAxis:{
			type:'value'
		},
		series:[
			{
				name:'类别1',
				type:'bar',
				stack:'aa',
				data:[23,45,43,43,21]
			},
			{
				name:'类别2',
				type:'bar',
				stack:'aa',
				data:[87,89,89,76,56]
			},
			{
				name:'类别3',
				type:'bar',
				stack:'aa',
				data:[89,78,67,34,23]
			},
			{
				name:'类别4',
				type:'bar',
				stack:'aa',
				data:[12,34,21,21,54]
			}
		]
	};
	// 折柱联合图1
	var barline1option = {
		title:{
			text:'折柱联合图1 barline1'
		},
		tooltip:{
			trigger:'axis',
			axisPointer:{
				type:'cross',
				animation:false
			}
		},
		legend:{
			type:'scroll',
			data:["分类1","分类2","占比3"]
		},
		xAxis:{
			name:'专业',
			data:["专业1","专业2","专业3","专业4"]
		},
		yAxis:[
			{
				name:'人数',
				type:'value'
			},
			{
				name:'占比',
				type:'value'
			}
		],
		series:[
			{
				name:'分类1',
				type:'bar',
				data:[12,23,34,45]
			},
			{
				name:'分类2',
				type:'bar',
				data:[10,20,30,40]
			},
			{
				name:'占比3',
				type:'line',
				yAxisIndex:1,
				data:[90,80,70,60]
			}
		]
	};
	// 折柱联合图2
	var barline2option = {
		title:{
			text:''
		},
		tooltip:{
			trigger:'axis'
		},
		legend:{
			type:'scroll',
			data:['分类1','分类2']
		},
		xAxis:{
			name:'',
			type:'category',
			data:['专业1','专业2','专业3']
		},
		yAxis:{
			name:'',
			type:'value'
		},
		series:[

		]
	};
	//饼图1类 实心
	var pie1option = {
		title:{
			text:'pie1',
			subtext:''
		},
		tooltip:{
			trigger:'item',
			formatter:"{a}<br/>{b}:{c} ({d}%)"
		},
		legend:{
			type:'scroll',
			// orient:'vertical',
			// right:10,
			top:20,
			bottom:20,
			data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎'],
			selected:[]
		},
		series:[
			{
				name:'',
				type:'pie',
				radius:'55%',
				center:['50%','60%'],
				data:[
					{value:335, name:'直接访问'},
	                {value:310, name:'邮件营销'},
	                {value:234, name:'联盟广告'},
	                {value:135, name:'视频广告'},
	                {value:1548, name:'搜索引擎'}
				]
			}
		]
	};
	// 饼图2类  环形
	var pie2option = {
		title:{
			text:'pie2'
		},
		tooltip:{
			trigger:'item',
			formatter:"{a}<br/>{b}:{c} ({d}%)"
		},
		legend:{
			type:'scroll',
			orient:'vertical',
			right:10,
			top:20,
			bottom:20,
			data:['分类1','分类2','分类3','分类4'],
			selected:[]
		},
		series:[
			{
				name:'测试',
				type:'pie',
				radius:['50%','70%'],
				avoidLabelOverlap: false,
				label: {
	                normal: {
	                    show: false,
	                    position: 'center',
	                    formatter: "{b}\n{c} ({d}%)"
	                },
	                emphasis: {
	                    show: true,
	                    textStyle: {
	                        fontSize: '20',
	                        fontWeight: 'bold'
	                    }
	                }
	            },
	            labelLine: {
	                normal: {
	                    show: false
	                }
	            },
	            data:[
	                {value:335, name:'分类1'},
	                {value:310, name:'分类2'},
	                {value:234, name:'分类3'},
	                {value:135, name:'分类4'}
	            ]
			}
		]
	};
	//饼图3类  南丁格尔玫瑰图
	var pie3option = {
		title:{
			text:'pie3',
			subtext:''
		},
		tooltip:{
			trigger:'item',
			formatter:"{a}<br/>{b}：{c}({d}%)"
		},
		legend:{
			data:['分类1','分类2','分类3','分类4','分类5']
		},
		calculable:true,
		series:[
			{
				name:'南丁格尔玫瑰图',
				type:'pie',
				radius:[20,110],
				center:['25%','50%'],
				roseType:['radius'],
				label:{
					normal:{show:false},
					emphasis:{show:true}
				},
				labelLine:{
					normal:{show:false},
					emphasis:{show:true}
				},
				data:[
					{value:10, name:'分类1'},
	                {value:5, name:'分类2'},
	                {value:15, name:'分类3'},
	                {value:25, name:'分类4'},
	                {value:20, name:'分类5'}
				]
			}
		]
	};
	// 嵌套饼图
	var pie4option = {
		title:{
			text:'嵌套饼图 pie4'
		},
		tooltip:{
			trigger:'item'
		},
		legend:{
			type:'scroll',
			data:['分类1','分类2','分类3','分类4','分类5','分类6','分类7']
		},
		series:[
			{
				name:'嵌套饼图',
				type:'pie',
				radius:[0,'30%'],
				label:{
					normal:{
						position:'inner'
					}
				},
				labelLine:{
					normal:{show:false}
				},
				data:[
					{name:'分类1',value:10},
					{name:'分类2',value:20},
					{name:'分类3',value:30}
				]
			},
			{
				name:'嵌套饼图',
				type:'pie',
				radius:['40%','55%'],
				data:[
					{name:'分类4',value:30},
					{name:'分类5',value:40},
					{name:'分类6',value:50},
					{name:'分类7',value:60}
				]
			}
		]
	};
	// 雷达图1类
	var radar1option = {
		title:{
			text:'radar1'
		},
		tooltip:{},
		legend:{
			data:['2012','2013'],
			type: 'scroll',
			pageIconSize:10
		},
		radar:{
			indicator:[
				{name:'指标1',max:100},
				{name:'指标2',max:100},
				{name:'指标3',max:100},
				{name:'指标4',max:100},
				{name:'指标5',max:100}
			],
			radius: '60%',	
			center:['50%','60%']
		},
		series:[
			{
				name:'雷达图',
				type:'radar',
				data:[
					{
						name:'2012',
						value:[80,70,67,30,90]
					},
					{
						name:'2013',
						value:[89,70,27,38,89]
					}
				]
			}
		]
	};
	// 雷达图2类
	var radar2option = {
		title:{
			text:'radar2'
		},
		tooltip:{},
		legend:{
			// top:20,
			data:['自诊得分','同职称自诊平均分','同学院自诊平均分'],
			type: 'scroll',
			pageIconSize:10
		},
		radar:{
			shape: 'circle',
			indicator:[
				{name:'师德修养',max:100},
				{name:'教育教学',max:100},
				{name:'教研科研',max:100},
				{name:'社会服务',max:100}
			],
		  	radius: '60%',	
		  	center:['50%','55%'],
		  	triggerEvent:true
		},
		series:[
			{
				name:'雷达图',
				type:'radar',
				data:[
					{
						name:'自诊得分',
						value:[80,70,67,30]
					},
					{
						name:'同职称自诊平均分',
						value:[89,70,27,38]
					},
					{
						name:'同学院自诊平均分',
						value:[67,78,86,45]
					}
				]
			}
		]
	};
	// 雷达图3类
	var radar3option = {
		title:{
			text:'radar3'
		},
		tooltip:{},
		legend:{
			type: 'scroll',
			pageIconSize:10,
			data:['2012','2013']
		},
		radar:{
			indicator:[
				{name:'指标1',max:100,"zb":"wd"},
				{name:'指标2',max:100,"zb":"wd"},
				{name:'指标3',max:100,"zb":"wd"},
				{name:'指标4',max:100,"zb":"wd"},
				{name:'指标5',max:100,"zb":"wd"}
			],
			triggerEvent:true
		},
		series:[
			{
				name:'雷达图3类',
				type:'radar',
				tooltip:{
					trigger:'item'
				},
				itemStyle:{
					normal:{
						areaStyle:{
							type:'default'
						}
					}
				},
				data:[
					{name:'2012',value:[12,34,45,56,76],xq:"2017-2018第一学期"},
					{name:'2013',value:[67,89,45,32,89],xq:"2017-2018第二学期"}
				]
			}
		]
	};
	// 雷达图4类
	var radar4option = {
		title:{
			text:'radar4'
		},
		tooltip:{},
		legend:{
			type: 'scroll',
			pageIconSize:10,
			data:['2012','2013']
		},
		radar:{
			indicator:[
				{name:'指标1',max:100},
				{name:'指标2',max:100},
				{name:'指标3',max:100},
				{name:'指标4',max:100},
				{name:'指标5',max:100},
				{name:'指标6',max:100},
				{name:'指标7',max:100},
				{name:'指标8',max:100},
				{name:'指标9',max:100},
				{name:'指标10',max:100},
				{name:'指标11',max:100},
				{name:'指标12',max:100}
			],
			center:['50%','50%'],
			radius:'60%'
		},
		series:[
			{
				name:'雷达图4类',
				type:'radar',
				itemStyle:{
					normal:{
						areaStyle:{
							type:'default'
						}
					}
				},
				data:[
					{
						name:'2012',
						value:[80,70,67,30,90,80,70,67,30,90,34,23]
					},
					{
						name:'2013',
						value:[89,70,27,38,89,80,70,67,30,90,67,89]
					}
				]
			}
		]
	};
	// 太阳图1类
	var sunburst1option = {
		title:{
			text:'太阳图1类'
		},
		tooltip:{},
		color: ['#F28C8C', '#538EA6', '#F2D1B3', '#F2B8A2', ],
		series:{
			type:'sunburst',
			radius:[0,'90%'],
			label:{
				rotate:'radial'
			},
			data:[
				{
					name:'汉族',
					value:325,
					children:[
						{
							name:'汉族',
							value:325
						}
					]
				},
				{
					name:'少数名族',
					value:345,
					children:[
						{
							name:'土家族',
							value:100
						},
						{
							name:'壮族',
							value:150
						},
						{
							name:'回族',
							value:45
						},
						{
							name:'维吾尔族',
							value:50
						}
					]
				}
			]
		}
	};
	// 仪表盘1类
	var gauge1option = {
		title:{
			text:'gauge1',
		},
		tooltip:{
			formatter:"{a}<br/>{b}:{c}%"
		},
		series:[
			{
				name:'业务指标',
				type:'gauge',
				detail:{formatter:'{value}%'},
				data:[{value:60,name:'完成率'}],
				axisLine:{
					lineStyle:{
						color:[[0.2,'lime'],[0.7,'yellow'],[1,'pink']],
						width:2,
						shadowColor:'#fff',
						shadowBlur:10
					}
				}
			}
		]
	};
	return {
		opt1:function(data){
			return option1;
		},
		opt2:function(data){
			option2.legend.data = data.legend;
			option2.xAxis.data = data.xList;
			var data_len = data.datas.length;
			for(var i=0;i<data_len;i++){
				option2.series.push({
					name:data.legend[i],
					type:'bar',
					data:data.datas[i]
				});
			};
			return option2;
		},
		// 折线图1类  
		line1:function(data){
			console.log(data);
			if(data.datas!=null && data.datas!=""){
				line1option.title.text = '';
				line1option.legend.data = data.legend;
				line1option.xAxis.name = data.xname;
				line1option.xAxis.data = data.xlist;
				line1option.yAxis.name = data.yname+"("+data.dw+")";
				var legend_len = data.legend.length;
				line1option.series = [];
				for(var i=0;i<legend_len;i++){
					line1option.series.push({
						name:data.legend[i],
						type:'line',
						data:data.datas[i]
					});
				}
			};
			return line1option;
		},
		// 折线图2类
		line2:function(data){
			return line2option;
		},
		line3:function(data){
			return line3option;
		},
		// 柱状图1类
		bar1:function(data){
			return bar1option;
		},
		// 柱状图2类
		bar2:function(data){
			if(data.datas!=null && data.datas!=""){
				bar2option.title.text = '';
				bar2option.legend.data = data.legend;
				bar2option.xAxis.name = data.xname;
				bar2option.xAxis.data = data.xlist;
				bar2option.yAxis.name = data.yname+"("+data.dw+")";
				bar2option.series = [];
				for(var i=0;i<data.legend.length;i++){
					bar2option.series.push({
						name:data.legend[i],
						type:'bar',
						data:data.datas[i]
					})
				};
			}
			return bar2option;
		},
		// 堆叠柱状图3类
		bar3:function(data){
			if(data.datas!=null && data.datas!=""){
				bar3option.title.text = '';
				bar3option.legend.data = data.legend;
				bar3option.xAxis.name = data.xname;
				bar3option.xAxis.data = data.xlist;
				bar3option.yAxis.name = data.yname+"("+data.dw+")";
				bar3option.series = [];
				for(var i=0;i<data.legend.length;i++){
					bar3option.series.push({
						name:data.legend[i],
						type:'bar',
						stack:'aa',
						data:data.datas[i]
					})
				};
			}
			return bar3option;
		},
		barline1:function(data){
			barline1option.title.text = '';
			if(data!="" && data!=null){
				barline1option.title.text = '';
				barline1option.legend.data = [];
				barline1option.series = [];
				for(var i=0;i<data.legend.length;i++){
					for(var j=0;j<data.legend[i].length;j++){
						barline1option.legend.data.push(data.legend[i][j]);
						if(i==0){
							barline1option.series.push({
								name:data.legend[i][j],
								type:'bar',
								data:data.datas[i][j],
								yAxisIndex:0,
							});
						}else{
							barline1option.series.push({
								name:data.legend[i][j],
								type:'line',
								data:data.datas[i][j],
								yAxisIndex:1
							});
						}
					}
				};
				barline1option.xAxis.data = data.xlist;
				barline1option.yAxis[0].name = data.yname[0]+"("+data.dw[0]+")";
				barline1option.yAxis[1].name = data.yname[1]+"("+data.dw[1]+")";
				barline1option.xAxis.name = data.xname;
			};
			return barline1option;
		},
		barline2:function(data){
			if(data.datas!=null && data.datas!=""){
				barline2option.title.text = '';
				barline2option.legend.data = [];
				barline2option.series = [];
				for(var i=0;i<data.legend.length;i++){
					for(var j=0;j<data.legend[i].length;j++){
						barline2option.legend.data.push(data.legend[i][j]);
						if(i==0){
							barline2option.series.push({
								name:data.legend[i][j],
								type:'bar',
								data:data.datas[i][j]
							});
						}else{
							barline2option.series.push({
								name:data.legend[i][j],
								type:'line',
								data:data.datas[i][j]
							})
						}
					};
				}
				barline2option.xAxis.name = data.xname;
				barline2option.xAxis.data = data.xlist;
				barline2option.yAxis.name = data.yname+"("+data.dw+")";
			}
			return barline2option;
		},
		// 饼图1类
		pie1:function(data){
			// if(data.datas!=null && data.datas!=""){
			if(data.name!="" && data.name!=null){
				pie1option.title.text = '';
				pie1option.legend.data = data.legend;
				pie1option.series[0].name = data.name;
				pie1option.series[0].data = data.datas;
			};
			return pie1option;
		},
		pie2:function(data){
			// if(data.datas!=null && data.datas!=""){
			if(data.name!="" && data.name!=null){
				pie2option.title.text = '';
				pie2option.legend.data = data.legend;
				pie2option.series[0].name = data.name;
				// console.log(data.dats);
				pie2option.series[0].data = data.datas;
			};
			return pie2option;
		},
		pie3:function(data){
			return pie3option;
		},
		pie4:function(data){
			if(data.name!="" && data.name!=null && data.name.length >0){
				pie4option.title.text = '';
			};
			return pie4option;
		},
		// 雷达图1类
		radar1:function(data){
			if(data.datas!=null && data.datas!=""){
				radar1option.title.text = '';
				radar1option.legend.data = data.legend;
				radar1option.radar.indicator = data.indicator;
				radar1option.series[0].name = data.name;
				radar1option.series[0].data = data.datas;
			};
			return radar1option;
		},
		// 雷达图2类
		radar2:function(data){
			if(data.datas!=null && data.datas!=""){
				radar2option.title.text = '';
				radar2option.legend.data = data.legend;
				radar2option.radar.indicator = data.indicator;
				radar2option.series[0].name = data.name;
				radar2option.series[0].data = data.datas;
			};
			return radar2option;
		},
		// 雷达图3类
		radar3:function(data){
			return radar3option;
		},
		// 雷达图4类
		radar4:function(data){
			return radar4option;
		},
		//太阳图1类
		sun1:function(data){
			return sunburst1option;
		},
		//仪表盘1类
		guage1:function(data){
			return gauge1option;
		}
	}
};
export{
	chartPaint
};
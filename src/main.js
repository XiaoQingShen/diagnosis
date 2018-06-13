import Vue from 'vue'
import App from './App'
import router from './router'
import sprites from './assets/css/sprites-generated.css'  //雪碧图
import theme from './assets/theme/color.less'   //主题样式
import comm from './tools/comm.css'  //公用样式
import echarts from 'echarts'
import axios from 'axios'
import tools from './tools/tools.js'  //引入工具css
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import vuex from 'vuex'
import white from './white.json'  //浅色主题
import black from './black.json'  //深色主题

Vue.config.productionTip = false
Vue.prototype.$black = black;
Vue.prototype.$white = white;
Vue.prototype.$theme = white;  //图形主题
Vue.prototype.$echarts = echarts
Vue.prototype.$axios= axios
Vue.use(tools); 
Vue.use(ElementUI);
Vue.use(vuex);

// store  主题
const store = new vuex.Store({  
    state: {  
        theme:'a',  //主题
        SC_YEAR_LONG_DESC:'',   //全局筛选 学年
        SC_HALF_LONG_DESC:'',   //全局筛选 学期
        XYMC:'',   //全局筛选 学院
        ZYMC:''    //全局筛选 专业
    },  
    mutations: {  
        settheme(state,n){
            state.theme = n.theme;
        }  
    },  
    actions: {  
        settheme(context,m){
            setTimeout(() => {  
                context.commit({  
                    type: "settheme",  
                    theme: m.theme  
                })  
            }, 1000)
        }  
    }  
})  

router.beforeEach((to, from, next) => {
	if(to.path == '/teachermain' || to.path == '/xxzdzx' || to.path=='/college_js' || to.path=='/testfhtab' || to.path=='/js_gr'){
		//获取地址接收的参数
		var jscs = JSON.stringify(to.query);
  		sessionStorage.setItem("jscs",jscs);
        console.log(jscs);
  		next();
	}else{
		next();
	};
});

// 获取接口ip和端口
new Promise((resolve)=>{
    Vue.prototype.$axios({
        type:'get',
        url:'static/config.json'
    }).then((res1)=>{
        resolve(res1);
    });
}).then((res)=>{
    Vue.prototype.$apiUrls = {
    	baseUrl:res.data.url,         //基本地址
    	GroupChart:res.data.url+"/bi/GroupChart",   //页面布局接口
    	groupByFxtIdList:res.data.url+'/bi/groupByFxtIdList',  //group属性
    	chartParamter:res.data.url+'/bi/chartParamter',    //获取图形属性
    	chartParamterValueAll:res.data.url+'/bi/chartParamterValueAll',   //获取筛选条件
    	chart:res.data.url+'/bi/chart',   //图形数据
        exportChart:res.data.url+'/bi/exportChart'    //分子模型导出
    };

	new Vue({
	  el: '#app',
	  router,
      store,
	  render: h => h(App)
	});
	document.getElementById('app').className ='theme'+store.state.theme;
});

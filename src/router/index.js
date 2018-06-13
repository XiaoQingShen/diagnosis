import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import main from '@/pages/main/main'  //首页
import teachermain from '@/pages/teacher/main'  //教师首页
import group from '@/pages/group/main'  //group
import test from '@/pages/test/main'  //测试页面
import testfhtab from '@/pages/test/testfhtab'  //测试复合table页面
import xxzdzx from '@/pages/school/xxzdzx'  //学校诊断中心首页
import xyzdzx from '@/pages/college/xyzdzx'  //学院诊断中心首页
import xszdzx from '@/pages/student/xszdzx'  //学生诊断中心首页
import jszdzx from '@/pages/teacher/jszdzx'  //教师诊断中心首页
import kczdzx from '@/pages/course/kczdzx'   //课程诊断中心首页
import zyzdzx from '@/pages/major/zyzdzx'    //专业诊断中心首页
import school_js from '@/pages/school/school_js'  //学校诊断中心  教师
import school_js_ky from '@/pages/school/school_js_ky'  //学校诊断中心 教师 科研
import school_js_ky_jgxm from '@/pages/school/school_js_ky_jgxm'  //学校诊断中心 教师 教改科研 教改项目
import college_xj from '@/pages/college/college_xj'   //学院诊断中心 全校学院总体 XX学院
import college_js from '@/pages/college/college_js'  //学院诊断中心 教师
import college_js_ky from '@/pages/college/college_js_ky' //学院诊断中心 教师 教改科研
import college_js_ky_jgxm from '@/pages/college/college_js_ky_jgxm'  //学院诊断中心 教师 教改科研 教改项目
import major_xj from '@/pages/major/major_xj'  //专业诊断中心  全校专业总体 XX专业
import major_js from '@/pages/major/major_js'   //专业诊断中心 教师
import major_js_jgky from '@/pages/major/major_js_jgky'  //专业诊断中心 教师 教改科研
import major_js_jgky_jgxm from '@/pages/major/major_js_jgky_jgxm' //专业诊断中心 教师 教改科研 教改项目
import js_gr from '@/pages/teacher/js_gr'    //教师诊断中心  教师个人
import js_gr_jgky from '@/pages/teacher/js_gr_jgky'  //教师诊断中心 教师个人 教改科研
import js_gr_jgky_jgxm from '@/pages/teacher/js_gr_jgky_jgxm'   //教师诊断中心 教师个人  教改科研 教改项目

Vue.use(Router)
Vue.component('group',group);  // group组件

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {path:'/main',name:'main',component:main},
    {path:'/teachermain',name:'teachermain',component:teachermain},
    {path:'/test',name:'test',component:test},
    {path:'/testfhtab',name:'testfhtab',component:testfhtab},
    {path:'/xxzdzx',name:'xxzdzx',component:xxzdzx},
    {path:'/xszdzx',name:'xszdzx',component:xszdzx},
    {path:'/jszdzx',name:'jszdzx',component:jszdzx},
    {path:'/kczdzx',name:'kczdzx',component:kczdzx},
    {path:'/zyzdzx',name:'zyzdzx',component:zyzdzx},
    {path:'/xyzdzx',name:'xyzdzx',component:xyzdzx},
    {path:'/school_js',name:'school_js',component:school_js},
    {path:'/school_js_ky',name:'school_js_ky',component:school_js_ky},
    {path:'/school_js_ky_jgxm',name:'school_js_ky_jgxm',component:school_js_ky_jgxm},
    {path:'/college_xj',name:'college_xj',component:college_xj},
    {path:'/college_js',name:'college_js',component:college_js},
    {path:'/college_js_ky',name:'college_js_ky',component:college_js_ky},
    {path:'/college_js_ky_jgxm',name:'college_js_ky_jgxm',component:college_js_ky_jgxm},
    {path:'/major_xj',name:'major_xj',component:major_xj},
    {path:'/major_js',name:'major_js',component:major_js},
    {path:'/major_js_jgky',name:'major_js_jgky',component:major_js_jgky},
    {path:'/major_js_jgky_jgxm',name:'major_js_jgky_jgxm',component:major_js_jgky_jgxm},
    {path:'/js_gr',name:'js_gr',component:js_gr},
    {path:'/js_gr_jgky',name:'js_gr_jgky',component:js_gr_jgky},
    {path:'/js_gr_jgky_jgxm',name:'js_gr_jgky_jgxm',component:js_gr_jgky_jgxm}
  ]
})

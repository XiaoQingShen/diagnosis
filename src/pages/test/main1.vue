<template>  
    <div class="page2">  
        <p>{{this.$store.state.theme}}</p>
    </div>  
</template>  
  
<script> 
    export default {  
        name: 'page2',  
        data() {  
            return {
                msg:''
            }  
        }, 
        computed: {  
            listenshowpage1() {  
                return this.$store.state.theme;  
            }  
        },  
        watch: {  
            listenshowpage1: function(a, b) {  
                this.msg = "当前主题："+b;
                console.log("当前主题：" + b);  
                // console.log("修改后为：" + b);  
            }  
        }  
    }  
</script>
<style>
    
</style>  
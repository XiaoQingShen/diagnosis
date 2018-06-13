<template>  
    <div class="page2">  
        <button @click="changetheme(curtheme)">点击切换</button>  
        <main1></main1>
    </div>  
</template>  
  
<script>  
import main1 from './main1.vue' 
    export default {  
        name: 'page2',  
        data() {  
            return {
                curtheme:'a'
            }  
        },  
        components:{main1}, 
        computed: {  
            listenchangetheme() {  
                return this.$store.state.theme;  
            }  
        },  
        watch: {  
            listenchangetheme: function(a, b) {  
                 
            }  
        },  
        methods:{  
            changetheme:function(n){ 
                if(n == 'a'){
                    n = 'b';
                    this.curtheme = 'b';
                }else{
                    n = 'a';
                    this.curtheme = 'a';
                }
                this.$store.commit({  
                    type:"settheme",
                    theme:n 
                })  
            }  
        }  
    }  
</script>
<style>
    
</style>  
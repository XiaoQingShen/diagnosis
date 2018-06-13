//判断XX值是否存在在数组中
Array.prototype.S = String.fromCharCode(2);  
Array.prototype.in_array = function(e) {  
    var r = new RegExp(this.S + e + this.S);  
    return (r.test(this.S + this.join(this.S) + this.S));  
};

const plugin = {
	install(Vue,options){

        // 导出div图片到本地
        Vue.prototype.saveFile = function(data,filename){
            var save_link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
            save_link.href = data;
            save_link.download = filename;
            var event = document.createEvent('MouseEvents');
            event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
            save_link.dispatchEvent(event);
        };
        // 长字符串换行，根据每行显示的字数换行
        Vue.prototype.split_str = function(string,words_per_line){
            var output_string = string.substring(0,1);  //取出i=0时的字，避免for循环里换行时多次判断i是否为0
            for(var i=1;i<string.length;i++){
                if(i%words_per_line ==0){
                    output_string += "</br>";
                };
                output_string += string.substring(i,i+1);
            };
            return output_string;
        };
		//拖拽指令
		Vue.directive('drag', {
			bind (el, data, vnode, oldVnode){
				el.onmousedown = function(e){
                    var disx = e.pageX - el.offsetLeft;
                    var disy = e.pageY - el.offsetTop;
                    document.onmousemove = function (e){
                        el.style.left = e.pageX - disx+'px';
                        el.style.top = e.pageY - disx+'px';
                    }
                    document.onmouseup = function(){
                        document.onmousemove = document.onmouseup = null;
                    }
                }
			}
		});
	}
};
export default plugin;
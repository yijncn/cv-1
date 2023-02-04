let html = document.querySelector('#html');
let style = document.querySelector('#style');
let string = `
/* 你好，我是小伊
 * 接下来，我演示一下我的前端功底
 * 首先我要准备一个div
 **/
#div1{
    border: 1px solid red;
    width: 200px;
    height: 200px;
}
/* 接下来我把div变成太极图
 * 注意看好了
 * 首先，把div变成一个圆
 **/
#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none;
}
/* 太极是阴阳形成的
 * 一黑一白
 * 使用 css gradient background generator 背景渐变
**/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 加两个神秘的东西*/
#div1::before{
    width: 100px;
    height: 100px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width: 100px;
    height: 100px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
`;
//借助string2来解决回车替换<br>问题
let string2 = '';

//string = string.replace(/\n/g, "<br>");//正则表达式把所有回车换成<br>，html例用<br>表示回车

let n = 0;

//因为<br>需要作为一个整体被识别，所以将下面语句放在方法里更好，不然遇到回车会出现一个<
//html.innerHTML = string.substring(0,n);

let step = () => {
    setTimeout(() => {
        if(string[n] === "\n"){
            //如果是回车，就不照搬
            string2 = string2 + '<br>';
        } else if(string[n] === " "){
            string2 = string2 + '&nbsp';//html中空格的转义
        } else {
            //如果不是回车，就照搬
            string2 = string2 + string[n];
        }
        //html.innerHTML = string.substring(0,n);
        html.innerHTML = string2;
        //css中不能有html标签如<br>，所以用string.substring(0,n)
        //且，前面的汉字会影响css，所以加上了注释标签/**/ 
        style.innerHTML = string.substring(0,n);
        window.scrollTo(0,999999);//屏幕自动下移
        html.scrollTo(0,999999);
        if(n < string.length - 1){
            //只要没结束就一直调用step
            step();
        }
        n = n + 1;
    },0);
};
step();
window.onload=function(){
     var out=document.getElementById("out");
     var boxs=getClass("box")[0];
	 var buttonsss=getClass("buttonss")[0];
     var imgs=boxs.getElementsByTagName("img");
     var imgwidth=css(imgs[0],"width");
	 var imgnum=imgs.length;
	 var cccc=true;
	 //按钮集合
	 var lis=buttonsss.getElementsByTagName("li");
	 //设置box宽度
	  css(boxs,"width",imgwidth*imgnum);
  //核心功能
      function move () {
	    var index=css(boxs,"left")/-imgwidth+1;
	   if(index==6){
	     index=0;
	   }
         for (var i=0; i<lis.length; i++) {
           if(i==index){
		     lis[i].className="select";
		   }else{
		     lis[i].className="";
		   }
		 }
	   myAnimate(boxs,{left:-index*imgwidth},0,Tween.Back.easeIn)
      }
	var t= setInterval(move,2000)
	//让按钮和图片关联
for (var i=0; i<lis.length; i++) {
   (function  (i) {
      lis[i].onclick=function  () {
	      //this.className="select"
         if(!cccc)
		 {
		 return;
		 }
		  for (var j=0; j<lis.length; j++) {
		    if(j==i){
			  lis[j].className="select";
			}else{
			  lis[j].className=""
			}
	      }
  myAnimate(boxs,{left:-i*imgwidth},500,Tween.Back.easeIn,function  () {
    cccc=true;
  })
   cccc=false;
      }
   })(i)
}

out.onmouseover=function  () {
  clearInterval(t);
}
out.onmouseout=function  () {
  t= setInterval(move,2000)
}
}
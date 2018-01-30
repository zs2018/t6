//通过类名获取对象
function getClass (classname,obj) {
      var obj=obj||document;
      var arr=[];
      if(document.getElementsByClassName){
	  return obj.getElementsByClassName(classname);
	  }	else{
	     alls=obj.getElementsByTagName("*");
		 for (var i=0; i<alls.length; i++) {
		  if( alls[i].className==classname){
		   arr.push(alls[i])
		  }
		 }
	    return arr;
	  }
   }
//获取和设置文本
    function getContent (obj,val) {
      if(document.all){
	     if(val){
		   obj.innerText=val;
		 }else{
		   return obj.innerText;
		 }
	  
	  }else{
	      if(val){
		   obj.textContent=val;
		 }else{
		   return obj.textContent;
		 }
	  }
     
   }

   //获取样式的
     function getStyle (obj,attr) {
     if(document.all){
	   return obj.currentStyle[attr];
	 }else{
	 return getComputedStyle(obj,null)[attr]
	 }
   }
//获得所有的子节点(非空)
function getChilds (obj) {
    var childs=obj.childNodes;
	var arr=[];
     for (var i=0; i<childs.length; i++) {
 if(childs[i].nodeType==3 &&/^\s+$/g.test(childs[i].nodeValue)){
	  continue;
	  
	  }else{
	  arr.push(childs[i])
	  }
     }
	 return arr;
  }
//获得第一个子节点

    function getFirst  (obj) {
    var firsts=obj.firstChild;
	while (firsts.nodeType==3) {
	   firsts=firsts.nextSibling;
	}
	return firsts;
  }

//获得最后一个子节点
   function getLast  (obj) {
    var lasts=obj.lastChild;
	while (lasts.nodeType==3) {
	   lasts=lasts.previousSibling;
	}
	return lasts;
  }

 

  //获得下一个兄弟节点
  function getNext  (obj) {
    var nexts=obj.nextSibling;
	while (nexts.nodeType==3) {
	   nexts=nexts.nextSibling;
	}
	return nexts;
  }

  //获得上一个兄弟节点
 function getprevious  (obj) {
    var previous=obj.previousSibling;
	while (previous.nodeType==3) {
	   previous=previous.nextSibling;
	}
	return previous;
  }



//判断某个元素是否包含有另外一个元素

 function contains (parent,child) {
	if(parent.contains){
	   return parent.contains(child) && parent!=child;
	}else{
	  return (parent.compareDocumentPosition(child)===20);
	}
 }

 //判断鼠标是否真正的从外部移入，或者是真正的移出到外部；

  function checkHover (e,target) {
	 if(getEvent(e).type=="mouseover"){
	    return !contains(target,getEvent(e).relatedTarget || getEvent(e).fromElement)&&
		!((getEvent(e).relatedTarget || getEvent(e).fromElement)===target)
	 }else{
		return !contains(target,getEvent(e).relatedTarget || getEvent(e).toElement)&&
		!((getEvent(e).relatedTarget || getEvent(e).toElement)===target)
		}
  }

//获得事件对象
  function getEvent (e) {
	    return e||window.event;
  }
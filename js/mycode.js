//ͨ��������ȡ����
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
//��ȡ�������ı�
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

   //��ȡ��ʽ��
     function getStyle (obj,attr) {
     if(document.all){
	   return obj.currentStyle[attr];
	 }else{
	 return getComputedStyle(obj,null)[attr]
	 }
   }
//������е��ӽڵ�(�ǿ�)
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
//��õ�һ���ӽڵ�

    function getFirst  (obj) {
    var firsts=obj.firstChild;
	while (firsts.nodeType==3) {
	   firsts=firsts.nextSibling;
	}
	return firsts;
  }

//������һ���ӽڵ�
   function getLast  (obj) {
    var lasts=obj.lastChild;
	while (lasts.nodeType==3) {
	   lasts=lasts.previousSibling;
	}
	return lasts;
  }

 

  //�����һ���ֵܽڵ�
  function getNext  (obj) {
    var nexts=obj.nextSibling;
	while (nexts.nodeType==3) {
	   nexts=nexts.nextSibling;
	}
	return nexts;
  }

  //�����һ���ֵܽڵ�
 function getprevious  (obj) {
    var previous=obj.previousSibling;
	while (previous.nodeType==3) {
	   previous=previous.nextSibling;
	}
	return previous;
  }



//�ж�ĳ��Ԫ���Ƿ����������һ��Ԫ��

 function contains (parent,child) {
	if(parent.contains){
	   return parent.contains(child) && parent!=child;
	}else{
	  return (parent.compareDocumentPosition(child)===20);
	}
 }

 //�ж�����Ƿ������Ĵ��ⲿ���룬�������������Ƴ����ⲿ��

  function checkHover (e,target) {
	 if(getEvent(e).type=="mouseover"){
	    return !contains(target,getEvent(e).relatedTarget || getEvent(e).fromElement)&&
		!((getEvent(e).relatedTarget || getEvent(e).fromElement)===target)
	 }else{
		return !contains(target,getEvent(e).relatedTarget || getEvent(e).toElement)&&
		!((getEvent(e).relatedTarget || getEvent(e).toElement)===target)
		}
  }

//����¼�����
  function getEvent (e) {
	    return e||window.event;
  }
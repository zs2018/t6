  
//�˶����ĺ���
function myAnimate (obj,attrobj,dur,tween,callfun) {
    var start=[],changes=[],time=0;
	for (var i in attrobj) {
	  start[i]=css(obj,i);
      changes[i]=attrobj[i]-start[i]
	}

   obj.time=setInterval(function  () {
	var stops=true;
	 if(time<=dur){
	    stops=false;
      for (var i in attrobj) {
	    css(obj,i,tween(time,start[i],changes[i],dur))
      }
      time+=60
	  }

	  if(stops){
       for (var i in attrobj ) {
	     css(obj,i,attrobj[i])
       } 

	  clearInterval( obj.time);
	   obj.time=null;
	   if(callfun){
	     callfun();
	   }
	  }
	},60)
}


  //css���ݺ���
function css (obj,attr,val) {
  //�ǲ���һ��Ԫ�ؽڵ�
  if(obj.nodeType!=1){
	return ;
  }
  //��������
     //ȥ���ո�
  var newattr=attr.replace(/^\s*|\s*$/g,"");
     //��-ת��Ϊ��д
    if(newattr.indexOf("-")!=-1){
    var aa=  newattr.charAt(newattr.indexOf("-")+1);
      
     newattr=newattr.replace(/-\w{1}/,aa.toUpperCase());
	}
	//��������������ʱ��������ȡֵ
	if(arguments.length==2){
	//������ȡtop������ָ
      if(newattr=="top"||newattr=="left"||newattr=="width"||newattr=="height"){
		  var str=newattr.replace(newattr.charAt(0),newattr.charAt(0).toUpperCase())
		  
		  return obj["offset"+str];
		}
       //������ȡ͸���ȵ�ֵ
		if(newattr=="opacity"){
		  
		  return obj.currentStyle?parseInt(obj.currentStyle[newattr]||100):parseInt(getComputedStyle(obj,null)[newattr]||1)*100
		}
      //�������
		return obj.currentStyle?obj.currentStyle[newattr]:getComputedStyle(obj,null)[newattr];
	}
   //��������ֵ��ʱ����������ֵ
	if(arguments.length==3){
	  //����top...
	  switch (newattr) {
	  case "top":
	  case "left":
	  case "height":
	  case "width":
	  obj.style[newattr]=val+"px";
	  break;
	  //͸����
	  case "opacity":
	  obj.style.opacity=val/100;
	  obj.style.filter="alpha(opacity="+val+")";
	  break;
	  //����
	  default:
	  obj.style[attr]=val;
	  }
	
	}
}

  
  
  //�����㷨
            /*
		    Linear���޻���Ч��(�����˶�)��
			Quad�����η��Ļ�����
			Cubic�����η��Ļ���
			Quartic���Ĵη��Ļ�����
			Quintic����η��Ļ�����
			Sinusoidal���������ߵĻ�����
			Exponential��ָ�����ߵĻ�����
			Circular��Բ�����ߵĻ�����
			Elastic��ָ��˥�����������߻�����
			Back��������Χ�����η���������
			Bounce��ָ��˥���ķ���������
			

			ÿ��Ч����������������ʽ�����������ֱ��ǣ�
			easeIn����0��ʼ���ٵ��˶���
			easeOut�����ٵ�0���˶���
			easeInOut��ǰ��δ�0��ʼ���٣����μ��ٵ�0���˶���
			


			�������ĸ������ֱ����
				t--- current time����ǰʱ�䣩��
				b--- beginning value����ʼֵ����
				c--- change in value���仯������
				d---duration������ʱ�䣩
			Tween.Quad.easeInt()
	     	����Ľ�����ǵ�ǰ���˶�·�̡�
           
		   ������:Code����
		   �������Ͳ��Եĵط�ϣ����λ������������
		   50
          */

 Tween = {  
    Linear: function(t,b,c,d){ return c*t/d + b; },
    Quad: {
        easeIn: function(t,b,c,d){
            return c*(t/=d)*t + b;
        },
        easeOut: function(t,b,c,d){
            return -c *(t/=d)*(t-2) + b;
        },
        easeInOut: function(t,b,c,d){
            if ((t/=d/2) < 1) return c/2*t*t + b;
            return -c/2 * ((--t)*(t-2) - 1) + b;
        }
    },
    Cubic: {
        easeIn: function(t,b,c,d){
            return c*(t/=d)*t*t + b;
        },
        easeOut: function(t,b,c,d){
            return c*((t=t/d-1)*t*t + 1) + b;
        },
        easeInOut: function(t,b,c,d){
            if ((t/=d/2) < 1) return c/2*t*t*t + b;
            return c/2*((t-=2)*t*t + 2) + b;
        }
    },
    Quart: {
        easeIn: function(t,b,c,d){
            return c*(t/=d)*t*t*t + b;
        },
        easeOut: function(t,b,c,d){
            return -c * ((t=t/d-1)*t*t*t - 1) + b;
        },
        easeInOut: function(t,b,c,d){
            if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
            return -c/2 * ((t-=2)*t*t*t - 2) + b;
        }
    },
    Quint: {
        easeIn: function(t,b,c,d){
            return c*(t/=d)*t*t*t*t + b;
        },
        easeOut: function(t,b,c,d){
            return c*((t=t/d-1)*t*t*t*t + 1) + b;
        },
        easeInOut: function(t,b,c,d){
            if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
            return c/2*((t-=2)*t*t*t*t + 2) + b;
        }
    },
    Sine: {
        easeIn: function(t,b,c,d){
            return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
        },
        easeOut: function(t,b,c,d){
            return c * Math.sin(t/d * (Math.PI/2)) + b;
        },
        easeInOut: function(t,b,c,d){
            return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
        }
    },
    Expo: {
        easeIn: function(t,b,c,d){
            return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
        },
        easeOut: function(t,b,c,d){
            return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
        },
        easeInOut: function(t,b,c,d){
            if (t==0) return b;
            if (t==d) return b+c;
            if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
            return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
        }
    },
    Circ: {
        easeIn: function(t,b,c,d){
            return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
        },
        easeOut: function(t,b,c,d){
            return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
        },
        easeInOut: function(t,b,c,d){
            if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
            return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
        }
    },
    Elastic: {
        easeIn: function(t,b,c,d,a,p){
            if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
            if (!a || a < Math.abs(c)) { a=c; var s=p/4; }
            else var s = p/(2*Math.PI) * Math.asin (c/a);
            return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
        },
        easeOut: function(t,b,c,d,a,p){
            if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
            if (!a || a < Math.abs(c)) { a=c; var s=p/4; }
            else var s = p/(2*Math.PI) * Math.asin (c/a);
            return (a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b);
        },
        easeInOut: function(t,b,c,d,a,p){
            if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
            if (!a || a < Math.abs(c)) { a=c; var s=p/4; }
            else var s = p/(2*Math.PI) * Math.asin (c/a);
            if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
            return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
        }
    },
    Back: {
        easeIn: function(t,b,c,d,s){
            if (s == undefined) s = 1.70158;
            return c*(t/=d)*t*((s+1)*t - s) + b;
        },
        easeOut: function(t,b,c,d,s){
            if (s == undefined) s = 1.70158;
            return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
        },
        easeInOut: function(t,b,c,d,s){
            if (s == undefined) s = 1.70158; 
            if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
            return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
        }
    },
    Bounce: {
        easeIn: function(t,b,c,d){
            return c - Tween.Bounce.easeOut(d-t, 0, c, d) + b;
        },
        easeOut: function(t,b,c,d){
            if ((t/=d) < (1/2.75)) {
                return c*(7.5625*t*t) + b;
            } else if (t < (2/2.75)) {
                return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
            } else if (t < (2.5/2.75)) {
                return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
            } else {
                return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
            }
        },
        easeInOut: function(t,b,c,d){
            if (t < d/2) return Tween.Bounce.easeIn(t*2, 0, c, d) * .5 + b;
            else return Tween.Bounce.easeOut(t*2-d, 0, c, d) * .5 + c*.5 + b;
        }
    }
 }
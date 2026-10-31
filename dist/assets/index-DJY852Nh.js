(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const vc="180",ef=0,ll=1,nf=2,Hh=1,Gh=2,Wn=3,ci=0,Qe=1,ke=2,ri=0,Ci=1,li=2,hl=3,ul=4,sf=5,bi=100,rf=101,of=102,af=103,cf=104,lf=200,hf=201,uf=202,ff=203,ua=204,fa=205,df=206,pf=207,mf=208,gf=209,_f=210,xf=211,vf=212,Mf=213,yf=214,da=0,pa=1,ma=2,ps=3,ga=4,_a=5,xa=6,va=7,Vh=0,Sf=1,wf=2,oi=0,Ef=1,bf=2,Tf=3,Wh=4,Af=5,Rf=6,Cf=7,Xh=300,ms=301,gs=302,Ma=303,ya=304,go=306,Sa=1e3,Ai=1001,wa=1002,hn=1003,Pf=1004,vr=1005,Rn=1006,Eo=1007,Ri=1008,In=1009,qh=1010,Yh=1011,er=1012,Mc=1013,Li=1014,Cn=1015,dr=1016,yc=1017,Sc=1018,nr=1020,$h=35902,Zh=35899,Kh=1021,Jh=1022,Sn=1023,ir=1026,sr=1027,wc=1028,Ec=1029,jh=1030,bc=1031,Tc=1033,eo=33776,no=33777,io=33778,so=33779,Ea=35840,ba=35841,Ta=35842,Aa=35843,Ra=36196,Ca=37492,Pa=37496,La=37808,Da=37809,Ia=37810,Ua=37811,Na=37812,Fa=37813,Oa=37814,Ba=37815,za=37816,ka=37817,Ha=37818,Ga=37819,Va=37820,Wa=37821,Xa=36492,qa=36494,Ya=36495,$a=36283,Za=36284,Ka=36285,Ja=36286,Lf=3200,Df=3201,Qh=0,If=1,ni="",be="srgb",_s="srgb-linear",co="linear",me="srgb",zi=7680,fl=519,Uf=512,Nf=513,Ff=514,tu=515,Of=516,Bf=517,zf=518,kf=519,ja=35044,dl="300 es",Pn=2e3,lo=2001;class bs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const s=i[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Ge=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let pl=1234567;const Zs=Math.PI/180,xs=180/Math.PI;function Dn(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ge[n&255]+Ge[n>>8&255]+Ge[n>>16&255]+Ge[n>>24&255]+"-"+Ge[t&255]+Ge[t>>8&255]+"-"+Ge[t>>16&15|64]+Ge[t>>24&255]+"-"+Ge[e&63|128]+Ge[e>>8&255]+"-"+Ge[e>>16&255]+Ge[e>>24&255]+Ge[i&255]+Ge[i>>8&255]+Ge[i>>16&255]+Ge[i>>24&255]).toLowerCase()}function ie(n,t,e){return Math.max(t,Math.min(e,n))}function Ac(n,t){return(n%t+t)%t}function Hf(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function Gf(n,t,e){return n!==t?(e-n)/(t-n):0}function Ks(n,t,e){return(1-e)*n+e*t}function Vf(n,t,e,i){return Ks(n,t,1-Math.exp(-e*i))}function Wf(n,t=1){return t-Math.abs(Ac(n,t*2)-t)}function Xf(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function qf(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Yf(n,t){return n+Math.floor(Math.random()*(t-n+1))}function $f(n,t){return n+Math.random()*(t-n)}function Zf(n){return n*(.5-Math.random())}function Kf(n){n!==void 0&&(pl=n);let t=pl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Jf(n){return n*Zs}function jf(n){return n*xs}function Qf(n){return(n&n-1)===0&&n!==0}function td(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function ed(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function nd(n,t,e,i,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+i)/2),h=o((t+i)/2),u=r((t-i)/2),f=o((t-i)/2),d=r((i-t)/2),g=o((i-t)/2);switch(s){case"XYX":n.set(a*h,c*u,c*f,a*l);break;case"YZY":n.set(c*f,a*h,c*u,a*l);break;case"ZXZ":n.set(c*u,c*f,a*h,a*l);break;case"XZX":n.set(a*h,c*g,c*d,a*l);break;case"YXY":n.set(c*d,a*h,c*g,a*l);break;case"ZYZ":n.set(c*g,c*d,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function yn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function de(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const ln={DEG2RAD:Zs,RAD2DEG:xs,generateUUID:Dn,clamp:ie,euclideanModulo:Ac,mapLinear:Hf,inverseLerp:Gf,lerp:Ks,damp:Vf,pingpong:Wf,smoothstep:Xf,smootherstep:qf,randInt:Yf,randFloat:$f,randFloatSpread:Zf,seededRandom:Kf,degToRad:Jf,radToDeg:jf,isPowerOfTwo:Qf,ceilPowerOfTwo:td,floorPowerOfTwo:ed,setQuaternionFromProperEuler:nd,normalize:de,denormalize:yn};class dt{constructor(t=0,e=0){dt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ie(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(ie(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class fn{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let c=i[s+0],l=i[s+1],h=i[s+2],u=i[s+3];const f=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(u!==_||c!==f||l!==d||h!==g){let m=1-a;const p=c*f+l*d+h*g+u*_,E=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const C=Math.sqrt(y),T=Math.atan2(C,p*E);m=Math.sin(m*T)/C,a=Math.sin(a*T)/C}const x=a*E;if(c=c*m+f*x,l=l*m+d*x,h=h*m+g*x,u=u*m+_*x,m===1-a){const C=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=C,l*=C,h*=C,u*=C}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],c=i[s+1],l=i[s+2],h=i[s+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+h*u+c*d-l*f,t[e+1]=c*g+h*f+l*u-a*d,t[e+2]=l*g+h*d+a*f-c*u,t[e+3]=h*g-a*u-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(s/2),u=a(r/2),f=c(i/2),d=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"YZX":this._x=f*h*u+l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u-f*d*g;break;case"XZY":this._x=f*h*u-l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=i+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(i>a&&i>u){const d=2*Math.sqrt(1+i-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>u){const d=2*Math.sqrt(1+a-i-u);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+h)/d}else{const d=2*Math.sqrt(1+u-i-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ie(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=i*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-i*l,this._z=r*h+o*l+i*c-s*a,this._w=o*h-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*i+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=o*u+this._w*f,this._x=i*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,i=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ml.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ml.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*i),h=2*(a*e-r*s),u=2*(r*i-o*e);return this.x=e+c*l+o*u-a*h,this.y=i+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this.z=ie(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this.z=ie(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ie(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return bo.copy(this).projectOnVector(t),this.sub(bo)}reflect(t){return this.sub(bo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(ie(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const bo=new P,ml=new fn;class jt{constructor(t,e,i,s,r,o,a,c,l){jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l)}set(t,e,i,s,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],u=i[7],f=i[2],d=i[5],g=i[8],_=s[0],m=s[3],p=s[6],E=s[1],y=s[4],x=s[7],C=s[2],T=s[5],b=s[8];return r[0]=o*_+a*E+c*C,r[3]=o*m+a*y+c*T,r[6]=o*p+a*x+c*b,r[1]=l*_+h*E+u*C,r[4]=l*m+h*y+u*T,r[7]=l*p+h*x+u*b,r[2]=f*_+d*E+g*C,r[5]=f*m+d*y+g*T,r[8]=f*p+d*x+g*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-i*r*h+i*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,f=a*c-h*r,d=l*r-o*c,g=e*u+i*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(s*l-h*i)*_,t[2]=(a*i-s*o)*_,t[3]=f*_,t[4]=(h*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=d*_,t[7]=(i*c-l*e)*_,t[8]=(o*e-i*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(To.makeScale(t,e)),this}rotate(t){return this.premultiply(To.makeRotation(-t)),this}translate(t,e){return this.premultiply(To.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const To=new jt;function eu(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function ho(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function id(){const n=ho("canvas");return n.style.display="block",n}const gl={};function rr(n){n in gl||(gl[n]=!0,console.warn(n))}function sd(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}const _l=new jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xl=new jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function rd(){const n={enabled:!0,workingColorSpace:_s,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===me&&(s.r=Yn(s.r),s.g=Yn(s.g),s.b=Yn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===me&&(s.r=hs(s.r),s.g=hs(s.g),s.b=hs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ni?co:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return rr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return rr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[_s]:{primaries:t,whitePoint:i,transfer:co,toXYZ:_l,fromXYZ:xl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:be},outputColorSpaceConfig:{drawingBufferColorSpace:be}},[be]:{primaries:t,whitePoint:i,transfer:me,toXYZ:_l,fromXYZ:xl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:be}}}),n}const he=rd();function Yn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function hs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ki;class od{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{ki===void 0&&(ki=ho("canvas")),ki.width=t.width,ki.height=t.height;const s=ki.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=ki}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ho("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Yn(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Yn(e[i]/255)*255):e[i]=Yn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ad=0;class Rc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ad++}),this.uuid=Dn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ao(s[o].image)):r.push(Ao(s[o]))}else r=Ao(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function Ao(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?od.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let cd=0;const Ro=new P;class $e extends bs{constructor(t=$e.DEFAULT_IMAGE,e=$e.DEFAULT_MAPPING,i=Ai,s=Ai,r=Rn,o=Ri,a=Sn,c=In,l=$e.DEFAULT_ANISOTROPY,h=ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cd++}),this.uuid=Dn(),this.name="",this.source=new Rc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ro).x}get height(){return this.source.getSize(Ro).y}get depth(){return this.source.getSize(Ro).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Xh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Sa:t.x=t.x-Math.floor(t.x);break;case Ai:t.x=t.x<0?0:1;break;case wa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Sa:t.y=t.y-Math.floor(t.y);break;case Ai:t.y=t.y<0?0:1;break;case wa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}$e.DEFAULT_IMAGE=null;$e.DEFAULT_MAPPING=Xh;$e.DEFAULT_ANISOTROPY=1;class ge{constructor(t=0,e=0,i=0,s=1){ge.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(l+1)/2,x=(d+1)/2,C=(p+1)/2,T=(h+f)/4,b=(u+_)/4,A=(g+m)/4;return y>x&&y>C?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=T/i,r=b/i):x>C?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=T/s,r=A/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=b/r,s=A/r),this.set(i,s,r,e),this}let E=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(u-_)/E,this.z=(f-h)/E,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this.z=ie(this.z,t.z,e.z),this.w=ie(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this.z=ie(this.z,t,e),this.w=ie(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ie(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ld extends bs{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e);const s={width:t,height:e,depth:i.depth},r=new $e(s);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:Rn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Rc(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Di extends ld{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class nu extends $e{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class hd extends $e{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ni{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(xn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(xn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=xn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,xn):xn.fromBufferAttribute(r,o),xn.applyMatrix4(t.matrixWorld),this.expandByPoint(xn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Mr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Mr.copy(i.boundingBox)),Mr.applyMatrix4(t.matrixWorld),this.union(Mr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,xn),xn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ps),yr.subVectors(this.max,Ps),Hi.subVectors(t.a,Ps),Gi.subVectors(t.b,Ps),Vi.subVectors(t.c,Ps),$n.subVectors(Gi,Hi),Zn.subVectors(Vi,Gi),mi.subVectors(Hi,Vi);let e=[0,-$n.z,$n.y,0,-Zn.z,Zn.y,0,-mi.z,mi.y,$n.z,0,-$n.x,Zn.z,0,-Zn.x,mi.z,0,-mi.x,-$n.y,$n.x,0,-Zn.y,Zn.x,0,-mi.y,mi.x,0];return!Co(e,Hi,Gi,Vi,yr)||(e=[1,0,0,0,1,0,0,0,1],!Co(e,Hi,Gi,Vi,yr))?!1:(Sr.crossVectors($n,Zn),e=[Sr.x,Sr.y,Sr.z],Co(e,Hi,Gi,Vi,yr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,xn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(xn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(zn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const zn=[new P,new P,new P,new P,new P,new P,new P,new P],xn=new P,Mr=new Ni,Hi=new P,Gi=new P,Vi=new P,$n=new P,Zn=new P,mi=new P,Ps=new P,yr=new P,Sr=new P,gi=new P;function Co(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){gi.fromArray(n,r);const a=s.x*Math.abs(gi.x)+s.y*Math.abs(gi.y)+s.z*Math.abs(gi.z),c=t.dot(gi),l=e.dot(gi),h=i.dot(gi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const ud=new Ni,Ls=new P,Po=new P;class Fi{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):ud.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ls.subVectors(t,this.center);const e=Ls.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Ls,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Po.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ls.copy(t.center).add(Po)),this.expandByPoint(Ls.copy(t.center).sub(Po))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const kn=new P,Lo=new P,wr=new P,Kn=new P,Do=new P,Er=new P,Io=new P;class Cc{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,kn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=kn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(kn.copy(this.origin).addScaledVector(this.direction,e),kn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Lo.copy(t).add(e).multiplyScalar(.5),wr.copy(e).sub(t).normalize(),Kn.copy(this.origin).sub(Lo);const r=t.distanceTo(e)*.5,o=-this.direction.dot(wr),a=Kn.dot(this.direction),c=-Kn.dot(wr),l=Kn.lengthSq(),h=Math.abs(1-o*o);let u,f,d,g;if(h>0)if(u=o*c-a,f=o*a-c,g=r*h,u>=0)if(f>=-g)if(f<=g){const _=1/h;u*=_,f*=_,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Lo).addScaledVector(wr,f),d}intersectSphere(t,e){kn.subVectors(t.center,this.origin);const i=kn.dot(this.direction),s=kn.dot(kn)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(i=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(i=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,kn)!==null}intersectTriangle(t,e,i,s,r){Do.subVectors(e,t),Er.subVectors(i,t),Io.crossVectors(Do,Er);let o=this.direction.dot(Io),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Kn.subVectors(this.origin,t);const c=a*this.direction.dot(Er.crossVectors(Kn,Er));if(c<0)return null;const l=a*this.direction.dot(Do.cross(Kn));if(l<0||c+l>o)return null;const h=-a*Kn.dot(Io);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class oe{constructor(t,e,i,s,r,o,a,c,l,h,u,f,d,g,_,m){oe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l,h,u,f,d,g,_,m)}set(t,e,i,s,r,o,a,c,l,h,u,f,d,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new oe().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Wi.setFromMatrixColumn(t,0).length(),r=1/Wi.setFromMatrixColumn(t,1).length(),o=1/Wi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=o*h,d=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=d+g*l,e[5]=f-_*l,e[9]=-a*c,e[2]=_-f*l,e[6]=g+d*l,e[10]=o*c}else if(t.order==="YXZ"){const f=c*h,d=c*u,g=l*h,_=l*u;e[0]=f+_*a,e[4]=g*a-d,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=_+f*a,e[10]=o*c}else if(t.order==="ZXY"){const f=c*h,d=c*u,g=l*h,_=l*u;e[0]=f-_*a,e[4]=-o*u,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=_-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const f=o*h,d=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=g*l-d,e[8]=f*l+_,e[1]=c*u,e[5]=_*l+f,e[9]=d*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const f=o*c,d=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=_-f*u,e[8]=g*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=d*u+g,e[10]=f-_*u}else if(t.order==="XZY"){const f=o*c,d=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+_,e[5]=o*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=a*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(fd,t,dd)}lookAt(t,e,i){const s=this.elements;return on.subVectors(t,e),on.lengthSq()===0&&(on.z=1),on.normalize(),Jn.crossVectors(i,on),Jn.lengthSq()===0&&(Math.abs(i.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),Jn.crossVectors(i,on)),Jn.normalize(),br.crossVectors(on,Jn),s[0]=Jn.x,s[4]=br.x,s[8]=on.x,s[1]=Jn.y,s[5]=br.y,s[9]=on.y,s[2]=Jn.z,s[6]=br.z,s[10]=on.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],u=i[5],f=i[9],d=i[13],g=i[2],_=i[6],m=i[10],p=i[14],E=i[3],y=i[7],x=i[11],C=i[15],T=s[0],b=s[4],A=s[8],S=s[12],M=s[1],L=s[5],N=s[9],V=s[13],Z=s[2],W=s[6],k=s[10],q=s[14],G=s[3],ot=s[7],mt=s[11],ct=s[15];return r[0]=o*T+a*M+c*Z+l*G,r[4]=o*b+a*L+c*W+l*ot,r[8]=o*A+a*N+c*k+l*mt,r[12]=o*S+a*V+c*q+l*ct,r[1]=h*T+u*M+f*Z+d*G,r[5]=h*b+u*L+f*W+d*ot,r[9]=h*A+u*N+f*k+d*mt,r[13]=h*S+u*V+f*q+d*ct,r[2]=g*T+_*M+m*Z+p*G,r[6]=g*b+_*L+m*W+p*ot,r[10]=g*A+_*N+m*k+p*mt,r[14]=g*S+_*V+m*q+p*ct,r[3]=E*T+y*M+x*Z+C*G,r[7]=E*b+y*L+x*W+C*ot,r[11]=E*A+y*N+x*k+C*mt,r[15]=E*S+y*V+x*q+C*ct,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*c*u-s*l*u-r*a*f+i*l*f+s*a*d-i*c*d)+_*(+e*c*d-e*l*f+r*o*f-s*o*d+s*l*h-r*c*h)+m*(+e*l*u-e*a*d-r*o*u+i*o*d+r*a*h-i*l*h)+p*(-s*a*h-e*c*u+e*a*f+s*o*u-i*o*f+i*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],_=t[13],m=t[14],p=t[15],E=u*m*l-_*f*l+_*c*d-a*m*d-u*c*p+a*f*p,y=g*f*l-h*m*l-g*c*d+o*m*d+h*c*p-o*f*p,x=h*_*l-g*u*l+g*a*d-o*_*d-h*a*p+o*u*p,C=g*u*c-h*_*c-g*a*f+o*_*f+h*a*m-o*u*m,T=e*E+i*y+s*x+r*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/T;return t[0]=E*b,t[1]=(_*f*r-u*m*r-_*s*d+i*m*d+u*s*p-i*f*p)*b,t[2]=(a*m*r-_*c*r+_*s*l-i*m*l-a*s*p+i*c*p)*b,t[3]=(u*c*r-a*f*r-u*s*l+i*f*l+a*s*d-i*c*d)*b,t[4]=y*b,t[5]=(h*m*r-g*f*r+g*s*d-e*m*d-h*s*p+e*f*p)*b,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*p-e*c*p)*b,t[7]=(o*f*r-h*c*r+h*s*l-e*f*l-o*s*d+e*c*d)*b,t[8]=x*b,t[9]=(g*u*r-h*_*r-g*i*d+e*_*d+h*i*p-e*u*p)*b,t[10]=(o*_*r-g*a*r+g*i*l-e*_*l-o*i*p+e*a*p)*b,t[11]=(h*a*r-o*u*r-h*i*l+e*u*l+o*i*d-e*a*d)*b,t[12]=C*b,t[13]=(h*_*s-g*u*s+g*i*f-e*_*f-h*i*m+e*u*m)*b,t[14]=(g*a*s-o*_*s-g*i*c+e*_*c+o*i*m-e*a*m)*b,t[15]=(o*u*s-h*a*s+h*i*c-e*u*c-o*i*f+e*a*f)*b,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+i,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,f=r*l,d=r*h,g=r*u,_=o*h,m=o*u,p=a*u,E=c*l,y=c*h,x=c*u,C=i.x,T=i.y,b=i.z;return s[0]=(1-(_+p))*C,s[1]=(d+x)*C,s[2]=(g-y)*C,s[3]=0,s[4]=(d-x)*T,s[5]=(1-(f+p))*T,s[6]=(m+E)*T,s[7]=0,s[8]=(g+y)*b,s[9]=(m-E)*b,s[10]=(1-(f+_))*b,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=Wi.set(s[0],s[1],s[2]).length();const o=Wi.set(s[4],s[5],s[6]).length(),a=Wi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],vn.copy(this);const l=1/r,h=1/o,u=1/a;return vn.elements[0]*=l,vn.elements[1]*=l,vn.elements[2]*=l,vn.elements[4]*=h,vn.elements[5]*=h,vn.elements[6]*=h,vn.elements[8]*=u,vn.elements[9]*=u,vn.elements[10]*=u,e.setFromRotationMatrix(vn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=Pn,c=!1){const l=this.elements,h=2*r/(e-t),u=2*r/(i-s),f=(e+t)/(e-t),d=(i+s)/(i-s);let g,_;if(c)g=r/(o-r),_=o*r/(o-r);else if(a===Pn)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===lo)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Pn,c=!1){const l=this.elements,h=2/(e-t),u=2/(i-s),f=-(e+t)/(e-t),d=-(i+s)/(i-s);let g,_;if(c)g=1/(o-r),_=o/(o-r);else if(a===Pn)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===lo)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=u,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Wi=new P,vn=new oe,fd=new P(0,0,0),dd=new P(1,1,1),Jn=new P,br=new P,on=new P,vl=new oe,Ml=new fn;class tn{constructor(t=0,e=0,i=0,s=tn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(ie(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ie(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ie(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ie(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ie(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ie(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return vl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(vl,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ml.setFromEuler(this),this.setFromQuaternion(Ml,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}tn.DEFAULT_ORDER="XYZ";class iu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let pd=0;const yl=new P,Xi=new fn,Hn=new oe,Tr=new P,Ds=new P,md=new P,gd=new fn,Sl=new P(1,0,0),wl=new P(0,1,0),El=new P(0,0,1),bl={type:"added"},_d={type:"removed"},qi={type:"childadded",child:null},Uo={type:"childremoved",child:null};class Ie extends bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pd++}),this.uuid=Dn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ie.DEFAULT_UP.clone();const t=new P,e=new tn,i=new fn,s=new P(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new oe},normalMatrix:{value:new jt}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=Ie.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new iu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Xi.setFromAxisAngle(t,e),this.quaternion.multiply(Xi),this}rotateOnWorldAxis(t,e){return Xi.setFromAxisAngle(t,e),this.quaternion.premultiply(Xi),this}rotateX(t){return this.rotateOnAxis(Sl,t)}rotateY(t){return this.rotateOnAxis(wl,t)}rotateZ(t){return this.rotateOnAxis(El,t)}translateOnAxis(t,e){return yl.copy(t).applyQuaternion(this.quaternion),this.position.add(yl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Sl,t)}translateY(t){return this.translateOnAxis(wl,t)}translateZ(t){return this.translateOnAxis(El,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Tr.copy(t):Tr.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Ds.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt(Ds,Tr,this.up):Hn.lookAt(Tr,Ds,this.up),this.quaternion.setFromRotationMatrix(Hn),s&&(Hn.extractRotation(s.matrixWorld),Xi.setFromRotationMatrix(Hn),this.quaternion.premultiply(Xi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(bl),qi.child=t,this.dispatchEvent(qi),qi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(_d),Uo.child=t,this.dispatchEvent(Uo),Uo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Hn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Hn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(bl),qi.child=t,this.dispatchEvent(qi),qi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,t,md),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,gd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Ie.DEFAULT_UP=new P(0,1,0);Ie.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mn=new P,Gn=new P,No=new P,Vn=new P,Yi=new P,$i=new P,Tl=new P,Fo=new P,Oo=new P,Bo=new P,zo=new ge,ko=new ge,Ho=new ge;class _n{constructor(t=new P,e=new P,i=new P){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Mn.subVectors(t,e),s.cross(Mn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Mn.subVectors(s,e),Gn.subVectors(i,e),No.subVectors(t,e);const o=Mn.dot(Mn),a=Mn.dot(Gn),c=Mn.dot(No),l=Gn.dot(Gn),h=Gn.dot(No),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(l*c-a*h)*f,g=(o*h-a*c)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Vn)===null?!1:Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getInterpolation(t,e,i,s,r,o,a,c){return this.getBarycoord(t,e,i,s,Vn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Vn.x),c.addScaledVector(o,Vn.y),c.addScaledVector(a,Vn.z),c)}static getInterpolatedAttribute(t,e,i,s,r,o){return zo.setScalar(0),ko.setScalar(0),Ho.setScalar(0),zo.fromBufferAttribute(t,e),ko.fromBufferAttribute(t,i),Ho.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(zo,r.x),o.addScaledVector(ko,r.y),o.addScaledVector(Ho,r.z),o}static isFrontFacing(t,e,i,s){return Mn.subVectors(i,e),Gn.subVectors(t,e),Mn.cross(Gn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Mn.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),Mn.cross(Gn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return _n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return _n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return _n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return _n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return _n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;Yi.subVectors(s,i),$i.subVectors(r,i),Fo.subVectors(t,i);const c=Yi.dot(Fo),l=$i.dot(Fo);if(c<=0&&l<=0)return e.copy(i);Oo.subVectors(t,s);const h=Yi.dot(Oo),u=$i.dot(Oo);if(h>=0&&u<=h)return e.copy(s);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(i).addScaledVector(Yi,o);Bo.subVectors(t,r);const d=Yi.dot(Bo),g=$i.dot(Bo);if(g>=0&&d<=g)return e.copy(r);const _=d*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(i).addScaledVector($i,a);const m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return Tl.subVectors(r,s),a=(u-h)/(u-h+(d-g)),e.copy(s).addScaledVector(Tl,a);const p=1/(m+_+f);return o=_*p,a=f*p,e.copy(i).addScaledVector(Yi,o).addScaledVector($i,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const su={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jn={h:0,s:0,l:0},Ar={h:0,s:0,l:0};function Go(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class zt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=be){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=he.workingColorSpace){return this.r=t,this.g=e,this.b=i,he.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=he.workingColorSpace){if(t=Ac(t,1),e=ie(e,0,1),i=ie(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Go(o,r,t+1/3),this.g=Go(o,r,t),this.b=Go(o,r,t-1/3)}return he.colorSpaceToWorking(this,s),this}setStyle(t,e=be){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=be){const i=su[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Yn(t.r),this.g=Yn(t.g),this.b=Yn(t.b),this}copyLinearToSRGB(t){return this.r=hs(t.r),this.g=hs(t.g),this.b=hs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=be){return he.workingToColorSpace(Ve.copy(this),t),Math.round(ie(Ve.r*255,0,255))*65536+Math.round(ie(Ve.g*255,0,255))*256+Math.round(ie(Ve.b*255,0,255))}getHexString(t=be){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.workingToColorSpace(Ve.copy(this),e);const i=Ve.r,s=Ve.g,r=Ve.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case i:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-i)/u+2;break;case r:c=(i-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=he.workingColorSpace){return he.workingToColorSpace(Ve.copy(this),e),t.r=Ve.r,t.g=Ve.g,t.b=Ve.b,t}getStyle(t=be){he.workingToColorSpace(Ve.copy(this),t);const e=Ve.r,i=Ve.g,s=Ve.b;return t!==be?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(jn),this.setHSL(jn.h+t,jn.s+e,jn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(jn),t.getHSL(Ar);const i=Ks(jn.h,Ar.h,e),s=Ks(jn.s,Ar.s,e),r=Ks(jn.l,Ar.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ve=new zt;zt.NAMES=su;let xd=0;class ui extends bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xd++}),this.uuid=Dn(),this.name="",this.type="Material",this.blending=Ci,this.side=ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ua,this.blendDst=fa,this.blendEquation=bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zi,this.stencilZFail=zi,this.stencilZPass=zi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ci&&(i.blending=this.blending),this.side!==ci&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ua&&(i.blendSrc=this.blendSrc),this.blendDst!==fa&&(i.blendDst=this.blendDst),this.blendEquation!==bi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ps&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==zi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==zi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class un extends ui{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.combine=Vh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ne=new P,Rr=new dt;let vd=0;class De{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=ja,this.updateRanges=[],this.gpuType=Cn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Rr.fromBufferAttribute(this,e),Rr.applyMatrix3(t),this.setXY(e,Rr.x,Rr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix3(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=yn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=de(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=yn(e,this.array)),e}setX(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=yn(e,this.array)),e}setY(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=yn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=yn(e,this.array)),e}setW(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),i=de(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),i=de(i,this.array),s=de(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),i=de(i,this.array),s=de(s,this.array),r=de(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ja&&(t.usage=this.usage),t}}class ru extends De{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class ou extends De{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class xe extends De{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Md=0;const mn=new oe,Vo=new Ie,Zi=new P,an=new Ni,Is=new Ni,ze=new P;class Ue extends bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Md++}),this.uuid=Dn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(eu(t)?ou:ru)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new jt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return mn.makeRotationFromQuaternion(t),this.applyMatrix4(mn),this}rotateX(t){return mn.makeRotationX(t),this.applyMatrix4(mn),this}rotateY(t){return mn.makeRotationY(t),this.applyMatrix4(mn),this}rotateZ(t){return mn.makeRotationZ(t),this.applyMatrix4(mn),this}translate(t,e,i){return mn.makeTranslation(t,e,i),this.applyMatrix4(mn),this}scale(t,e,i){return mn.makeScale(t,e,i),this.applyMatrix4(mn),this}lookAt(t){return Vo.lookAt(t),Vo.updateMatrix(),this.applyMatrix4(Vo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zi).negate(),this.translate(Zi.x,Zi.y,Zi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new xe(i,3))}else{const i=Math.min(t.length,e.count);for(let s=0;s<i;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ni);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];an.setFromBufferAttribute(r),this.morphTargetsRelative?(ze.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(ze),ze.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(ze)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const i=this.boundingSphere.center;if(an.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Is.setFromBufferAttribute(a),this.morphTargetsRelative?(ze.addVectors(an.min,Is.min),an.expandByPoint(ze),ze.addVectors(an.max,Is.max),an.expandByPoint(ze)):(an.expandByPoint(Is.min),an.expandByPoint(Is.max))}an.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)ze.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(ze));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)ze.fromBufferAttribute(a,l),c&&(Zi.fromBufferAttribute(t,l),ze.add(Zi)),s=Math.max(s,i.distanceToSquared(ze))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new De(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let A=0;A<i.count;A++)a[A]=new P,c[A]=new P;const l=new P,h=new P,u=new P,f=new dt,d=new dt,g=new dt,_=new P,m=new P;function p(A,S,M){l.fromBufferAttribute(i,A),h.fromBufferAttribute(i,S),u.fromBufferAttribute(i,M),f.fromBufferAttribute(r,A),d.fromBufferAttribute(r,S),g.fromBufferAttribute(r,M),h.sub(l),u.sub(l),d.sub(f),g.sub(f);const L=1/(d.x*g.y-g.x*d.y);isFinite(L)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(L),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(L),a[A].add(_),a[S].add(_),a[M].add(_),c[A].add(m),c[S].add(m),c[M].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let A=0,S=E.length;A<S;++A){const M=E[A],L=M.start,N=M.count;for(let V=L,Z=L+N;V<Z;V+=3)p(t.getX(V+0),t.getX(V+1),t.getX(V+2))}const y=new P,x=new P,C=new P,T=new P;function b(A){C.fromBufferAttribute(s,A),T.copy(C);const S=a[A];y.copy(S),y.sub(C.multiplyScalar(C.dot(S))).normalize(),x.crossVectors(T,S);const L=x.dot(c[A])<0?-1:1;o.setXYZW(A,y.x,y.y,y.z,L)}for(let A=0,S=E.length;A<S;++A){const M=E[A],L=M.start,N=M.count;for(let V=L,Z=L+N;V<Z;V+=3)b(t.getX(V+0)),b(t.getX(V+1)),b(t.getX(V+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new De(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const s=new P,r=new P,o=new P,a=new P,c=new P,l=new P,h=new P,u=new P;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),a.add(h),c.add(h),l.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)ze.fromBufferAttribute(t,e),ze.normalize(),t.setXYZ(e,ze.x,ze.y,ze.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h);let d=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?d=c[_]*a.data.stride+a.offset:d=c[_]*h;for(let p=0;p<h;p++)f[g++]=l[d++]}return new De(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ue,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,i);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const f=l[h],d=t(f,i);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const d=l[u];h.push(d.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Al=new oe,_i=new Cc,Cr=new Fi,Rl=new P,Pr=new P,Lr=new P,Dr=new P,Wo=new P,Ir=new P,Cl=new P,Ur=new P;class gt extends Ie{constructor(t=new Ue,e=new un){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Ir.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(Wo.fromBufferAttribute(u,t),o?Ir.addScaledVector(Wo,h):Ir.addScaledVector(Wo.sub(e),h))}e.add(Ir)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Cr.copy(i.boundingSphere),Cr.applyMatrix4(r),_i.copy(t.ray).recast(t.near),!(Cr.containsPoint(_i.origin)===!1&&(_i.intersectSphere(Cr,Rl)===null||_i.origin.distanceToSquared(Rl)>(t.far-t.near)**2))&&(Al.copy(r).invert(),_i.copy(t.ray).applyMatrix4(Al),!(i.boundingBox!==null&&_i.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,_i)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],E=Math.max(m.start,d.start),y=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let x=E,C=y;x<C;x+=3){const T=a.getX(x),b=a.getX(x+1),A=a.getX(x+2);s=Nr(this,p,t,i,l,h,u,T,b,A),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const E=a.getX(m),y=a.getX(m+1),x=a.getX(m+2);s=Nr(this,o,t,i,l,h,u,E,y,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],E=Math.max(m.start,d.start),y=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let x=E,C=y;x<C;x+=3){const T=x,b=x+1,A=x+2;s=Nr(this,p,t,i,l,h,u,T,b,A),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const E=m,y=m+1,x=m+2;s=Nr(this,o,t,i,l,h,u,E,y,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function yd(n,t,e,i,s,r,o,a){let c;if(t.side===Qe?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,t.side===ci,a),c===null)return null;Ur.copy(a),Ur.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Ur);return l<e.near||l>e.far?null:{distance:l,point:Ur.clone(),object:n}}function Nr(n,t,e,i,s,r,o,a,c,l){n.getVertexPosition(a,Pr),n.getVertexPosition(c,Lr),n.getVertexPosition(l,Dr);const h=yd(n,t,e,i,Pr,Lr,Dr,Cl);if(h){const u=new P;_n.getBarycoord(Cl,Pr,Lr,Dr,u),s&&(h.uv=_n.getInterpolatedAttribute(s,a,c,l,u,new dt)),r&&(h.uv1=_n.getInterpolatedAttribute(r,a,c,l,u,new dt)),o&&(h.normal=_n.getInterpolatedAttribute(o,a,c,l,u,new P),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new P,materialIndex:0};_n.getNormal(Pr,Lr,Dr,f.normal),h.face=f,h.barycoord=u}return h}class re extends Ue{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let f=0,d=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new xe(l,3)),this.setAttribute("normal",new xe(h,3)),this.setAttribute("uv",new xe(u,2));function g(_,m,p,E,y,x,C,T,b,A,S){const M=x/b,L=C/A,N=x/2,V=C/2,Z=T/2,W=b+1,k=A+1;let q=0,G=0;const ot=new P;for(let mt=0;mt<k;mt++){const ct=mt*L-V;for(let Tt=0;Tt<W;Tt++){const kt=Tt*M-N;ot[_]=kt*E,ot[m]=ct*y,ot[p]=Z,l.push(ot.x,ot.y,ot.z),ot[_]=0,ot[m]=0,ot[p]=T>0?1:-1,h.push(ot.x,ot.y,ot.z),u.push(Tt/b),u.push(1-mt/A),q+=1}}for(let mt=0;mt<A;mt++)for(let ct=0;ct<b;ct++){const Tt=f+ct+W*mt,kt=f+ct+W*(mt+1),ee=f+(ct+1)+W*(mt+1),Yt=f+(ct+1)+W*mt;c.push(Tt,kt,Yt),c.push(kt,ee,Yt),G+=6}a.addGroup(d,G,S),d+=G,f+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new re(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function vs(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Je(n){const t={};for(let e=0;e<n.length;e++){const i=vs(n[e]);for(const s in i)t[s]=i[s]}return t}function Sd(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function au(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:he.workingColorSpace}const wd={clone:vs,merge:Je};var Ed=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class En extends ui{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ed,this.fragmentShader=bd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=vs(t.uniforms),this.uniformsGroups=Sd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class cu extends Ie{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=Pn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Qn=new P,Pl=new dt,Ll=new dt;class nn extends cu{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=xs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Zs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return xs*2*Math.atan(Math.tan(Zs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Qn.x,Qn.y).multiplyScalar(-t/Qn.z),Qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Qn.x,Qn.y).multiplyScalar(-t/Qn.z)}getViewSize(t,e){return this.getViewBounds(t,Pl,Ll),e.subVectors(Ll,Pl)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Zs*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ki=-90,Ji=1;class Td extends Ie{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new nn(Ki,Ji,t,e);s.layers=this.layers,this.add(s);const r=new nn(Ki,Ji,t,e);r.layers=this.layers,this.add(r);const o=new nn(Ki,Ji,t,e);o.layers=this.layers,this.add(o);const a=new nn(Ki,Ji,t,e);a.layers=this.layers,this.add(a);const c=new nn(Ki,Ji,t,e);c.layers=this.layers,this.add(c);const l=new nn(Ki,Ji,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===Pn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===lo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,c),t.setRenderTarget(i,4,s),t.render(e,l),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class lu extends $e{constructor(t=[],e=ms,i,s,r,o,a,c,l,h){super(t,e,i,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ad extends Di{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new lu(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new re(5,5,5),r=new En({name:"CubemapFromEquirect",uniforms:vs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Qe,blending:ri});r.uniforms.tEquirect.value=e;const o=new gt(s,r),a=e.minFilter;return e.minFilter===Ri&&(e.minFilter=Rn),new Td(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}class Te extends Ie{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Rd={type:"move"};class Xo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Te,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Te,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Te,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,i),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Rd)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Te;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class Pc{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new zt(t),this.density=e}clone(){return new Pc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class hu extends Ie{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new tn,this.environmentIntensity=1,this.environmentRotation=new tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Cd{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ja,this.updateRanges=[],this.version=0,this.uuid=Dn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Dn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Dn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ke=new P;class uo{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Ke.fromBufferAttribute(this,e),Ke.applyMatrix4(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ke.fromBufferAttribute(this,e),Ke.applyNormalMatrix(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ke.fromBufferAttribute(this,e),Ke.transformDirection(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=yn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=de(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=yn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=yn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=yn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=yn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=de(e,this.array),i=de(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=de(e,this.array),i=de(i,this.array),s=de(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=de(e,this.array),i=de(i,this.array),s=de(s,this.array),r=de(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new De(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new uo(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Qa extends ui{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ji;const Us=new P,Qi=new P,ts=new P,es=new dt,Ns=new dt,uu=new oe,Fr=new P,Fs=new P,Or=new P,Dl=new dt,qo=new dt,Il=new dt;class Ul extends Ie{constructor(t=new Qa){if(super(),this.isSprite=!0,this.type="Sprite",ji===void 0){ji=new Ue;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Cd(e,5);ji.setIndex([0,1,2,0,2,3]),ji.setAttribute("position",new uo(i,3,0,!1)),ji.setAttribute("uv",new uo(i,2,3,!1))}this.geometry=ji,this.material=t,this.center=new dt(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Qi.setFromMatrixScale(this.matrixWorld),uu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ts.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Qi.multiplyScalar(-ts.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const o=this.center;Br(Fr.set(-.5,-.5,0),ts,o,Qi,s,r),Br(Fs.set(.5,-.5,0),ts,o,Qi,s,r),Br(Or.set(.5,.5,0),ts,o,Qi,s,r),Dl.set(0,0),qo.set(1,0),Il.set(1,1);let a=t.ray.intersectTriangle(Fr,Fs,Or,!1,Us);if(a===null&&(Br(Fs.set(-.5,.5,0),ts,o,Qi,s,r),qo.set(0,1),a=t.ray.intersectTriangle(Fr,Or,Fs,!1,Us),a===null))return;const c=t.ray.origin.distanceTo(Us);c<t.near||c>t.far||e.push({distance:c,point:Us.clone(),uv:_n.getInterpolation(Us,Fr,Fs,Or,Dl,qo,Il,new dt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Br(n,t,e,i,s,r){es.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Ns.x=r*es.x-s*es.y,Ns.y=s*es.x+r*es.y):Ns.copy(es),n.copy(t),n.x+=Ns.x,n.y+=Ns.y,n.applyMatrix4(uu)}class Pd extends $e{constructor(t=null,e=1,i=1,s,r,o,a,c,l=hn,h=hn,u,f){super(null,o,a,c,l,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Nl extends De{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ns=new oe,Fl=new oe,zr=[],Ol=new Ni,Ld=new oe,Os=new gt,Bs=new Fi;class Ms extends gt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Nl(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Ld)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ni),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,ns),Ol.copy(t.boundingBox).applyMatrix4(ns),this.boundingBox.union(Ol)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Fi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,ns),Bs.copy(t.boundingSphere).applyMatrix4(ns),this.boundingSphere.union(Bs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){const i=this.matrixWorld,s=this.count;if(Os.geometry=this.geometry,Os.material=this.material,Os.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Bs.copy(this.boundingSphere),Bs.applyMatrix4(i),t.ray.intersectsSphere(Bs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ns),Fl.multiplyMatrices(i,ns),Os.matrixWorld=Fl,Os.raycast(t,zr);for(let o=0,a=zr.length;o<a;o++){const c=zr[o];c.instanceId=r,c.object=this,e.push(c)}zr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Nl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Pd(new Float32Array(s*this.count),s,this.count,wc,Cn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<i.length;l++)o+=i[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(i,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Yo=new P,Dd=new P,Id=new jt;class wi{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Yo.subVectors(i,e).cross(Dd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Yo),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Id.getNormalMatrix(t),s=this.coplanarPoint(Yo).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xi=new Fi,Ud=new dt(.5,.5),kr=new P;class Lc{constructor(t=new wi,e=new wi,i=new wi,s=new wi,r=new wi,o=new wi){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Pn,i=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],u=r[5],f=r[6],d=r[7],g=r[8],_=r[9],m=r[10],p=r[11],E=r[12],y=r[13],x=r[14],C=r[15];if(s[0].setComponents(l-o,d-h,p-g,C-E).normalize(),s[1].setComponents(l+o,d+h,p+g,C+E).normalize(),s[2].setComponents(l+a,d+u,p+_,C+y).normalize(),s[3].setComponents(l-a,d-u,p-_,C-y).normalize(),i)s[4].setComponents(c,f,m,x).normalize(),s[5].setComponents(l-c,d-f,p-m,C-x).normalize();else if(s[4].setComponents(l-c,d-f,p-m,C-x).normalize(),e===Pn)s[5].setComponents(l+c,d+f,p+m,C+x).normalize();else if(e===lo)s[5].setComponents(c,f,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),xi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),xi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(xi)}intersectsSprite(t){xi.center.set(0,0,0);const e=Ud.distanceTo(t.center);return xi.radius=.7071067811865476+e,xi.applyMatrix4(t.matrixWorld),this.intersectsSphere(xi)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(kr.x=s.normal.x>0?t.max.x:t.min.x,kr.y=s.normal.y>0?t.max.y:t.min.y,kr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(kr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class fu extends ui{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new zt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const fo=new P,po=new P,Bl=new oe,zs=new Cc,Hr=new Fi,$o=new P,zl=new P;class Nd extends Ie{constructor(t=new Ue,e=new fu){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)fo.fromBufferAttribute(e,s-1),po.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=fo.distanceTo(po);t.setAttribute("lineDistance",new xe(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Hr.copy(i.boundingSphere),Hr.applyMatrix4(s),Hr.radius+=r,t.ray.intersectsSphere(Hr)===!1)return;Bl.copy(s).invert(),zs.copy(t.ray).applyMatrix4(Bl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){const d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=l){const p=h.getX(_),E=h.getX(_+1),y=Gr(this,t,zs,c,p,E,_);y&&e.push(y)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(d),p=Gr(this,t,zs,c,_,m,g-1);p&&e.push(p)}}else{const d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=l){const p=Gr(this,t,zs,c,_,_+1,_);p&&e.push(p)}if(this.isLineLoop){const _=Gr(this,t,zs,c,g-1,d,g-1);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Gr(n,t,e,i,s,r,o){const a=n.geometry.attributes.position;if(fo.fromBufferAttribute(a,s),po.fromBufferAttribute(a,r),e.distanceSqToSegment(fo,po,$o,zl)>i)return;$o.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo($o);if(!(l<t.near||l>t.far))return{distance:l,point:zl.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const kl=new P,Hl=new P;class Fd extends Nd{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)kl.fromBufferAttribute(e,s),Hl.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+kl.distanceTo(Hl);t.setAttribute("lineDistance",new xe(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class du extends ui{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Gl=new oe,tc=new Cc,Vr=new Fi,Wr=new P;class pu extends Ie{constructor(t=new Ue,e=new du){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Vr.copy(i.boundingSphere),Vr.applyMatrix4(s),Vr.radius+=r,t.ray.intersectsSphere(Vr)===!1)return;Gl.copy(s).invert(),tc.copy(t.ray).applyMatrix4(Gl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,u=i.attributes.position;if(l!==null){const f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let g=f,_=d;g<_;g++){const m=l.getX(g);Wr.fromBufferAttribute(u,m),Vl(Wr,m,c,s,t,e,this)}}else{const f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=f,_=d;g<_;g++)Wr.fromBufferAttribute(u,g),Vl(Wr,g,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Vl(n,t,e,i,s,r,o){const a=tc.distanceSqToPoint(n);if(a<e){const c=new P;tc.closestPointToPoint(n,c),c.applyMatrix4(i);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Dc extends $e{constructor(t,e,i,s,r,o,a,c,l){super(t,e,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class mu extends $e{constructor(t,e,i=Li,s,r,o,a=hn,c=hn,l,h=ir,u=1){if(h!==ir&&h!==sr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:u};super(f,s,r,o,a,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Rc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class gu extends $e{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class _o extends Ue{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new P,h=new dt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const d=i+u/e*s;l.x=t*Math.cos(d),l.y=t*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new xe(o,3)),this.setAttribute("normal",new xe(a,3)),this.setAttribute("uv",new xe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _o(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Me extends Ue{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],d=[];let g=0;const _=[],m=i/2;let p=0;E(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new xe(u,3)),this.setAttribute("normal",new xe(f,3)),this.setAttribute("uv",new xe(d,2));function E(){const x=new P,C=new P;let T=0;const b=(e-t)/i;for(let A=0;A<=r;A++){const S=[],M=A/r,L=M*(e-t)+t;for(let N=0;N<=s;N++){const V=N/s,Z=V*c+a,W=Math.sin(Z),k=Math.cos(Z);C.x=L*W,C.y=-M*i+m,C.z=L*k,u.push(C.x,C.y,C.z),x.set(W,b,k).normalize(),f.push(x.x,x.y,x.z),d.push(V,1-M),S.push(g++)}_.push(S)}for(let A=0;A<s;A++)for(let S=0;S<r;S++){const M=_[S][A],L=_[S+1][A],N=_[S+1][A+1],V=_[S][A+1];(t>0||S!==0)&&(h.push(M,L,V),T+=3),(e>0||S!==r-1)&&(h.push(L,N,V),T+=3)}l.addGroup(p,T,0),p+=T}function y(x){const C=g,T=new dt,b=new P;let A=0;const S=x===!0?t:e,M=x===!0?1:-1;for(let N=1;N<=s;N++)u.push(0,m*M,0),f.push(0,M,0),d.push(.5,.5),g++;const L=g;for(let N=0;N<=s;N++){const Z=N/s*c+a,W=Math.cos(Z),k=Math.sin(Z);b.x=S*k,b.y=m*M,b.z=S*W,u.push(b.x,b.y,b.z),f.push(0,M,0),T.x=W*.5+.5,T.y=k*.5*M+.5,d.push(T.x,T.y),g++}for(let N=0;N<s;N++){const V=C+N,Z=L+N;x===!0?h.push(Z,Z+1,V):h.push(Z+1,Z,V),A+=3}l.addGroup(p,A,x===!0?1:2),p+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Me(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class bn extends Me{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new bn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class pr extends Ue{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const r=[],o=[];a(s),l(i),h(),this.setAttribute("position",new xe(r,3)),this.setAttribute("normal",new xe(r.slice(),3)),this.setAttribute("uv",new xe(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(E){const y=new P,x=new P,C=new P;for(let T=0;T<e.length;T+=3)d(e[T+0],y),d(e[T+1],x),d(e[T+2],C),c(y,x,C,E)}function c(E,y,x,C){const T=C+1,b=[];for(let A=0;A<=T;A++){b[A]=[];const S=E.clone().lerp(x,A/T),M=y.clone().lerp(x,A/T),L=T-A;for(let N=0;N<=L;N++)N===0&&A===T?b[A][N]=S:b[A][N]=S.clone().lerp(M,N/L)}for(let A=0;A<T;A++)for(let S=0;S<2*(T-A)-1;S++){const M=Math.floor(S/2);S%2===0?(f(b[A][M+1]),f(b[A+1][M]),f(b[A][M])):(f(b[A][M+1]),f(b[A+1][M+1]),f(b[A+1][M]))}}function l(E){const y=new P;for(let x=0;x<r.length;x+=3)y.x=r[x+0],y.y=r[x+1],y.z=r[x+2],y.normalize().multiplyScalar(E),r[x+0]=y.x,r[x+1]=y.y,r[x+2]=y.z}function h(){const E=new P;for(let y=0;y<r.length;y+=3){E.x=r[y+0],E.y=r[y+1],E.z=r[y+2];const x=m(E)/2/Math.PI+.5,C=p(E)/Math.PI+.5;o.push(x,1-C)}g(),u()}function u(){for(let E=0;E<o.length;E+=6){const y=o[E+0],x=o[E+2],C=o[E+4],T=Math.max(y,x,C),b=Math.min(y,x,C);T>.9&&b<.1&&(y<.2&&(o[E+0]+=1),x<.2&&(o[E+2]+=1),C<.2&&(o[E+4]+=1))}}function f(E){r.push(E.x,E.y,E.z)}function d(E,y){const x=E*3;y.x=t[x+0],y.y=t[x+1],y.z=t[x+2]}function g(){const E=new P,y=new P,x=new P,C=new P,T=new dt,b=new dt,A=new dt;for(let S=0,M=0;S<r.length;S+=9,M+=6){E.set(r[S+0],r[S+1],r[S+2]),y.set(r[S+3],r[S+4],r[S+5]),x.set(r[S+6],r[S+7],r[S+8]),T.set(o[M+0],o[M+1]),b.set(o[M+2],o[M+3]),A.set(o[M+4],o[M+5]),C.copy(E).add(y).add(x).divideScalar(3);const L=m(C);_(T,M+0,E,L),_(b,M+2,y,L),_(A,M+4,x,L)}}function _(E,y,x,C){C<0&&E.x===1&&(o[y]=E.x-1),x.x===0&&x.z===0&&(o[y]=C/2/Math.PI+.5)}function m(E){return Math.atan2(E.z,-E.x)}function p(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pr(t.vertices,t.indices,t.radius,t.details)}}class xo extends pr{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new xo(t.radius,t.detail)}}class On{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const i=this.getLengths();let s=0;const r=i.length;let o;e?o=e:o=t*i[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===o)return s/(r-1);const h=i[s],f=i[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new dt:new P);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){const i=new P,s=[],r=[],o=[],a=new P,c=new oe;for(let d=0;d<=t;d++){const g=d/t;s[d]=this.getTangentAt(g,new P)}r[0]=new P,o[0]=new P;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,i.set(1,0,0)),u<=l&&(l=u,i.set(0,1,0)),f<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(ie(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(ie(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ic extends On{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new dt){const i=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return i.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Od extends Ic{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Uc(){let n=0,t=0,e=0,i=0;function s(r,o,a,c){n=r,t=a,e=-3*r+3*o-2*a-c,i=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return n+t*r+e*o+i*a}}}const Xr=new P,Zo=new Uc,Ko=new Uc,Jo=new Uc;class _u extends On{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new P){const i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(Xr.subVectors(s[0],s[1]).add(s[0]),l=Xr);const u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Xr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Xr),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Zo.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,g,_,m),Ko.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,g,_,m),Jo.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Zo.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),Ko.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),Jo.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return i.set(Zo.calc(c),Ko.calc(c),Jo.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Wl(n,t,e,i,s){const r=(i-t)*.5,o=(s-e)*.5,a=n*n,c=n*a;return(2*e-2*i+r+o)*c+(-3*e+3*i-2*r-o)*a+r*n+e}function Bd(n,t){const e=1-n;return e*e*t}function zd(n,t){return 2*(1-n)*n*t}function kd(n,t){return n*n*t}function Js(n,t,e,i){return Bd(n,t)+zd(n,e)+kd(n,i)}function Hd(n,t){const e=1-n;return e*e*e*t}function Gd(n,t){const e=1-n;return 3*e*e*n*t}function Vd(n,t){return 3*(1-n)*n*n*t}function Wd(n,t){return n*n*n*t}function js(n,t,e,i,s){return Hd(n,t)+Gd(n,e)+Vd(n,i)+Wd(n,s)}class xu extends On{constructor(t=new dt,e=new dt,i=new dt,s=new dt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new dt){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(js(t,s.x,r.x,o.x,a.x),js(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Xd extends On{constructor(t=new P,e=new P,i=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new P){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(js(t,s.x,r.x,o.x,a.x),js(t,s.y,r.y,o.y,a.y),js(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class vu extends On{constructor(t=new dt,e=new dt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new dt){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new dt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class qd extends On{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Mu extends On{constructor(t=new dt,e=new dt,i=new dt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new dt){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Js(t,s.x,r.x,o.x),Js(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Yd extends On{constructor(t=new P,e=new P,i=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new P){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Js(t,s.x,r.x,o.x),Js(t,s.y,r.y,o.y),Js(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class yu extends On{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new dt){const i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(Wl(a,c.x,l.x,h.x,u.x),Wl(a,c.y,l.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new dt().fromArray(s))}return this}}var ec=Object.freeze({__proto__:null,ArcCurve:Od,CatmullRomCurve3:_u,CubicBezierCurve:xu,CubicBezierCurve3:Xd,EllipseCurve:Ic,LineCurve:vu,LineCurve3:qd,QuadraticBezierCurve:Mu,QuadraticBezierCurve3:Yd,SplineCurve:yu});class $d extends On{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ec[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new ec[s.type]().fromJSON(s))}return this}}class Xl extends $d{constructor(t){super(),this.type="Path",this.currentPoint=new dt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new vu(this.currentPoint.clone(),new dt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const r=new Mu(this.currentPoint.clone(),new dt(t,e),new dt(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){const a=new xu(this.currentPoint.clone(),new dt(t,e),new dt(i,s),new dt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new yu(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,i,s,r,o,a,c),this}absellipse(t,e,i,s,r,o,a,c){const l=new Ic(t,e,i,s,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Su extends Xl{constructor(t){super(t),this.uuid=Dn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new Xl().fromJSON(s))}return this}}function Zd(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let r=wu(n,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(i&&(r=tp(n,t,r,e)),n.length>80*e){a=1/0,c=1/0;let h=-1/0,u=-1/0;for(let f=e;f<s;f+=e){const d=n[f],g=n[f+1];d<a&&(a=d),g<c&&(c=g),d>h&&(h=d),g>u&&(u=g)}l=Math.max(h-a,u-c),l=l!==0?32767/l:0}return or(r,o,e,a,c,l,0),o}function wu(n,t,e,i,s){let r;if(s===up(n,t,e,i)>0)for(let o=t;o<e;o+=i)r=ql(o/i|0,n[o],n[o+1],r);else for(let o=e-i;o>=t;o-=i)r=ql(o/i|0,n[o],n[o+1],r);return r&&ys(r,r.next)&&(cr(r),r=r.next),r}function Ii(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(ys(e,e.next)||Pe(e.prev,e,e.next)===0)){if(cr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function or(n,t,e,i,s,r,o){if(!n)return;!o&&r&&rp(n,i,s,r);let a=n;for(;n.prev!==n.next;){const c=n.prev,l=n.next;if(r?Jd(n,i,s,r):Kd(n)){t.push(c.i,n.i,l.i),cr(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=jd(Ii(n),t),or(n,t,e,i,s,r,2)):o===2&&Qd(n,t,e,i,s,r):or(Ii(n),t,e,i,s,r,1);break}}}function Kd(n){const t=n.prev,e=n,i=n.next;if(Pe(t,e,i)>=0)return!1;const s=t.x,r=e.x,o=i.x,a=t.y,c=e.y,l=i.y,h=Math.min(s,r,o),u=Math.min(a,c,l),f=Math.max(s,r,o),d=Math.max(a,c,l);let g=i.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&qs(s,a,r,c,o,l,g.x,g.y)&&Pe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Jd(n,t,e,i){const s=n.prev,r=n,o=n.next;if(Pe(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,f=o.y,d=Math.min(a,c,l),g=Math.min(h,u,f),_=Math.max(a,c,l),m=Math.max(h,u,f),p=nc(d,g,t,e,i),E=nc(_,m,t,e,i);let y=n.prevZ,x=n.nextZ;for(;y&&y.z>=p&&x&&x.z<=E;){if(y.x>=d&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&qs(a,h,c,u,l,f,y.x,y.y)&&Pe(y.prev,y,y.next)>=0||(y=y.prevZ,x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&qs(a,h,c,u,l,f,x.x,x.y)&&Pe(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;y&&y.z>=p;){if(y.x>=d&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&qs(a,h,c,u,l,f,y.x,y.y)&&Pe(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;x&&x.z<=E;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&qs(a,h,c,u,l,f,x.x,x.y)&&Pe(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function jd(n,t){let e=n;do{const i=e.prev,s=e.next.next;!ys(i,s)&&bu(i,e,e.next,s)&&ar(i,s)&&ar(s,i)&&(t.push(i.i,e.i,s.i),cr(e),cr(e.next),e=n=s),e=e.next}while(e!==n);return Ii(e)}function Qd(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&cp(o,a)){let c=Tu(o,a);o=Ii(o,o.next),c=Ii(c,c.next),or(o,t,e,i,s,r,0),or(c,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function tp(n,t,e,i){const s=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*i,c=r<o-1?t[r+1]*i:n.length,l=wu(n,a,c,i,!1);l===l.next&&(l.steiner=!0),s.push(ap(l))}s.sort(ep);for(let r=0;r<s.length;r++)e=np(s[r],e);return e}function ep(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function np(n,t){const e=ip(n,t);if(!e)return t;const i=Tu(e,n);return Ii(i,i.next),Ii(e,e.next)}function ip(n,t){let e=t;const i=n.x,s=n.y;let r=-1/0,o;if(ys(n,e))return e;do{if(ys(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=i&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===i))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,c=o.x,l=o.y;let h=1/0;e=o;do{if(i>=e.x&&e.x>=c&&i!==e.x&&Eu(s<l?i:r,s,c,l,s<l?r:i,s,e.x,e.y)){const u=Math.abs(s-e.y)/(i-e.x);ar(e,n)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&sp(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function sp(n,t){return Pe(n.prev,n,t.prev)<0&&Pe(t.next,n,n.next)<0}function rp(n,t,e,i){let s=n;do s.z===0&&(s.z=nc(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,op(s)}function op(n){let t,e=1;do{let i=n,s;n=null;let r=null;for(t=0;i;){t++;let o=i,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,e*=2}while(t>1);return n}function nc(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function ap(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Eu(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function qs(n,t,e,i,s,r,o,a){return!(n===o&&t===a)&&Eu(n,t,e,i,s,r,o,a)}function cp(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!lp(n,t)&&(ar(n,t)&&ar(t,n)&&hp(n,t)&&(Pe(n.prev,n,t.prev)||Pe(n,t.prev,t))||ys(n,t)&&Pe(n.prev,n,n.next)>0&&Pe(t.prev,t,t.next)>0)}function Pe(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function ys(n,t){return n.x===t.x&&n.y===t.y}function bu(n,t,e,i){const s=Yr(Pe(n,t,e)),r=Yr(Pe(n,t,i)),o=Yr(Pe(e,i,n)),a=Yr(Pe(e,i,t));return!!(s!==r&&o!==a||s===0&&qr(n,e,t)||r===0&&qr(n,i,t)||o===0&&qr(e,n,i)||a===0&&qr(e,t,i))}function qr(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Yr(n){return n>0?1:n<0?-1:0}function lp(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&bu(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function ar(n,t){return Pe(n.prev,n,n.next)<0?Pe(n,t,n.next)>=0&&Pe(n,n.prev,t)>=0:Pe(n,t,n.prev)<0||Pe(n,n.next,t)<0}function hp(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Tu(n,t){const e=ic(n.i,n.x,n.y),i=ic(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function ql(n,t,e,i){const s=ic(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function cr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function ic(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function up(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class fp{static triangulate(t,e,i=2){return Zd(t,e,i)}}class cs{static area(t){const e=t.length;let i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return cs.area(t)<0}static triangulateShape(t,e){const i=[],s=[],r=[];Yl(t),$l(i,t);let o=t.length;e.forEach(Yl);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,$l(i,e[c]);const a=fp.triangulate(i,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Yl(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function $l(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class Nc extends Ue{constructor(t=new Su([new dt(.5,.5),new dt(-.5,.5),new dt(-.5,-.5),new dt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new xe(s,3)),this.setAttribute("uv",new xe(r,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,E=e.UVGenerator!==void 0?e.UVGenerator:dp;let y,x=!1,C,T,b,A;p&&(y=p.getSpacedPoints(h),x=!0,f=!1,C=p.computeFrenetFrames(h,!1),T=new P,b=new P,A=new P),f||(m=0,d=0,g=0,_=0);const S=a.extractPoints(l);let M=S.shape;const L=S.holes;if(!cs.isClockWise(M)){M=M.reverse();for(let st=0,et=L.length;st<et;st++){const tt=L[st];cs.isClockWise(tt)&&(L[st]=tt.reverse())}}function V(st){const tt=10000000000000001e-36;let Q=st[0];for(let xt=1;xt<=st.length;xt++){const lt=xt%st.length,vt=st[lt],$t=vt.x-Q.x,qt=vt.y-Q.y,R=$t*$t+qt*qt,v=Math.max(Math.abs(vt.x),Math.abs(vt.y),Math.abs(Q.x),Math.abs(Q.y)),z=tt*v*v;if(R<=z){st.splice(lt,1),xt--;continue}Q=vt}}V(M),L.forEach(V);const Z=L.length,W=M;for(let st=0;st<Z;st++){const et=L[st];M=M.concat(et)}function k(st,et,tt){return et||console.error("THREE.ExtrudeGeometry: vec does not exist"),st.clone().addScaledVector(et,tt)}const q=M.length;function G(st,et,tt){let Q,xt,lt;const vt=st.x-et.x,$t=st.y-et.y,qt=tt.x-st.x,R=tt.y-st.y,v=vt*vt+$t*$t,z=vt*R-$t*qt;if(Math.abs(z)>Number.EPSILON){const $=Math.sqrt(v),rt=Math.sqrt(qt*qt+R*R),K=et.x-$t/$,It=et.y+vt/$,_t=tt.x-R/rt,Pt=tt.y+qt/rt,Lt=((_t-K)*R-(Pt-It)*qt)/(vt*R-$t*qt);Q=K+vt*Lt-st.x,xt=It+$t*Lt-st.y;const ht=Q*Q+xt*xt;if(ht<=2)return new dt(Q,xt);lt=Math.sqrt(ht/2)}else{let $=!1;vt>Number.EPSILON?qt>Number.EPSILON&&($=!0):vt<-Number.EPSILON?qt<-Number.EPSILON&&($=!0):Math.sign($t)===Math.sign(R)&&($=!0),$?(Q=-$t,xt=vt,lt=Math.sqrt(v)):(Q=vt,xt=$t,lt=Math.sqrt(v/2))}return new dt(Q/lt,xt/lt)}const ot=[];for(let st=0,et=W.length,tt=et-1,Q=st+1;st<et;st++,tt++,Q++)tt===et&&(tt=0),Q===et&&(Q=0),ot[st]=G(W[st],W[tt],W[Q]);const mt=[];let ct,Tt=ot.concat();for(let st=0,et=Z;st<et;st++){const tt=L[st];ct=[];for(let Q=0,xt=tt.length,lt=xt-1,vt=Q+1;Q<xt;Q++,lt++,vt++)lt===xt&&(lt=0),vt===xt&&(vt=0),ct[Q]=G(tt[Q],tt[lt],tt[vt]);mt.push(ct),Tt=Tt.concat(ct)}let kt;if(m===0)kt=cs.triangulateShape(W,L);else{const st=[],et=[];for(let tt=0;tt<m;tt++){const Q=tt/m,xt=d*Math.cos(Q*Math.PI/2),lt=g*Math.sin(Q*Math.PI/2)+_;for(let vt=0,$t=W.length;vt<$t;vt++){const qt=k(W[vt],ot[vt],lt);at(qt.x,qt.y,-xt),Q===0&&st.push(qt)}for(let vt=0,$t=Z;vt<$t;vt++){const qt=L[vt];ct=mt[vt];const R=[];for(let v=0,z=qt.length;v<z;v++){const $=k(qt[v],ct[v],lt);at($.x,$.y,-xt),Q===0&&R.push($)}Q===0&&et.push(R)}}kt=cs.triangulateShape(st,et)}const ee=kt.length,Yt=g+_;for(let st=0;st<q;st++){const et=f?k(M[st],Tt[st],Yt):M[st];x?(b.copy(C.normals[0]).multiplyScalar(et.x),T.copy(C.binormals[0]).multiplyScalar(et.y),A.copy(y[0]).add(b).add(T),at(A.x,A.y,A.z)):at(et.x,et.y,0)}for(let st=1;st<=h;st++)for(let et=0;et<q;et++){const tt=f?k(M[et],Tt[et],Yt):M[et];x?(b.copy(C.normals[st]).multiplyScalar(tt.x),T.copy(C.binormals[st]).multiplyScalar(tt.y),A.copy(y[st]).add(b).add(T),at(A.x,A.y,A.z)):at(tt.x,tt.y,u/h*st)}for(let st=m-1;st>=0;st--){const et=st/m,tt=d*Math.cos(et*Math.PI/2),Q=g*Math.sin(et*Math.PI/2)+_;for(let xt=0,lt=W.length;xt<lt;xt++){const vt=k(W[xt],ot[xt],Q);at(vt.x,vt.y,u+tt)}for(let xt=0,lt=L.length;xt<lt;xt++){const vt=L[xt];ct=mt[xt];for(let $t=0,qt=vt.length;$t<qt;$t++){const R=k(vt[$t],ct[$t],Q);x?at(R.x,R.y+y[h-1].y,y[h-1].x+tt):at(R.x,R.y,u+tt)}}}j(),H();function j(){const st=s.length/3;if(f){let et=0,tt=q*et;for(let Q=0;Q<ee;Q++){const xt=kt[Q];yt(xt[2]+tt,xt[1]+tt,xt[0]+tt)}et=h+m*2,tt=q*et;for(let Q=0;Q<ee;Q++){const xt=kt[Q];yt(xt[0]+tt,xt[1]+tt,xt[2]+tt)}}else{for(let et=0;et<ee;et++){const tt=kt[et];yt(tt[2],tt[1],tt[0])}for(let et=0;et<ee;et++){const tt=kt[et];yt(tt[0]+q*h,tt[1]+q*h,tt[2]+q*h)}}i.addGroup(st,s.length/3-st,0)}function H(){const st=s.length/3;let et=0;it(W,et),et+=W.length;for(let tt=0,Q=L.length;tt<Q;tt++){const xt=L[tt];it(xt,et),et+=xt.length}i.addGroup(st,s.length/3-st,1)}function it(st,et){let tt=st.length;for(;--tt>=0;){const Q=tt;let xt=tt-1;xt<0&&(xt=st.length-1);for(let lt=0,vt=h+m*2;lt<vt;lt++){const $t=q*lt,qt=q*(lt+1),R=et+Q+$t,v=et+xt+$t,z=et+xt+qt,$=et+Q+qt;Ft(R,v,z,$)}}}function at(st,et,tt){c.push(st),c.push(et),c.push(tt)}function yt(st,et,tt){ce(st),ce(et),ce(tt);const Q=s.length/3,xt=E.generateTopUV(i,s,Q-3,Q-2,Q-1);D(xt[0]),D(xt[1]),D(xt[2])}function Ft(st,et,tt,Q){ce(st),ce(et),ce(Q),ce(et),ce(tt),ce(Q);const xt=s.length/3,lt=E.generateSideWallUV(i,s,xt-6,xt-3,xt-2,xt-1);D(lt[0]),D(lt[1]),D(lt[3]),D(lt[1]),D(lt[2]),D(lt[3])}function ce(st){s.push(c[st*3+0]),s.push(c[st*3+1]),s.push(c[st*3+2])}function D(st){r.push(st.x),r.push(st.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return pp(e,i,t)}static fromJSON(t,e){const i=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];i.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new ec[s.type]().fromJSON(s)),new Nc(i,t.options)}}const dp={generateTopUV:function(n,t,e,i,s){const r=t[e*3],o=t[e*3+1],a=t[i*3],c=t[i*3+1],l=t[s*3],h=t[s*3+1];return[new dt(r,o),new dt(a,c),new dt(l,h)]},generateSideWallUV:function(n,t,e,i,s,r){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[i*3],h=t[i*3+1],u=t[i*3+2],f=t[s*3],d=t[s*3+1],g=t[s*3+2],_=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new dt(o,1-c),new dt(l,1-u),new dt(f,1-g),new dt(_,1-p)]:[new dt(a,1-c),new dt(h,1-u),new dt(d,1-g),new dt(m,1-p)]}};function pp(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Fc extends pr{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Fc(t.radius,t.detail)}}class Oc extends pr{constructor(t=1,e=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Oc(t.radius,t.detail)}}class wn extends Ue{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),c=Math.floor(s),l=a+1,h=c+1,u=t/a,f=e/c,d=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const E=p*f-o;for(let y=0;y<l;y++){const x=y*u-r;g.push(x,-E,0),_.push(0,0,1),m.push(y/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let E=0;E<a;E++){const y=E+l*p,x=E+l*(p+1),C=E+1+l*(p+1),T=E+1+l*p;d.push(y,x,T),d.push(x,C,T)}this.setIndex(d),this.setAttribute("position",new xe(g,3)),this.setAttribute("normal",new xe(_,3)),this.setAttribute("uv",new xe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wn(t.width,t.height,t.widthSegments,t.heightSegments)}}class Un extends Ue{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new P,f=new P,d=[],g=[],_=[],m=[];for(let p=0;p<=i;p++){const E=[],y=p/i;let x=0;p===0&&o===0?x=.5/e:p===i&&c===Math.PI&&(x=-.5/e);for(let C=0;C<=e;C++){const T=C/e;u.x=-t*Math.cos(s+T*r)*Math.sin(o+y*a),u.y=t*Math.cos(o+y*a),u.z=t*Math.sin(s+T*r)*Math.sin(o+y*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(T+x,1-y),E.push(l++)}h.push(E)}for(let p=0;p<i;p++)for(let E=0;E<e;E++){const y=h[p][E+1],x=h[p][E],C=h[p+1][E],T=h[p+1][E+1];(p!==0||o>0)&&d.push(y,x,T),(p!==i-1||c<Math.PI)&&d.push(x,C,T)}this.setIndex(d),this.setAttribute("position",new xe(g,3)),this.setAttribute("normal",new xe(_,3)),this.setAttribute("uv",new xe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Un(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ai extends Ue{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const o=[],a=[],c=[],l=[],h=new P,u=new P,f=new P;for(let d=0;d<=i;d++)for(let g=0;g<=s;g++){const _=g/s*r,m=d/i*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(g/s),l.push(d/i)}for(let d=1;d<=i;d++)for(let g=1;g<=s;g++){const _=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,E=(s+1)*d+g;o.push(_,m,E),o.push(m,p,E)}this.setIndex(o),this.setAttribute("position",new xe(a,3)),this.setAttribute("normal",new xe(c,3)),this.setAttribute("uv",new xe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ai(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Xt extends ui{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qh,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class mp extends ui{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Lf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class gp extends ui{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class mr extends Ie{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new zt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class _p extends mr{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.groundColor=new zt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const jo=new oe,Zl=new P,Kl=new P;class Bc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new dt(512,512),this.mapType=In,this.map=null,this.mapPass=null,this.matrix=new oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Lc,this._frameExtents=new dt(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Zl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Zl),Kl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Kl),e.updateMatrixWorld(),jo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jo,e.coordinateSystem,e.reversedDepth),e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(jo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class xp extends Bc{constructor(){super(new nn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,i=xs*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(i!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=i,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Au extends mr{constructor(t,e,i=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new xp}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Jl=new oe,ks=new P,Qo=new P;class vp extends Bc{constructor(){super(new nn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new dt(4,2),this._viewportCount=6,this._viewports=[new ge(2,1,1,1),new ge(0,1,1,1),new ge(3,1,1,1),new ge(1,1,1,1),new ge(3,0,1,1),new ge(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),ks.setFromMatrixPosition(t.matrixWorld),i.position.copy(ks),Qo.copy(i.position),Qo.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Qo),i.updateMatrixWorld(),s.makeTranslation(-ks.x,-ks.y,-ks.z),Jl.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jl,i.coordinateSystem,i.reversedDepth)}}class Ru extends mr{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new vp}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Cu extends cu{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Mp extends Bc{constructor(){super(new Cu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class yp extends mr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.shadow=new Mp}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Sp extends mr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class wp extends nn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function jl(n,t,e,i){const s=Ep(i);switch(e){case Kh:return n*t;case wc:return n*t/s.components*s.byteLength;case Ec:return n*t/s.components*s.byteLength;case jh:return n*t*2/s.components*s.byteLength;case bc:return n*t*2/s.components*s.byteLength;case Jh:return n*t*3/s.components*s.byteLength;case Sn:return n*t*4/s.components*s.byteLength;case Tc:return n*t*4/s.components*s.byteLength;case eo:case no:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case io:case so:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ba:case Aa:return Math.max(n,16)*Math.max(t,8)/4;case Ea:case Ta:return Math.max(n,8)*Math.max(t,8)/2;case Ra:case Ca:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Pa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case La:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Da:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Ia:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Ua:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Na:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Fa:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Oa:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Ba:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case za:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case ka:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Ha:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Ga:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Va:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Wa:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Xa:case qa:case Ya:return Math.ceil(n/4)*Math.ceil(t/4)*16;case $a:case Za:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Ka:case Ja:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ep(n){switch(n){case In:case qh:return{byteLength:1,components:1};case er:case Yh:case dr:return{byteLength:2,components:1};case yc:case Sc:return{byteLength:2,components:4};case Li:case Mc:case Cn:return{byteLength:4,components:1};case $h:case Zh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vc);function Pu(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function bp(n){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=n.SHORT;else if(l instanceof Uint32Array)d=n.UNSIGNED_INT;else if(l instanceof Int32Array)d=n.INT;else if(l instanceof Int8Array)d=n.BYTE;else if(l instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,c,l){const h=c.array,u=c.updateRanges;if(n.bindBuffer(l,a),u.length===0)n.bufferSubData(l,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){const g=u[f],_=u[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){const _=u[d];n.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(n.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Tp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ap=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Rp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Lp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Dp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ip=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Up=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Np=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Fp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Op=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,zp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,kp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Hp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Gp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Yp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$p=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Zp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Kp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Jp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,jp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,em=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nm="gl_FragColor = linearToOutputTexel( gl_FragColor );",im=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,rm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,om=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,am=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,lm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,um=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,pm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_m=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,xm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,vm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Mm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ym=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Em=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,bm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Tm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Am=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Rm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Dm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Im=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Um=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Nm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Om=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,km=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Gm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Wm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Xm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ym=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$m=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Zm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Km=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Jm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,t0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,e0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,n0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,i0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,s0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,r0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,o0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,a0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,c0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,l0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,h0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,u0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,f0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,d0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,p0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,m0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,g0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,x0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,v0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,M0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,y0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,S0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,w0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,E0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const b0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,T0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,R0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,P0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,L0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,D0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,I0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,U0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,N0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,F0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,O0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,B0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,z0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,k0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,H0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,G0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,V0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,W0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,X0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,q0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Y0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Z0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,K0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,J0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,j0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Q0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,tg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,eg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ng=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ig=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,te={alphahash_fragment:Tp,alphahash_pars_fragment:Ap,alphamap_fragment:Rp,alphamap_pars_fragment:Cp,alphatest_fragment:Pp,alphatest_pars_fragment:Lp,aomap_fragment:Dp,aomap_pars_fragment:Ip,batching_pars_vertex:Up,batching_vertex:Np,begin_vertex:Fp,beginnormal_vertex:Op,bsdfs:Bp,iridescence_fragment:zp,bumpmap_pars_fragment:kp,clipping_planes_fragment:Hp,clipping_planes_pars_fragment:Gp,clipping_planes_pars_vertex:Vp,clipping_planes_vertex:Wp,color_fragment:Xp,color_pars_fragment:qp,color_pars_vertex:Yp,color_vertex:$p,common:Zp,cube_uv_reflection_fragment:Kp,defaultnormal_vertex:Jp,displacementmap_pars_vertex:jp,displacementmap_vertex:Qp,emissivemap_fragment:tm,emissivemap_pars_fragment:em,colorspace_fragment:nm,colorspace_pars_fragment:im,envmap_fragment:sm,envmap_common_pars_fragment:rm,envmap_pars_fragment:om,envmap_pars_vertex:am,envmap_physical_pars_fragment:xm,envmap_vertex:cm,fog_vertex:lm,fog_pars_vertex:hm,fog_fragment:um,fog_pars_fragment:fm,gradientmap_pars_fragment:dm,lightmap_pars_fragment:pm,lights_lambert_fragment:mm,lights_lambert_pars_fragment:gm,lights_pars_begin:_m,lights_toon_fragment:vm,lights_toon_pars_fragment:Mm,lights_phong_fragment:ym,lights_phong_pars_fragment:Sm,lights_physical_fragment:wm,lights_physical_pars_fragment:Em,lights_fragment_begin:bm,lights_fragment_maps:Tm,lights_fragment_end:Am,logdepthbuf_fragment:Rm,logdepthbuf_pars_fragment:Cm,logdepthbuf_pars_vertex:Pm,logdepthbuf_vertex:Lm,map_fragment:Dm,map_pars_fragment:Im,map_particle_fragment:Um,map_particle_pars_fragment:Nm,metalnessmap_fragment:Fm,metalnessmap_pars_fragment:Om,morphinstance_vertex:Bm,morphcolor_vertex:zm,morphnormal_vertex:km,morphtarget_pars_vertex:Hm,morphtarget_vertex:Gm,normal_fragment_begin:Vm,normal_fragment_maps:Wm,normal_pars_fragment:Xm,normal_pars_vertex:qm,normal_vertex:Ym,normalmap_pars_fragment:$m,clearcoat_normal_fragment_begin:Zm,clearcoat_normal_fragment_maps:Km,clearcoat_pars_fragment:Jm,iridescence_pars_fragment:jm,opaque_fragment:Qm,packing:t0,premultiplied_alpha_fragment:e0,project_vertex:n0,dithering_fragment:i0,dithering_pars_fragment:s0,roughnessmap_fragment:r0,roughnessmap_pars_fragment:o0,shadowmap_pars_fragment:a0,shadowmap_pars_vertex:c0,shadowmap_vertex:l0,shadowmask_pars_fragment:h0,skinbase_vertex:u0,skinning_pars_vertex:f0,skinning_vertex:d0,skinnormal_vertex:p0,specularmap_fragment:m0,specularmap_pars_fragment:g0,tonemapping_fragment:_0,tonemapping_pars_fragment:x0,transmission_fragment:v0,transmission_pars_fragment:M0,uv_pars_fragment:y0,uv_pars_vertex:S0,uv_vertex:w0,worldpos_vertex:E0,background_vert:b0,background_frag:T0,backgroundCube_vert:A0,backgroundCube_frag:R0,cube_vert:C0,cube_frag:P0,depth_vert:L0,depth_frag:D0,distanceRGBA_vert:I0,distanceRGBA_frag:U0,equirect_vert:N0,equirect_frag:F0,linedashed_vert:O0,linedashed_frag:B0,meshbasic_vert:z0,meshbasic_frag:k0,meshlambert_vert:H0,meshlambert_frag:G0,meshmatcap_vert:V0,meshmatcap_frag:W0,meshnormal_vert:X0,meshnormal_frag:q0,meshphong_vert:Y0,meshphong_frag:$0,meshphysical_vert:Z0,meshphysical_frag:K0,meshtoon_vert:J0,meshtoon_frag:j0,points_vert:Q0,points_frag:tg,shadow_vert:eg,shadow_frag:ng,sprite_vert:ig,sprite_frag:sg},St={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},An={basic:{uniforms:Je([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:Je([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new zt(0)}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:Je([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:Je([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:Je([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new zt(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:Je([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:Je([St.points,St.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:Je([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:Je([St.common,St.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:Je([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:Je([St.sprite,St.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distanceRGBA:{uniforms:Je([St.common,St.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distanceRGBA_vert,fragmentShader:te.distanceRGBA_frag},shadow:{uniforms:Je([St.lights,St.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};An.physical={uniforms:Je([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};const $r={r:0,b:0,g:0},vi=new tn,rg=new oe;function og(n,t,e,i,s,r,o){const a=new zt(0);let c=r===!0?0:1,l,h,u=null,f=0,d=null;function g(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?e:t).get(x)),x}function _(y){let x=!1;const C=g(y);C===null?p(a,c):C&&C.isColor&&(p(C,1),x=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(y,x){const C=g(x);C&&(C.isCubeTexture||C.mapping===go)?(h===void 0&&(h=new gt(new re(1,1,1),new En({name:"BackgroundCubeMaterial",uniforms:vs(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:Qe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,b,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),vi.copy(x.backgroundRotation),vi.x*=-1,vi.y*=-1,vi.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(vi.y*=-1,vi.z*=-1),h.material.uniforms.envMap.value=C,h.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(rg.makeRotationFromEuler(vi)),h.material.toneMapped=he.getTransfer(C.colorSpace)!==me,(u!==C||f!==C.version||d!==n.toneMapping)&&(h.material.needsUpdate=!0,u=C,f=C.version,d=n.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):C&&C.isTexture&&(l===void 0&&(l=new gt(new wn(2,2),new En({name:"BackgroundMaterial",uniforms:vs(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=C,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=he.getTransfer(C.colorSpace)!==me,C.matrixAutoUpdate===!0&&C.updateMatrix(),l.material.uniforms.uvTransform.value.copy(C.matrix),(u!==C||f!==C.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,u=C,f=C.version,d=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,x){y.getRGB($r,au(n)),i.buffers.color.setClear($r.r,$r.g,$r.b,x,o)}function E(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,x=1){a.set(y),c=x,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,p(a,c)},render:_,addToRenderList:m,dispose:E}}function ag(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(M,L,N,V,Z){let W=!1;const k=u(V,N,L);r!==k&&(r=k,l(r.object)),W=d(M,V,N,Z),W&&g(M,V,N,Z),Z!==null&&t.update(Z,n.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,x(M,L,N,V),Z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function c(){return n.createVertexArray()}function l(M){return n.bindVertexArray(M)}function h(M){return n.deleteVertexArray(M)}function u(M,L,N){const V=N.wireframe===!0;let Z=i[M.id];Z===void 0&&(Z={},i[M.id]=Z);let W=Z[L.id];W===void 0&&(W={},Z[L.id]=W);let k=W[V];return k===void 0&&(k=f(c()),W[V]=k),k}function f(M){const L=[],N=[],V=[];for(let Z=0;Z<e;Z++)L[Z]=0,N[Z]=0,V[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:N,attributeDivisors:V,object:M,attributes:{},index:null}}function d(M,L,N,V){const Z=r.attributes,W=L.attributes;let k=0;const q=N.getAttributes();for(const G in q)if(q[G].location>=0){const mt=Z[G];let ct=W[G];if(ct===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(ct=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(ct=M.instanceColor)),mt===void 0||mt.attribute!==ct||ct&&mt.data!==ct.data)return!0;k++}return r.attributesNum!==k||r.index!==V}function g(M,L,N,V){const Z={},W=L.attributes;let k=0;const q=N.getAttributes();for(const G in q)if(q[G].location>=0){let mt=W[G];mt===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(mt=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(mt=M.instanceColor));const ct={};ct.attribute=mt,mt&&mt.data&&(ct.data=mt.data),Z[G]=ct,k++}r.attributes=Z,r.attributesNum=k,r.index=V}function _(){const M=r.newAttributes;for(let L=0,N=M.length;L<N;L++)M[L]=0}function m(M){p(M,0)}function p(M,L){const N=r.newAttributes,V=r.enabledAttributes,Z=r.attributeDivisors;N[M]=1,V[M]===0&&(n.enableVertexAttribArray(M),V[M]=1),Z[M]!==L&&(n.vertexAttribDivisor(M,L),Z[M]=L)}function E(){const M=r.newAttributes,L=r.enabledAttributes;for(let N=0,V=L.length;N<V;N++)L[N]!==M[N]&&(n.disableVertexAttribArray(N),L[N]=0)}function y(M,L,N,V,Z,W,k){k===!0?n.vertexAttribIPointer(M,L,N,Z,W):n.vertexAttribPointer(M,L,N,V,Z,W)}function x(M,L,N,V){_();const Z=V.attributes,W=N.getAttributes(),k=L.defaultAttributeValues;for(const q in W){const G=W[q];if(G.location>=0){let ot=Z[q];if(ot===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(ot=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(ot=M.instanceColor)),ot!==void 0){const mt=ot.normalized,ct=ot.itemSize,Tt=t.get(ot);if(Tt===void 0)continue;const kt=Tt.buffer,ee=Tt.type,Yt=Tt.bytesPerElement,j=ee===n.INT||ee===n.UNSIGNED_INT||ot.gpuType===Mc;if(ot.isInterleavedBufferAttribute){const H=ot.data,it=H.stride,at=ot.offset;if(H.isInstancedInterleavedBuffer){for(let yt=0;yt<G.locationSize;yt++)p(G.location+yt,H.meshPerAttribute);M.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let yt=0;yt<G.locationSize;yt++)m(G.location+yt);n.bindBuffer(n.ARRAY_BUFFER,kt);for(let yt=0;yt<G.locationSize;yt++)y(G.location+yt,ct/G.locationSize,ee,mt,it*Yt,(at+ct/G.locationSize*yt)*Yt,j)}else{if(ot.isInstancedBufferAttribute){for(let H=0;H<G.locationSize;H++)p(G.location+H,ot.meshPerAttribute);M.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let H=0;H<G.locationSize;H++)m(G.location+H);n.bindBuffer(n.ARRAY_BUFFER,kt);for(let H=0;H<G.locationSize;H++)y(G.location+H,ct/G.locationSize,ee,mt,ct*Yt,ct/G.locationSize*H*Yt,j)}}else if(k!==void 0){const mt=k[q];if(mt!==void 0)switch(mt.length){case 2:n.vertexAttrib2fv(G.location,mt);break;case 3:n.vertexAttrib3fv(G.location,mt);break;case 4:n.vertexAttrib4fv(G.location,mt);break;default:n.vertexAttrib1fv(G.location,mt)}}}}E()}function C(){A();for(const M in i){const L=i[M];for(const N in L){const V=L[N];for(const Z in V)h(V[Z].object),delete V[Z];delete L[N]}delete i[M]}}function T(M){if(i[M.id]===void 0)return;const L=i[M.id];for(const N in L){const V=L[N];for(const Z in V)h(V[Z].object),delete V[Z];delete L[N]}delete i[M.id]}function b(M){for(const L in i){const N=i[L];if(N[M.id]===void 0)continue;const V=N[M.id];for(const Z in V)h(V[Z].object),delete V[Z];delete N[M.id]}}function A(){S(),o=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:A,resetDefaultState:S,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:m,disableUnusedAttributes:E}}function cg(n,t,e){let i;function s(l){i=l}function r(l,h){n.drawArrays(i,l,h),e.update(h,i,1)}function o(l,h,u){u!==0&&(n.drawArraysInstanced(i,l,h,u),e.update(h,i,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];e.update(d,i,1)}function c(l,h,u,f){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)o(l[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(i,l,0,h,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*f[_];e.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function lg(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(b){return!(b!==Sn&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const A=b===dr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==In&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Cn&&!A)}function c(b){if(b==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,T=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:C,maxSamples:T}}function hg(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new wi,a=new jt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||i!==0||s;return s=f,i=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const E=r?0:i,y=E*4;let x=p.clippingState||null;c.value=x,x=h(g,f,y,d);for(let C=0;C!==y;++C)x[C]=e[C];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,f,d,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=d+_*4,E=f.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,x=d;y!==_;++y,x+=4)o.copy(u[y]).applyMatrix4(E,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function ug(n){let t=new WeakMap;function e(o,a){return a===Ma?o.mapping=ms:a===ya&&(o.mapping=gs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ma||a===ya)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Ad(c.height);return l.fromEquirectangularTexture(n,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}const ls=4,Ql=[.125,.215,.35,.446,.526,.582],Ti=20,ta=new Cu,th=new zt;let ea=null,na=0,ia=0,sa=!1;const Ei=(1+Math.sqrt(5))/2,is=1/Ei,eh=[new P(-Ei,is,0),new P(Ei,is,0),new P(-is,0,Ei),new P(is,0,Ei),new P(0,Ei,-is),new P(0,Ei,is),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],fg=new P;class sc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100,r={}){const{size:o=256,position:a=fg}=r;ea=this._renderer.getRenderTarget(),na=this._renderer.getActiveCubeFace(),ia=this._renderer.getActiveMipmapLevel(),sa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,i,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ih(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ea,na,ia),this._renderer.xr.enabled=sa,t.scissorTest=!1,Zr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ms||t.mapping===gs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ea=this._renderer.getRenderTarget(),na=this._renderer.getActiveCubeFace(),ia=this._renderer.getActiveMipmapLevel(),sa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:dr,format:Sn,colorSpace:_s,depthBuffer:!1},s=nh(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nh(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dg(r)),this._blurMaterial=pg(r,t,e)}return s}_compileMaterial(t){const e=new gt(this._lodPlanes[0],t);this._renderer.compile(e,ta)}_sceneToCubeUV(t,e,i,s,r){const c=new nn(90,1,e,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(th),u.toneMapping=oi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));const _=new un({name:"PMREM.Background",side:Qe,depthWrite:!1,depthTest:!1}),m=new gt(new re,_);let p=!1;const E=t.background;E?E.isColor&&(_.color.copy(E),t.background=null,p=!0):(_.color.copy(th),p=!0);for(let y=0;y<6;y++){const x=y%3;x===0?(c.up.set(0,l[y],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[y],r.y,r.z)):x===1?(c.up.set(0,0,l[y]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[y],r.z)):(c.up.set(0,l[y],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[y]));const C=this._cubeSize;Zr(s,x*C,y>2?C:0,C,C),u.setRenderTarget(s),p&&u.render(m,c),u.render(t,c)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=d,u.autoClear=f,t.background=E}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===ms||t.mapping===gs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=sh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ih());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new gt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;Zr(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,ta)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=eh[(s-r-1)%eh.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new gt(this._lodPlanes[s],l),f=l.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Ti-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Ti;m>Ti&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ti}`);const p=[];let E=0;for(let b=0;b<Ti;++b){const A=b/_,S=Math.exp(-A*A/2);p.push(S),b===0?E+=S:b<m&&(E+=2*S)}for(let b=0;b<p.length;b++)p[b]=p[b]/E;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-i;const x=this._sizeLods[s],C=3*x*(s>y-ls?s-y+ls:0),T=4*(this._cubeSize-x);Zr(e,C,T,3*x,2*x),c.setRenderTarget(e),c.render(u,ta)}}function dg(n){const t=[],e=[],i=[];let s=n;const r=n-ls+1+Ql.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>n-ls?c=Ql[o-n+ls-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,_=3,m=2,p=1,E=new Float32Array(_*g*d),y=new Float32Array(m*g*d),x=new Float32Array(p*g*d);for(let T=0;T<d;T++){const b=T%3*2/3-1,A=T>2?0:-1,S=[b,A,0,b+2/3,A,0,b+2/3,A+1,0,b,A,0,b+2/3,A+1,0,b,A+1,0];E.set(S,_*g*T),y.set(f,m*g*T);const M=[T,T,T,T,T,T];x.set(M,p*g*T)}const C=new Ue;C.setAttribute("position",new De(E,_)),C.setAttribute("uv",new De(y,m)),C.setAttribute("faceIndex",new De(x,p)),t.push(C),s>ls&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function nh(n,t,e){const i=new Di(n,t,e);return i.texture.mapping=go,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Zr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function pg(n,t,e){const i=new Float32Array(Ti),s=new P(0,1,0);return new En({name:"SphericalGaussianBlur",defines:{n:Ti,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function ih(){return new En({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function sh(){return new En({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function zc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function mg(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===Ma||c===ya,h=c===ms||c===gs;if(l||h){let u=t.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new sc(n)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return l&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new sc(n)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function gg(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&rr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function _g(n,t,e,i){const s={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function c(u){const f=u.attributes;for(const d in f)t.update(f[d],n.ARRAY_BUFFER)}function l(u){const f=[],d=u.index,g=u.attributes.position;let _=0;if(d!==null){const E=d.array;_=d.version;for(let y=0,x=E.length;y<x;y+=3){const C=E[y+0],T=E[y+1],b=E[y+2];f.push(C,T,T,b,b,C)}}else if(g!==void 0){const E=g.array;_=g.version;for(let y=0,x=E.length/3-1;y<x;y+=3){const C=y+0,T=y+1,b=y+2;f.push(C,T,T,b,b,C)}}else return;const m=new(eu(f)?ou:ru)(f,1);m.version=_;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function xg(n,t,e){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,d){n.drawElements(i,d,r,f*o),e.update(d,i,1)}function l(f,d,g){g!==0&&(n.drawElementsInstanced(i,d,r,f*o,g),e.update(d,i,g))}function h(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,i,1)}function u(f,d,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,_,0,g);let p=0;for(let E=0;E<g;E++)p+=d[E]*_[E];e.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function vg(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Mg(n,t,e){const i=new WeakMap,s=new ge;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=i.get(a);if(f===void 0||f.count!==u){let M=function(){A.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var d=M;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let C=a.attributes.position.count*x,T=1;C>t.maxTextureSize&&(T=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);const b=new Float32Array(C*T*4*u),A=new nu(b,C,T,u);A.type=Cn,A.needsUpdate=!0;const S=x*4;for(let L=0;L<u;L++){const N=p[L],V=E[L],Z=y[L],W=C*T*4*L;for(let k=0;k<N.count;k++){const q=k*S;g===!0&&(s.fromBufferAttribute(N,k),b[W+q+0]=s.x,b[W+q+1]=s.y,b[W+q+2]=s.z,b[W+q+3]=0),_===!0&&(s.fromBufferAttribute(V,k),b[W+q+4]=s.x,b[W+q+5]=s.y,b[W+q+6]=s.z,b[W+q+7]=0),m===!0&&(s.fromBufferAttribute(Z,k),b[W+q+8]=s.x,b[W+q+9]=s.y,b[W+q+10]=s.z,b[W+q+11]=Z.itemSize===4?s.w:1)}}f={count:u,texture:A,size:new dt(C,T)},i.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",_),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function yg(n,t,e,i){let s=new WeakMap;function r(c){const l=i.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}const Lu=new $e,rh=new mu(1,1),Du=new nu,Iu=new hd,Uu=new lu,oh=[],ah=[],ch=new Float32Array(16),lh=new Float32Array(9),hh=new Float32Array(4);function Ts(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=oh[s];if(r===void 0&&(r=new Float32Array(s),oh[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Oe(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Be(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function vo(n,t){let e=ah[t];e===void 0&&(e=new Int32Array(t),ah[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Sg(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function wg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;n.uniform2fv(this.addr,t),Be(e,t)}}function Eg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Oe(e,t))return;n.uniform3fv(this.addr,t),Be(e,t)}}function bg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;n.uniform4fv(this.addr,t),Be(e,t)}}function Tg(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Oe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,i))return;hh.set(i),n.uniformMatrix2fv(this.addr,!1,hh),Be(e,i)}}function Ag(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Oe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,i))return;lh.set(i),n.uniformMatrix3fv(this.addr,!1,lh),Be(e,i)}}function Rg(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Oe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,i))return;ch.set(i),n.uniformMatrix4fv(this.addr,!1,ch),Be(e,i)}}function Cg(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Pg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;n.uniform2iv(this.addr,t),Be(e,t)}}function Lg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;n.uniform3iv(this.addr,t),Be(e,t)}}function Dg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;n.uniform4iv(this.addr,t),Be(e,t)}}function Ig(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Ug(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;n.uniform2uiv(this.addr,t),Be(e,t)}}function Ng(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;n.uniform3uiv(this.addr,t),Be(e,t)}}function Fg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;n.uniform4uiv(this.addr,t),Be(e,t)}}function Og(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(rh.compareFunction=tu,r=rh):r=Lu,e.setTexture2D(t||r,s)}function Bg(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Iu,s)}function zg(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Uu,s)}function kg(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Du,s)}function Hg(n){switch(n){case 5126:return Sg;case 35664:return wg;case 35665:return Eg;case 35666:return bg;case 35674:return Tg;case 35675:return Ag;case 35676:return Rg;case 5124:case 35670:return Cg;case 35667:case 35671:return Pg;case 35668:case 35672:return Lg;case 35669:case 35673:return Dg;case 5125:return Ig;case 36294:return Ug;case 36295:return Ng;case 36296:return Fg;case 35678:case 36198:case 36298:case 36306:case 35682:return Og;case 35679:case 36299:case 36307:return Bg;case 35680:case 36300:case 36308:case 36293:return zg;case 36289:case 36303:case 36311:case 36292:return kg}}function Gg(n,t){n.uniform1fv(this.addr,t)}function Vg(n,t){const e=Ts(t,this.size,2);n.uniform2fv(this.addr,e)}function Wg(n,t){const e=Ts(t,this.size,3);n.uniform3fv(this.addr,e)}function Xg(n,t){const e=Ts(t,this.size,4);n.uniform4fv(this.addr,e)}function qg(n,t){const e=Ts(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Yg(n,t){const e=Ts(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function $g(n,t){const e=Ts(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Zg(n,t){n.uniform1iv(this.addr,t)}function Kg(n,t){n.uniform2iv(this.addr,t)}function Jg(n,t){n.uniform3iv(this.addr,t)}function jg(n,t){n.uniform4iv(this.addr,t)}function Qg(n,t){n.uniform1uiv(this.addr,t)}function t_(n,t){n.uniform2uiv(this.addr,t)}function e_(n,t){n.uniform3uiv(this.addr,t)}function n_(n,t){n.uniform4uiv(this.addr,t)}function i_(n,t,e){const i=this.cache,s=t.length,r=vo(e,s);Oe(i,r)||(n.uniform1iv(this.addr,r),Be(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Lu,r[o])}function s_(n,t,e){const i=this.cache,s=t.length,r=vo(e,s);Oe(i,r)||(n.uniform1iv(this.addr,r),Be(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Iu,r[o])}function r_(n,t,e){const i=this.cache,s=t.length,r=vo(e,s);Oe(i,r)||(n.uniform1iv(this.addr,r),Be(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Uu,r[o])}function o_(n,t,e){const i=this.cache,s=t.length,r=vo(e,s);Oe(i,r)||(n.uniform1iv(this.addr,r),Be(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Du,r[o])}function a_(n){switch(n){case 5126:return Gg;case 35664:return Vg;case 35665:return Wg;case 35666:return Xg;case 35674:return qg;case 35675:return Yg;case 35676:return $g;case 5124:case 35670:return Zg;case 35667:case 35671:return Kg;case 35668:case 35672:return Jg;case 35669:case 35673:return jg;case 5125:return Qg;case 36294:return t_;case 36295:return e_;case 36296:return n_;case 35678:case 36198:case 36298:case 36306:case 35682:return i_;case 35679:case 36299:case 36307:return s_;case 35680:case 36300:case 36308:case 36293:return r_;case 36289:case 36303:case 36311:case 36292:return o_}}class c_{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Hg(e.type)}}class l_{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=a_(e.type)}}class h_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const ra=/(\w+)(\])?(\[|\.)?/g;function uh(n,t){n.seq.push(t),n.map[t.id]=t}function u_(n,t,e){const i=n.name,s=i.length;for(ra.lastIndex=0;;){const r=ra.exec(i),o=ra.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){uh(e,l===void 0?new c_(a,n,t):new l_(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new h_(a),uh(e,u)),e=u}}}class ro{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);u_(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function fh(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const f_=37297;let d_=0;function p_(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const dh=new jt;function m_(n){he._getMatrix(dh,he.workingColorSpace,n);const t=`mat3( ${dh.elements.map(e=>e.toFixed(4))} )`;switch(he.getTransfer(n)){case co:return[t,"LinearTransferOETF"];case me:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function ph(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+p_(n.getShaderSource(t),a)}else return r}function g_(n,t){const e=m_(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function __(n,t){let e;switch(t){case Ef:e="Linear";break;case bf:e="Reinhard";break;case Tf:e="Cineon";break;case Wh:e="ACESFilmic";break;case Rf:e="AgX";break;case Cf:e="Neutral";break;case Af:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Kr=new P;function x_(){he.getLuminanceCoefficients(Kr);const n=Kr.x.toFixed(4),t=Kr.y.toFixed(4),e=Kr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function v_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ys).join(`
`)}function M_(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function y_(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Ys(n){return n!==""}function mh(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function gh(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const S_=/^[ \t]*#include +<([\w\d./]+)>/gm;function rc(n){return n.replace(S_,E_)}const w_=new Map;function E_(n,t){let e=te[t];if(e===void 0){const i=w_.get(t);if(i!==void 0)e=te[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return rc(e)}const b_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _h(n){return n.replace(b_,T_)}function T_(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function xh(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function A_(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Hh?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Gh?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Wn&&(t="SHADOWMAP_TYPE_VSM"),t}function R_(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ms:case gs:t="ENVMAP_TYPE_CUBE";break;case go:t="ENVMAP_TYPE_CUBE_UV";break}return t}function C_(n){let t="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===gs&&(t="ENVMAP_MODE_REFRACTION"),t}function P_(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Vh:t="ENVMAP_BLENDING_MULTIPLY";break;case Sf:t="ENVMAP_BLENDING_MIX";break;case wf:t="ENVMAP_BLENDING_ADD";break}return t}function L_(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function D_(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=A_(e),l=R_(e),h=C_(e),u=P_(e),f=L_(e),d=v_(e),g=M_(r),_=s.createProgram();let m,p,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ys).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ys).join(`
`),p.length>0&&(p+=`
`)):(m=[xh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ys).join(`
`),p=[xh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==oi?"#define TONE_MAPPING":"",e.toneMapping!==oi?te.tonemapping_pars_fragment:"",e.toneMapping!==oi?__("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,g_("linearToOutputTexel",e.outputColorSpace),x_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ys).join(`
`)),o=rc(o),o=mh(o,e),o=gh(o,e),a=rc(a),a=mh(a,e),a=gh(a,e),o=_h(o),a=_h(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===dl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===dl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=E+m+o,x=E+p+a,C=fh(s,s.VERTEX_SHADER,y),T=fh(s,s.FRAGMENT_SHADER,x);s.attachShader(_,C),s.attachShader(_,T),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function b(L){if(n.debug.checkShaderErrors){const N=s.getProgramInfoLog(_)||"",V=s.getShaderInfoLog(C)||"",Z=s.getShaderInfoLog(T)||"",W=N.trim(),k=V.trim(),q=Z.trim();let G=!0,ot=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,C,T);else{const mt=ph(s,C,"vertex"),ct=ph(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+W+`
`+mt+`
`+ct)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(k===""||q==="")&&(ot=!1);ot&&(L.diagnostics={runnable:G,programLog:W,vertexShader:{log:k,prefix:m},fragmentShader:{log:q,prefix:p}})}s.deleteShader(C),s.deleteShader(T),A=new ro(s,_),S=y_(s,_)}let A;this.getUniforms=function(){return A===void 0&&b(this),A};let S;this.getAttributes=function(){return S===void 0&&b(this),S};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,f_)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=d_++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=T,this}let I_=0;class U_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new N_(t),e.set(t,i)),i}}class N_{constructor(t){this.id=I_++,this.code=t,this.usedTimes=0}}function F_(n,t,e,i,s,r,o){const a=new iu,c=new U_,l=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,M,L,N,V){const Z=N.fog,W=V.geometry,k=S.isMeshStandardMaterial?N.environment:null,q=(S.isMeshStandardMaterial?e:t).get(S.envMap||k),G=q&&q.mapping===go?q.image.height:null,ot=g[S.type];S.precision!==null&&(d=s.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const mt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ct=mt!==void 0?mt.length:0;let Tt=0;W.morphAttributes.position!==void 0&&(Tt=1),W.morphAttributes.normal!==void 0&&(Tt=2),W.morphAttributes.color!==void 0&&(Tt=3);let kt,ee,Yt,j;if(ot){const fe=An[ot];kt=fe.vertexShader,ee=fe.fragmentShader}else kt=S.vertexShader,ee=S.fragmentShader,c.update(S),Yt=c.getVertexShaderID(S),j=c.getFragmentShaderID(S);const H=n.getRenderTarget(),it=n.state.buffers.depth.getReversed(),at=V.isInstancedMesh===!0,yt=V.isBatchedMesh===!0,Ft=!!S.map,ce=!!S.matcap,D=!!q,st=!!S.aoMap,et=!!S.lightMap,tt=!!S.bumpMap,Q=!!S.normalMap,xt=!!S.displacementMap,lt=!!S.emissiveMap,vt=!!S.metalnessMap,$t=!!S.roughnessMap,qt=S.anisotropy>0,R=S.clearcoat>0,v=S.dispersion>0,z=S.iridescence>0,$=S.sheen>0,rt=S.transmission>0,K=qt&&!!S.anisotropyMap,It=R&&!!S.clearcoatMap,_t=R&&!!S.clearcoatNormalMap,Pt=R&&!!S.clearcoatRoughnessMap,Lt=z&&!!S.iridescenceMap,ht=z&&!!S.iridescenceThicknessMap,bt=$&&!!S.sheenColorMap,Gt=$&&!!S.sheenRoughnessMap,Ut=!!S.specularMap,wt=!!S.specularColorMap,Jt=!!S.specularIntensityMap,U=rt&&!!S.transmissionMap,pt=rt&&!!S.thicknessMap,Mt=!!S.gradientMap,Rt=!!S.alphaMap,ut=S.alphaTest>0,nt=!!S.alphaHash,Dt=!!S.extensions;let Zt=oi;S.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Zt=n.toneMapping);const Se={shaderID:ot,shaderType:S.type,shaderName:S.name,vertexShader:kt,fragmentShader:ee,defines:S.defines,customVertexShaderID:Yt,customFragmentShaderID:j,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:yt,batchingColor:yt&&V._colorsTexture!==null,instancing:at,instancingColor:at&&V.instanceColor!==null,instancingMorph:at&&V.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:H===null?n.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:_s,alphaToCoverage:!!S.alphaToCoverage,map:Ft,matcap:ce,envMap:D,envMapMode:D&&q.mapping,envMapCubeUVHeight:G,aoMap:st,lightMap:et,bumpMap:tt,normalMap:Q,displacementMap:f&&xt,emissiveMap:lt,normalMapObjectSpace:Q&&S.normalMapType===If,normalMapTangentSpace:Q&&S.normalMapType===Qh,metalnessMap:vt,roughnessMap:$t,anisotropy:qt,anisotropyMap:K,clearcoat:R,clearcoatMap:It,clearcoatNormalMap:_t,clearcoatRoughnessMap:Pt,dispersion:v,iridescence:z,iridescenceMap:Lt,iridescenceThicknessMap:ht,sheen:$,sheenColorMap:bt,sheenRoughnessMap:Gt,specularMap:Ut,specularColorMap:wt,specularIntensityMap:Jt,transmission:rt,transmissionMap:U,thicknessMap:pt,gradientMap:Mt,opaque:S.transparent===!1&&S.blending===Ci&&S.alphaToCoverage===!1,alphaMap:Rt,alphaTest:ut,alphaHash:nt,combine:S.combine,mapUv:Ft&&_(S.map.channel),aoMapUv:st&&_(S.aoMap.channel),lightMapUv:et&&_(S.lightMap.channel),bumpMapUv:tt&&_(S.bumpMap.channel),normalMapUv:Q&&_(S.normalMap.channel),displacementMapUv:xt&&_(S.displacementMap.channel),emissiveMapUv:lt&&_(S.emissiveMap.channel),metalnessMapUv:vt&&_(S.metalnessMap.channel),roughnessMapUv:$t&&_(S.roughnessMap.channel),anisotropyMapUv:K&&_(S.anisotropyMap.channel),clearcoatMapUv:It&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:_t&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pt&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Lt&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:ht&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Gt&&_(S.sheenRoughnessMap.channel),specularMapUv:Ut&&_(S.specularMap.channel),specularColorMapUv:wt&&_(S.specularColorMap.channel),specularIntensityMapUv:Jt&&_(S.specularIntensityMap.channel),transmissionMapUv:U&&_(S.transmissionMap.channel),thicknessMapUv:pt&&_(S.thicknessMap.channel),alphaMapUv:Rt&&_(S.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Q||qt),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!W.attributes.uv&&(Ft||Rt),fog:!!Z,useFog:S.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:it,skinning:V.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:ct,morphTextureStride:Tt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:Zt,decodeVideoTexture:Ft&&S.map.isVideoTexture===!0&&he.getTransfer(S.map.colorSpace)===me,decodeVideoTextureEmissive:lt&&S.emissiveMap.isVideoTexture===!0&&he.getTransfer(S.emissiveMap.colorSpace)===me,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===ke,flipSided:S.side===Qe,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Dt&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Dt&&S.extensions.multiDraw===!0||yt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Se.vertexUv1s=l.has(1),Se.vertexUv2s=l.has(2),Se.vertexUv3s=l.has(3),l.clear(),Se}function p(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const L in S.defines)M.push(L),M.push(S.defines[L]);return S.isRawShaderMaterial===!1&&(E(M,S),y(M,S),M.push(n.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function E(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function y(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),S.push(a.mask)}function x(S){const M=g[S.type];let L;if(M){const N=An[M];L=wd.clone(N.uniforms)}else L=S.uniforms;return L}function C(S,M){let L;for(let N=0,V=h.length;N<V;N++){const Z=h[N];if(Z.cacheKey===M){L=Z,++L.usedTimes;break}}return L===void 0&&(L=new D_(n,M,S,r),h.push(L)),L}function T(S){if(--S.usedTimes===0){const M=h.indexOf(S);h[M]=h[h.length-1],h.pop(),S.destroy()}}function b(S){c.remove(S)}function A(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:C,releaseProgram:T,releaseShaderCache:b,programs:h,dispose:A}}function O_(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function B_(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function vh(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Mh(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(u,f,d,g,_,m){let p=n[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},n[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function a(u,f,d,g,_,m){const p=o(u,f,d,g,_,m);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):e.push(p)}function c(u,f,d,g,_,m){const p=o(u,f,d,g,_,m);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function l(u,f){e.length>1&&e.sort(u||B_),i.length>1&&i.sort(f||vh),s.length>1&&s.sort(f||vh)}function h(){for(let u=t,f=n.length;u<f;u++){const d=n[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function z_(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new Mh,n.set(i,[o])):s>=r.length?(o=new Mh,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function k_(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new zt};break;case"SpotLight":e={position:new P,direction:new P,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":e={color:new zt,position:new P,halfWidth:new P,halfHeight:new P};break}return n[t.id]=e,e}}}function H_(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let G_=0;function V_(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function W_(n){const t=new k_,e=H_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new P);const s=new P,r=new oe,o=new oe;function a(l){let h=0,u=0,f=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,E=0,y=0,x=0,C=0,T=0,b=0;l.sort(V_);for(let S=0,M=l.length;S<M;S++){const L=l[S],N=L.color,V=L.intensity,Z=L.distance,W=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=N.r*V,u+=N.g*V,f+=N.b*V;else if(L.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(L.sh.coefficients[k],V);b++}else if(L.isDirectionalLight){const k=t.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const q=L.shadow,G=e.get(L);G.shadowIntensity=q.intensity,G.shadowBias=q.bias,G.shadowNormalBias=q.normalBias,G.shadowRadius=q.radius,G.shadowMapSize=q.mapSize,i.directionalShadow[d]=G,i.directionalShadowMap[d]=W,i.directionalShadowMatrix[d]=L.shadow.matrix,E++}i.directional[d]=k,d++}else if(L.isSpotLight){const k=t.get(L);k.position.setFromMatrixPosition(L.matrixWorld),k.color.copy(N).multiplyScalar(V),k.distance=Z,k.coneCos=Math.cos(L.angle),k.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),k.decay=L.decay,i.spot[_]=k;const q=L.shadow;if(L.map&&(i.spotLightMap[C]=L.map,C++,q.updateMatrices(L),L.castShadow&&T++),i.spotLightMatrix[_]=q.matrix,L.castShadow){const G=e.get(L);G.shadowIntensity=q.intensity,G.shadowBias=q.bias,G.shadowNormalBias=q.normalBias,G.shadowRadius=q.radius,G.shadowMapSize=q.mapSize,i.spotShadow[_]=G,i.spotShadowMap[_]=W,x++}_++}else if(L.isRectAreaLight){const k=t.get(L);k.color.copy(N).multiplyScalar(V),k.halfWidth.set(L.width*.5,0,0),k.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=k,m++}else if(L.isPointLight){const k=t.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity),k.distance=L.distance,k.decay=L.decay,L.castShadow){const q=L.shadow,G=e.get(L);G.shadowIntensity=q.intensity,G.shadowBias=q.bias,G.shadowNormalBias=q.normalBias,G.shadowRadius=q.radius,G.shadowMapSize=q.mapSize,G.shadowCameraNear=q.camera.near,G.shadowCameraFar=q.camera.far,i.pointShadow[g]=G,i.pointShadowMap[g]=W,i.pointShadowMatrix[g]=L.shadow.matrix,y++}i.point[g]=k,g++}else if(L.isHemisphereLight){const k=t.get(L);k.skyColor.copy(L.color).multiplyScalar(V),k.groundColor.copy(L.groundColor).multiplyScalar(V),i.hemi[p]=k,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=St.LTC_FLOAT_1,i.rectAreaLTC2=St.LTC_FLOAT_2):(i.rectAreaLTC1=St.LTC_HALF_1,i.rectAreaLTC2=St.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;const A=i.hash;(A.directionalLength!==d||A.pointLength!==g||A.spotLength!==_||A.rectAreaLength!==m||A.hemiLength!==p||A.numDirectionalShadows!==E||A.numPointShadows!==y||A.numSpotShadows!==x||A.numSpotMaps!==C||A.numLightProbes!==b)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=x+C-T,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=b,A.directionalLength=d,A.pointLength=g,A.spotLength=_,A.rectAreaLength=m,A.hemiLength=p,A.numDirectionalShadows=E,A.numPointShadows=y,A.numSpotShadows=x,A.numSpotMaps=C,A.numLightProbes=b,i.version=G_++)}function c(l,h){let u=0,f=0,d=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,E=l.length;p<E;p++){const y=l[p];if(y.isDirectionalLight){const x=i.directional[u];x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),u++}else if(y.isSpotLight){const x=i.spot[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),d++}else if(y.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const x=i.point[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){const x=i.hemi[_];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:i}}function yh(n){const t=new W_(n),e=[],i=[];function s(h){l.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function X_(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new yh(n),t.set(s,[a])):r>=o.length?(a=new yh(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}const q_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Y_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function $_(n,t,e){let i=new Lc;const s=new dt,r=new dt,o=new ge,a=new mp({depthPacking:Df}),c=new gp,l={},h=e.maxTextureSize,u={[ci]:Qe,[Qe]:ci,[ke]:ke},f=new En({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:q_,fragmentShader:Y_}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Ue;g.setAttribute("position",new De(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new gt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hh;let p=this.type;this.render=function(T,b,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const S=n.getRenderTarget(),M=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),N=n.state;N.setBlending(ri),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const V=p!==Wn&&this.type===Wn,Z=p===Wn&&this.type!==Wn;for(let W=0,k=T.length;W<k;W++){const q=T[W],G=q.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const ot=G.getFrameExtents();if(s.multiply(ot),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ot.x),s.x=r.x*ot.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ot.y),s.y=r.y*ot.y,G.mapSize.y=r.y)),G.map===null||V===!0||Z===!0){const ct=this.type!==Wn?{minFilter:hn,magFilter:hn}:{};G.map!==null&&G.map.dispose(),G.map=new Di(s.x,s.y,ct),G.map.texture.name=q.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();const mt=G.getViewportCount();for(let ct=0;ct<mt;ct++){const Tt=G.getViewport(ct);o.set(r.x*Tt.x,r.y*Tt.y,r.x*Tt.z,r.y*Tt.w),N.viewport(o),G.updateMatrices(q,ct),i=G.getFrustum(),x(b,A,G.camera,q,this.type)}G.isPointLightShadow!==!0&&this.type===Wn&&E(G,A),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(S,M,L)};function E(T,b){const A=t.update(_);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Di(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(b,null,A,f,_,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(b,null,A,d,_,null)}function y(T,b,A,S){let M=null;const L=A.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)M=L;else if(M=A.isPointLight===!0?c:a,n.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){const N=M.uuid,V=b.uuid;let Z=l[N];Z===void 0&&(Z={},l[N]=Z);let W=Z[V];W===void 0&&(W=M.clone(),Z[V]=W,b.addEventListener("dispose",C)),M=W}if(M.visible=b.visible,M.wireframe=b.wireframe,S===Wn?M.side=b.shadowSide!==null?b.shadowSide:b.side:M.side=b.shadowSide!==null?b.shadowSide:u[b.side],M.alphaMap=b.alphaMap,M.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,M.map=b.map,M.clipShadows=b.clipShadows,M.clippingPlanes=b.clippingPlanes,M.clipIntersection=b.clipIntersection,M.displacementMap=b.displacementMap,M.displacementScale=b.displacementScale,M.displacementBias=b.displacementBias,M.wireframeLinewidth=b.wireframeLinewidth,M.linewidth=b.linewidth,A.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const N=n.properties.get(M);N.light=A}return M}function x(T,b,A,S,M){if(T.visible===!1)return;if(T.layers.test(b.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===Wn)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,T.matrixWorld);const V=t.update(T),Z=T.material;if(Array.isArray(Z)){const W=V.groups;for(let k=0,q=W.length;k<q;k++){const G=W[k],ot=Z[G.materialIndex];if(ot&&ot.visible){const mt=y(T,ot,S,M);T.onBeforeShadow(n,T,b,A,V,mt,G),n.renderBufferDirect(A,null,V,mt,T,G),T.onAfterShadow(n,T,b,A,V,mt,G)}}}else if(Z.visible){const W=y(T,Z,S,M);T.onBeforeShadow(n,T,b,A,V,W,null),n.renderBufferDirect(A,null,V,W,T,null),T.onAfterShadow(n,T,b,A,V,W,null)}}const N=T.children;for(let V=0,Z=N.length;V<Z;V++)x(N[V],b,A,S,M)}function C(T){T.target.removeEventListener("dispose",C);for(const A in l){const S=l[A],M=T.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const Z_={[da]:pa,[ma]:xa,[ga]:va,[ps]:_a,[pa]:da,[xa]:ma,[va]:ga,[_a]:ps};function K_(n,t){function e(){let U=!1;const pt=new ge;let Mt=null;const Rt=new ge(0,0,0,0);return{setMask:function(ut){Mt!==ut&&!U&&(n.colorMask(ut,ut,ut,ut),Mt=ut)},setLocked:function(ut){U=ut},setClear:function(ut,nt,Dt,Zt,Se){Se===!0&&(ut*=Zt,nt*=Zt,Dt*=Zt),pt.set(ut,nt,Dt,Zt),Rt.equals(pt)===!1&&(n.clearColor(ut,nt,Dt,Zt),Rt.copy(pt))},reset:function(){U=!1,Mt=null,Rt.set(-1,0,0,0)}}}function i(){let U=!1,pt=!1,Mt=null,Rt=null,ut=null;return{setReversed:function(nt){if(pt!==nt){const Dt=t.get("EXT_clip_control");nt?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT),pt=nt;const Zt=ut;ut=null,this.setClear(Zt)}},getReversed:function(){return pt},setTest:function(nt){nt?H(n.DEPTH_TEST):it(n.DEPTH_TEST)},setMask:function(nt){Mt!==nt&&!U&&(n.depthMask(nt),Mt=nt)},setFunc:function(nt){if(pt&&(nt=Z_[nt]),Rt!==nt){switch(nt){case da:n.depthFunc(n.NEVER);break;case pa:n.depthFunc(n.ALWAYS);break;case ma:n.depthFunc(n.LESS);break;case ps:n.depthFunc(n.LEQUAL);break;case ga:n.depthFunc(n.EQUAL);break;case _a:n.depthFunc(n.GEQUAL);break;case xa:n.depthFunc(n.GREATER);break;case va:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Rt=nt}},setLocked:function(nt){U=nt},setClear:function(nt){ut!==nt&&(pt&&(nt=1-nt),n.clearDepth(nt),ut=nt)},reset:function(){U=!1,Mt=null,Rt=null,ut=null,pt=!1}}}function s(){let U=!1,pt=null,Mt=null,Rt=null,ut=null,nt=null,Dt=null,Zt=null,Se=null;return{setTest:function(fe){U||(fe?H(n.STENCIL_TEST):it(n.STENCIL_TEST))},setMask:function(fe){pt!==fe&&!U&&(n.stencilMask(fe),pt=fe)},setFunc:function(fe,Bn,Tn){(Mt!==fe||Rt!==Bn||ut!==Tn)&&(n.stencilFunc(fe,Bn,Tn),Mt=fe,Rt=Bn,ut=Tn)},setOp:function(fe,Bn,Tn){(nt!==fe||Dt!==Bn||Zt!==Tn)&&(n.stencilOp(fe,Bn,Tn),nt=fe,Dt=Bn,Zt=Tn)},setLocked:function(fe){U=fe},setClear:function(fe){Se!==fe&&(n.clearStencil(fe),Se=fe)},reset:function(){U=!1,pt=null,Mt=null,Rt=null,ut=null,nt=null,Dt=null,Zt=null,Se=null}}}const r=new e,o=new i,a=new s,c=new WeakMap,l=new WeakMap;let h={},u={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,E=null,y=null,x=null,C=null,T=null,b=new zt(0,0,0),A=0,S=!1,M=null,L=null,N=null,V=null,Z=null;const W=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,q=0;const G=n.getParameter(n.VERSION);G.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(G)[1]),k=q>=1):G.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),k=q>=2);let ot=null,mt={};const ct=n.getParameter(n.SCISSOR_BOX),Tt=n.getParameter(n.VIEWPORT),kt=new ge().fromArray(ct),ee=new ge().fromArray(Tt);function Yt(U,pt,Mt,Rt){const ut=new Uint8Array(4),nt=n.createTexture();n.bindTexture(U,nt),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Dt=0;Dt<Mt;Dt++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(pt,0,n.RGBA,1,1,Rt,0,n.RGBA,n.UNSIGNED_BYTE,ut):n.texImage2D(pt+Dt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ut);return nt}const j={};j[n.TEXTURE_2D]=Yt(n.TEXTURE_2D,n.TEXTURE_2D,1),j[n.TEXTURE_CUBE_MAP]=Yt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[n.TEXTURE_2D_ARRAY]=Yt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),j[n.TEXTURE_3D]=Yt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),H(n.DEPTH_TEST),o.setFunc(ps),tt(!1),Q(ll),H(n.CULL_FACE),st(ri);function H(U){h[U]!==!0&&(n.enable(U),h[U]=!0)}function it(U){h[U]!==!1&&(n.disable(U),h[U]=!1)}function at(U,pt){return u[U]!==pt?(n.bindFramebuffer(U,pt),u[U]=pt,U===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=pt),U===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=pt),!0):!1}function yt(U,pt){let Mt=d,Rt=!1;if(U){Mt=f.get(pt),Mt===void 0&&(Mt=[],f.set(pt,Mt));const ut=U.textures;if(Mt.length!==ut.length||Mt[0]!==n.COLOR_ATTACHMENT0){for(let nt=0,Dt=ut.length;nt<Dt;nt++)Mt[nt]=n.COLOR_ATTACHMENT0+nt;Mt.length=ut.length,Rt=!0}}else Mt[0]!==n.BACK&&(Mt[0]=n.BACK,Rt=!0);Rt&&n.drawBuffers(Mt)}function Ft(U){return g!==U?(n.useProgram(U),g=U,!0):!1}const ce={[bi]:n.FUNC_ADD,[rf]:n.FUNC_SUBTRACT,[of]:n.FUNC_REVERSE_SUBTRACT};ce[af]=n.MIN,ce[cf]=n.MAX;const D={[lf]:n.ZERO,[hf]:n.ONE,[uf]:n.SRC_COLOR,[ua]:n.SRC_ALPHA,[_f]:n.SRC_ALPHA_SATURATE,[mf]:n.DST_COLOR,[df]:n.DST_ALPHA,[ff]:n.ONE_MINUS_SRC_COLOR,[fa]:n.ONE_MINUS_SRC_ALPHA,[gf]:n.ONE_MINUS_DST_COLOR,[pf]:n.ONE_MINUS_DST_ALPHA,[xf]:n.CONSTANT_COLOR,[vf]:n.ONE_MINUS_CONSTANT_COLOR,[Mf]:n.CONSTANT_ALPHA,[yf]:n.ONE_MINUS_CONSTANT_ALPHA};function st(U,pt,Mt,Rt,ut,nt,Dt,Zt,Se,fe){if(U===ri){_===!0&&(it(n.BLEND),_=!1);return}if(_===!1&&(H(n.BLEND),_=!0),U!==sf){if(U!==m||fe!==S){if((p!==bi||x!==bi)&&(n.blendEquation(n.FUNC_ADD),p=bi,x=bi),fe)switch(U){case Ci:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case li:n.blendFunc(n.ONE,n.ONE);break;case hl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ul:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Ci:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case li:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case hl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ul:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}E=null,y=null,C=null,T=null,b.set(0,0,0),A=0,m=U,S=fe}return}ut=ut||pt,nt=nt||Mt,Dt=Dt||Rt,(pt!==p||ut!==x)&&(n.blendEquationSeparate(ce[pt],ce[ut]),p=pt,x=ut),(Mt!==E||Rt!==y||nt!==C||Dt!==T)&&(n.blendFuncSeparate(D[Mt],D[Rt],D[nt],D[Dt]),E=Mt,y=Rt,C=nt,T=Dt),(Zt.equals(b)===!1||Se!==A)&&(n.blendColor(Zt.r,Zt.g,Zt.b,Se),b.copy(Zt),A=Se),m=U,S=!1}function et(U,pt){U.side===ke?it(n.CULL_FACE):H(n.CULL_FACE);let Mt=U.side===Qe;pt&&(Mt=!Mt),tt(Mt),U.blending===Ci&&U.transparent===!1?st(ri):st(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);const Rt=U.stencilWrite;a.setTest(Rt),Rt&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),lt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?H(n.SAMPLE_ALPHA_TO_COVERAGE):it(n.SAMPLE_ALPHA_TO_COVERAGE)}function tt(U){M!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),M=U)}function Q(U){U!==ef?(H(n.CULL_FACE),U!==L&&(U===ll?n.cullFace(n.BACK):U===nf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):it(n.CULL_FACE),L=U}function xt(U){U!==N&&(k&&n.lineWidth(U),N=U)}function lt(U,pt,Mt){U?(H(n.POLYGON_OFFSET_FILL),(V!==pt||Z!==Mt)&&(n.polygonOffset(pt,Mt),V=pt,Z=Mt)):it(n.POLYGON_OFFSET_FILL)}function vt(U){U?H(n.SCISSOR_TEST):it(n.SCISSOR_TEST)}function $t(U){U===void 0&&(U=n.TEXTURE0+W-1),ot!==U&&(n.activeTexture(U),ot=U)}function qt(U,pt,Mt){Mt===void 0&&(ot===null?Mt=n.TEXTURE0+W-1:Mt=ot);let Rt=mt[Mt];Rt===void 0&&(Rt={type:void 0,texture:void 0},mt[Mt]=Rt),(Rt.type!==U||Rt.texture!==pt)&&(ot!==Mt&&(n.activeTexture(Mt),ot=Mt),n.bindTexture(U,pt||j[U]),Rt.type=U,Rt.texture=pt)}function R(){const U=mt[ot];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function v(){try{n.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function z(){try{n.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $(){try{n.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function rt(){try{n.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function K(){try{n.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function It(){try{n.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _t(){try{n.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Pt(){try{n.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Lt(){try{n.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ht(){try{n.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function bt(U){kt.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),kt.copy(U))}function Gt(U){ee.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),ee.copy(U))}function Ut(U,pt){let Mt=l.get(pt);Mt===void 0&&(Mt=new WeakMap,l.set(pt,Mt));let Rt=Mt.get(U);Rt===void 0&&(Rt=n.getUniformBlockIndex(pt,U.name),Mt.set(U,Rt))}function wt(U,pt){const Rt=l.get(pt).get(U);c.get(pt)!==Rt&&(n.uniformBlockBinding(pt,Rt,U.__bindingPointIndex),c.set(pt,Rt))}function Jt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ot=null,mt={},u={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,E=null,y=null,x=null,C=null,T=null,b=new zt(0,0,0),A=0,S=!1,M=null,L=null,N=null,V=null,Z=null,kt.set(0,0,n.canvas.width,n.canvas.height),ee.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:H,disable:it,bindFramebuffer:at,drawBuffers:yt,useProgram:Ft,setBlending:st,setMaterial:et,setFlipSided:tt,setCullFace:Q,setLineWidth:xt,setPolygonOffset:lt,setScissorTest:vt,activeTexture:$t,bindTexture:qt,unbindTexture:R,compressedTexImage2D:v,compressedTexImage3D:z,texImage2D:Lt,texImage3D:ht,updateUBOMapping:Ut,uniformBlockBinding:wt,texStorage2D:_t,texStorage3D:Pt,texSubImage2D:$,texSubImage3D:rt,compressedTexSubImage2D:K,compressedTexSubImage3D:It,scissor:bt,viewport:Gt,reset:Jt}}function J_(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new dt,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,v){return d?new OffscreenCanvas(R,v):ho("canvas")}function _(R,v,z){let $=1;const rt=qt(R);if((rt.width>z||rt.height>z)&&($=z/Math.max(rt.width,rt.height)),$<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const K=Math.floor($*rt.width),It=Math.floor($*rt.height);u===void 0&&(u=g(K,It));const _t=v?g(K,It):u;return _t.width=K,_t.height=It,_t.getContext("2d").drawImage(R,0,0,K,It),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+rt.width+"x"+rt.height+") to ("+K+"x"+It+")."),_t}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+rt.width+"x"+rt.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){n.generateMipmap(R)}function E(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(R,v,z,$,rt=!1){if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let K=v;if(v===n.RED&&(z===n.FLOAT&&(K=n.R32F),z===n.HALF_FLOAT&&(K=n.R16F),z===n.UNSIGNED_BYTE&&(K=n.R8)),v===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(K=n.R8UI),z===n.UNSIGNED_SHORT&&(K=n.R16UI),z===n.UNSIGNED_INT&&(K=n.R32UI),z===n.BYTE&&(K=n.R8I),z===n.SHORT&&(K=n.R16I),z===n.INT&&(K=n.R32I)),v===n.RG&&(z===n.FLOAT&&(K=n.RG32F),z===n.HALF_FLOAT&&(K=n.RG16F),z===n.UNSIGNED_BYTE&&(K=n.RG8)),v===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(K=n.RG8UI),z===n.UNSIGNED_SHORT&&(K=n.RG16UI),z===n.UNSIGNED_INT&&(K=n.RG32UI),z===n.BYTE&&(K=n.RG8I),z===n.SHORT&&(K=n.RG16I),z===n.INT&&(K=n.RG32I)),v===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&(K=n.RGB8UI),z===n.UNSIGNED_SHORT&&(K=n.RGB16UI),z===n.UNSIGNED_INT&&(K=n.RGB32UI),z===n.BYTE&&(K=n.RGB8I),z===n.SHORT&&(K=n.RGB16I),z===n.INT&&(K=n.RGB32I)),v===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),z===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),z===n.UNSIGNED_INT&&(K=n.RGBA32UI),z===n.BYTE&&(K=n.RGBA8I),z===n.SHORT&&(K=n.RGBA16I),z===n.INT&&(K=n.RGBA32I)),v===n.RGB&&(z===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),z===n.UNSIGNED_INT_10F_11F_11F_REV&&(K=n.R11F_G11F_B10F)),v===n.RGBA){const It=rt?co:he.getTransfer($);z===n.FLOAT&&(K=n.RGBA32F),z===n.HALF_FLOAT&&(K=n.RGBA16F),z===n.UNSIGNED_BYTE&&(K=It===me?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function x(R,v){let z;return R?v===null||v===Li||v===nr?z=n.DEPTH24_STENCIL8:v===Cn?z=n.DEPTH32F_STENCIL8:v===er&&(z=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Li||v===nr?z=n.DEPTH_COMPONENT24:v===Cn?z=n.DEPTH_COMPONENT32F:v===er&&(z=n.DEPTH_COMPONENT16),z}function C(R,v){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==hn&&R.minFilter!==Rn?Math.log2(Math.max(v.width,v.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?v.mipmaps.length:1}function T(R){const v=R.target;v.removeEventListener("dispose",T),A(v),v.isVideoTexture&&h.delete(v)}function b(R){const v=R.target;v.removeEventListener("dispose",b),M(v)}function A(R){const v=i.get(R);if(v.__webglInit===void 0)return;const z=R.source,$=f.get(z);if($){const rt=$[v.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&S(R),Object.keys($).length===0&&f.delete(z)}i.remove(R)}function S(R){const v=i.get(R);n.deleteTexture(v.__webglTexture);const z=R.source,$=f.get(z);delete $[v.__cacheKey],o.memory.textures--}function M(R){const v=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(v.__webglFramebuffer[$]))for(let rt=0;rt<v.__webglFramebuffer[$].length;rt++)n.deleteFramebuffer(v.__webglFramebuffer[$][rt]);else n.deleteFramebuffer(v.__webglFramebuffer[$]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[$])}else{if(Array.isArray(v.__webglFramebuffer))for(let $=0;$<v.__webglFramebuffer.length;$++)n.deleteFramebuffer(v.__webglFramebuffer[$]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let $=0;$<v.__webglColorRenderbuffer.length;$++)v.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[$]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const z=R.textures;for(let $=0,rt=z.length;$<rt;$++){const K=i.get(z[$]);K.__webglTexture&&(n.deleteTexture(K.__webglTexture),o.memory.textures--),i.remove(z[$])}i.remove(R)}let L=0;function N(){L=0}function V(){const R=L;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),L+=1,R}function Z(R){const v=[];return v.push(R.wrapS),v.push(R.wrapT),v.push(R.wrapR||0),v.push(R.magFilter),v.push(R.minFilter),v.push(R.anisotropy),v.push(R.internalFormat),v.push(R.format),v.push(R.type),v.push(R.generateMipmaps),v.push(R.premultiplyAlpha),v.push(R.flipY),v.push(R.unpackAlignment),v.push(R.colorSpace),v.join()}function W(R,v){const z=i.get(R);if(R.isVideoTexture&&vt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&z.__version!==R.version){const $=R.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(z,R,v);return}}else R.isExternalTexture&&(z.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+v)}function k(R,v){const z=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){j(z,R,v);return}e.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+v)}function q(R,v){const z=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){j(z,R,v);return}e.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+v)}function G(R,v){const z=i.get(R);if(R.version>0&&z.__version!==R.version){H(z,R,v);return}e.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+v)}const ot={[Sa]:n.REPEAT,[Ai]:n.CLAMP_TO_EDGE,[wa]:n.MIRRORED_REPEAT},mt={[hn]:n.NEAREST,[Pf]:n.NEAREST_MIPMAP_NEAREST,[vr]:n.NEAREST_MIPMAP_LINEAR,[Rn]:n.LINEAR,[Eo]:n.LINEAR_MIPMAP_NEAREST,[Ri]:n.LINEAR_MIPMAP_LINEAR},ct={[Uf]:n.NEVER,[kf]:n.ALWAYS,[Nf]:n.LESS,[tu]:n.LEQUAL,[Ff]:n.EQUAL,[zf]:n.GEQUAL,[Of]:n.GREATER,[Bf]:n.NOTEQUAL};function Tt(R,v){if(v.type===Cn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Rn||v.magFilter===Eo||v.magFilter===vr||v.magFilter===Ri||v.minFilter===Rn||v.minFilter===Eo||v.minFilter===vr||v.minFilter===Ri)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,ot[v.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,ot[v.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,ot[v.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,mt[v.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,mt[v.minFilter]),v.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,ct[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===hn||v.minFilter!==vr&&v.minFilter!==Ri||v.type===Cn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");n.texParameterf(R,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function kt(R,v){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,v.addEventListener("dispose",T));const $=v.source;let rt=f.get($);rt===void 0&&(rt={},f.set($,rt));const K=Z(v);if(K!==R.__cacheKey){rt[K]===void 0&&(rt[K]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,z=!0),rt[K].usedTimes++;const It=rt[R.__cacheKey];It!==void 0&&(rt[R.__cacheKey].usedTimes--,It.usedTimes===0&&S(v)),R.__cacheKey=K,R.__webglTexture=rt[K].texture}return z}function ee(R,v,z){return Math.floor(Math.floor(R/z)/v)}function Yt(R,v,z,$){const K=R.updateRanges;if(K.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,z,$,v.data);else{K.sort((ht,bt)=>ht.start-bt.start);let It=0;for(let ht=1;ht<K.length;ht++){const bt=K[It],Gt=K[ht],Ut=bt.start+bt.count,wt=ee(Gt.start,v.width,4),Jt=ee(bt.start,v.width,4);Gt.start<=Ut+1&&wt===Jt&&ee(Gt.start+Gt.count-1,v.width,4)===wt?bt.count=Math.max(bt.count,Gt.start+Gt.count-bt.start):(++It,K[It]=Gt)}K.length=It+1;const _t=n.getParameter(n.UNPACK_ROW_LENGTH),Pt=n.getParameter(n.UNPACK_SKIP_PIXELS),Lt=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let ht=0,bt=K.length;ht<bt;ht++){const Gt=K[ht],Ut=Math.floor(Gt.start/4),wt=Math.ceil(Gt.count/4),Jt=Ut%v.width,U=Math.floor(Ut/v.width),pt=wt,Mt=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Jt),n.pixelStorei(n.UNPACK_SKIP_ROWS,U),e.texSubImage2D(n.TEXTURE_2D,0,Jt,U,pt,Mt,z,$,v.data)}R.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,_t),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Pt),n.pixelStorei(n.UNPACK_SKIP_ROWS,Lt)}}function j(R,v,z){let $=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&($=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&($=n.TEXTURE_3D);const rt=kt(R,v),K=v.source;e.bindTexture($,R.__webglTexture,n.TEXTURE0+z);const It=i.get(K);if(K.version!==It.__version||rt===!0){e.activeTexture(n.TEXTURE0+z);const _t=he.getPrimaries(he.workingColorSpace),Pt=v.colorSpace===ni?null:he.getPrimaries(v.colorSpace),Lt=v.colorSpace===ni||_t===Pt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);let ht=_(v.image,!1,s.maxTextureSize);ht=$t(v,ht);const bt=r.convert(v.format,v.colorSpace),Gt=r.convert(v.type);let Ut=y(v.internalFormat,bt,Gt,v.colorSpace,v.isVideoTexture);Tt($,v);let wt;const Jt=v.mipmaps,U=v.isVideoTexture!==!0,pt=It.__version===void 0||rt===!0,Mt=K.dataReady,Rt=C(v,ht);if(v.isDepthTexture)Ut=x(v.format===sr,v.type),pt&&(U?e.texStorage2D(n.TEXTURE_2D,1,Ut,ht.width,ht.height):e.texImage2D(n.TEXTURE_2D,0,Ut,ht.width,ht.height,0,bt,Gt,null));else if(v.isDataTexture)if(Jt.length>0){U&&pt&&e.texStorage2D(n.TEXTURE_2D,Rt,Ut,Jt[0].width,Jt[0].height);for(let ut=0,nt=Jt.length;ut<nt;ut++)wt=Jt[ut],U?Mt&&e.texSubImage2D(n.TEXTURE_2D,ut,0,0,wt.width,wt.height,bt,Gt,wt.data):e.texImage2D(n.TEXTURE_2D,ut,Ut,wt.width,wt.height,0,bt,Gt,wt.data);v.generateMipmaps=!1}else U?(pt&&e.texStorage2D(n.TEXTURE_2D,Rt,Ut,ht.width,ht.height),Mt&&Yt(v,ht,bt,Gt)):e.texImage2D(n.TEXTURE_2D,0,Ut,ht.width,ht.height,0,bt,Gt,ht.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){U&&pt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Rt,Ut,Jt[0].width,Jt[0].height,ht.depth);for(let ut=0,nt=Jt.length;ut<nt;ut++)if(wt=Jt[ut],v.format!==Sn)if(bt!==null)if(U){if(Mt)if(v.layerUpdates.size>0){const Dt=jl(wt.width,wt.height,v.format,v.type);for(const Zt of v.layerUpdates){const Se=wt.data.subarray(Zt*Dt/wt.data.BYTES_PER_ELEMENT,(Zt+1)*Dt/wt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ut,0,0,Zt,wt.width,wt.height,1,bt,Se)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ut,0,0,0,wt.width,wt.height,ht.depth,bt,wt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ut,Ut,wt.width,wt.height,ht.depth,0,wt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?Mt&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,ut,0,0,0,wt.width,wt.height,ht.depth,bt,Gt,wt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,ut,Ut,wt.width,wt.height,ht.depth,0,bt,Gt,wt.data)}else{U&&pt&&e.texStorage2D(n.TEXTURE_2D,Rt,Ut,Jt[0].width,Jt[0].height);for(let ut=0,nt=Jt.length;ut<nt;ut++)wt=Jt[ut],v.format!==Sn?bt!==null?U?Mt&&e.compressedTexSubImage2D(n.TEXTURE_2D,ut,0,0,wt.width,wt.height,bt,wt.data):e.compressedTexImage2D(n.TEXTURE_2D,ut,Ut,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?Mt&&e.texSubImage2D(n.TEXTURE_2D,ut,0,0,wt.width,wt.height,bt,Gt,wt.data):e.texImage2D(n.TEXTURE_2D,ut,Ut,wt.width,wt.height,0,bt,Gt,wt.data)}else if(v.isDataArrayTexture)if(U){if(pt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Rt,Ut,ht.width,ht.height,ht.depth),Mt)if(v.layerUpdates.size>0){const ut=jl(ht.width,ht.height,v.format,v.type);for(const nt of v.layerUpdates){const Dt=ht.data.subarray(nt*ut/ht.data.BYTES_PER_ELEMENT,(nt+1)*ut/ht.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,nt,ht.width,ht.height,1,bt,Gt,Dt)}v.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,bt,Gt,ht.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Ut,ht.width,ht.height,ht.depth,0,bt,Gt,ht.data);else if(v.isData3DTexture)U?(pt&&e.texStorage3D(n.TEXTURE_3D,Rt,Ut,ht.width,ht.height,ht.depth),Mt&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,bt,Gt,ht.data)):e.texImage3D(n.TEXTURE_3D,0,Ut,ht.width,ht.height,ht.depth,0,bt,Gt,ht.data);else if(v.isFramebufferTexture){if(pt)if(U)e.texStorage2D(n.TEXTURE_2D,Rt,Ut,ht.width,ht.height);else{let ut=ht.width,nt=ht.height;for(let Dt=0;Dt<Rt;Dt++)e.texImage2D(n.TEXTURE_2D,Dt,Ut,ut,nt,0,bt,Gt,null),ut>>=1,nt>>=1}}else if(Jt.length>0){if(U&&pt){const ut=qt(Jt[0]);e.texStorage2D(n.TEXTURE_2D,Rt,Ut,ut.width,ut.height)}for(let ut=0,nt=Jt.length;ut<nt;ut++)wt=Jt[ut],U?Mt&&e.texSubImage2D(n.TEXTURE_2D,ut,0,0,bt,Gt,wt):e.texImage2D(n.TEXTURE_2D,ut,Ut,bt,Gt,wt);v.generateMipmaps=!1}else if(U){if(pt){const ut=qt(ht);e.texStorage2D(n.TEXTURE_2D,Rt,Ut,ut.width,ut.height)}Mt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,bt,Gt,ht)}else e.texImage2D(n.TEXTURE_2D,0,Ut,bt,Gt,ht);m(v)&&p($),It.__version=K.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function H(R,v,z){if(v.image.length!==6)return;const $=kt(R,v),rt=v.source;e.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+z);const K=i.get(rt);if(rt.version!==K.__version||$===!0){e.activeTexture(n.TEXTURE0+z);const It=he.getPrimaries(he.workingColorSpace),_t=v.colorSpace===ni?null:he.getPrimaries(v.colorSpace),Pt=v.colorSpace===ni||It===_t?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);const Lt=v.isCompressedTexture||v.image[0].isCompressedTexture,ht=v.image[0]&&v.image[0].isDataTexture,bt=[];for(let nt=0;nt<6;nt++)!Lt&&!ht?bt[nt]=_(v.image[nt],!0,s.maxCubemapSize):bt[nt]=ht?v.image[nt].image:v.image[nt],bt[nt]=$t(v,bt[nt]);const Gt=bt[0],Ut=r.convert(v.format,v.colorSpace),wt=r.convert(v.type),Jt=y(v.internalFormat,Ut,wt,v.colorSpace),U=v.isVideoTexture!==!0,pt=K.__version===void 0||$===!0,Mt=rt.dataReady;let Rt=C(v,Gt);Tt(n.TEXTURE_CUBE_MAP,v);let ut;if(Lt){U&&pt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Rt,Jt,Gt.width,Gt.height);for(let nt=0;nt<6;nt++){ut=bt[nt].mipmaps;for(let Dt=0;Dt<ut.length;Dt++){const Zt=ut[Dt];v.format!==Sn?Ut!==null?U?Mt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Dt,0,0,Zt.width,Zt.height,Ut,Zt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Dt,Jt,Zt.width,Zt.height,0,Zt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?Mt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Dt,0,0,Zt.width,Zt.height,Ut,wt,Zt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Dt,Jt,Zt.width,Zt.height,0,Ut,wt,Zt.data)}}}else{if(ut=v.mipmaps,U&&pt){ut.length>0&&Rt++;const nt=qt(bt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Rt,Jt,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(ht){U?Mt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,bt[nt].width,bt[nt].height,Ut,wt,bt[nt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Jt,bt[nt].width,bt[nt].height,0,Ut,wt,bt[nt].data);for(let Dt=0;Dt<ut.length;Dt++){const Se=ut[Dt].image[nt].image;U?Mt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Dt+1,0,0,Se.width,Se.height,Ut,wt,Se.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Dt+1,Jt,Se.width,Se.height,0,Ut,wt,Se.data)}}else{U?Mt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Ut,wt,bt[nt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Jt,Ut,wt,bt[nt]);for(let Dt=0;Dt<ut.length;Dt++){const Zt=ut[Dt];U?Mt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Dt+1,0,0,Ut,wt,Zt.image[nt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Dt+1,Jt,Ut,wt,Zt.image[nt])}}}m(v)&&p(n.TEXTURE_CUBE_MAP),K.__version=rt.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function it(R,v,z,$,rt,K){const It=r.convert(z.format,z.colorSpace),_t=r.convert(z.type),Pt=y(z.internalFormat,It,_t,z.colorSpace),Lt=i.get(v),ht=i.get(z);if(ht.__renderTarget=v,!Lt.__hasExternalTextures){const bt=Math.max(1,v.width>>K),Gt=Math.max(1,v.height>>K);rt===n.TEXTURE_3D||rt===n.TEXTURE_2D_ARRAY?e.texImage3D(rt,K,Pt,bt,Gt,v.depth,0,It,_t,null):e.texImage2D(rt,K,Pt,bt,Gt,0,It,_t,null)}e.bindFramebuffer(n.FRAMEBUFFER,R),lt(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,rt,ht.__webglTexture,0,xt(v)):(rt===n.TEXTURE_2D||rt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,$,rt,ht.__webglTexture,K),e.bindFramebuffer(n.FRAMEBUFFER,null)}function at(R,v,z){if(n.bindRenderbuffer(n.RENDERBUFFER,R),v.depthBuffer){const $=v.depthTexture,rt=$&&$.isDepthTexture?$.type:null,K=x(v.stencilBuffer,rt),It=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_t=xt(v);lt(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,_t,K,v.width,v.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,_t,K,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,K,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,It,n.RENDERBUFFER,R)}else{const $=v.textures;for(let rt=0;rt<$.length;rt++){const K=$[rt],It=r.convert(K.format,K.colorSpace),_t=r.convert(K.type),Pt=y(K.internalFormat,It,_t,K.colorSpace),Lt=xt(v);z&&lt(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Lt,Pt,v.width,v.height):lt(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Lt,Pt,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,Pt,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function yt(R,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,R),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=i.get(v.depthTexture);$.__renderTarget=v,(!$.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),W(v.depthTexture,0);const rt=$.__webglTexture,K=xt(v);if(v.depthTexture.format===ir)lt(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,rt,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,rt,0);else if(v.depthTexture.format===sr)lt(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,rt,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,rt,0);else throw new Error("Unknown depthTexture format")}function Ft(R){const v=i.get(R),z=R.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==R.depthTexture){const $=R.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),$){const rt=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,$.removeEventListener("dispose",rt)};$.addEventListener("dispose",rt),v.__depthDisposeCallback=rt}v.__boundDepthTexture=$}if(R.depthTexture&&!v.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");const $=R.texture.mipmaps;$&&$.length>0?yt(v.__webglFramebuffer[0],R):yt(v.__webglFramebuffer,R)}else if(z){v.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[$]),v.__webglDepthbuffer[$]===void 0)v.__webglDepthbuffer[$]=n.createRenderbuffer(),at(v.__webglDepthbuffer[$],R,!1);else{const rt=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=v.__webglDepthbuffer[$];n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,rt,n.RENDERBUFFER,K)}}else{const $=R.texture.mipmaps;if($&&$.length>0?e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),at(v.__webglDepthbuffer,R,!1);else{const rt=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,rt,n.RENDERBUFFER,K)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ce(R,v,z){const $=i.get(R);v!==void 0&&it($.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&Ft(R)}function D(R){const v=R.texture,z=i.get(R),$=i.get(v);R.addEventListener("dispose",b);const rt=R.textures,K=R.isWebGLCubeRenderTarget===!0,It=rt.length>1;if(It||($.__webglTexture===void 0&&($.__webglTexture=n.createTexture()),$.__version=v.version,o.memory.textures++),K){z.__webglFramebuffer=[];for(let _t=0;_t<6;_t++)if(v.mipmaps&&v.mipmaps.length>0){z.__webglFramebuffer[_t]=[];for(let Pt=0;Pt<v.mipmaps.length;Pt++)z.__webglFramebuffer[_t][Pt]=n.createFramebuffer()}else z.__webglFramebuffer[_t]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){z.__webglFramebuffer=[];for(let _t=0;_t<v.mipmaps.length;_t++)z.__webglFramebuffer[_t]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(It)for(let _t=0,Pt=rt.length;_t<Pt;_t++){const Lt=i.get(rt[_t]);Lt.__webglTexture===void 0&&(Lt.__webglTexture=n.createTexture(),o.memory.textures++)}if(R.samples>0&&lt(R)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let _t=0;_t<rt.length;_t++){const Pt=rt[_t];z.__webglColorRenderbuffer[_t]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[_t]);const Lt=r.convert(Pt.format,Pt.colorSpace),ht=r.convert(Pt.type),bt=y(Pt.internalFormat,Lt,ht,Pt.colorSpace,R.isXRRenderTarget===!0),Gt=xt(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,Gt,bt,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.RENDERBUFFER,z.__webglColorRenderbuffer[_t])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),at(z.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(K){e.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),Tt(n.TEXTURE_CUBE_MAP,v);for(let _t=0;_t<6;_t++)if(v.mipmaps&&v.mipmaps.length>0)for(let Pt=0;Pt<v.mipmaps.length;Pt++)it(z.__webglFramebuffer[_t][Pt],R,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Pt);else it(z.__webglFramebuffer[_t],R,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0);m(v)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(It){for(let _t=0,Pt=rt.length;_t<Pt;_t++){const Lt=rt[_t],ht=i.get(Lt);let bt=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(bt=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(bt,ht.__webglTexture),Tt(bt,Lt),it(z.__webglFramebuffer,R,Lt,n.COLOR_ATTACHMENT0+_t,bt,0),m(Lt)&&p(bt)}e.unbindTexture()}else{let _t=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(_t=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(_t,$.__webglTexture),Tt(_t,v),v.mipmaps&&v.mipmaps.length>0)for(let Pt=0;Pt<v.mipmaps.length;Pt++)it(z.__webglFramebuffer[Pt],R,v,n.COLOR_ATTACHMENT0,_t,Pt);else it(z.__webglFramebuffer,R,v,n.COLOR_ATTACHMENT0,_t,0);m(v)&&p(_t),e.unbindTexture()}R.depthBuffer&&Ft(R)}function st(R){const v=R.textures;for(let z=0,$=v.length;z<$;z++){const rt=v[z];if(m(rt)){const K=E(R),It=i.get(rt).__webglTexture;e.bindTexture(K,It),p(K),e.unbindTexture()}}}const et=[],tt=[];function Q(R){if(R.samples>0){if(lt(R)===!1){const v=R.textures,z=R.width,$=R.height;let rt=n.COLOR_BUFFER_BIT;const K=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,It=i.get(R),_t=v.length>1;if(_t)for(let Lt=0;Lt<v.length;Lt++)e.bindFramebuffer(n.FRAMEBUFFER,It.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Lt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,It.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Lt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,It.__webglMultisampledFramebuffer);const Pt=R.texture.mipmaps;Pt&&Pt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,It.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,It.__webglFramebuffer);for(let Lt=0;Lt<v.length;Lt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(rt|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(rt|=n.STENCIL_BUFFER_BIT)),_t){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,It.__webglColorRenderbuffer[Lt]);const ht=i.get(v[Lt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ht,0)}n.blitFramebuffer(0,0,z,$,0,0,z,$,rt,n.NEAREST),c===!0&&(et.length=0,tt.length=0,et.push(n.COLOR_ATTACHMENT0+Lt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(et.push(K),tt.push(K),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,tt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,et))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),_t)for(let Lt=0;Lt<v.length;Lt++){e.bindFramebuffer(n.FRAMEBUFFER,It.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Lt,n.RENDERBUFFER,It.__webglColorRenderbuffer[Lt]);const ht=i.get(v[Lt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,It.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Lt,n.TEXTURE_2D,ht,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,It.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const v=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function xt(R){return Math.min(s.maxSamples,R.samples)}function lt(R){const v=i.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function vt(R){const v=o.render.frame;h.get(R)!==v&&(h.set(R,v),R.update())}function $t(R,v){const z=R.colorSpace,$=R.format,rt=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||z!==_s&&z!==ni&&(he.getTransfer(z)===me?($!==Sn||rt!==In)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),v}function qt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=V,this.resetTextureUnits=N,this.setTexture2D=W,this.setTexture2DArray=k,this.setTexture3D=q,this.setTextureCube=G,this.rebindTextures=ce,this.setupRenderTarget=D,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=Q,this.setupDepthRenderbuffer=Ft,this.setupFrameBufferTexture=it,this.useMultisampledRTT=lt}function j_(n,t){function e(i,s=ni){let r;const o=he.getTransfer(s);if(i===In)return n.UNSIGNED_BYTE;if(i===yc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Sc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===$h)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Zh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===qh)return n.BYTE;if(i===Yh)return n.SHORT;if(i===er)return n.UNSIGNED_SHORT;if(i===Mc)return n.INT;if(i===Li)return n.UNSIGNED_INT;if(i===Cn)return n.FLOAT;if(i===dr)return n.HALF_FLOAT;if(i===Kh)return n.ALPHA;if(i===Jh)return n.RGB;if(i===Sn)return n.RGBA;if(i===ir)return n.DEPTH_COMPONENT;if(i===sr)return n.DEPTH_STENCIL;if(i===wc)return n.RED;if(i===Ec)return n.RED_INTEGER;if(i===jh)return n.RG;if(i===bc)return n.RG_INTEGER;if(i===Tc)return n.RGBA_INTEGER;if(i===eo||i===no||i===io||i===so)if(o===me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===eo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===no)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===so)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===eo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===no)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===io)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===so)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ea||i===ba||i===Ta||i===Aa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ea)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ba)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ta)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Aa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ra||i===Ca||i===Pa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ra||i===Ca)return o===me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Pa)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===La||i===Da||i===Ia||i===Ua||i===Na||i===Fa||i===Oa||i===Ba||i===za||i===ka||i===Ha||i===Ga||i===Va||i===Wa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===La)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Da)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ia)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ua)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Na)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Fa)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Oa)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ba)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===za)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ka)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ha)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ga)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Va)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Wa)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Xa||i===qa||i===Ya)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Xa)return o===me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===qa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ya)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===$a||i===Za||i===Ka||i===Ja)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===$a)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Za)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ka)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ja)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===nr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const Q_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ex{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new gu(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new En({vertexShader:Q_,fragmentShader:tx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new gt(new wn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class nx extends bs{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,g=null;const _=typeof XRWebGLBinding<"u",m=new ex,p={},E=e.getContextAttributes();let y=null,x=null;const C=[],T=[],b=new dt;let A=null;const S=new nn;S.viewport=new ge;const M=new nn;M.viewport=new ge;const L=[S,M],N=new wp;let V=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let H=C[j];return H===void 0&&(H=new Xo,C[j]=H),H.getTargetRaySpace()},this.getControllerGrip=function(j){let H=C[j];return H===void 0&&(H=new Xo,C[j]=H),H.getGripSpace()},this.getHand=function(j){let H=C[j];return H===void 0&&(H=new Xo,C[j]=H),H.getHandSpace()};function W(j){const H=T.indexOf(j.inputSource);if(H===-1)return;const it=C[H];it!==void 0&&(it.update(j.inputSource,j.frame,l||o),it.dispatchEvent({type:j.type,data:j.inputSource}))}function k(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",q);for(let j=0;j<C.length;j++){const H=T[j];H!==null&&(T[j]=null,C[j].disconnect(H))}V=null,Z=null,m.reset();for(const j in p)delete p[j];t.setRenderTarget(y),d=null,f=null,u=null,s=null,x=null,Yt.stop(),i.isPresenting=!1,t.setPixelRatio(A),t.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(y=t.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",k),s.addEventListener("inputsourceschange",q),E.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(b),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let it=null,at=null,yt=null;E.depth&&(yt=E.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=E.stencil?sr:ir,at=E.stencil?nr:Li);const Ft={colorFormat:e.RGBA8,depthFormat:yt,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Ft),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),x=new Di(f.textureWidth,f.textureHeight,{format:Sn,type:In,depthTexture:new mu(f.textureWidth,f.textureHeight,at,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:E.stencil,colorSpace:t.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const it={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,it),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new Di(d.framebufferWidth,d.framebufferHeight,{format:Sn,type:In,colorSpace:t.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Yt.setContext(s),Yt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function q(j){for(let H=0;H<j.removed.length;H++){const it=j.removed[H],at=T.indexOf(it);at>=0&&(T[at]=null,C[at].disconnect(it))}for(let H=0;H<j.added.length;H++){const it=j.added[H];let at=T.indexOf(it);if(at===-1){for(let Ft=0;Ft<C.length;Ft++)if(Ft>=T.length){T.push(it),at=Ft;break}else if(T[Ft]===null){T[Ft]=it,at=Ft;break}if(at===-1)break}const yt=C[at];yt&&yt.connect(it)}}const G=new P,ot=new P;function mt(j,H,it){G.setFromMatrixPosition(H.matrixWorld),ot.setFromMatrixPosition(it.matrixWorld);const at=G.distanceTo(ot),yt=H.projectionMatrix.elements,Ft=it.projectionMatrix.elements,ce=yt[14]/(yt[10]-1),D=yt[14]/(yt[10]+1),st=(yt[9]+1)/yt[5],et=(yt[9]-1)/yt[5],tt=(yt[8]-1)/yt[0],Q=(Ft[8]+1)/Ft[0],xt=ce*tt,lt=ce*Q,vt=at/(-tt+Q),$t=vt*-tt;if(H.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX($t),j.translateZ(vt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),yt[10]===-1)j.projectionMatrix.copy(H.projectionMatrix),j.projectionMatrixInverse.copy(H.projectionMatrixInverse);else{const qt=ce+vt,R=D+vt,v=xt-$t,z=lt+(at-$t),$=st*D/R*qt,rt=et*D/R*qt;j.projectionMatrix.makePerspective(v,z,$,rt,qt,R),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function ct(j,H){H===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(H.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let H=j.near,it=j.far;m.texture!==null&&(m.depthNear>0&&(H=m.depthNear),m.depthFar>0&&(it=m.depthFar)),N.near=M.near=S.near=H,N.far=M.far=S.far=it,(V!==N.near||Z!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),V=N.near,Z=N.far),N.layers.mask=j.layers.mask|6,S.layers.mask=N.layers.mask&3,M.layers.mask=N.layers.mask&5;const at=j.parent,yt=N.cameras;ct(N,at);for(let Ft=0;Ft<yt.length;Ft++)ct(yt[Ft],at);yt.length===2?mt(N,S,M):N.projectionMatrix.copy(S.projectionMatrix),Tt(j,N,at)};function Tt(j,H,it){it===null?j.matrix.copy(H.matrixWorld):(j.matrix.copy(it.matrixWorld),j.matrix.invert(),j.matrix.multiply(H.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(H.projectionMatrix),j.projectionMatrixInverse.copy(H.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=xs*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(j){c=j,f!==null&&(f.fixedFoveation=j),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(j){return p[j]};let kt=null;function ee(j,H){if(h=H.getViewerPose(l||o),g=H,h!==null){const it=h.views;d!==null&&(t.setRenderTargetFramebuffer(x,d.framebuffer),t.setRenderTarget(x));let at=!1;it.length!==N.cameras.length&&(N.cameras.length=0,at=!0);for(let D=0;D<it.length;D++){const st=it[D];let et=null;if(d!==null)et=d.getViewport(st);else{const Q=u.getViewSubImage(f,st);et=Q.viewport,D===0&&(t.setRenderTargetTextures(x,Q.colorTexture,Q.depthStencilTexture),t.setRenderTarget(x))}let tt=L[D];tt===void 0&&(tt=new nn,tt.layers.enable(D),tt.viewport=new ge,L[D]=tt),tt.matrix.fromArray(st.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(st.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(et.x,et.y,et.width,et.height),D===0&&(N.matrix.copy(tt.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),at===!0&&N.cameras.push(tt)}const yt=s.enabledFeatures;if(yt&&yt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=i.getBinding();const D=u.getDepthInformation(it[0]);D&&D.isValid&&D.texture&&m.init(D,s.renderState)}if(yt&&yt.includes("camera-access")&&_){t.state.unbindTexture(),u=i.getBinding();for(let D=0;D<it.length;D++){const st=it[D].camera;if(st){let et=p[st];et||(et=new gu,p[st]=et);const tt=u.getCameraImage(st);et.sourceTexture=tt}}}}for(let it=0;it<C.length;it++){const at=T[it],yt=C[it];at!==null&&yt!==void 0&&yt.update(at,H,l||o)}kt&&kt(j,H),H.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:H}),g=null}const Yt=new Pu;Yt.setAnimationLoop(ee),this.setAnimationLoop=function(j){kt=j},this.dispose=function(){}}}const Mi=new tn,ix=new oe;function sx(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,au(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,E,y,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,E,y):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Qe&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Qe&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const E=t.get(p),y=E.envMap,x=E.envMapRotation;y&&(m.envMap.value=y,Mi.copy(x),Mi.x*=-1,Mi.y*=-1,Mi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Mi.y*=-1,Mi.z*=-1),m.envMapRotation.value.setFromMatrix4(ix.makeRotationFromEuler(Mi)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,E,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Qe&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const E=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function rx(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,y){const x=y.program;i.uniformBlockBinding(E,x)}function l(E,y){let x=s[E.id];x===void 0&&(g(E),x=h(E),s[E.id]=x,E.addEventListener("dispose",m));const C=y.program;i.updateUBOMapping(E,C);const T=t.render.frame;r[E.id]!==T&&(f(E),r[E.id]=T)}function h(E){const y=u();E.__bindingPointIndex=y;const x=n.createBuffer(),C=E.__size,T=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,C,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,x),x}function u(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const y=s[E.id],x=E.uniforms,C=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let T=0,b=x.length;T<b;T++){const A=Array.isArray(x[T])?x[T]:[x[T]];for(let S=0,M=A.length;S<M;S++){const L=A[S];if(d(L,T,S,C)===!0){const N=L.__offset,V=Array.isArray(L.value)?L.value:[L.value];let Z=0;for(let W=0;W<V.length;W++){const k=V[W],q=_(k);typeof k=="number"||typeof k=="boolean"?(L.__data[0]=k,n.bufferSubData(n.UNIFORM_BUFFER,N+Z,L.__data)):k.isMatrix3?(L.__data[0]=k.elements[0],L.__data[1]=k.elements[1],L.__data[2]=k.elements[2],L.__data[3]=0,L.__data[4]=k.elements[3],L.__data[5]=k.elements[4],L.__data[6]=k.elements[5],L.__data[7]=0,L.__data[8]=k.elements[6],L.__data[9]=k.elements[7],L.__data[10]=k.elements[8],L.__data[11]=0):(k.toArray(L.__data,Z),Z+=q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(E,y,x,C){const T=E.value,b=y+"_"+x;if(C[b]===void 0)return typeof T=="number"||typeof T=="boolean"?C[b]=T:C[b]=T.clone(),!0;{const A=C[b];if(typeof T=="number"||typeof T=="boolean"){if(A!==T)return C[b]=T,!0}else if(A.equals(T)===!1)return A.copy(T),!0}return!1}function g(E){const y=E.uniforms;let x=0;const C=16;for(let b=0,A=y.length;b<A;b++){const S=Array.isArray(y[b])?y[b]:[y[b]];for(let M=0,L=S.length;M<L;M++){const N=S[M],V=Array.isArray(N.value)?N.value:[N.value];for(let Z=0,W=V.length;Z<W;Z++){const k=V[Z],q=_(k),G=x%C,ot=G%q.boundary,mt=G+ot;x+=ot,mt!==0&&C-mt<q.storage&&(x+=C-mt),N.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=x,x+=q.storage}}}const T=x%C;return T>0&&(x+=C-T),E.__size=x,E.__cache={},this}function _(E){const y={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(y.boundary=4,y.storage=4):E.isVector2?(y.boundary=8,y.storage=8):E.isVector3||E.isColor?(y.boundary=16,y.storage=12):E.isVector4?(y.boundary=16,y.storage=16):E.isMatrix3?(y.boundary=48,y.storage=48):E.isMatrix4?(y.boundary=64,y.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),y}function m(E){const y=E.target;y.removeEventListener("dispose",m);const x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(const E in s)n.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class ox{constructor(t={}){const{canvas:e=id(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const E=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=oi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let C=!1;this._outputColorSpace=be;let T=0,b=0,A=null,S=-1,M=null;const L=new ge,N=new ge;let V=null;const Z=new zt(0);let W=0,k=e.width,q=e.height,G=1,ot=null,mt=null;const ct=new ge(0,0,k,q),Tt=new ge(0,0,k,q);let kt=!1;const ee=new Lc;let Yt=!1,j=!1;const H=new oe,it=new P,at=new ge,yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ft=!1;function ce(){return A===null?G:1}let D=i;function st(w,F){return e.getContext(w,F)}try{const w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${vc}`),e.addEventListener("webglcontextlost",Mt,!1),e.addEventListener("webglcontextrestored",Rt,!1),e.addEventListener("webglcontextcreationerror",ut,!1),D===null){const F="webgl2";if(D=st(F,w),D===null)throw st(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let et,tt,Q,xt,lt,vt,$t,qt,R,v,z,$,rt,K,It,_t,Pt,Lt,ht,bt,Gt,Ut,wt,Jt;function U(){et=new gg(D),et.init(),Ut=new j_(D,et),tt=new lg(D,et,t,Ut),Q=new K_(D,et),tt.reversedDepthBuffer&&f&&Q.buffers.depth.setReversed(!0),xt=new vg(D),lt=new O_,vt=new J_(D,et,Q,lt,tt,Ut,xt),$t=new ug(x),qt=new mg(x),R=new bp(D),wt=new ag(D,R),v=new _g(D,R,xt,wt),z=new yg(D,v,R,xt),ht=new Mg(D,tt,vt),_t=new hg(lt),$=new F_(x,$t,qt,et,tt,wt,_t),rt=new sx(x,lt),K=new z_,It=new X_(et),Lt=new og(x,$t,qt,Q,z,d,c),Pt=new $_(x,z,tt),Jt=new rx(D,xt,tt,Q),bt=new cg(D,et,xt),Gt=new xg(D,et,xt),xt.programs=$.programs,x.capabilities=tt,x.extensions=et,x.properties=lt,x.renderLists=K,x.shadowMap=Pt,x.state=Q,x.info=xt}U();const pt=new nx(x,D);this.xr=pt,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const w=et.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=et.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(w){w!==void 0&&(G=w,this.setSize(k,q,!1))},this.getSize=function(w){return w.set(k,q)},this.setSize=function(w,F,X=!0){if(pt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=w,q=F,e.width=Math.floor(w*G),e.height=Math.floor(F*G),X===!0&&(e.style.width=w+"px",e.style.height=F+"px"),this.setViewport(0,0,w,F)},this.getDrawingBufferSize=function(w){return w.set(k*G,q*G).floor()},this.setDrawingBufferSize=function(w,F,X){k=w,q=F,G=X,e.width=Math.floor(w*X),e.height=Math.floor(F*X),this.setViewport(0,0,w,F)},this.getCurrentViewport=function(w){return w.copy(L)},this.getViewport=function(w){return w.copy(ct)},this.setViewport=function(w,F,X,Y){w.isVector4?ct.set(w.x,w.y,w.z,w.w):ct.set(w,F,X,Y),Q.viewport(L.copy(ct).multiplyScalar(G).round())},this.getScissor=function(w){return w.copy(Tt)},this.setScissor=function(w,F,X,Y){w.isVector4?Tt.set(w.x,w.y,w.z,w.w):Tt.set(w,F,X,Y),Q.scissor(N.copy(Tt).multiplyScalar(G).round())},this.getScissorTest=function(){return kt},this.setScissorTest=function(w){Q.setScissorTest(kt=w)},this.setOpaqueSort=function(w){ot=w},this.setTransparentSort=function(w){mt=w},this.getClearColor=function(w){return w.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor(...arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha(...arguments)},this.clear=function(w=!0,F=!0,X=!0){let Y=0;if(w){let O=!1;if(A!==null){const ft=A.texture.format;O=ft===Tc||ft===bc||ft===Ec}if(O){const ft=A.texture.type,Et=ft===In||ft===Li||ft===er||ft===nr||ft===yc||ft===Sc,Ct=Lt.getClearColor(),At=Lt.getClearAlpha(),Ht=Ct.r,Wt=Ct.g,Nt=Ct.b;Et?(g[0]=Ht,g[1]=Wt,g[2]=Nt,g[3]=At,D.clearBufferuiv(D.COLOR,0,g)):(_[0]=Ht,_[1]=Wt,_[2]=Nt,_[3]=At,D.clearBufferiv(D.COLOR,0,_))}else Y|=D.COLOR_BUFFER_BIT}F&&(Y|=D.DEPTH_BUFFER_BIT),X&&(Y|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Mt,!1),e.removeEventListener("webglcontextrestored",Rt,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),Lt.dispose(),K.dispose(),It.dispose(),lt.dispose(),$t.dispose(),qt.dispose(),z.dispose(),wt.dispose(),Jt.dispose(),$.dispose(),pt.dispose(),pt.removeEventListener("sessionstart",Tn),pt.removeEventListener("sessionend",il),di.stop()};function Mt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function Rt(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const w=xt.autoReset,F=Pt.enabled,X=Pt.autoUpdate,Y=Pt.needsUpdate,O=Pt.type;U(),xt.autoReset=w,Pt.enabled=F,Pt.autoUpdate=X,Pt.needsUpdate=Y,Pt.type=O}function ut(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function nt(w){const F=w.target;F.removeEventListener("dispose",nt),Dt(F)}function Dt(w){Zt(w),lt.remove(w)}function Zt(w){const F=lt.get(w).programs;F!==void 0&&(F.forEach(function(X){$.releaseProgram(X)}),w.isShaderMaterial&&$.releaseShaderCache(w))}this.renderBufferDirect=function(w,F,X,Y,O,ft){F===null&&(F=yt);const Et=O.isMesh&&O.matrixWorld.determinant()<0,Ct=Zu(w,F,X,Y,O);Q.setMaterial(Y,Et);let At=X.index,Ht=1;if(Y.wireframe===!0){if(At=v.getWireframeAttribute(X),At===void 0)return;Ht=2}const Wt=X.drawRange,Nt=X.attributes.position;let se=Wt.start*Ht,pe=(Wt.start+Wt.count)*Ht;ft!==null&&(se=Math.max(se,ft.start*Ht),pe=Math.min(pe,(ft.start+ft.count)*Ht)),At!==null?(se=Math.max(se,0),pe=Math.min(pe,At.count)):Nt!=null&&(se=Math.max(se,0),pe=Math.min(pe,Nt.count));const Le=pe-se;if(Le<0||Le===1/0)return;wt.setup(O,Y,Ct,X,At);let Ee,ve=bt;if(At!==null&&(Ee=R.get(At),ve=Gt,ve.setIndex(Ee)),O.isMesh)Y.wireframe===!0?(Q.setLineWidth(Y.wireframeLinewidth*ce()),ve.setMode(D.LINES)):ve.setMode(D.TRIANGLES);else if(O.isLine){let Ot=Y.linewidth;Ot===void 0&&(Ot=1),Q.setLineWidth(Ot*ce()),O.isLineSegments?ve.setMode(D.LINES):O.isLineLoop?ve.setMode(D.LINE_LOOP):ve.setMode(D.LINE_STRIP)}else O.isPoints?ve.setMode(D.POINTS):O.isSprite&&ve.setMode(D.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)rr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ve.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))ve.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Ot=O._multiDrawStarts,Ae=O._multiDrawCounts,le=O._multiDrawCount,sn=At?R.get(At).bytesPerElement:1,Bi=lt.get(Y).currentProgram.getUniforms();for(let rn=0;rn<le;rn++)Bi.setValue(D,"_gl_DrawID",rn),ve.render(Ot[rn]/sn,Ae[rn])}else if(O.isInstancedMesh)ve.renderInstances(se,Le,O.count);else if(X.isInstancedBufferGeometry){const Ot=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Ae=Math.min(X.instanceCount,Ot);ve.renderInstances(se,Le,Ae)}else ve.render(se,Le)};function Se(w,F,X){w.transparent===!0&&w.side===ke&&w.forceSinglePass===!1?(w.side=Qe,w.needsUpdate=!0,xr(w,F,X),w.side=ci,w.needsUpdate=!0,xr(w,F,X),w.side=ke):xr(w,F,X)}this.compile=function(w,F,X=null){X===null&&(X=w),p=It.get(X),p.init(F),y.push(p),X.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),w!==X&&w.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const Y=new Set;return w.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const ft=O.material;if(ft)if(Array.isArray(ft))for(let Et=0;Et<ft.length;Et++){const Ct=ft[Et];Se(Ct,X,O),Y.add(Ct)}else Se(ft,X,O),Y.add(ft)}),p=y.pop(),Y},this.compileAsync=function(w,F,X=null){const Y=this.compile(w,F,X);return new Promise(O=>{function ft(){if(Y.forEach(function(Et){lt.get(Et).currentProgram.isReady()&&Y.delete(Et)}),Y.size===0){O(w);return}setTimeout(ft,10)}et.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let fe=null;function Bn(w){fe&&fe(w)}function Tn(){di.stop()}function il(){di.start()}const di=new Pu;di.setAnimationLoop(Bn),typeof self<"u"&&di.setContext(self),this.setAnimationLoop=function(w){fe=w,pt.setAnimationLoop(w),w===null?di.stop():di.start()},pt.addEventListener("sessionstart",Tn),pt.addEventListener("sessionend",il),this.render=function(w,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),pt.enabled===!0&&pt.isPresenting===!0&&(pt.cameraAutoUpdate===!0&&pt.updateCamera(F),F=pt.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,F,A),p=It.get(w,y.length),p.init(F),y.push(p),H.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),ee.setFromProjectionMatrix(H,Pn,F.reversedDepth),j=this.localClippingEnabled,Yt=_t.init(this.clippingPlanes,j),m=K.get(w,E.length),m.init(),E.push(m),pt.enabled===!0&&pt.isPresenting===!0){const ft=x.xr.getDepthSensingMesh();ft!==null&&So(ft,F,-1/0,x.sortObjects)}So(w,F,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(ot,mt),Ft=pt.enabled===!1||pt.isPresenting===!1||pt.hasDepthSensing()===!1,Ft&&Lt.addToRenderList(m,w),this.info.render.frame++,Yt===!0&&_t.beginShadows();const X=p.state.shadowsArray;Pt.render(X,w,F),Yt===!0&&_t.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=m.opaque,O=m.transmissive;if(p.setupLights(),F.isArrayCamera){const ft=F.cameras;if(O.length>0)for(let Et=0,Ct=ft.length;Et<Ct;Et++){const At=ft[Et];rl(Y,O,w,At)}Ft&&Lt.render(w);for(let Et=0,Ct=ft.length;Et<Ct;Et++){const At=ft[Et];sl(m,w,At,At.viewport)}}else O.length>0&&rl(Y,O,w,F),Ft&&Lt.render(w),sl(m,w,F);A!==null&&b===0&&(vt.updateMultisampleRenderTarget(A),vt.updateRenderTargetMipmap(A)),w.isScene===!0&&w.onAfterRender(x,w,F),wt.resetDefaultState(),S=-1,M=null,y.pop(),y.length>0?(p=y[y.length-1],Yt===!0&&_t.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function So(w,F,X,Y){if(w.visible===!1)return;if(w.layers.test(F.layers)){if(w.isGroup)X=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(F);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||ee.intersectsSprite(w)){Y&&at.setFromMatrixPosition(w.matrixWorld).applyMatrix4(H);const Et=z.update(w),Ct=w.material;Ct.visible&&m.push(w,Et,Ct,X,at.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||ee.intersectsObject(w))){const Et=z.update(w),Ct=w.material;if(Y&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),at.copy(w.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),at.copy(Et.boundingSphere.center)),at.applyMatrix4(w.matrixWorld).applyMatrix4(H)),Array.isArray(Ct)){const At=Et.groups;for(let Ht=0,Wt=At.length;Ht<Wt;Ht++){const Nt=At[Ht],se=Ct[Nt.materialIndex];se&&se.visible&&m.push(w,Et,se,X,at.z,Nt)}}else Ct.visible&&m.push(w,Et,Ct,X,at.z,null)}}const ft=w.children;for(let Et=0,Ct=ft.length;Et<Ct;Et++)So(ft[Et],F,X,Y)}function sl(w,F,X,Y){const O=w.opaque,ft=w.transmissive,Et=w.transparent;p.setupLightsView(X),Yt===!0&&_t.setGlobalState(x.clippingPlanes,X),Y&&Q.viewport(L.copy(Y)),O.length>0&&_r(O,F,X),ft.length>0&&_r(ft,F,X),Et.length>0&&_r(Et,F,X),Q.buffers.depth.setTest(!0),Q.buffers.depth.setMask(!0),Q.buffers.color.setMask(!0),Q.setPolygonOffset(!1)}function rl(w,F,X,Y){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Y.id]===void 0&&(p.state.transmissionRenderTarget[Y.id]=new Di(1,1,{generateMipmaps:!0,type:et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float")?dr:In,minFilter:Ri,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:he.workingColorSpace}));const ft=p.state.transmissionRenderTarget[Y.id],Et=Y.viewport||L;ft.setSize(Et.z*x.transmissionResolutionScale,Et.w*x.transmissionResolutionScale);const Ct=x.getRenderTarget(),At=x.getActiveCubeFace(),Ht=x.getActiveMipmapLevel();x.setRenderTarget(ft),x.getClearColor(Z),W=x.getClearAlpha(),W<1&&x.setClearColor(16777215,.5),x.clear(),Ft&&Lt.render(X);const Wt=x.toneMapping;x.toneMapping=oi;const Nt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),p.setupLightsView(Y),Yt===!0&&_t.setGlobalState(x.clippingPlanes,Y),_r(w,X,Y),vt.updateMultisampleRenderTarget(ft),vt.updateRenderTargetMipmap(ft),et.has("WEBGL_multisampled_render_to_texture")===!1){let se=!1;for(let pe=0,Le=F.length;pe<Le;pe++){const Ee=F[pe],ve=Ee.object,Ot=Ee.geometry,Ae=Ee.material,le=Ee.group;if(Ae.side===ke&&ve.layers.test(Y.layers)){const sn=Ae.side;Ae.side=Qe,Ae.needsUpdate=!0,ol(ve,X,Y,Ot,Ae,le),Ae.side=sn,Ae.needsUpdate=!0,se=!0}}se===!0&&(vt.updateMultisampleRenderTarget(ft),vt.updateRenderTargetMipmap(ft))}x.setRenderTarget(Ct,At,Ht),x.setClearColor(Z,W),Nt!==void 0&&(Y.viewport=Nt),x.toneMapping=Wt}function _r(w,F,X){const Y=F.isScene===!0?F.overrideMaterial:null;for(let O=0,ft=w.length;O<ft;O++){const Et=w[O],Ct=Et.object,At=Et.geometry,Ht=Et.group;let Wt=Et.material;Wt.allowOverride===!0&&Y!==null&&(Wt=Y),Ct.layers.test(X.layers)&&ol(Ct,F,X,At,Wt,Ht)}}function ol(w,F,X,Y,O,ft){w.onBeforeRender(x,F,X,Y,O,ft),w.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),O.onBeforeRender(x,F,X,Y,w,ft),O.transparent===!0&&O.side===ke&&O.forceSinglePass===!1?(O.side=Qe,O.needsUpdate=!0,x.renderBufferDirect(X,F,Y,O,w,ft),O.side=ci,O.needsUpdate=!0,x.renderBufferDirect(X,F,Y,O,w,ft),O.side=ke):x.renderBufferDirect(X,F,Y,O,w,ft),w.onAfterRender(x,F,X,Y,O,ft)}function xr(w,F,X){F.isScene!==!0&&(F=yt);const Y=lt.get(w),O=p.state.lights,ft=p.state.shadowsArray,Et=O.state.version,Ct=$.getParameters(w,O.state,ft,F,X),At=$.getProgramCacheKey(Ct);let Ht=Y.programs;Y.environment=w.isMeshStandardMaterial?F.environment:null,Y.fog=F.fog,Y.envMap=(w.isMeshStandardMaterial?qt:$t).get(w.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&w.envMap===null?F.environmentRotation:w.envMapRotation,Ht===void 0&&(w.addEventListener("dispose",nt),Ht=new Map,Y.programs=Ht);let Wt=Ht.get(At);if(Wt!==void 0){if(Y.currentProgram===Wt&&Y.lightsStateVersion===Et)return cl(w,Ct),Wt}else Ct.uniforms=$.getUniforms(w),w.onBeforeCompile(Ct,x),Wt=$.acquireProgram(Ct,At),Ht.set(At,Wt),Y.uniforms=Ct.uniforms;const Nt=Y.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Nt.clippingPlanes=_t.uniform),cl(w,Ct),Y.needsLights=Ju(w),Y.lightsStateVersion=Et,Y.needsLights&&(Nt.ambientLightColor.value=O.state.ambient,Nt.lightProbe.value=O.state.probe,Nt.directionalLights.value=O.state.directional,Nt.directionalLightShadows.value=O.state.directionalShadow,Nt.spotLights.value=O.state.spot,Nt.spotLightShadows.value=O.state.spotShadow,Nt.rectAreaLights.value=O.state.rectArea,Nt.ltc_1.value=O.state.rectAreaLTC1,Nt.ltc_2.value=O.state.rectAreaLTC2,Nt.pointLights.value=O.state.point,Nt.pointLightShadows.value=O.state.pointShadow,Nt.hemisphereLights.value=O.state.hemi,Nt.directionalShadowMap.value=O.state.directionalShadowMap,Nt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Nt.spotShadowMap.value=O.state.spotShadowMap,Nt.spotLightMatrix.value=O.state.spotLightMatrix,Nt.spotLightMap.value=O.state.spotLightMap,Nt.pointShadowMap.value=O.state.pointShadowMap,Nt.pointShadowMatrix.value=O.state.pointShadowMatrix),Y.currentProgram=Wt,Y.uniformsList=null,Wt}function al(w){if(w.uniformsList===null){const F=w.currentProgram.getUniforms();w.uniformsList=ro.seqWithValue(F.seq,w.uniforms)}return w.uniformsList}function cl(w,F){const X=lt.get(w);X.outputColorSpace=F.outputColorSpace,X.batching=F.batching,X.batchingColor=F.batchingColor,X.instancing=F.instancing,X.instancingColor=F.instancingColor,X.instancingMorph=F.instancingMorph,X.skinning=F.skinning,X.morphTargets=F.morphTargets,X.morphNormals=F.morphNormals,X.morphColors=F.morphColors,X.morphTargetsCount=F.morphTargetsCount,X.numClippingPlanes=F.numClippingPlanes,X.numIntersection=F.numClipIntersection,X.vertexAlphas=F.vertexAlphas,X.vertexTangents=F.vertexTangents,X.toneMapping=F.toneMapping}function Zu(w,F,X,Y,O){F.isScene!==!0&&(F=yt),vt.resetTextureUnits();const ft=F.fog,Et=Y.isMeshStandardMaterial?F.environment:null,Ct=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:_s,At=(Y.isMeshStandardMaterial?qt:$t).get(Y.envMap||Et),Ht=Y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Wt=!!X.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Nt=!!X.morphAttributes.position,se=!!X.morphAttributes.normal,pe=!!X.morphAttributes.color;let Le=oi;Y.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Le=x.toneMapping);const Ee=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ve=Ee!==void 0?Ee.length:0,Ot=lt.get(Y),Ae=p.state.lights;if(Yt===!0&&(j===!0||w!==M)){const Ze=w===M&&Y.id===S;_t.setState(Y,w,Ze)}let le=!1;Y.version===Ot.__version?(Ot.needsLights&&Ot.lightsStateVersion!==Ae.state.version||Ot.outputColorSpace!==Ct||O.isBatchedMesh&&Ot.batching===!1||!O.isBatchedMesh&&Ot.batching===!0||O.isBatchedMesh&&Ot.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ot.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ot.instancing===!1||!O.isInstancedMesh&&Ot.instancing===!0||O.isSkinnedMesh&&Ot.skinning===!1||!O.isSkinnedMesh&&Ot.skinning===!0||O.isInstancedMesh&&Ot.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ot.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ot.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ot.instancingMorph===!1&&O.morphTexture!==null||Ot.envMap!==At||Y.fog===!0&&Ot.fog!==ft||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==_t.numPlanes||Ot.numIntersection!==_t.numIntersection)||Ot.vertexAlphas!==Ht||Ot.vertexTangents!==Wt||Ot.morphTargets!==Nt||Ot.morphNormals!==se||Ot.morphColors!==pe||Ot.toneMapping!==Le||Ot.morphTargetsCount!==ve)&&(le=!0):(le=!0,Ot.__version=Y.version);let sn=Ot.currentProgram;le===!0&&(sn=xr(Y,F,O));let Bi=!1,rn=!1,Cs=!1;const Re=sn.getUniforms(),dn=Ot.uniforms;if(Q.useProgram(sn.program)&&(Bi=!0,rn=!0,Cs=!0),Y.id!==S&&(S=Y.id,rn=!0),Bi||M!==w){Q.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Re.setValue(D,"projectionMatrix",w.projectionMatrix),Re.setValue(D,"viewMatrix",w.matrixWorldInverse);const en=Re.map.cameraPosition;en!==void 0&&en.setValue(D,it.setFromMatrixPosition(w.matrixWorld)),tt.logarithmicDepthBuffer&&Re.setValue(D,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Re.setValue(D,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,rn=!0,Cs=!0)}if(O.isSkinnedMesh){Re.setOptional(D,O,"bindMatrix"),Re.setOptional(D,O,"bindMatrixInverse");const Ze=O.skeleton;Ze&&(Ze.boneTexture===null&&Ze.computeBoneTexture(),Re.setValue(D,"boneTexture",Ze.boneTexture,vt))}O.isBatchedMesh&&(Re.setOptional(D,O,"batchingTexture"),Re.setValue(D,"batchingTexture",O._matricesTexture,vt),Re.setOptional(D,O,"batchingIdTexture"),Re.setValue(D,"batchingIdTexture",O._indirectTexture,vt),Re.setOptional(D,O,"batchingColorTexture"),O._colorsTexture!==null&&Re.setValue(D,"batchingColorTexture",O._colorsTexture,vt));const pn=X.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&ht.update(O,X,sn),(rn||Ot.receiveShadow!==O.receiveShadow)&&(Ot.receiveShadow=O.receiveShadow,Re.setValue(D,"receiveShadow",O.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(dn.envMap.value=At,dn.flipEnvMap.value=At.isCubeTexture&&At.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&F.environment!==null&&(dn.envMapIntensity.value=F.environmentIntensity),rn&&(Re.setValue(D,"toneMappingExposure",x.toneMappingExposure),Ot.needsLights&&Ku(dn,Cs),ft&&Y.fog===!0&&rt.refreshFogUniforms(dn,ft),rt.refreshMaterialUniforms(dn,Y,G,q,p.state.transmissionRenderTarget[w.id]),ro.upload(D,al(Ot),dn,vt)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(ro.upload(D,al(Ot),dn,vt),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Re.setValue(D,"center",O.center),Re.setValue(D,"modelViewMatrix",O.modelViewMatrix),Re.setValue(D,"normalMatrix",O.normalMatrix),Re.setValue(D,"modelMatrix",O.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Ze=Y.uniformsGroups;for(let en=0,wo=Ze.length;en<wo;en++){const pi=Ze[en];Jt.update(pi,sn),Jt.bind(pi,sn)}}return sn}function Ku(w,F){w.ambientLightColor.needsUpdate=F,w.lightProbe.needsUpdate=F,w.directionalLights.needsUpdate=F,w.directionalLightShadows.needsUpdate=F,w.pointLights.needsUpdate=F,w.pointLightShadows.needsUpdate=F,w.spotLights.needsUpdate=F,w.spotLightShadows.needsUpdate=F,w.rectAreaLights.needsUpdate=F,w.hemisphereLights.needsUpdate=F}function Ju(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(w,F,X){const Y=lt.get(w);Y.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),lt.get(w.texture).__webglTexture=F,lt.get(w.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:X,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,F){const X=lt.get(w);X.__webglFramebuffer=F,X.__useDefaultFramebuffer=F===void 0};const ju=D.createFramebuffer();this.setRenderTarget=function(w,F=0,X=0){A=w,T=F,b=X;let Y=!0,O=null,ft=!1,Et=!1;if(w){const At=lt.get(w);if(At.__useDefaultFramebuffer!==void 0)Q.bindFramebuffer(D.FRAMEBUFFER,null),Y=!1;else if(At.__webglFramebuffer===void 0)vt.setupRenderTarget(w);else if(At.__hasExternalTextures)vt.rebindTextures(w,lt.get(w.texture).__webglTexture,lt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Nt=w.depthTexture;if(At.__boundDepthTexture!==Nt){if(Nt!==null&&lt.has(Nt)&&(w.width!==Nt.image.width||w.height!==Nt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");vt.setupDepthRenderbuffer(w)}}const Ht=w.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(Et=!0);const Wt=lt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Wt[F])?O=Wt[F][X]:O=Wt[F],ft=!0):w.samples>0&&vt.useMultisampledRTT(w)===!1?O=lt.get(w).__webglMultisampledFramebuffer:Array.isArray(Wt)?O=Wt[X]:O=Wt,L.copy(w.viewport),N.copy(w.scissor),V=w.scissorTest}else L.copy(ct).multiplyScalar(G).floor(),N.copy(Tt).multiplyScalar(G).floor(),V=kt;if(X!==0&&(O=ju),Q.bindFramebuffer(D.FRAMEBUFFER,O)&&Y&&Q.drawBuffers(w,O),Q.viewport(L),Q.scissor(N),Q.setScissorTest(V),ft){const At=lt.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+F,At.__webglTexture,X)}else if(Et){const At=F;for(let Ht=0;Ht<w.textures.length;Ht++){const Wt=lt.get(w.textures[Ht]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Ht,Wt.__webglTexture,X,At)}}else if(w!==null&&X!==0){const At=lt.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,At.__webglTexture,X)}S=-1},this.readRenderTargetPixels=function(w,F,X,Y,O,ft,Et,Ct=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=lt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Et!==void 0&&(At=At[Et]),At){Q.bindFramebuffer(D.FRAMEBUFFER,At);try{const Ht=w.textures[Ct],Wt=Ht.format,Nt=Ht.type;if(!tt.textureFormatReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!tt.textureTypeReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=w.width-Y&&X>=0&&X<=w.height-O&&(w.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Ct),D.readPixels(F,X,Y,O,Ut.convert(Wt),Ut.convert(Nt),ft))}finally{const Ht=A!==null?lt.get(A).__webglFramebuffer:null;Q.bindFramebuffer(D.FRAMEBUFFER,Ht)}}},this.readRenderTargetPixelsAsync=async function(w,F,X,Y,O,ft,Et,Ct=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=lt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Et!==void 0&&(At=At[Et]),At)if(F>=0&&F<=w.width-Y&&X>=0&&X<=w.height-O){Q.bindFramebuffer(D.FRAMEBUFFER,At);const Ht=w.textures[Ct],Wt=Ht.format,Nt=Ht.type;if(!tt.textureFormatReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!tt.textureTypeReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const se=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,se),D.bufferData(D.PIXEL_PACK_BUFFER,ft.byteLength,D.STREAM_READ),w.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Ct),D.readPixels(F,X,Y,O,Ut.convert(Wt),Ut.convert(Nt),0);const pe=A!==null?lt.get(A).__webglFramebuffer:null;Q.bindFramebuffer(D.FRAMEBUFFER,pe);const Le=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await sd(D,Le,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,se),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ft),D.deleteBuffer(se),D.deleteSync(Le),ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,F=null,X=0){const Y=Math.pow(2,-X),O=Math.floor(w.image.width*Y),ft=Math.floor(w.image.height*Y),Et=F!==null?F.x:0,Ct=F!==null?F.y:0;vt.setTexture2D(w,0),D.copyTexSubImage2D(D.TEXTURE_2D,X,0,0,Et,Ct,O,ft),Q.unbindTexture()};const Qu=D.createFramebuffer(),tf=D.createFramebuffer();this.copyTextureToTexture=function(w,F,X=null,Y=null,O=0,ft=null){ft===null&&(O!==0?(rr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ft=O,O=0):ft=0);let Et,Ct,At,Ht,Wt,Nt,se,pe,Le;const Ee=w.isCompressedTexture?w.mipmaps[ft]:w.image;if(X!==null)Et=X.max.x-X.min.x,Ct=X.max.y-X.min.y,At=X.isBox3?X.max.z-X.min.z:1,Ht=X.min.x,Wt=X.min.y,Nt=X.isBox3?X.min.z:0;else{const pn=Math.pow(2,-O);Et=Math.floor(Ee.width*pn),Ct=Math.floor(Ee.height*pn),w.isDataArrayTexture?At=Ee.depth:w.isData3DTexture?At=Math.floor(Ee.depth*pn):At=1,Ht=0,Wt=0,Nt=0}Y!==null?(se=Y.x,pe=Y.y,Le=Y.z):(se=0,pe=0,Le=0);const ve=Ut.convert(F.format),Ot=Ut.convert(F.type);let Ae;F.isData3DTexture?(vt.setTexture3D(F,0),Ae=D.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(vt.setTexture2DArray(F,0),Ae=D.TEXTURE_2D_ARRAY):(vt.setTexture2D(F,0),Ae=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);const le=D.getParameter(D.UNPACK_ROW_LENGTH),sn=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Bi=D.getParameter(D.UNPACK_SKIP_PIXELS),rn=D.getParameter(D.UNPACK_SKIP_ROWS),Cs=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Ee.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ee.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ht),D.pixelStorei(D.UNPACK_SKIP_ROWS,Wt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Nt);const Re=w.isDataArrayTexture||w.isData3DTexture,dn=F.isDataArrayTexture||F.isData3DTexture;if(w.isDepthTexture){const pn=lt.get(w),Ze=lt.get(F),en=lt.get(pn.__renderTarget),wo=lt.get(Ze.__renderTarget);Q.bindFramebuffer(D.READ_FRAMEBUFFER,en.__webglFramebuffer),Q.bindFramebuffer(D.DRAW_FRAMEBUFFER,wo.__webglFramebuffer);for(let pi=0;pi<At;pi++)Re&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,lt.get(w).__webglTexture,O,Nt+pi),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,lt.get(F).__webglTexture,ft,Le+pi)),D.blitFramebuffer(Ht,Wt,Et,Ct,se,pe,Et,Ct,D.DEPTH_BUFFER_BIT,D.NEAREST);Q.bindFramebuffer(D.READ_FRAMEBUFFER,null),Q.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(O!==0||w.isRenderTargetTexture||lt.has(w)){const pn=lt.get(w),Ze=lt.get(F);Q.bindFramebuffer(D.READ_FRAMEBUFFER,Qu),Q.bindFramebuffer(D.DRAW_FRAMEBUFFER,tf);for(let en=0;en<At;en++)Re?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,pn.__webglTexture,O,Nt+en):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,pn.__webglTexture,O),dn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ze.__webglTexture,ft,Le+en):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ze.__webglTexture,ft),O!==0?D.blitFramebuffer(Ht,Wt,Et,Ct,se,pe,Et,Ct,D.COLOR_BUFFER_BIT,D.NEAREST):dn?D.copyTexSubImage3D(Ae,ft,se,pe,Le+en,Ht,Wt,Et,Ct):D.copyTexSubImage2D(Ae,ft,se,pe,Ht,Wt,Et,Ct);Q.bindFramebuffer(D.READ_FRAMEBUFFER,null),Q.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else dn?w.isDataTexture||w.isData3DTexture?D.texSubImage3D(Ae,ft,se,pe,Le,Et,Ct,At,ve,Ot,Ee.data):F.isCompressedArrayTexture?D.compressedTexSubImage3D(Ae,ft,se,pe,Le,Et,Ct,At,ve,Ee.data):D.texSubImage3D(Ae,ft,se,pe,Le,Et,Ct,At,ve,Ot,Ee):w.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ft,se,pe,Et,Ct,ve,Ot,Ee.data):w.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ft,se,pe,Ee.width,Ee.height,ve,Ee.data):D.texSubImage2D(D.TEXTURE_2D,ft,se,pe,Et,Ct,ve,Ot,Ee);D.pixelStorei(D.UNPACK_ROW_LENGTH,le),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,sn),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Bi),D.pixelStorei(D.UNPACK_SKIP_ROWS,rn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Cs),ft===0&&F.generateMipmaps&&D.generateMipmap(Ae),Q.unbindTexture()},this.initRenderTarget=function(w){lt.get(w).__webglFramebuffer===void 0&&vt.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?vt.setTextureCube(w,0):w.isData3DTexture?vt.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?vt.setTexture2DArray(w,0):vt.setTexture2D(w,0),Q.unbindTexture()},this.resetState=function(){T=0,b=0,A=null,Q.reset(),wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=he._getDrawingBufferColorSpace(t),e.unpackColorSpace=he._getUnpackColorSpace()}}function fi(n,t=!1){const e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,c=new Ue;let l=0;for(let h=0;h<n.length;++h){const u=n[h];let f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in u.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,h),l+=d}}if(e){let h=0;const u=[];for(let f=0;f<n.length;++f){const d=n[f].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=n[f].attributes.position.count}c.setIndex(u)}for(const h in r){const u=Sh(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<u;++f){const d=[];for(let _=0;_<o[h].length;++_)d.push(o[h][_][f]);const g=Sh(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function Sh(n){let t,e,i,s=-1,r=0;for(let l=0;l<n.length;++l){const h=n[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new De(o,e,i);let c=0;for(let l=0;l<n.length;++l){const h=n[l];if(h.isInterleavedBufferAttribute){const u=c/e;for(let f=0,d=h.count;f<d;f++)for(let g=0;g<e;g++){const _=h.getComponent(f,g);a.setComponent(f+u,g,_)}}else o.set(h.array,c);c+=h.count*e}return s!==void 0&&(a.gpuType=s),a}const wh=4200,ax=0,we=new dt(18,172),si=new dt(835,-955),qe=new dt(-1145,830),Xe=new dt(1170,365),oc=ln.clamp,ii=ln.lerp,ti=(n,t,e)=>{const i=oc((e-n)/(t-n),0,1);return i*i*(3-2*i)};function $s(n,t){const e=Math.sin(n*127.1+t*311.7)*43758.5453123;return e-Math.floor(e)}function Nu(n,t){const e=Math.floor(n),i=Math.floor(t),s=n-e,r=t-i,o=s*s*(3-2*s),a=r*r*(3-2*r),c=$s(e,i),l=$s(e+1,i),h=$s(e,i+1),u=$s(e+1,i+1);return ii(ii(c,l,o),ii(h,u,o),a)}function hi(n,t,e=4){let i=0,s=.5,r=1;for(let o=0;o<e;o++)i+=s*Nu(n*r,t*r),r*=2.03,s*=.5;return i}function oa(n,t,e=4){let i=0,s=.5,r=1;for(let o=0;o<e;o++){const a=Nu(n*r,t*r);i+=s*(1-Math.abs(a*2-1)),r*=2.05,s*=.5}return i}function As(n){return function(){n|=0,n=n+1831565813|0;let t=Math.imul(n^n>>>15,1|n);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function ye(n,t){let e=10+hi(n*.0021+11,t*.0021-7,4)*48;e+=hi(n*.0068-3,t*.0068+9,3)*11,e+=oa(n*.0034,t*.0034,3)*24;const i=ti(880,1810,Math.max(Math.abs(n),Math.abs(t)));e+=i*(95+oa(n*.0055+4,t*.0055,4)*295);const s=ti(620,1400,t)*ti(1650,900,Math.abs(n-180));e+=s*(60+oa(n*.0067+30,t*.0067,3)*130);const r=Math.hypot(n-si.x,t-si.y),o=Math.pow(oc(1-r/780,0,1),1.55)*348,a=Math.pow(oc(1-r/122,0,1),1.9)*108;e+=o-a;const c=ti(-1280,-1980,n);e=ii(e,-24,c);const l=Math.hypot(n-805,t-720);e=ii(e,-16,ti(345,150,l));const h=Math.hypot(n-qe.x,t-qe.y);e=ii(e,15,ti(185,90,h)*.94);const u=Math.hypot(n-Xe.x,t-Xe.y);e=ii(e,22,ti(230,120,u)*.96);const f=Math.hypot(n-we.x,t-we.y);return e=ii(e,17,ti(165,80,f)*.97),e}function cx(n,t,e=new P){const s=ye(n-1.5,t),r=ye(n+1.5,t),o=ye(n,t-1.5),a=ye(n,t+1.5);return e.set(s-r,2*1.5,o-a).normalize()}function lx(n,t,e){const i=ye(n,t);if(i<.45)return i<-.7?"water":"shore";if(e&&e(n,t)<7.4)return"road";const s=hi(n*.0018+40,t*.0018-20,3);return i<4.5||s>.59&&n>-300?"sand":i>215?"rock":i>125?"dirt":"grass"}const hx=[{name:"Carretera Costera",width:11,closed:!0,surface:"asphalt",pts:[[20,155],[245,355],[170,770],[-250,1080],[-740,1215],[-1110,1090],[-1240,760],[-1130,365],[-995,-95],[-735,-425],[-250,-385],[20,-95]]},{name:"Volcán Pass",width:9,closed:!1,pts:[[245,355],[520,170],[700,-230],[805,-610],[848,-860],[835,-1030]]},{name:"Ruta del Desierto",width:10,closed:!1,pts:[[170,770],[590,810],[980,725],[1270,505],[1430,130],[1390,-320],[1160,-720],[880,-930]]},{name:"Camino Selva",width:8,closed:!1,pts:[[-740,1215],[-865,1485],[-570,1690],[-190,1600],[130,1380],[170,1080]]},{name:"Bulevar Festival",width:12,closed:!1,pts:[[20,155],[8,60],[90,-20],[235,-10],[330,95],[300,245],[190,315],[110,330]]}];function ux(n,t){const e=[],i=new Map,s=48,r=(c,l)=>`${Math.floor(c/s)},${Math.floor(l/s)}`,o=(c,l)=>{const h=r(c,l);let u=i.get(h);u||(u=[],i.set(h,u)),u.push(c,l)},a=(c,l)=>{const h=Math.floor(c/s),u=Math.floor(l/s);let f=1e9;for(let d=h-1;d<=h+1;d++)for(let g=u-1;g<=u+1;g++){const _=i.get(`${d},${g}`);if(_)for(let m=0;m<_.length;m+=2){const p=c-_[m],E=l-_[m+1],y=p*p+E*E;y<f&&(f=y)}}return Math.sqrt(f)};for(const c of hx){const l=c.pts.map(([k,q])=>new P(k,0,q)),h=new _u(l,c.closed,"catmullrom",.35),u=h.getLength(),f=Math.max(90,Math.ceil(u/5)),d=[];for(let k=0;k<=f;k++){const q=k/f,G=h.getPointAt(q);if(G.y=ye(G.x,G.z)+.22,d.push(G),o(G.x,G.z),k%2===0){const ot=h.getTangentAt(q),mt=ot.z,ct=-ot.x,Tt=Math.hypot(mt,ct)||1;o(G.x+mt/Tt*c.width*.4,G.z+ct/Tt*c.width*.4),o(G.x-mt/Tt*c.width*.4,G.z-ct/Tt*c.width*.4)}}const g=Eh(d,c.width+7,.08),_=new Xt({color:7297854,roughness:1,metalness:0,side:ke,polygonOffset:!0,polygonOffsetFactor:-1}),m=new gt(g,_);m.receiveShadow=!0,n.add(m);const p=Eh(d,c.width,.17),E=new Xt({color:2829620,roughness:.9,metalness:.04,side:ke,polygonOffset:!0,polygonOffsetFactor:-2}),y=new gt(p,E);y.receiveShadow=!0,n.add(y);const x=new Xt({color:15262674,roughness:.8,emissive:2761741,emissiveIntensity:.15}),C=(c.closed,Math.max(1,Math.round(9/(u/f)))),T=Math.floor(f/C)+2,b=new Ms(new re(.24,.035,3.1),x,T);b.frustumCulled=!1;const A=new oe,S=new fn,M=new P(1,1,1),L=new tn;let N=0;for(let k=0;k<f&&N<T;k+=C){const q=d[k],G=d[(k+1)%d.length];L.set(0,Math.atan2(G.x-q.x,G.z-q.z),0),S.setFromEuler(L),A.compose(new P(q.x,ye(q.x,q.z)+.31,q.z),S,M),b.setMatrixAt(N++,A)}b.count=N,n.add(b);const V=Math.floor(f/Math.max(1,Math.round(6/(u/f))))+2,Z=new Ms(new re(.13,.028,4.2),x,V*2);Z.frustumCulled=!1;let W=0;for(let k=0;k<f;k+=Math.max(1,Math.round(6/(u/f)))){const q=d[k],G=d[(k+1)%d.length],ot=Math.atan2(G.x-q.x,G.z-q.z),mt=Math.cos(ot),ct=-Math.sin(ot);for(const Tt of[-1,1])A.compose(new P(q.x+mt*(c.width/2-.55)*Tt,ye(q.x,q.z)+.29,q.z+ct*(c.width/2-.55)*Tt),S.setFromEuler(L.set(0,ot,0)),M),Z.setMatrixAt(W++,A)}Z.count=W,n.add(Z),e.push({def:c,curve:h,pts:d,length:u,mapPts:d.map(k=>[k.x,k.z])})}return{roads:e,finder:a}}function Eh(n,t,e){const i=n.length,s=new Float32Array(i*6),r=new Float32Array(i*4),o=[];let a=0;for(let l=0;l<i;l++){const h=n[l],u=n[Math.max(0,l-1)],f=n[Math.min(i-1,l+1)];let d=f.x-u.x,g=f.z-u.z;const _=Math.hypot(d,g)||1;d/=_,g/=_;const m=g,p=-d;l>0&&(a+=Math.hypot(h.x-n[l-1].x,h.z-n[l-1].z));const E=h.x+m*t/2,y=h.z+p*t/2,x=h.x-m*t/2,C=h.z-p*t/2;if(s.set([E,ye(E,y)+e,y,x,ye(x,C)+e,C],l*6),r.set([0,a/9,1,a/9],l*4),l<i-1){const T=l*2;o.push(T,T+2,T+1,T+1,T+2,T+3)}}const c=new Ue;return c.setAttribute("position",new De(s,3)),c.setAttribute("uv",new De(r,2)),c.setIndex(o),c.computeVertexNormals(),c}const ac={golden:{label:"Golden Hour",top:3433627,horizon:16753758,sun:16770733,cloud:16760726,fog:13732454,fogDensity:28e-5,sunElev:11,sunAz:242,sunIntensity:2.45,hemiSky:16762514,hemiGround:4798250,hemiIntensity:.82,night:0,stars:0,waterDeep:1003616,waterShallow:3119782,exposure:.98},day:{label:"High Noon",top:3112905,horizon:14216703,sun:16777215,cloud:16777215,fog:13164522,fogDensity:2e-4,sunElev:56,sunAz:160,sunIntensity:3.1,hemiSky:14282751,hemiGround:7168848,hemiIntensity:1.45,night:0,stars:0,waterDeep:877688,waterShallow:3652036,exposure:1},dusk:{label:"Fiesta Dusk",top:2239330,horizon:16735608,sun:16764846,cloud:16749736,fog:10308453,fogDensity:42e-5,sunElev:3.2,sunAz:236,sunIntensity:1.55,hemiSky:16752558,hemiGround:2827060,hemiIntensity:.8,night:.25,stars:.35,waterDeep:1186888,waterShallow:5986962,exposure:1.08},night:{label:"Baja Night",top:198681,horizon:1055810,sun:12177151,cloud:2699858,fog:594214,fogDensity:46e-5,sunElev:38,sunAz:310,sunIntensity:.5,hemiSky:7440584,hemiGround:1315870,hemiIntensity:.55,night:1,stars:1,waterDeep:330786,waterShallow:1716053,exposure:1.18}},Qs=ac;function aa(n,t){const e=ln.degToRad(n),i=ln.degToRad(t);return new P(Math.cos(e)*Math.sin(i),Math.sin(e),Math.cos(e)*Math.cos(i)).normalize()}const fx=`
varying vec3 vDir;
void main() {
  vDir = normalize(position);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,dx=`
precision highp float;
uniform vec3 uTop; uniform vec3 uHorizon; uniform vec3 uSunColor; uniform vec3 uCloud;
uniform vec3 uSunDir; uniform float uNight; uniform float uStars; uniform float uTime;
uniform float uCloudAmt;
varying vec3 vDir;
float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
float noise(vec2 p){
  vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
  return mix(mix(hash(i),hash(i+vec2(1,0)),f.x), mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x), f.y);
}
float fbm(vec2 p){ float s=0.0,a=0.5; for(int i=0;i<4;i++){ s+=a*noise(p); p*=2.03; a*=0.5;} return s; }
void main(){
  vec3 d = normalize(vDir);
  float h = clamp(d.y, 0.0, 1.0);
  vec3 col = mix(uHorizon, uTop, pow(h, 0.26));
  float sd = max(dot(d, uSunDir), 0.0);
  float disc = smoothstep(0.99935, 0.99985, sd);
  float glow = pow(sd, 22.0) * 0.55 + pow(sd, 5.0) * 0.16;
  col += uSunColor * (disc * 4.2 + glow * (1.0 - uNight * 0.6));
  float band = fbm(vec2(atan(d.z, d.x) * 2.1, d.y * 8.0 - uTime * 0.006));
  float cloudMask = smoothstep(0.57, 0.75, band) * smoothstep(0.02, 0.22, d.y) * (1.0 - smoothstep(0.65, 0.9, d.y));
  col = mix(col, uCloud, cloudMask * uCloudAmt);
  float star = step(0.9975, hash(floor(d.xz * 420.0) + floor(d.y * 420.0))) * uStars * smoothstep(0.06, 0.4, d.y);
  col += vec3(star) * 1.4;
  col = mix(col, uHorizon, smoothstep(0.02, -0.18, d.y));
  gl_FragColor = vec4(col, 1.0);
}`,px=`
varying vec3 vWorld;
void main(){
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorld = wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}`,mx=`
precision highp float;
uniform vec3 uDeep; uniform vec3 uShallow; uniform vec3 uSunDir; uniform vec3 uSun; uniform vec3 uFog;
uniform float uTime;
varying vec3 vWorld;
void main(){
  vec2 p = vWorld.xz * 0.06;
  float n1 = sin(p.x * 1.7 + uTime * 0.55) * 0.5 + sin(p.y * 2.1 - uTime * 0.42) * 0.5;
  float n2 = sin((p.x + p.y) * 1.2 + uTime * 0.31) * 0.5;
  vec3 nrm = normalize(vec3(n1 * 0.055, 1.0, n2 * 0.055));
  vec3 viewDir = normalize(cameraPosition - vWorld);
  float fres = pow(1.0 - max(dot(nrm, viewDir), 0.0), 2.5);
  vec3 col = mix(uDeep, uShallow, 0.35 + fres * 0.45);
  vec3 refl = reflect(-uSunDir, nrm);
  float spec = pow(max(dot(refl, viewDir), 0.0), 90.0);
  float glint = pow(max(dot(refl, viewDir), 0.0), 12.0) * 0.12;
  col += uSun * (spec * 2.2 + glint);
  float dist = length(vWorld.xz - cameraPosition.xz);
  col = mix(col, uFog, smoothstep(900.0, 3200.0, dist));
  gl_FragColor = vec4(col, 0.96);
}`,bh=(()=>{const n=document.createElement("canvas");n.width=n.height=256;const t=n.getContext("2d"),e=t.createRadialGradient(128,128,0,128,128,128);e.addColorStop(0,"rgba(255,252,235,1)"),e.addColorStop(.12,"rgba(255,230,175,0.95)"),e.addColorStop(.35,"rgba(255,175,100,0.33)"),e.addColorStop(1,"rgba(255,120,70,0)"),t.fillStyle=e,t.fillRect(0,0,256,256);const i=new Dc(n);return i.colorSpace=be,i})();function gx(n,t){const e={uTop:{value:new zt(5012395)},uHorizon:{value:new zt(16757615)},uSunColor:{value:new zt(16773324)},uCloud:{value:new zt(16763302)},uSunDir:{value:aa(13,216)},uNight:{value:0},uStars:{value:0},uTime:{value:0},uCloudAmt:{value:.55}},i=new En({vertexShader:fx,fragmentShader:dx,uniforms:e,side:Qe,depthWrite:!1,fog:!1}),s=new Un(6200,40,24),r=new gt(s,i);r.renderOrder=-10,r.frustumCulled=!1,n.add(r);const o=new Ul(new Qa({map:bh,color:16773324,transparent:!0,blending:li,depthWrite:!1,fog:!1}));o.scale.set(1150,1150,1),n.add(o);const a=new Ul(new Qa({map:bh,color:16777215,transparent:!0,blending:li,depthWrite:!1,fog:!1}));a.scale.set(220,220,1),n.add(a);const c={uDeep:{value:new zt(1003616)},uShallow:{value:new zt(3119782)},uSunDir:{value:new P(0,1,0)},uSun:{value:new zt(16773324)},uFog:{value:new zt(15181690)},uTime:{value:0}},l=new En({vertexShader:px,fragmentShader:mx,uniforms:c,transparent:!0,fog:!1,depthWrite:!1}),h=new gt(new wn(9e3,9e3,1,1),l);h.rotation.x=-Math.PI/2,h.position.y=ax+.05,h.renderOrder=2,n.add(h);const u=new _p(16765604,5192748,1.1);n.add(u);const f=new yp(16769208,2.5);f.castShadow=!0,f.shadow.mapSize.set(2048,2048),f.shadow.camera.left=-130,f.shadow.camera.right=130,f.shadow.camera.top=130,f.shadow.camera.bottom=-130,f.shadow.camera.near=1,f.shadow.camera.far=1100,f.shadow.bias=-6e-4,f.shadow.normalBias=.6,n.add(f),n.add(f.target);const d=new Sp(16767419,.22);n.add(d);let g=null;const _=new sc(t);_.compileEquirectangularShader();const m=new hu,p=new gt(new Un(100,32,20),i);m.add(p);const E=new gt(new _o(90,24),new un({color:5981748}));E.rotation.x=-Math.PI/2,E.position.y=-12,m.add(E);const y={preset:"golden",sunDir:aa(13,216)};function x(T,b=!0){const A=ac[T]||ac.golden;if(y.preset=T,y.sunDir.copy(aa(A.sunElev,A.sunAz)),e.uTop.value.setHex(A.top),e.uHorizon.value.setHex(A.horizon),e.uSunColor.value.setHex(A.sun),e.uCloud.value.setHex(A.cloud),e.uSunDir.value.copy(y.sunDir),e.uNight.value=A.night,e.uStars.value=A.stars,e.uCloudAmt.value=A.night>.7?.2:.6,c.uDeep.value.setHex(A.waterDeep),c.uShallow.value.setHex(A.waterShallow),c.uSun.value.setHex(A.sun),c.uSunDir.value.copy(y.sunDir),c.uFog.value.setHex(A.fog),f.color.setHex(A.night>.7?11125247:A.sun),f.intensity=A.sunIntensity,u.color.setHex(A.hemiSky),u.groundColor.setHex(A.hemiGround),u.intensity=A.hemiIntensity,d.color.setHex(A.night>.7?8295632:16767419),d.intensity=A.night>.7?.35:.2,n.fog.color.setHex(A.fog),n.fog.density=A.fogDensity,n.background=new zt(A.horizon),t.toneMappingExposure=A.exposure,o.material.color.setHex(A.sun),a.material.color.setHex(A.night>.7?13622783:16777215),o.visible=A.night<.9,a.visible=A.night<.9,b)try{g&&g.dispose(),g=_.fromScene(m,.01,1,300),n.environment=g.texture}catch{}}x("golden",!1);function C(T,b,A){r.position.copy(T.position);const S=y.sunDir;o.position.copy(T.position).addScaledVector(S,5200),a.position.copy(T.position).addScaledVector(S,5185),e.uTime.value=b,c.uTime.value=b,A&&(f.position.copy(A).addScaledVector(S,430),f.target.position.copy(A),f.target.updateMatrixWorld())}return{mesh:r,sun:f,hemi:u,ambient:d,water:h,uniforms:e,waterUniforms:c,sunSprite:o,sunCore:a,apply:x,update:C,get sunDir(){return y.sunDir},get preset(){return y.preset}}}function Fe(n,t){n.index&&(n=n.toNonIndexed());const e=new zt(t),i=n.attributes.position.count,s=new Float32Array(i*3);for(let r=0;r<i;r++)s[r*3]=e.r,s[r*3+1]=e.g,s[r*3+2]=e.b;return n.setAttribute("color",new De(s,3)),n}function us(n,t,e,i=0,s=0,r=1,o=1,a=1){const c=new Fc(n,0);return c.scale(r,o,a),c.translate(i,e,s),Fe(c,t)}function Fu(n,t,e,i=0,s=0){const r=new Me(n*.7,n,t,6);return r.translate(i,t/2,s),Fe(r,e)}function _x(){const n=[Fu(.24,3.4,6045991)];for(let t=0;t<3;t++){const e=new bn(2.25-t*.48,3.2-t*.4,7);e.translate(0,3.2+t*1.55,0),n.push(Fe(e,t%2?3104574:3631941))}return fi(n)}function xx(){const n=[Fu(.28,3,6703148)];return n.push(us(2.25,4094532,4.2,0,0,1.2,.9,1.2)),n.push(us(1.7,5147979,5.6,.7,.1,1,.85,1)),n.push(us(1.4,3106617,3.6,-1.1,-.3,1,.8,1)),fi(n)}function vx(){const n=[];let t=new P(0,0,0);for(let e=0;e<4;e++){const i=new Me(.17-e*.022,.22-e*.022,2.2,6);i.translate(e*.12,1.1+e*2.05,e*.06),n.push(Fe(i,e%2?8215608:7032110)),t.set(e*.12,2.1+e*2.05,e*.06)}for(let e=0;e<7;e++){const i=e/7*Math.PI*2,s=new bn(.5,4.3,4);s.scale(1,.16,1.9),s.rotateZ(Math.PI/2),s.rotateY(i),s.translate(t.x+Math.cos(i)*1.6,t.y+.1,t.z+Math.sin(i)*1.6),n.push(Fe(s,e%2?3111490:3968330))}return fi(n)}function Mx(){const n=[Fe(new Me(.34,.42,3.8,6).translate(0,1.9,0),5012547)],t=new Me(.2,.24,1.7,6);t.rotateZ(Math.PI/2),t.translate(.75,2.4,0),n.push(Fe(t,5012547));const e=new Me(.18,.2,1.25,6);e.translate(1.42,3,0),n.push(Fe(e,5210696));const i=new Me(.18,.22,1.3,6);i.rotateZ(Math.PI/2),i.translate(-.62,1.7,0),n.push(Fe(i,5012547));const s=new Me(.16,.18,.9,6);return s.translate(-1.2,2.25,0),n.push(Fe(s,5210696)),fi(n)}function yx(){const n=new xo(1,0);return n.scale(1.4,.85,1.1),n.translate(0,.6,0),Fe(n,8484972)}function Sx(){const n=[us(.9,4026429,.7,0,0,1.2,.8,1.15),us(.6,5014086,1,.6,.1,1,.85,1),us(.55,3038260,.6,-.55,-.2,1,.9,1)];return fi(n)}function wx(){const n=new Me(.025,.035,.7,4);n.translate(0,.35,0);const t=new Oc(.2,0);return t.translate(0,.75,0),fi([Fe(n,4025653),Fe(t,16761415)])}function Ex(n,t){const e=new Xt({vertexColors:!0,roughness:.95,metalness:0,flatShading:!0}),i={pine:_x(),broadleaf:xx(),palm:vx(),cactus:Mx(),rock:yx(),bush:Sx(),flower:wx()},s=As(90210),r={pine:[],broadleaf:[],palm:[],cactus:[],rock:[],bush:[],flower:[]},o=7200;for(let c=0;c<o;c++){const l=(s()-.5)*3900,h=(s()-.5)*3900,u=ye(l,h);if(u<1.4||u>245||Math.hypot(l-we.x,h-we.y)<100||Math.hypot(l-qe.x,h-qe.y)<185||Math.hypot(l-Xe.x,h-Xe.y)<220||t(l,h)<11)continue;const f=hi(l*.0018+40,h*.0018-20,3),d=hi(l*.0016-10,h*.0016+30,3),g=Math.abs(ye(l+2,h)-u)+Math.abs(ye(l,h+2)-u);let _;u>175&&s()<.55?_="pine":u<35&&(l<-880||Math.hypot(l-805,h-720)<390)&&s()<.5?_="palm":f>.62&&l>-400?_=s()<.58?"cactus":"rock":g>2.2||s()<.12?_="rock":d>.56?_=s()<.7?"broadleaf":"bush":u>95?_=s()<.6?"pine":"rock":_=s()<.42?"broadleaf":s()<.7?"bush":"pine",r[_].push({x:l,z:h,h:u,s:.7+s()*1.35,r:s()*Math.PI*2}),_!=="rock"&&s()<.13&&r.flower.push({x:l+(s()-.5)*9,z:h+(s()-.5)*9,h:ye(l+2,h),s:.7+s(),r:s()*6.28})}const a={pine:520,broadleaf:720,palm:280,cactus:310,rock:380,bush:620,flower:420};for(const c of Object.keys(r)){const l=r[c],h=Math.min(l.length,a[c]);if(!h)continue;const u=new Ms(i[c],e,h);u.receiveShadow=!1,u.castShadow=!1;const f=new oe,d=new fn,g=new P,_=new P,m=new zt;for(let p=0;p<h;p++){const E=l[Math.floor(p*l.length/h)];g.set(E.x,ye(E.x,E.z)-.18,E.z),d.setFromEuler(new tn(0,E.r,0)),_.set(E.s,E.s*(.85+s()*.3),E.s),f.compose(g,d,_),u.setMatrixAt(p,f);const y=.82+s()*.3;m.setRGB(y,y,y),u.setColorAt(p,m)}u.instanceMatrix.needsUpdate=!0,u.frustumCulled=!1,n.add(u)}}function cc(n,{w:t=1024,h:e=256,bg:i="rgba(10,14,24,0.86)",color:s="#f4f1e8",accent:r="#ff2d7a",sub:o="",font:a="800 110px sans-serif"}={}){const c=document.createElement("canvas");c.width=t,c.height=e;const l=c.getContext("2d");l.fillStyle=i,l.fillRect(0,0,t,e),l.fillStyle=r,l.fillRect(0,0,t,12),l.font=a,l.fillStyle=s,l.textAlign="center",l.textBaseline="middle",l.fillText(n,t/2,e/2-(o?18:0)),o&&(l.font="600 34px sans-serif",l.fillStyle=r,l.fillText(o,t/2,e/2+62));const h=new Dc(c);return h.colorSpace=be,h.anisotropy=4,h}function bx(n,t,e){const i=new Te;i.position.set(we.x,ye(we.x,we.y),we.y),n.add(i);const s=(H,it=.7,at=.1)=>new Xt({color:H,roughness:it,metalness:at}),r=new Xt({color:2755096,emissive:16723322,emissiveIntensity:2,roughness:.4}),o=new Xt({color:401188,emissive:2418431,emissiveIntensity:2,roughness:.4});new Xt({color:3089424,emissive:16760151,emissiveIntensity:1.6,roughness:.5});const a=new Xt({color:1448738,roughness:.7}),c=new gt(new Me(7.3,7.8,.5,40),a);c.position.set(20,.25,14),c.receiveShadow=!0,i.add(c);const l=new gt(new ai(7.45,.1,6,60),r);l.rotation.x=Math.PI/2,l.position.set(20,.55,14),i.add(l);const h=new gt(new ai(5.7,.04,4,50),o);h.rotation.x=Math.PI/2,h.position.set(20,.53,14),i.add(h);for(let H=0;H<8;H++){const it=H/8*Math.PI*2,at=new gt(new re(.1,.05,1.5),H%2?o:r);at.position.set(20+Math.cos(it)*6.6,.52,14+Math.sin(it)*6.6),at.rotation.y=-it,i.add(at)}const u=new Te;u.position.set(0,0,-20);for(const H of[-1,1]){const it=new gt(new re(1.8,11,1.8),a);it.position.set(H*9,5.5,0),it.castShadow=!0,u.add(it);for(let at=0;at<4;at++){const yt=new gt(new re(.15,1.6,.1),at%2?r:o);yt.position.set(H*9+(H>0?-.93:.93),1.5+at*2.5,.92),u.add(yt)}t.push({x:we.x+H*9,z:we.y-20,r:1.4})}const f=new gt(new re(19.8,2.4,1.2),a);f.position.y=10.6,u.add(f);const d=cc("HORIZON LIBRE",{w:1200,h:260,bg:"rgba(8,12,20,0.92)",color:"#f4f1e8",accent:"#ff2d7a",sub:"BAJA · MÉXICO · FESTIVAL"}),g=new wn(17.4,3.8),_=new un({map:d,transparent:!0}),m=new gt(g,_);m.position.set(0,10.6,.65),u.add(m);const p=new gt(g,_);p.position.set(0,10.6,-.65),p.rotation.y=Math.PI,u.add(p),i.add(u);const E=new Te;E.position.set(-42,0,8);const y=new gt(new re(22,1.2,12),a);y.position.y=.6,y.castShadow=!0,y.receiveShadow=!0,E.add(y);const x=new gt(new re(22,9,.6),s(1053466));x.position.set(0,5.2,-5.8),E.add(x);const C=new gt(new re(24,.5,14),a);C.position.set(0,10,0),E.add(C);for(const H of[-1,1])for(const it of[-1,1]){const at=new gt(new re(.45,9.5,.45),a);at.position.set(H*11,5.3,it*6.2),E.add(at)}const T=cc("HORIZON",{w:1024,h:512,bg:"#120a1a",color:"#fff4e6",accent:"#24e6ff",sub:"LIVE FROM BAJA",font:"800 190px sans-serif"}),b=new gt(new wn(12,6),new un({map:T}));b.position.set(0,5.4,-5.4),E.add(b);for(let H=0;H<6;H++){const it=new gt(new re(1.3,2.8,1.1),a);it.position.set(-9+H*3.6,2.8,5.4),E.add(it);const at=new gt(new Me(.38,.38,.1,10),s(2764600,.5,.5));at.rotation.x=Math.PI/2,at.position.set(-9+H*3.6,2.8,5.98),E.add(at)}for(const[H,it]of[-1,1].entries()){const at=new un({color:H?2418431:16723322,transparent:!0,opacity:.1,blending:li,depthWrite:!1,side:ke}),yt=new gt(new bn(3.2,30,18,1,!0),at);yt.position.set(it*7,19,0),yt.rotation.z=it*.32,E.add(yt),e.push(Ft=>{yt.rotation.y=Math.sin(Ft*.35+H)*.5})}t.push({x:we.x-42,z:we.y+8,r:12}),i.add(E);const A=new Te;A.position.set(-92,0,-22);const S=s(1778219,.55,.6);for(const H of[-1,1]){const it=new gt(new re(.5,17,.5),S);it.position.set(H*4.5,8.5,0),it.rotation.z=H*.18,A.add(it)}const M=17,L=new Te;L.position.y=M,A.add(L);const N=new Xt({color:10135477,emissive:16723322,emissiveIntensity:.55,roughness:.4,metalness:.7});for(const H of[-.8,.8]){const it=new gt(new ai(8.4,.12,6,48),N);it.position.z=H,L.add(it);for(let at=0;at<12;at++){const yt=at/12*Math.PI*2,Ft=new gt(new re(.07,8.4,.07),N);Ft.position.set(Math.sin(yt)*4.2,Math.cos(yt)*4.2,H),Ft.rotation.z=-yt,L.add(Ft)}}const V=s(16764479,.6);for(let H=0;H<12;H++){const it=H/12*Math.PI*2,at=new gt(new re(1.4,1.3,1.5),H%3===0?o:H%3===1?r:V);at.position.set(Math.sin(it)*8.35,Math.cos(it)*8.35-.8,0),L.add(at)}e.push(H=>{L.rotation.z=H*.06}),t.push({x:we.x-92,z:we.y-22,r:3.5}),i.add(A);const Z=[16723322,2418431,16764479,16052712];for(let H=0;H<5;H++){const it=H/5*Math.PI*2+1.3,at=Math.cos(it)*34,yt=Math.sin(it)*34+22,Ft=new Te;Ft.position.set(at,0,yt);const ce=new gt(new re(7,2.6,7),s(15525850,.8));ce.position.y=1.3,Ft.add(ce);const D=new gt(new bn(5.6,2.8,4),s(Z[H%4],.65));D.position.y=4,D.rotation.y=Math.PI/4,Ft.add(D);const st=new gt(new re(7.05,.35,7.05),s(1448738,.8));st.position.y=2.65,Ft.add(st),i.add(Ft),t.push({x:we.x+at,z:we.y+yt,r:4.3})}const W=new Me(.23,.32,1.2,5);W.translate(0,.6,0);const k=new Un(.23,6,5);k.translate(0,1.42,0);const q=fi([Fe(W,16777215),Fe(k,15779488)]),G=new Xt({vertexColors:!0,roughness:.9}),ot=new Ms(q,G,90),mt=new oe,ct=new fn,Tt=new P,kt=new P,ee=new zt,Yt=As(421);for(let H=0;H<90;H++){const it=Yt()*Math.PI*2,at=12+Yt()*55;kt.set(Math.cos(it)*at,.1,Math.sin(it)*at+8),ct.setFromEuler(new tn(0,Yt()*6.28,0)),Tt.setScalar(.82+Yt()*.28),mt.compose(kt,ct,Tt),ot.setMatrixAt(H,mt),ee.setHSL(Yt(),.62,.5+Yt()*.25),ot.setColorAt(H,ee)}ot.instanceMatrix.needsUpdate=!0,i.add(ot);const j=s(13620956,.4,.8);for(let H=0;H<16;H++){const it=H/16*Math.PI*2,at=Math.cos(it)*58,yt=Math.sin(it)*58,Ft=new gt(new Me(.07,.09,8,5),j);Ft.position.set(at,4,yt),i.add(Ft);const ce=new gt(new wn(2.4,1.2),new Xt({color:H%3===0?16723322:H%3===1?2418431:16764479,side:ke,roughness:.8}));ce.position.set(at+1.2,7.2,yt),i.add(ce),e.push(D=>{ce.rotation.y=Math.sin(D*1.7+H)*.35})}return{group:i,platformPosition:new P(we.x+20,ye(we.x+20,we.y+14)+.55,we.y+14)}}function Tx(n,t,e){const s=[[15232842,16049090,2437690],[4100003,16117727,2372155],[15778375,3619135,16183519],[10115780,15785402,2764857]].map(([y,x,C])=>{const T=[],b=Fe(new re(7,4.4,8),y);b.translate(0,2.2,0),T.push(b);const A=new bn(5.7,2.4,4);A.rotateY(Math.PI/4),A.scale(1,1,.92),A.translate(0,5.5,0),T.push(Fe(A,C));for(let M=-1;M<=1;M++){const L=Fe(new re(1.1,1.25,.1),x);L.translate(M*2.1,2.7,4.05),T.push(L)}const S=Fe(new re(1.2,2.1,.1),C);return S.translate(0,1.05,4.05),T.push(S),T.push(Fe(new re(7.2,.35,8.2),x).translate(0,.18,0)),fi(T)}),r=new Xt({vertexColors:!0,roughness:.88,metalness:.03,flatShading:!0}),o=As(777),a=[[],[],[],[]];for(let y=0;y<64;y++){const x=Math.floor(o()*7)-3,C=Math.floor(o()*6)-2,T=qe.x+x*19+(o()-.5)*3,b=qe.y+C*22+(o()-.5)*3;if(Math.hypot(T-qe.x,b-qe.y)>165)continue;const A=ye(T,b);a[y%4].push({x:T,z:b,y:A,r:(o()>.5?0:1)*Math.PI/2+(o()-.5)*.12,s:.9+o()*.5}),t.push({x:T,z:b,r:5.2})}const c=new oe,l=new fn,h=new P,u=new P,f=new tn;a.forEach((y,x)=>{if(!y.length)return;const C=new Ms(s[x],r,y.length);C.castShadow=!1,C.receiveShadow=!0,y.forEach((T,b)=>{h.set(T.x,T.y,T.z),l.setFromEuler(f.set(0,T.r,0)),u.setScalar(T.s),c.compose(h,l,u),C.setMatrixAt(b,c)}),C.instanceMatrix.needsUpdate=!0,C.frustumCulled=!1,n.add(C)});const d=new Te,g=qe.x+12,_=qe.y-72;d.position.set(g,ye(g,_),_);const m=new gt(new re(8,24,8),new Xt({color:15785916,roughness:.9}));m.position.y=12,m.castShadow=!0,d.add(m);const p=new gt(new Un(4.8,10,6,0,Math.PI*2,0,Math.PI/2),new Xt({color:14262602,roughness:.55,metalness:.4}));p.position.y=24,d.add(p);const E=new gt(new bn(.7,5,6),new Xt({color:16764514,emissive:5913344,emissiveIntensity:.4}));return E.position.y=29,d.add(E),t.push({x:g,z:_,r:6}),n.add(d),{tower:d}}function Ax(n,t){const s=ye(-1208,-85),r=new Te;r.position.set(-1208,s,-85);const o=new Xt({color:15920608,roughness:.8}),a=new Xt({color:14235190,roughness:.75});for(let f=0;f<6;f++){const d=2.1-f*.18,g=2.1-(f+1)*.18,_=new gt(new Me(d,g,3.2,12),f%2?a:o);_.position.y=1.6+f*3.2,_.castShadow=!0,r.add(_)}const c=new gt(new Me(2.5,2.5,.3,12),new Xt({color:1778219}));c.position.y=19.4,r.add(c);const l=new gt(new Me(1.35,1.35,1.8,10),new Xt({color:16774080,emissive:16765803,emissiveIntensity:2.4,transparent:!0,opacity:.9}));l.position.y=20.5,r.add(l);const h=new gt(new bn(2.2,1.8,10),a);h.position.y=22.3,r.add(h);const u=new gt(new bn(5,120,16,1,!0),new un({color:16770726,transparent:!0,opacity:.08,blending:li,depthWrite:!1,side:ke}));return u.position.y=20.5,u.rotation.z=Math.PI/2,r.add(u),t.push(f=>{u.rotation.y=f*.5}),n.add(r),r}function Rx(n,t){const e=ye(Xe.x,Xe.y),i=new gt(new re(52,.12,390),new Xt({color:3027256,roughness:.92}));i.position.set(Xe.x,e+.07,Xe.y),i.receiveShadow=!0,n.add(i);for(let g=-18;g<=18;g++){const _=new gt(new re(1.8,.04,8),new Xt({color:15262674}));_.position.set(Xe.x,e+.15,Xe.y+g*10),n.add(_)}const s=Xe.x+82,r=Xe.y-55,o=new Te;o.position.set(s,ye(s,r),r);const a=new gt(new Me(17,17,34,16,1,!1,0,Math.PI),new Xt({color:10134696,roughness:.7,metalness:.4,side:ke}));a.rotation.z=Math.PI/2,a.rotation.y=Math.PI/2,a.position.y=.2,a.castShadow=!0,o.add(a);const c=new gt(new re(.3,12,20),new Xt({color:2896698,roughness:.8}));c.position.set(-17.1,6,0),o.add(c),n.add(o);const l=new Te;l.position.set(Xe.x-30,e+.4,Xe.y+95),l.rotation.y=-.2;const h=new gt(new Me(1.3,1.8,16,8),new Xt({color:15263196,roughness:.5,metalness:.3}));h.rotation.x=Math.PI/2,h.position.y=2.3,l.add(h);const u=new gt(new re(22,.3,3.2),h.material);u.position.y=2.5,l.add(u);const f=new gt(new re(7,.25,1.8),h.material);f.position.set(0,3,-6.5),l.add(f);const d=new gt(new re(.25,3,2.2),h.material);return d.position.set(0,4,-7.2),l.add(d),n.add(l),{hangar:o,plane:l,runway:i}}function Cx(n){const t=[{x:185,z:500,text:"VOLCÁN",sub:"PASS · 8 KM",accent:"#ff2d7a",rot:-.3},{x:-470,z:1050,text:"PLAYA",sub:"COSTA AZUL",accent:"#24e6ff",rot:.55},{x:900,z:620,text:"DESIERTO",sub:"DUNAS · 12 KM",accent:"#ffce3f",rot:-.2},{x:-900,z:1300,text:"SELVA",sub:"JUNGLA",accent:"#7bff7b",rot:.3}];for(const e of t){const i=new Te;i.position.set(e.x,ye(e.x,e.z),e.z),i.rotation.y=e.rot;const s=new gt(new re(.6,8,.6),new Xt({color:4541266,roughness:.6,metalness:.5}));s.position.y=4,i.add(s);const r=cc(e.text,{w:1024,h:420,bg:"rgba(12,16,24,0.9)",color:"#f7f2e8",accent:e.accent,sub:e.sub,font:"800 180px sans-serif"}),o=new gt(new wn(12,5),new un({map:r,side:ke}));o.position.set(0,8,0),i.add(o),n.add(i)}}function Px(n,t){const e=[16723322,2418431,16764479,16739125,8084735,5301146],i=As(551);for(let s=0;s<7;s++){const r=new Te,o=(i()-.5)*2600,a=(i()-.5)*2600,c=95+i()*160;r.position.set(o,c,a);const l=new gt(new Un(1,12,8),new Xt({color:e[s%e.length],roughness:.55,metalness:.08}));l.scale.set(9,12,9),l.position.y=15,r.add(l);for(let u=0;u<3;u++){const f=new gt(new Un(1.01,12,8,u*2.1,.6,.4,2.3),new Xt({color:16050390,roughness:.6}));f.scale.set(9.02,12.02,9.02),f.position.y=15,r.add(f)}const h=new gt(new re(3,2,3),new Xt({color:6966059,roughness:.9}));h.position.y=0,r.add(h);for(const[u,f]of[[-1,-1],[1,-1],[-1,1],[1,1]]){const d=new gt(new Me(.04,.04,4,3),new Xt({color:2760984}));d.position.set(u*1.2,2,f*1.2),d.rotation.z=-u*.2,d.rotation.x=f*.2,r.add(d)}n.add(r),t.push(u=>{r.position.y=c+Math.sin(u*.18+s)*6,r.rotation.y=u*.02+s,r.position.x=o+Math.sin(u*.06+s*1.7)*30})}}function Lx(n,t){const e=new Xt({color:16244166,emissive:7027756,emissiveIntensity:.15,roughness:1,flatShading:!0,transparent:!0,opacity:.82}),i=As(333);for(let s=0;s<12;s++){const r=new Te,o=4+Math.floor(i()*4);for(let l=0;l<o;l++){const h=new gt(new xo(1,0),e);h.scale.set(22+i()*24,8+i()*8,14+i()*16),h.position.set((i()-.5)*60,(i()-.5)*8,(i()-.5)*34),r.add(h)}r.position.set((i()-.5)*3800,280+i()*190,(i()-.5)*3800),r.rotation.y=i()*6.28,n.add(r);const a=.6+i()*.8,c=r.position.x;t.push(l=>{r.position.x=c+Math.sin(l*.008*a+s)*220})}}function Dx(n,t){const e=new fu({color:2106412,transparent:!0,opacity:.7});for(let i=0;i<3;i++){const s=new Te,r=[];for(let u=0;u<7;u++){const f=(u-3)*3,d=Math.abs(u-3)*1.2;r.push(f-1.4,d,0,f+1.4,d+.2,0),r.push(f+.1,d+.2,0,f+1.2,d+1.6,0)}const o=new Ue;o.setAttribute("position",new xe(r,3)),s.add(new Fd(o,e)),s.scale.setScalar(2.4),n.add(s);const a=(Math.random()-.5)*1400,c=(Math.random()-.5)*1400,l=80+Math.random()*140,h=65+Math.random()*45;t.push(u=>{const f=u*.08+i*2;s.position.set(a+Math.cos(f)*l,h+Math.sin(u*.5+i)*2,c+Math.sin(f)*l),s.rotation.y=-f+Math.PI/2})}}function Ix(n,t){const i=new Ue,s=new Float32Array(126),r=[],o=As(91);for(let u=0;u<42;u++)r.push({p:o(),a:o()*6.28,r:o()*22,speed:.02+o()*.03});i.setAttribute("position",new De(s,3));const a=(()=>{const u=document.createElement("canvas");u.width=u.height=64;const f=u.getContext("2d"),d=f.createRadialGradient(32,32,2,32,32,32);return d.addColorStop(0,"rgba(255,255,255,0.75)"),d.addColorStop(1,"rgba(255,255,255,0)"),f.fillStyle=d,f.fillRect(0,0,64,64),new Dc(u)})(),c=new du({size:36,map:a,transparent:!0,opacity:.28,depthWrite:!1,color:9341572,sizeAttenuation:!0}),l=new pu(i,c);l.frustumCulled=!1,n.add(l);const h=ye(si.x,si.y);t.push(u=>{for(let f=0;f<42;f++){const d=r[f],g=(u*d.speed+d.p)%1,_=h+10+g*220,m=18+g*115;s[f*3]=si.x+Math.cos(d.a+u*.05)*(d.r+m),s[f*3+1]=_,s[f*3+2]=si.y+Math.sin(d.a+u*.05)*(d.r+m)}i.attributes.position.needsUpdate=!0})}function Ux(n,t,e){const s=document.createElement("canvas");s.width=s.height=256;const r=s.getContext("2d"),o=r.createImageData(256,256),a=t+1;for(let h=0;h<256;h++)for(let u=0;u<256;u++){const f=Math.min(t-1,Math.floor(u/256*t)),d=Math.min(t-1,Math.floor(h/256*t)),g=n[d*a+f],_=n[d*a+Math.min(t,f+1)],m=n[Math.min(t,d+1)*a+f],p=Math.abs(_-g)+Math.abs(m-g);let E,y,x;g<-1?(E=20,y=61,x=82):g<3?(E=216,y=192,x=142):g<95?hi((u/256-.5)*4200*.0018+40,(h/256-.5)*4200*.0018-20,3)>.62?(E=196,y=153,x=92):(E=88,y=124,x=70):g<190?(E=132,y=126,x=105):g<250?(E=112,y=106,x=100):(E=222,y=218,x=206);const C=.82+Math.min(.22,p*.03),T=(h*256+u)*4;o.data[T]=E*C,o.data[T+1]=y*C,o.data[T+2]=x*C,o.data[T+3]=255}r.putImageData(o,0,0);const c=(h,u)=>[(h/4200+.5)*256,(u/4200+.5)*256];for(const h of e)r.beginPath(),h.mapPts.forEach(([u,f],d)=>{const[g,_]=c(u,f);d===0?r.moveTo(g,_):r.lineTo(g,_)}),h.def.closed&&r.closePath(),r.strokeStyle="rgba(238,226,201,0.8)",r.lineWidth=h.def.width>10?2.6:1.8,r.stroke(),r.strokeStyle="rgba(44,45,50,0.65)",r.lineWidth=1,r.stroke();const l=r.createRadialGradient(256/2,256/2,256*.2,256/2,256/2,256*.55);return l.addColorStop(0,"rgba(0,0,0,0)"),l.addColorStop(1,"rgba(4,8,16,0.5)"),r.fillStyle=l,r.fillRect(0,0,256,256),s}function Nx(n,t){n.fog=new Pc(15181690,34e-5);const e=gx(n,t),i=280,s=new wn(wh,wh,i,i);s.rotateX(-Math.PI/2);const r=s.attributes.position,o=r.count,a=new Float32Array(o),c=new Float32Array(o*3),l=i+1;for(let C=0;C<o;C++){const T=r.getX(C),b=r.getZ(C),A=ye(T,b);a[C]=A,r.setY(C,A)}const h=new zt;for(let C=0;C<l;C++)for(let T=0;T<l;T++){const b=C*l+T,A=r.getX(b),S=r.getZ(b),M=a[b],L=a[C*l+Math.min(i,T+1)],N=a[Math.min(i,C+1)*l+T],V=Math.abs(L-M)+Math.abs(N-M),Z=hi(A*.0018+40,S*.0018-20,3),W=hi(A*.0016-10,S*.0016+30,3);M<-1?h.setRGB(.12,.22,.26,be):M<2.2?h.setRGB(.84,.72,.5,be):M<4.5?h.setRGB(.78,.65,.43,be):M<80?Z>.64&&A>-450?h.setRGB(.67,.5,.27,be):W>.56?h.setRGB(.18,.34,.19,be):h.setRGB(.31,.43,.2,be):M<135?h.setRGB(.42,.43,.29,be):M<205?h.setRGB(.42,.38,.32,be):M<255?h.setRGB(.34,.32,.3,be):h.setRGB(.78,.76,.71,be),V>2.4&&M>6&&h.lerp(new zt(.26,.23,.21),Math.min(.65,(V-2.4)*.18));const k=.92+$s(T*1.3,C*1.7)*.16;h.multiplyScalar(k),c[b*3]=h.r,c[b*3+1]=h.g,c[b*3+2]=h.b}s.setAttribute("color",new De(c,3)),s.computeVertexNormals();const u=new Xt({vertexColors:!0,roughness:1,metalness:0,flatShading:!1}),f=new gt(s,u);f.receiveShadow=!0,f.castShadow=!1,n.add(f);const d=[],g=[],{roads:_,finder:m}=ux(n),p=bx(n,d,g);Tx(n,d),Ax(n,g),Rx(n),Cx(n),Px(n,g),Lx(n,g),Dx(n,g),Ix(n,g),Ex(n,m);const E=Ux(a,i,_),y=new P(14,0,108);y.y=ye(y.x,y.z);const x={x:y.x,z:y.z,yaw:.04};return{scene:n,sky:e,terrain:f,roads:_,finder:m,mapCanvas:E,festival:p,obstacles:d,updatables:g,heightAt:ye,normalAt:cx,surfaceAt:(C,T)=>lx(C,T,m),spawn:x,start:y,update(C,T,b){e.update(T,C,b);for(const A of g)A(C)},setTimePreset(C){e.apply(C)},get timePreset(){return e.preset},get sunDir(){return e.sunDir}}}const Ss=[{id:"brisa",brand:"Brisa",name:"GT",year:2024,klass:"A",rating:812,type:"coupe",tag:"Balanced sport",paint:1689785,accents:[1689785,16118248,16726891,2908671,16756782,1316896],power:420,weight:1445,topSpeed:291,grip:1.06,brake:1.02,offroad:.58,drivetrain:"AWD",wheelbase:2.72,track:1.62,wheelR:.36,wheelW:.28,len:4.48,width:1.91,gearRatios:[3.62,2.38,1.72,1.32,1.06,.88],finalDrive:3.55,torque:455,redline:7600,cd:.68},{id:"sierra",brand:"Sierra",name:"RS",year:2023,klass:"A",rating:786,type:"rally",tag:"Rally weapon",paint:13234749,accents:[13234749,2085864,16777215,16730685,1779008,15903035],power:342,weight:1360,topSpeed:251,grip:1,brake:.98,offroad:.94,drivetrain:"AWD",wheelbase:2.58,track:1.6,wheelR:.37,wheelW:.28,len:4.08,width:1.84,gearRatios:[3.75,2.45,1.78,1.37,1.09,.89],finalDrive:3.9,torque:420,redline:7200,cd:.72},{id:"volcan",brand:"Volcán",name:"R",year:2025,klass:"S2",rating:947,type:"super",tag:"Hypercar",paint:16734751,accents:[16734751,1628159,15986919,1119517,16765503,12001279],power:782,weight:1348,topSpeed:352,grip:1.23,brake:1.2,offroad:.38,drivetrain:"AWD",wheelbase:2.68,track:1.72,wheelR:.35,wheelW:.33,len:4.62,width:2.02,gearRatios:[3.9,2.55,1.86,1.43,1.13,.92],finalDrive:3.45,torque:720,redline:8200,cd:.62},{id:"marea",brand:"Marea",name:"Spyder",year:2022,klass:"S1",rating:861,type:"roadster",tag:"Open-top cruiser",paint:15015749,accents:[15015749,16248800,1712688,1554648,15905076,8072447],power:505,weight:1420,topSpeed:311,grip:1.12,brake:1.08,offroad:.46,drivetrain:"RWD",wheelbase:2.64,track:1.66,wheelR:.35,wheelW:.3,len:4.42,width:1.94,gearRatios:[3.6,2.35,1.7,1.3,1.02,.84],finalDrive:3.7,torque:530,redline:8e3,cd:.65},{id:"camino",brand:"Camino",name:"Rey",year:2021,klass:"B",rating:693,type:"truck",tag:"Baja pickup",paint:14132570,accents:[14132570,3107663,1843238,15919052,14367531,4165590],power:452,weight:2310,topSpeed:222,grip:.88,brake:.86,offroad:1,drivetrain:"4WD",wheelbase:3.3,track:1.78,wheelR:.46,wheelW:.36,len:5.42,width:2.12,gearRatios:[3.9,2.5,1.8,1.4,1.1,.9],finalDrive:4.1,torque:690,redline:6200,cd:.86},{id:"lobo",brand:"Lobo",name:"GT3",year:2024,klass:"S1",rating:899,type:"gt3",tag:"Track monster",paint:15855850,accents:[15855850,2113023,16723322,1514276,16765952,2742437],power:608,weight:1255,topSpeed:302,grip:1.3,brake:1.26,offroad:.3,drivetrain:"RWD",wheelbase:2.7,track:1.74,wheelR:.35,wheelW:.33,len:4.58,width:2.04,gearRatios:[3.8,2.5,1.82,1.4,1.1,.9],finalDrive:3.6,torque:620,redline:8400,cd:.7},{id:"cielo",brand:"Cielo",name:"68",year:1968,klass:"B",rating:641,type:"classic",tag:"Vintage muscle",paint:15721408,accents:[15721408,1793676,9116972,1776672,13605691,3898703],power:382,weight:1600,topSpeed:238,grip:.89,brake:.84,offroad:.5,drivetrain:"RWD",wheelbase:2.9,track:1.6,wheelR:.38,wheelW:.26,len:4.78,width:1.9,gearRatios:[3.2,2.1,1.55,1.2,.96,.8],finalDrive:3.3,torque:560,redline:6100,cd:.82},{id:"electrico",brand:"Eléctrico",name:"X",year:2025,klass:"S1",rating:878,type:"ev",tag:"Silent missile",paint:2089215,accents:[2089215,16054271,856096,9067775,16723322,11992893],power:672,weight:1935,topSpeed:283,grip:1.14,brake:1.12,offroad:.52,drivetrain:"AWD",wheelbase:2.86,track:1.72,wheelR:.37,wheelW:.31,len:4.76,width:1.98,gearRatios:[1],finalDrive:8.2,torque:980,redline:16e3,cd:.58,ev:!0},{id:"duna",brand:"Duna",name:"Buggy",year:2023,klass:"B",rating:612,type:"buggy",tag:"Desert toy",paint:16764718,accents:[16764718,16735021,1844526,15986917,2480308,8080383],power:302,weight:1090,topSpeed:204,grip:.83,brake:.8,offroad:1.08,drivetrain:"RWD",wheelbase:2.7,track:1.88,wheelR:.5,wheelW:.4,len:4.1,width:2,gearRatios:[3.55,2.3,1.68,1.28,1,.84],finalDrive:4.2,torque:390,redline:7e3,cd:.98},{id:"toro",brand:"Toro",name:"Bronco",year:2022,klass:"A",rating:754,type:"suv",tag:"Go-anywhere 4x4",paint:2980434,accents:[2980434,15778369,1843753,15328470,14238760,3768263],power:402,weight:2130,topSpeed:231,grip:.95,brake:.9,offroad:1.04,drivetrain:"4WD",wheelbase:2.94,track:1.78,wheelR:.45,wheelW:.34,len:4.84,width:2.05,gearRatios:[3.8,2.45,1.76,1.36,1.08,.88],finalDrive:4,torque:600,redline:6500,cd:.84}],Kt={glass:new Xt({color:594717,metalness:.9,roughness:.1,transparent:!0,opacity:.92}),dark:new Xt({color:1119514,roughness:.72,metalness:.18}),trim:new Xt({color:2304046,roughness:.48,metalness:.6}),chrome:new Xt({color:14279399,roughness:.18,metalness:1}),tire:new Xt({color:1052947,roughness:.94,metalness:0}),rim:new Xt({color:12502990,roughness:.26,metalness:.92}),rimDark:new Xt({color:3225663,roughness:.32,metalness:.86}),red:new Xt({color:8130324,emissive:16719147,emissiveIntensity:.75,roughness:.35}),amber:new Xt({color:7025664,emissive:16747032,emissiveIntensity:.55,roughness:.4}),head:new Xt({color:16774879,emissive:16772536,emissiveIntensity:1.3,roughness:.25}),white:new Xt({color:15855590,roughness:.5,metalness:.2}),black:new Xt({color:526603,roughness:.8})};function Vt(n,t,e,i,s=0,r=0,o=0,a){const c=new gt(new re(n,t,e),i);return c.position.set(s,r,o),c.castShadow=!0,c.receiveShadow=!0,a&&a.add(c),c}function Hs(n,t,e,i=0,s=0,r=0,o,a=10){const c=new gt(new Me(n,n,t,a),e);return c.position.set(i,s,r),c.castShadow=!0,o&&o.add(c),c}function Th(n,t,e,i=.88,s=.96,r=.9,o=0){const a=n/2,c=e/2,l=[[-a*s,0,-c],[a*s,0,-c],[-a*i,0,c],[a*i,0,c],[-a*s*r,t,-c+o],[a*s*r,t,-c+o],[-a*i*r,t,c-o*1.6],[a*i*r,t,c-o*1.6]],h=[];for(const d of l)h.push(...d);const u=[0,1,2,2,1,3,4,6,5,5,6,7,0,2,4,4,2,6,1,5,3,3,5,7,2,3,6,6,3,7,0,1,4,4,1,5],f=new Ue;return f.setAttribute("position",new xe(h,3)),f.setIndex(u),f.computeVertexNormals(),f}function Jr(n,t,e,i){const s=-n.len/2,r=n.len/2,o=i||[[s,e+.05],[s-.01,t-.16],[s+.12,t],[s+n.len*.17,t+.05],[r-n.len*.22,t+.03],[r-.04,t-.08],[r,t-.21],[r,e+.03],[s+n.len*.36,e-.02],[s+n.len*.64,e-.02]],a=new Su;a.moveTo(o[0][0],o[0][1]);for(let l=1;l<o.length;l++)a.lineTo(o[l][0],o[l][1]);a.closePath();const c=new Nc(a,{depth:n.width,bevelEnabled:!0,bevelSize:.035,bevelThickness:.035,bevelSegments:1});return c.rotateY(-Math.PI/2),c.translate(n.width/2,0,0),c.computeVertexNormals(),c}function Fx(n,t){const e=new Te,i=new Te,s=new gt(new Me(n.wheelR,n.wheelR,n.wheelW,14,1),Kt.tire);s.rotation.z=Math.PI/2,s.castShadow=!0,i.add(s);const r=new gt(new Me(n.wheelR*.59,n.wheelR*.59,n.wheelW+.025,10),t);r.rotation.z=Math.PI/2,i.add(r);const o=new gt(new Me(n.wheelR*.16,n.wheelR*.16,n.wheelW+.06,8),Kt.chrome);o.rotation.z=Math.PI/2,i.add(o);for(let a=0;a<5;a++){const c=Vt(n.wheelW*.42,n.wheelR*.86,.035,t,0,0,0,i);c.rotation.x=a/5*Math.PI,c.position.x=n.wheelW*.23}return e.add(i),{pivot:e,spin:i}}function Ox(n,t,e){const i=t.len/2+.005,s=-t.len/2-.005,r=e-.18,o=Kt.head.clone(),a=Kt.red.clone();if(t.type==="classic"){for(const c of[-1,1]){const l=new gt(new Un(.145,10,6),o);l.position.set(c*t.width*.31,r+.09,i+.03),n.add(l);const h=new gt(new ai(.16,.025,6,12),Kt.chrome);h.position.copy(l.position),h.rotation.y=Math.PI/2,n.add(h)}Vt(t.width*.88,.09,.05,Kt.chrome,0,e-.47,i+.03,n),Vt(t.width*.9,.11,.05,Kt.chrome,0,e-.46,s-.04,n);for(const c of[-1,1])Vt(.19,.1,.035,a,c*t.width*.34,r+.02,s-.03,n)}else if(t.type==="ev")Vt(t.width*.62,.06,.03,o,0,r+.08,i,n),Vt(t.width*.72,.055,.03,a,0,r+.08,s,n);else if(t.type==="buggy"){for(const c of[-1,1]){const l=new gt(new Un(.11,8,6),o);l.position.set(c*.5,e+.28,t.len/2-.12),n.add(l)}Vt(.9,.06,.03,a,0,e+.22,-t.len/2+.1,n)}else{for(const l of[-1,1])Vt(t.width*.19,.1,.035,o,l*t.width*.32,r,i,n),Vt(t.width*.075,.07,.038,Kt.amber,l*t.width*.4,r-.02,i,n);const c=Vt(t.width*.56,.075,.035,a,0,r+.1,s,n);c.material=a}return{headMat:o,brakeMat:a}}function Ou(n,t=n.paint){const e=new Te;e.name=`car-${n.id}`;const i=new Xt({color:t,metalness:.58,roughness:.3,envMapIntensity:1.05}),s=new Xt({color:n.accents[1]||16777215,metalness:.32,roughness:.4}),r=n.type==="buggy"||n.type==="rally"?Kt.rimDark:Kt.rim,o=n.type==="truck"||n.type==="suv"?1.1:n.type==="buggy"?.92:.78,a=n.wheelR*1.12,c=n.wheelbase,l=n.track+.22,h=n.width/2,u=new Te;e.add(u);let f;n.type==="truck"?f=Jr(n,1.08,.44,[[-n.len/2,.58],[-n.len/2,.84],[-n.len*.12,.88],[-n.len*.12,1.08],[n.len*.17,1.1],[n.len/2-.05,1.02],[n.len/2,.72],[n.len/2,.54],[n.len*.34,.52],[-n.len*.34,.52]]):n.type==="buggy"?f=Jr(n,.76,.48,[[-n.len/2,.57],[-n.len/2+.1,.67],[-n.len*.55,.78],[-n.len*.1,.82],[n.len*.2,.72],[n.len/2-.15,.66],[n.len/2-.1,.58],[-n.len*.3,.55]]):n.type==="classic"?f=Jr(n,.84,.4,[[-n.len/2,.49],[-n.len/2,.78],[-n.len*.32,.86],[-n.len*.08,.88],[n.len*.16,.9],[n.len*.3,.78],[n.len/2,.7],[n.len/2,.49],[n.len*.3,.45],[-n.len*.32,.45]]):f=Jr(n,o,a);const d=new gt(f,i);d.castShadow=!0,d.receiveShadow=!0,u.add(d),Vt(n.width*.88,.18,n.len*.88,Kt.dark,0,a-.02,0,u),Vt(.07,.11,n.len*.55,Kt.trim,n.width*.49,a+.06,0,u),Vt(.07,.11,n.len*.55,Kt.trim,-n.width*.49,a+.06,0,u);const g=n.type==="truck"?n.len*.3:n.type==="buggy"?0:n.len*.4,_=n.type==="suv"?.66:n.type==="truck"?.55:n.type==="classic"?.5:.47,m=n.type==="truck"?n.len*.1:n.type==="super"||n.type==="gt3"?-n.len*.04:-n.len*.06;if(n.type!=="roadster"&&n.type!=="buggy"&&g>.1){const b=new gt(Th(n.width*.79,_,g,.92,.78,.72,_*.22),Kt.glass);b.position.set(0,o-.04,m),b.castShadow=!0,u.add(b);const A=new gt(Th(n.width*.68,.08,g*.7,.94,.82,.9,0),i);A.position.set(0,o+_-.005,m-g*.14),A.castShadow=!0,u.add(A),Vt(n.width*.055,.012,g*.64,s,0,o+_+.043,m-g*.14,u),Vt(.045,_,.045,Kt.dark,n.width*.395,o+_*.45,m+g*.36,u),Vt(.045,_,.045,Kt.dark,-n.width*.395,o+_*.45,m+g*.36,u)}else if(n.type==="roadster"){const b=new gt(new re(n.width*.7,.38,.04),Kt.glass);b.position.set(0,o+.17,n.len*.12),b.rotation.x=-.34,u.add(b),Vt(n.width*.62,.08,.35,Kt.trim,0,o+.02,n.len*.08,u),Vt(.06,.34,.06,Kt.trim,n.width*.38,o+.16,n.len*.12,u),Vt(.06,.34,.06,Kt.trim,-n.width*.38,o+.16,n.len*.12,u)}if(n.type==="truck"){Vt(n.width*.96,.34,.11,i,0,.92,-n.len/2+.07,u),Vt(.1,.34,n.len*.38,i,n.width*.45,.92,-n.len*.26,u),Vt(.1,.34,n.len*.38,i,-n.width*.45,.92,-n.len*.26,u),Vt(n.width*.86,.06,n.len*.38,Kt.dark,0,.87,-n.len*.26,u);for(const b of[-1,1])Hs(.035,.4,Kt.chrome,b*n.width*.44,1.12,-n.len*.09,u,6).rotation.x=Math.PI/2}if(n.type==="rally"){Vt(.48,.13,.62,Kt.trim,0,o+_,m-.3,u),Vt(.75,.09,.12,Kt.dark,0,o+_+.13,m-.58,u);for(let b=-1;b<=1;b++)Vt(.12,.08,.04,Kt.head,b*.24,o+_+.13,m-.65,u);for(const b of[-1,1])Vt(.26,.2,.06,Kt.dark,b*n.width*.36,o-.4,-n.len*.36,u)}if(n.type==="super"||n.type==="gt3"){const b=n.width*1.02;Vt(b,.055,.42,i,0,o+.47,-n.len*.44,u),Vt(.055,.4,.1,Kt.dark,n.width*.34,o+.26,-n.len*.44,u),Vt(.055,.4,.1,Kt.dark,-n.width*.34,o+.26,-n.len*.44,u),Vt(n.width*.78,.08,.28,Kt.dark,0,a+.02,n.len*.45,u),Vt(n.width*.86,.05,.2,Kt.dark,0,a+.02,-n.len*.46,u),Vt(.06,.18,.52,Kt.dark,n.width*.48,o-.26,-n.len*.02,u),Vt(.06,.18,.52,Kt.dark,-n.width*.48,o-.26,-n.len*.02,u)}if(n.type==="gt3"){for(const b of[-1,1])Vt(.07,.3,.6,Kt.dark,b*n.width*.49,o-.34,n.len*.24,u);Vt(n.width*.5,.03,.5,s,0,1.16,-n.len*.07,u)}["coupe","classic","ev"].includes(n.type)&&Vt(n.width*.095,.014,n.len*.56,s,0,o+.045,n.len*.06,u);for(const b of[-1,1])Vt(.025,.055,n.len*.5,s,b*(h+.012),a+.13,n.len*.01,u);if(n.type==="coupe"||n.type==="rally"||n.type==="classic"){Vt(n.width*.74,.038,.22,i,0,o+.055,-n.len*.46,u);for(const b of[-1,1])Vt(.04,.07,.08,Kt.dark,b*n.width*.26,o+.02,-n.len*.455,u)}if(n.type!=="buggy"){Vt(n.width*.8,.11,.16,Kt.black,0,a+.02,-n.len/2+.02,u);for(let b=-2;b<=2;b++)Vt(.035,.14,.2,Kt.dark,b*n.width*.15,a+.02,-n.len/2-.04,u)}for(const b of[-1,1])Vt(.14,.08,.08,i,b*(n.width/2+.07),o+.14,n.len*.11,u),Vt(.035,.06,.03,Kt.dark,b*(n.width/2+.13),o+.14,n.len*.11,u);if(Vt(n.width*.46,.17,.04,Kt.black,0,o-.33,n.len/2+.02,u),Vt(.46,.12,.035,Kt.white,0,a+.16,-n.len/2-.045,u),n.type!=="ev")for(const b of[-1,1]){const A=Hs(.055,.18,Kt.chrome,b*n.width*.27,a+.08,-n.len/2-.02,u,8);A.rotation.x=Math.PI/2}if(n.type==="buggy"){const b=Kt.trim;for(const S of[-1,1]){const M=Hs(.045,n.len*.72,b,S*n.width*.31,o+.18,-.1,u,6);M.rotation.x=Math.PI/2;for(let L=-2;L<=2;L++){const N=Hs(.04,.72,b,S*n.width*.31,o-.05,L*n.len*.14,u,6);N.rotation.z=0}}const A=Hs(.045,n.len*.66,b,0,o+.52,-.32,u,6);A.rotation.x=Math.PI/2,Vt(.55,.12,.5,Kt.dark,0,o-.12,.28,u);for(let S=0;S<3;S++)Vt(n.width*.7,.02,.025,s,0,o+.53,.1-S*.18,u)}const p=[],E=c/2,y=-c/2;for(const[b,A,S]of[[-l/2,E,!0],[l/2,E,!0],[-l/2,y,!1],[l/2,y,!1]]){const M=Fx(n,r);M.pivot.position.set(b,n.wheelR,A),M.front=S,M.side=Math.sign(b),e.add(M.pivot),p.push(M);const L=new gt(new Me(n.wheelR*.82,n.wheelR*.82,.05,12),Kt.black);L.rotation.z=Math.PI/2,L.position.set(b-Math.sign(b)*n.wheelW*.55,n.wheelR,A),u.add(L);const N=new gt(new ai(n.wheelR*1.02,.055,4,14,Math.PI),i);N.position.set(Math.sign(b)*(h+.015),n.wheelR,A),N.rotation.y=Math.PI/2,N.rotation.z=Math.PI/2,u.add(N)}const x=Ox(u,n,o),C=[];for(const b of[-1,1]){const A=new gt(new bn(.07,.5,6),new un({color:6281471,transparent:!0,opacity:.9,blending:li,depthWrite:!1}));A.position.set(b*n.width*.27,a+.08,-n.len/2-.27),A.rotation.x=Math.PI/2,A.visible=!1,u.add(A),C.push(A)}const T=new gt(new _o(n.width*.62,18),new un({color:0,transparent:!0,opacity:.26,depthWrite:!1}));return T.rotation.x=-Math.PI/2,T.position.y=.015,e.add(T),e.traverse(b=>{b.isMesh&&(b.castShadow=b.castShadow!==!1,b.receiveShadow=!0)}),{group:e,chassis:u,wheels:p,lights:x,boostFlames:C,paintMat:i,accentMat:s,def:n,blob:T}}function Bx(n){return{speed:Math.round(ln.clamp((n.topSpeed-190)/170*10,1,10)),accel:Math.round(ln.clamp(n.power/n.weight*26-2.5,1,10)),handling:Math.round(ln.clamp((n.grip-.75)*18,1,10)),offroad:Math.round(ln.clamp(n.offroad*9,1,10)),braking:Math.round(ln.clamp(n.brake*7.8,1,10))}}const We=ln.clamp,Gs=ln.lerp,yi=new P,Vs=new P,zx=new P,ss=new P(0,1,0),Ah=new oe,jr=new fn;new P;class kx{constructor(t,e,i,s,r){this.scene=t,this.world=e,this.effects=i,this.def=s,this.paint=r??s.paint,this.group=new Te,t.add(this.group),this.headlight=new Au(16772546,0,95,.42,.6,1.15),this.headlight.position.set(0,1.05,2.1),this.headlight.target.position.set(0,0,38),this.group.add(this.headlight),this.group.add(this.headlight.target),this.headlightOn=!1,this.obj=null,this.pos=new P(e.spawn.x,e.heightAt(e.spawn.x,e.spawn.z),e.spawn.z),this.vel=new P,this.yaw=e.spawn.yaw,this.yawVel=0,this.steer=0,this.steerAngle=0,this.gear=1,this.rpm=900,this.slip=0,this.slipRaw=0,this.drifting=!1,this.airborne=!1,this.yVel=0,this.boostFuel=100,this.boostActive=!1,this.surface="road",this.onRoad=!0,this.waterTime=0,this.shiftTimer=0,this.wheelSpin=0,this.lastGround=this.pos.y,this.bounce=0,this.bodyPitch=0,this.bodyRoll=0,this.longAccel=0,this.driftPoints=0,this.airTime=0,this.landedHard=0,this.nitroCooldown=0,this.speedKmh=0,this.distance=0,this.quatReady=!1,this.setCar(s,this.paint)}setCar(t,e){this.obj&&(this.scene.remove(this.obj.group),this.obj.group.traverse(i=>{i.isMesh&&i.geometry&&i.geometry.dispose?.()})),this.def=t,this.paint=e??t.paint,this.obj=Ou(t,this.paint),this.group.add(this.obj.group),this.obj.group.rotation.y=0,this.gear=1,this.rpm=900,this.shiftTimer=0,this.quatReady=!1}get color(){return this.paint}place(t,e,i=0){this.pos.set(t,this.world.heightAt(t,e),e),this.lastGround=this.pos.y,this.yaw=i,this.vel.set(0,0,0),this.yawVel=0,this.steer=0,this.airborne=!1,this.yVel=0,this.gear=1,this.rpm=900,this.waterTime=0,this.boostFuel=100,this.quatReady=!1,this.updateVisual(0,!0)}get forward(){return yi.set(Math.sin(this.yaw),0,Math.cos(this.yaw))}get right(){return Vs.set(Math.cos(this.yaw),0,-Math.sin(this.yaw))}resetToRoad(){let t=null,e=1/0;for(const i of this.world.roads){const s=i.pts;for(let r=0;r<s.length;r+=2){const o=s[r],a=(o.x-this.pos.x)**2+(o.z-this.pos.z)**2;a<e&&(e=a,t={p:o,i:r,road:i})}}if(t){const{p:i,i:s,road:r}=t,o=r.pts[Math.min(r.pts.length-1,s+1)],a=Math.atan2(o.x-i.x,o.z-i.z);return this.place(i.x-Math.sin(a)*2,i.z-Math.cos(a)*2,a),!0}return this.place(this.world.spawn.x,this.world.spawn.z,this.world.spawn.yaw),!1}step(t,e){const i=this.def,s=this.world.surfaceAt(this.pos.x,this.pos.z)==="water";s?(this.waterTime+=t,this.vel.multiplyScalar(.965),this.waterTime>1.25&&(this.resetToRoad(),this.effects&&this.effects.message("BACK ON THE ROAD"))):this.waterTime=Math.max(0,this.waterTime-t*2);const r=this.vel.length();this.speedKmh=r*3.6,this.surface=this.world.surfaceAt(this.pos.x,this.pos.z),this.onRoad=this.surface==="road";const o=!this.onRoad&&this.surface!=="water",a=this.surface==="sand"||this.surface==="shore"||this.surface==="dirt",c=this.forward,l=this.right,h=this.vel.dot(c),u=this.vel.dot(l);this.slipRaw=Math.atan2(u,Math.max(4,Math.abs(h))),this.slip=u;const f=We(r/75,0,1),d=Gs(.56,.075,Math.pow(f,.72)),g=We(e.steer,-1,1);this.steer+=(g-this.steer)*Math.min(1,t*10),this.steerAngle=this.steer*d;const _=Math.abs(h)/(2*Math.PI*i.wheelR)*60;if(i.ev)this.gear=1,this.rpm=1e3+Math.abs(h)/(i.topSpeed/3.6)*14e3;else{if(this.shiftTimer>0&&(this.shiftTimer-=t),this.shiftTimer<=0){const Tt=i.gearRatios[this.gear-1]*i.finalDrive,kt=Math.max(700,_*Tt);kt>i.redline*.965&&this.gear<i.gearRatios.length?(this.gear++,this.shiftTimer=.16):kt<i.redline*.33&&this.gear>1&&(this.gear--,this.shiftTimer=.12)}const ct=i.gearRatios[this.gear-1]*i.finalDrive;this.rpm=We(_*ct,750,i.redline+180)}const m=We(this.rpm/i.redline,0,1.05);let p;m<.12?p=.52+m*2.4:m<.58?p=.8+(m-.12)*.44:p=Math.max(.22,1.02-(m-.58)*1.35);const E=We(e.throttle,0,1),y=We(e.brake,0,1),x=e.handbrake?1:0,C=this.onRoad?1:We(.55+i.offroad*.46,.6,1.04),T=Math.min(.55,r*r*7e-5),b=i.grip*C*(1+T);let A=0;if(!this.airborne){if(E>.01)if(h<-.7)A+=E*12;else{let Tt=i.ev?i.finalDrive:i.gearRatios[this.gear-1]*i.finalDrive;this.shiftTimer>0&&(Tt*=.15);let kt=i.torque*p*Tt/i.wheelR*E*.93;i.ev&&(kt=i.torque*E*7.2);const ee=i.weight*9.81*b*(i.drivetrain==="RWD"?.93:1.26);kt=Math.min(kt,ee),A+=kt/i.weight}y>.01&&(h>.8?A-=y*9.81*i.brake*1.28:h>-13&&(A-=y*4.2)),x&&(A-=Math.sign(h)*Math.min(Math.abs(h)/t,8.6)),this.boostActive=!!e.boost&&this.boostFuel>.5&&h>2&&!this.airborne,this.boostActive?(A+=5.6*(1-r/(i.topSpeed/3.6*1.03)),this.boostFuel=Math.max(0,this.boostFuel-t*26)):this.boostFuel=Math.min(100,this.boostFuel+t*7.5);const ct=.5*1.225*i.cd*(i.width*.9)*r*r/i.weight;A-=Math.sign(h)*ct,A-=Math.sign(h)*(o?.85:.16),a&&(A-=Math.sign(h)*.55)}const S=h,M=i.topSpeed/3.6*(this.boostActive?1.05:1)*(o?.72:1),L=We(h+A*t,-16,M+1);let N=0;if(!this.airborne){const Tt=9.81*b*(x?2.3:1.65)/Math.max(5.5,r);N=L/i.wheelbase*Math.tan(this.steerAngle),N=We(N,-Tt,Tt),i.drivetrain==="RWD"&&(N+=this.steer*E*We(r/40,0,1)*.2),(i.drivetrain==="AWD"||i.drivetrain==="4WD")&&(N*=1.03),x&&(N*=1.18)}const V=this.airborne?.8:x?4.4:8.5;this.yawVel+=(N-this.yawVel)*Math.min(1,t*V),this.yaw+=this.yawVel*t;const Z=this.forward.clone(),W=this.right.clone();let k=this.vel.dot(Z)+A*t,q=this.vel.dot(W);if(this.longAccel=(k-S)/Math.max(t,1e-4),k>M&&(k=Gs(k,M,Math.min(1,t*4))),k<-16&&(k=-16),Math.abs(k)<.3&&E<.01&&y<.01&&(k=0),this.airborne)q*=Math.exp(-.22*t),this.slip=q;else{const ct=(x?.9:5.8)*(this.onRoad?1:.62)*(a?.84:1)*(1+i.grip*.12);q*=Math.exp(-ct*t),Math.abs(q)>5&&(k-=Math.sign(k)*Math.min(Math.abs(k),Math.abs(q)*.02*t*60)),this.slip=q,this.slipRaw=Math.atan2(q,Math.max(4,Math.abs(k)))}this.vel.copy(Z).multiplyScalar(k).addScaledVector(W,q),this.speedKmh=this.vel.length()*3.6;const G=x?1.6:3.2;this.drifting=!this.airborne&&r>8&&Math.abs(q)>G&&(x||Math.abs(this.slipRaw)>.14),this.drifting?this.driftPoints+=Math.abs(q)*r*t*.55:this.driftPoints*=Math.max(0,1-t*1.8),this.pos.x+=this.vel.x*t,this.pos.z+=this.vel.z*t,this.distance+=r*t;const ot=1990;Math.abs(this.pos.x)>ot&&(this.pos.x=We(this.pos.x,-ot,ot),this.vel.x*=-.25,this.yawVel*=.5),Math.abs(this.pos.z)>ot&&(this.pos.z=We(this.pos.z,-ot,ot),this.vel.z*=-.25,this.yawVel*=.5);for(const ct of this.world.obstacles){const Tt=this.pos.x-ct.x,kt=this.pos.z-ct.z,ee=ct.r+1.05,Yt=Tt*Tt+kt*kt;if(Yt<ee*ee&&Yt>1e-6){const j=Math.sqrt(Yt),H=Tt/j,it=kt/j;this.pos.x=ct.x+H*ee,this.pos.z=ct.z+it*ee;const at=this.vel.x*H+this.vel.z*it;at<0&&(this.vel.x-=H*at*1.4,this.vel.z-=it*at*1.4,this.vel.multiplyScalar(.72),this.yawVel*=.6,Math.abs(at)>6&&this.effects&&this.effects.bump(this.pos,Math.abs(at)))}}const mt=this.world.heightAt(this.pos.x,this.pos.z);if(this.airborne){if(this.yVel-=23*t,this.pos.y+=this.yVel*t,this.airTime+=t,this.pos.y<=mt){const ct=Math.abs(this.yVel);this.pos.y=mt,this.yVel=0,this.airborne=!1,this.landedHard=ct,ct>7&&this.effects&&this.effects.land(this.pos,ct),this.airTime>.5&&this.effects&&this.effects.air(this.airTime*ct),this.airTime=0}}else{const ct=this.pos.y-mt;ct>.55&&r>11&&!s?(this.airborne=!0,this.yVel=Math.min(10,ct*r*.16+1.2)):(this.pos.y=mt,this.lastGround=mt)}this.effects&&!this.airborne&&(this.drifting?this.effects.tireSmoke(this.pos,this.yaw,this.vel,this.drifting):o&&r>7&&this.effects.dust(this.pos,this.vel,this.surface,r,t),this.drifting&&this.onRoad&&r>12&&this.effects.skid(this.pos,this.yaw,this.obj.def.track/2,this.obj.def.wheelbase/2),s&&this.effects.splash(this.pos)),this.wheelSpin+=k*t/i.wheelR,this.updateVisual(t),this.updateTelemetry(t)}updateTelemetry(t){if(this.speedKmh=this.vel.length()*3.6,this.obj){const e=this._lastBrake||this._lastHandbrake;this.obj.lights.brakeMat.emissiveIntensity=e?3.4:.7;const i=this.boostActive;for(const s of this.obj.boostFlames)s.visible=i,i&&(s.scale.set(.8+Math.random()*.5,.7+Math.random()*.8,.8+Math.random()*.5),s.material.opacity=.65+Math.random()*.35)}}updateVisual(t,e=!1){if(!this.obj)return;const i=this.vel.length(),s=this.forward,r=this.right,o=this.world.normalAt(this.pos.x,this.pos.z,zx);if(this.airborne&&o.set(0,1,0),Vs.copy(r),ss.copy(o),yi.copy(s),yi.addScaledVector(ss,-yi.dot(ss)).normalize(),Vs.crossVectors(ss,yi).normalize(),yi.crossVectors(Vs,ss).normalize(),Ah.makeBasis(Vs,ss,yi),jr.setFromRotationMatrix(Ah),this.airborne){const u=We(this.yVel*.012,-.16,.16);jr.multiply(new fn().setFromAxisAngle(new P(1,0,0),-u))}!this.quatReady||e?(this.group.quaternion.copy(jr),this.quatReady=!0):this.group.quaternion.slerp(jr,1-Math.exp(-16*t)),this.group.position.copy(this.pos);const c=this.surface!=="road"?Math.sin(this.distance*.72)*.022*We(i/20,0,1):0;this.bounce=Gs(this.bounce,c,.25);const l=We(-this.longAccel*.0055,-.075,.075),h=We(this.yawVel*i*.0018+this.slip*.002,-.095,.095);this.bodyPitch=Gs(this.bodyPitch,l,.12),this.bodyRoll=Gs(this.bodyRoll,h,.12),this.obj.chassis.position.y=this.bounce,this.obj.chassis.rotation.x=this.bodyPitch,this.obj.chassis.rotation.z=this.bodyRoll;for(const u of this.obj.wheels){u.spin.rotation.x=this.wheelSpin,u.front&&(u.pivot.rotation.y=this.steerAngle*.95);const f=this.airborne?-.2:0;u.pivot.position.y=this.obj.def.wheelR+f}this.obj.group.position.y=0}setLights(t){this.obj&&(this.headlightOn=!!t,this.headlight&&(this.headlight.intensity=t?360:0),this.obj.lights.headMat.emissiveIntensity=t?3.4:1.2,this.obj.lights.headMat.emissive.setHex(t?16773312:16772536))}applyInput(t){this._lastBrake=t.brake>.1,this._lastHandbrake=!!t.handbrake}}const Hx=`
attribute float aSize;
attribute float aAlpha;
attribute vec3 aColor;
varying float vAlpha;
varying vec3 vColor;
void main() {
  vAlpha = aAlpha;
  vColor = aColor;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = aSize * (520.0 / max(1.0, -mv.z));
  gl_Position = projectionMatrix * mv;
}`,Gx=`
precision highp float;
varying float vAlpha;
varying vec3 vColor;
void main() {
  vec2 uv = gl_PointCoord - 0.5;
  float d = length(uv);
  float a = smoothstep(0.5, 0.08, d) * vAlpha;
  if (a < 0.01) discard;
  gl_FragColor = vec4(vColor, a);
}`,Vx=new P,Rh=new fn,Qr=new oe,Ch=new P(1,1,1);class Wx{constructor(t){this.scene=t,this.onMessage=()=>{},this.shake=0,this.flash=0,this.MAX=700,this.count=0,this.cursor=0,this.parts=[];const e=new Float32Array(this.MAX*3),i=new Float32Array(this.MAX),s=new Float32Array(this.MAX),r=new Float32Array(this.MAX*3),o=new Ue;o.setAttribute("position",new De(e,3)),o.setAttribute("aSize",new De(i,1)),o.setAttribute("aAlpha",new De(s,1)),o.setAttribute("aColor",new De(r,3));const a=new En({vertexShader:Hx,fragmentShader:Gx,transparent:!0,depthWrite:!1,blending:Ci});this.positions=e,this.sizes=i,this.alphas=s,this.colors=r,this.points=new pu(o,a),this.points.frustumCulled=!1,this.points.renderOrder=5,t.add(this.points);for(let h=0;h<this.MAX;h++)this.parts.push({active:!1,life:0,max:1,vx:0,vy:0,vz:0,g:0,drag:.98,size0:1,size1:1,r:1,g2:1,b:1,alpha:.5}),s[h]=0;const c=new wn(.42,1.3);c.rotateX(-Math.PI/2);const l=new un({color:1315343,transparent:!0,opacity:.4,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-3});this.skidMax=420,this.skids=new Ms(c,l,this.skidMax),this.skids.frustumCulled=!1,this.skids.renderOrder=1,this.skidCursor=0,this.skidTimer=0,this.skidSides=[0,0];for(let h=0;h<this.skidMax;h++)Qr.makeTranslation(0,-9999,0),this.skids.setMatrixAt(h,Qr);this.skids.instanceMatrix.needsUpdate=!0,t.add(this.skids),this.tmpSkidQ=new fn}spawn(t,e,i,s,r,o,a,c,l,h,u=.6,f=0,d=.97){const g=this.cursor;this.cursor=(this.cursor+1)%this.MAX;const _=this.parts[g];_.active=!0,_.life=l,_.max=l,_.vx=s,_.vy=r,_.vz=o,_.size0=a,_.size1=c,_.g=f,_.drag=d,_.r=h.r,_.g2=h.g,_.b=h.b,_.alpha=u,this.positions[g*3]=t,this.positions[g*3+1]=e,this.positions[g*3+2]=i,this.colors[g*3]=h.r,this.colors[g*3+1]=h.g,this.colors[g*3+2]=h.b,this.sizes[g]=a,this.alphas[g]=u}tireSmoke(t,e,i,s=1){const a=Math.sin(e),c=Math.cos(e),l=Math.cos(e),h=-Math.sin(e);for(const u of[-1,1]){if(Math.random()>.72)continue;const f=t.x+l*.8*u-a*1.2,d=t.z+h*.8*u-c*1.2,g=t.y+.25;this.spawn(f,g,d,-i.x*.14+(Math.random()-.5)*2.2,1.2+Math.random()*2.2,-i.z*.14+(Math.random()-.5)*2.2,1.1+Math.random()*1.1,5.5+Math.random()*3,1.1+Math.random()*.9,{r:.78,g:.76,b:.72},.42,-.7,.985)}}dust(t,e,i,s,r){if(Math.random()>Math.min(.75,r*42))return;const o=i==="sand"?{r:.72,g:.56,b:.34}:i==="dirt"?{r:.55,g:.47,b:.35}:{r:.5,g:.53,b:.35};for(let a=0;a<2;a++)this.spawn(t.x+(Math.random()-.5)*2.4,t.y+.2,t.z+(Math.random()-.5)*2.4,-e.x*.09+(Math.random()-.5)*3.4,1+Math.random()*2.6,-e.z*.09+(Math.random()-.5)*3.4,1.2+Math.random()*1.4,6+Math.random()*4,1.2+Math.random()*1.2,o,.3,-.9,.982)}splash(t){Math.random()>.5||this.spawn(t.x+(Math.random()-.5)*2,t.y+.2,t.z+(Math.random()-.5)*2,(Math.random()-.5)*3,2+Math.random()*3,(Math.random()-.5)*3,.7,2.6,.8,{r:.72,g:.92,b:.98},.65,-7,.985)}land(t,e=8){this.shake=Math.min(1.3,this.shake+e*.055);for(let i=0;i<26;i++){const s=Math.random()*Math.PI*2,r=1+Math.random()*2.5;this.spawn(t.x+Math.cos(s)*r,t.y+.15,t.z+Math.sin(s)*r,Math.cos(s)*(2+Math.random()*4),.6+Math.random()*2.6,Math.sin(s)*(2+Math.random()*4),1.2,5.5,.9+Math.random()*.7,{r:.7,g:.61,b:.44},.34,-2,.97)}}bump(t,e=8){this.shake=Math.min(1.1,this.shake+e*.03);for(let i=0;i<8;i++)this.spawn(t.x,t.y+.55,t.z,(Math.random()-.5)*8,1+Math.random()*4,(Math.random()-.5)*8,.28,.05,.35+Math.random()*.3,{r:1,g:.65,b:.2},.9,-9,.98)}skid(t,e,i,s){this.skidTimer-=1/60;const r=Math.sin(e),o=Math.cos(e),a=Math.cos(e),c=-Math.sin(e);for(let l=0;l<2;l++){const h=l===0?-1:1,u=t.x+a*i*h-r*s,f=t.z+c*i*h-o*s,d=t.y+.045,g=u-this.skidSides[l*2],_=f-this.skidSides[l*2+1];if(this.skidSides[l*2]===0&&this.skidSides[l*2+1]===0){this.skidSides[l*2]=u,this.skidSides[l*2+1]=f;continue}const m=Math.hypot(g,_);if(m<.35){this.skidSides[l*2]=u,this.skidSides[l*2+1]=f;continue}const p=Math.atan2(g,_);Rh.setFromEuler(new tn(0,p,0)),Ch.set(1,1,Math.min(2.4,m/1.3)),Qr.compose(Vx.set(u,d,f),Rh,Ch),this.skids.setMatrixAt(this.skidCursor,Qr),this.skidCursor=(this.skidCursor+1)%this.skidMax,this.skids.instanceMatrix.needsUpdate=!0,this.skidSides[l*2]=u,this.skidSides[l*2+1]=f}this.skidTimer=.06}air(t){const e=Math.min(1e3,Math.round(t));e>20&&this.onMessage(`AIR +${e}`,"AIRTIME")}message(t,e=""){this.onMessage(t,e)}update(t){for(let e=0;e<this.MAX;e++){const i=this.parts[e];if(!i.active){this.alphas[e]=0;continue}if(i.life-=t,i.life<=0){i.active=!1,this.alphas[e]=0;continue}const s=1-i.life/i.max;i.vx*=i.drag,i.vz*=i.drag,i.vy=i.vy*i.drag+i.g*t,this.positions[e*3]+=i.vx*t,this.positions[e*3+1]+=i.vy*t,this.positions[e*3+2]+=i.vz*t,this.sizes[e]=i.size0+(i.size1-i.size0)*s,this.alphas[e]=i.alpha*Math.min(1,(1-s)*2.5)*Math.min(1,s*8)}this.points.geometry.attributes.position.needsUpdate=!0,this.points.geometry.attributes.aSize.needsUpdate=!0,this.points.geometry.attributes.aAlpha.needsUpdate=!0,this.points.geometry.attributes.aColor.needsUpdate=!0,this.shake*=Math.exp(-4.5*t),this.flash*=Math.exp(-6*t)}}const rs=n=>440*Math.pow(2,(n-69)/12);class Xx{constructor(){this.ctx=null,this.ready=!1,this.muted=!1,this.master=null,this.engineBus=null,this.musicBus=null,this.sfxBus=null,this.engine=null,this.wind=null,this.tire=null,this.module=0,this.nextStep=0,this.step=0,this.tempo=94,this.musicOn=!0,this.engineOn=!1,this.boost=!1,this.delay=null}async init(){if(this.ready)return;const t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t,await this.ctx.resume().catch(()=>{}),this.master=this.ctx.createGain(),this.master.gain.value=this.muted?0:.72,this.master.connect(this.ctx.destination),this.engineBus=this.ctx.createGain(),this.engineBus.gain.value=0,this.musicBus=this.ctx.createGain(),this.musicBus.gain.value=.16,this.sfxBus=this.ctx.createGain(),this.sfxBus.gain.value=.35,this.engineBus.connect(this.master),this.musicBus.connect(this.master),this.sfxBus.connect(this.master),this.delay=this.ctx.createDelay(1),this.delay.delayTime.value=.29;const e=this.ctx.createGain();e.gain.value=.23;const i=this.ctx.createGain();i.gain.value=.28,this.delay.connect(e),e.connect(this.delay),this.delay.connect(i),i.connect(this.musicBus),this.buildEngine(),this.buildWind(),this.nextStep=this.ctx.currentTime+.1,this.ready=!0}noiseBuffer(t=2){const e=Math.floor(this.ctx.sampleRate*t),i=this.ctx.createBuffer(1,e,this.ctx.sampleRate),s=i.getChannelData(0);let r=0;for(let o=0;o<e;o++){const a=Math.random()*2-1;r=r*.35+a*.65,s[o]=r}return i}buildEngine(){const t=this.ctx,e=t.createOscillator();e.type="sawtooth",e.frequency.value=70;const i=t.createOscillator();i.type="square",i.frequency.value=35;const s=t.createGain();s.gain.value=.22;const r=t.createGain();r.gain.value=.08;const o=t.createBiquadFilter();o.type="lowpass",o.frequency.value=700,o.Q.value=1.4;const a=t.createGain();a.gain.value=0,e.connect(s),s.connect(o),i.connect(r),r.connect(o),o.connect(a),a.connect(this.engineBus),e.start(),i.start(),this.engine={osc1:e,osc2:i,filter:o,bus:a,gain1:s,gain2:r};const c=t.createBufferSource();c.buffer=this.noiseBuffer(2),c.loop=!0;const l=t.createBiquadFilter();l.type="bandpass",l.frequency.value=1700,l.Q.value=3.5;const h=t.createGain();h.gain.value=0,c.connect(l),l.connect(h),h.connect(this.engineBus),c.start(),this.tire={src:c,filt:l,gain:h}}buildWind(){const t=this.ctx,e=t.createBufferSource();e.buffer=this.noiseBuffer(3),e.loop=!0;const i=t.createBiquadFilter();i.type="lowpass",i.frequency.value=420,i.Q.value=.6;const s=t.createGain();s.gain.value=0,e.connect(i),i.connect(s),s.connect(this.master),e.start(),this.wind={gain:s,filter:i}}updateEngine(t=900,e=0,i=0,s=0,r=!1,o=!1,a=!1){if(!this.ready)return;const c=this.ctx.currentTime,l=Math.max(24,t/60*3.1),h=a?.055+e*.11:0;this.engine.bus.gain.setTargetAtTime(h*(o?1.35:1),c,.07),this.engine.osc1.frequency.setTargetAtTime(l,c,.035),this.engine.osc2.frequency.setTargetAtTime(l*.5+1.4,c,.05),this.engine.filter.frequency.setTargetAtTime(320+e*1300+Math.min(900,t/9),c,.06),this.engine.filter.Q.setTargetAtTime(o?3.2:1.2,c,.1),this.engine.gain2.gain.setTargetAtTime(o?.14:.07,c,.08);const u=a?Math.min(.16,Math.abs(s)*.022):0;this.tire.gain.gain.setTargetAtTime(u,c,.05),this.tire.filt.frequency.setTargetAtTime(1200+Math.abs(s)*90,c,.08);const f=a?Math.min(.2,(i/80)**2*.18+(r?.02:0)):.012;this.wind.gain.gain.setTargetAtTime(f,c,.15),this.wind.filter.frequency.setTargetAtTime(300+i*7,c,.2)}click(t=700){if(!this.ready)return;const e=this.ctx,i=e.currentTime,s=e.createOscillator();s.type="triangle";const r=e.createGain();r.gain.setValueAtTime(1e-4,i),r.gain.exponentialRampToValueAtTime(.14,i+.005),r.gain.exponentialRampToValueAtTime(1e-4,i+.1),s.frequency.setValueAtTime(t,i),s.frequency.exponentialRampToValueAtTime(t*.65,i+.09),s.connect(r),r.connect(this.sfxBus),s.start(i),s.stop(i+.12)}chime(){if(!this.ready)return;const t=this.ctx,e=t.currentTime;[0,4,7,12].forEach((i,s)=>{const r=t.createOscillator();r.type="sine",r.frequency.value=rs(72+i);const o=t.createGain();o.gain.setValueAtTime(0,e+s*.07),o.gain.linearRampToValueAtTime(.08,e+s*.07+.02),o.gain.exponentialRampToValueAtTime(.001,e+s*.07+.7),r.connect(o),o.connect(this.sfxBus),r.start(e+s*.07),r.stop(e+s*.07+.8)})}note(t,e,i,s,r="triangle",o=null,a=2800){const c=this.ctx,l=c.createOscillator();l.type=r,l.frequency.value=t;const h=c.createGain();h.gain.setValueAtTime(1e-4,e),h.gain.linearRampToValueAtTime(s,e+.015),h.gain.exponentialRampToValueAtTime(1e-4,e+i);const u=c.createBiquadFilter();u.type="lowpass",u.frequency.value=a,l.connect(u),u.connect(h),h.connect(o||this.musicBus),l.start(e),l.stop(e+i+.05)}scheduleMusic(){if(!this.ready||!this.musicOn)return;const t=this.ctx,e=60/this.tempo/4;for(;this.nextStep<t.currentTime+.25;){const i=this.step%64,s=Math.floor(i/16)%4,r=s===0?[57,60,64,69]:s===1?[53,57,60,65]:s===2?[48,52,55,60]:[55,59,62,67],o=r[0]-12;if(i%16===0&&r.forEach((a,c)=>this.note(rs(a),this.nextStep,4.2,.022,c===0?"triangle":"sawtooth",null,600+c*120)),i%8===0&&this.note(rs(o-12+0),this.nextStep,.55,.11,"sawtooth",this.delay,420),i%8===4&&this.note(rs(o-5),this.nextStep,.32,.055,"sine",this.delay,500),i%2===1){const a=r[(Math.floor(i/2)+s)%4]+12;this.note(rs(a),this.nextStep,.18,.026,"triangle",this.delay,3200)}i===60&&this.note(rs(r[2]+12),this.nextStep,.9,.03,"sine",this.delay,4e3),this.nextStep+=e,this.step++}}update(){this.ready&&this.scheduleMusic()}setMuted(t){this.muted=t,this.master&&this.master.gain.setTargetAtTime(t?0:.72,this.ctx.currentTime,.05)}setMusic(t){this.musicOn=t,this.musicBus&&this.musicBus.gain.setTargetAtTime(t?.16:0,this.ctx.currentTime,.2)}}const oo=n=>document.querySelector(n),lr=ln.clamp,lc=ln.lerp,Bu="horizonLibreSaveV1",zu={carIndex:0,time:"golden",credits:5e4,skill:0,muted:!1,colors:{},best:{}};let Ce={...zu};try{const n=localStorage.getItem(Bu);n&&(Ce={...zu,...JSON.parse(n),colors:{...JSON.parse(n).colors||{}},best:{...JSON.parse(n).best||{}}})}catch{}function Oi(){try{localStorage.setItem(Bu,JSON.stringify(Ce))}catch{}}const Rs=[{id:"festival",name:"Festival Circuit",sub:"Городская петля у сцены",type:"CIRCUIT",laps:2,route:[[14,108],[100,30],[320,100],[300,290],[80,335],[20,155]],gold:82,silver:98,bronze:122,reward:8e3,desc:"Два круга вокруг фестиваля. Широкие повороты, толпа и неон."},{id:"coast",name:"Coast Run",sub:"Спуск к Пуэрто-Соль",type:"SPRINT",laps:1,route:[[170,770],[-250,1080],[-740,1215],[-1110,1090],[-1240,760]],gold:88,silver:106,bronze:132,reward:9e3,desc:"Быстрый спуск по серпантину к океану. Держитесь асфальта."},{id:"volcano",name:"Volcán Climb",sub:"Подъём к кратеру",type:"HILL CLIMB",laps:1,route:[[520,170],[700,-230],[805,-610],[848,-860],[835,-1030]],gold:84,silver:102,bronze:128,reward:1e4,desc:"Горный подъём с резкими перепадами. Нитро пригодится."},{id:"desert",name:"Dune Dash",sub:"Через дюны и кактусы",type:"SPRINT",laps:1,route:[[590,810],[980,725],[1270,505],[1430,130],[1390,-320]],gold:78,silver:94,bronze:118,reward:9500,desc:"Песок, трамплины и одинокий асфальт. Полный привод решает."},{id:"jungle",name:"Jungle Loop",sub:"Серпантин в сельве",type:"SPRINT",laps:1,route:[[-740,1215],[-865,1485],[-570,1690],[-190,1600],[130,1380],[170,1080]],gold:92,silver:112,bronze:140,reward:11e3,desc:"Узкие повороты среди пальм. Тормозите до входа в поворот."}],B={mode:"loading",previous:"title",carIndex:lr(Ce.carIndex|0,0,Ss.length-1),timePreset:Qs[Ce.time]?Ce.time:"golden",credits:Math.max(0,Number(Ce.credits)||5e4),skillTotal:Math.max(0,Number(Ce.skill)||0),muted:!!Ce.muted,touch:matchMedia("(pointer: coarse)").matches||"ontouchstart"in window,cameraMode:"chase",hasDriven:!1,race:null,started:!1,dragging:!1,menuRotation:.95,failCount:0,renderScale:1,fps:60,quality:"high"};let He,Ye,ne,ae,Ln,J,ue,Qt,Ws,Si,ws,mo=0,fs=new P,Pi=!1,hc=performance.now(),to=0,ca=0;const os={throttle:0,brake:0,steer:0,handbrake:!1,boost:!1},je=Object.create(null),ei={left:!1,right:!1,gas:!1,brake:!1,handbrake:!1,boost:!1},I={};let cn={drifting:!1,time:0,banked:0,popupTimer:0},la=0,uc=-1,Ph=0,Lh=0,Dh=0,Ih=-1,Uh=-1,Nh="",Fh=-1,Oh=-1;const ha=n=>new Promise(t=>setTimeout(t,n)),Xs=()=>new Promise(n=>requestAnimationFrame(n)),Es=n=>Math.round(n).toLocaleString("ru-RU"),tr=n=>{if(!isFinite(n))return"--:--.---";const t=Math.floor(n/60),e=Math.floor(n%60),i=Math.floor(n%1*1e3);return`${String(t).padStart(2,"0")}:${String(e).padStart(2,"0")}.${String(i).padStart(3,"0")}`},qx=n=>n<60?`${n.toFixed(0)} с`:`${Math.floor(n/60)}:${String(Math.round(n%60)).padStart(2,"0")}`;function as(n,t){oo("#loadFill").style.width=`${n}%`,oo("#loadPct").textContent=`${Math.round(n)}%`,t&&(oo("#loadLabel").textContent=t)}function _e(n){n&&n.classList.remove("hidden")}function Bt(n){n&&n.classList.add("hidden")}function kc(n,t="",e=2100){I.announceText.textContent=n,I.announceSub.textContent=t,_e(I.announce),clearTimeout(Ph),Ph=setTimeout(()=>Bt(I.announce),e)}function Ui(n,t="",e=2e3){I.toastText.textContent=n,I.toastSub.textContent=t,_e(I.toast),clearTimeout(Lh),Lh=setTimeout(()=>Bt(I.toast),e)}function fc(n,t=""){I.skillPopupText.textContent=n,I.skillMulti.textContent=t,_e(I.skillPopup),clearTimeout(cn.popupTimer),cn.popupTimer=setTimeout(()=>Bt(I.skillPopup),1500)}function Hc(n){return Ce.colors?.[n.id]??n.paint}function Nn(){return Ss[B.carIndex]}function Gc(){return Hc(Nn())}function Vc(n,t){n.textContent=`${t.klass} ${t.rating}`}function ku(n,t,e=!1){const i=Bx(t),s=[["speed","СКОРОСТЬ"],["accel","РАЗГОН"],["handling","УПРАВЛЕНИЕ"],["offroad","БЕЗДОРОЖЬЕ"],["braking","ТОРМОЗА"]];n.innerHTML=s.map(([r,o])=>{const a=i[r];return`<div class="stat"><span>${o}</span><div class="bar">${Array.from({length:10},(c,l)=>`<i class="${l<a?"on":""}"></i>`).join("")}</div><b>${a}</b></div>`}).join("")}function Hu(n,t,e){n.innerHTML="";for(const i of t.accents){const s=document.createElement("button");s.className="swatch"+(i===e?" active":""),s.style.background="#"+i.toString(16).padStart(6,"0"),s.title="Выбрать цвет",s.addEventListener("click",()=>$x(i)),n.appendChild(s)}}function Wc(){const n=Nn(),t=Hc(n);Vc(I.titleClass,n),I.titleCarName.textContent=`${n.brand} ${n.name}`,I.titleCarYear.textContent=`${n.year} · ${n.drivetrain} · ${n.power} HP`,I.titleTag.textContent=n.tag,ku(I.titleStats,n),Hu(I.titleSwatches,n,t)}function Mo(){const n=Nn(),t=Hc(n);Vc(I.garageClass,n),I.garageName.textContent=`${n.brand} ${n.name}`,I.garageTag.textContent=n.tag,I.garageMeta.textContent=`${n.year} · ${n.drivetrain} · ${n.power} HP · ${n.klass} ${n.rating}`,I.garageIndex.textContent=String(B.carIndex+1).padStart(2,"0"),ku(I.garageStats,n,!0),Hu(I.garageSwatches,n,t),I.specPower.textContent=`${n.power} HP`,I.specWeight.textContent=`${Es(n.weight)} KG`,I.specSpeed.textContent=`${n.topSpeed} КМ/Ч`,I.specDrive.textContent=n.drivetrain,Yx(),Xc()}function Yx(){if(I.carList)for(const n of I.carList.children)n.classList.toggle("active",Number(n.dataset.index)===B.carIndex)}function Xc(){const n=Nn();Vc(I.hudCarClass,n),I.hudCarName.textContent=`${n.brand} ${n.name}`,I.hudSurface.textContent=`${qu(J?.surface||"road")} · ${n.drivetrain}`}function qc(){if(!Qt&&!Ye)return;const n=Nn(),t=Gc(),e=ae?ae.festival.platformPosition.clone():new P;Qt&&(Ye.remove(Qt.group),Qt.group.traverse(i=>{i.isMesh&&i.geometry&&i.geometry.dispose?.()})),Qt=Ou(n,t),Qt.group.position.copy(e),Qt.group.rotation.y=B.menuRotation,Qt.group.scale.setScalar(1.01),Qt.group.visible=!(B.mode==="driving"||B.mode==="pause"||B.mode==="map"||B.mode==="results"),Ye.add(Qt.group),Ws?(Ws.position.copy(e).add(new P(3,6,4)),Si.position.copy(e).add(new P(-10,12,-7)),Si.target.position.copy(e)):(Ws=new Ru(16757124,120,34,1.7),Ws.position.copy(e).add(new P(3,6,4)),Ye.add(Ws),Si=new Au(5630463,180,50,.6,.65,1.4),Si.position.copy(e).add(new P(-10,12,-7)),Si.target.position.copy(e),Ye.add(Si),Ye.add(Si.target))}function $x(n){const t=Nn();Ce.colors[t.id]=n,Oi(),qc(),Wc(),Mo(),ue?.click(900)}function dc(n,t=!1){n=(n+Ss.length)%Ss.length,n!==B.carIndex&&(B.carIndex=n,Ce.carIndex=n,Oi(),qc(),Wc(),Mo(),t||ue?.click(660))}function Zx(){const n=["loading","title","hud","garage","mapscreen","pause","results","btnPlay","btnGarageTitle","btnEventsTitle","btnCycleCar","btnTimeTitle","btnSoundTitle","titleClass","titleCarName","titleCarYear","titleTag","titleStats","titleSwatches","timeLabelTitle","garageClass","garageName","garageTag","garageMeta","garageStats","garageSwatches","garageIndex","specPower","specWeight","specSpeed","specDrive","carList","garage","btnGarageClose","btnGarageBack","btnGarageDrive","hudCarClass","hudCarName","hudSurface","credits","skillTotal","speedNumber","mphNumber","gearNumber","rpmBar","nitroFill","driftBadge","driftPoints","minimap","compass","eventChip","hudEventName","hudEventSub","racePanel","raceName","raceTime","raceLap","raceCp","raceProgress","checkpointArrow","cpDistance","announce","announceText","announceSub","countdown","toast","toastText","toastSub","skillPopup","skillPopupText","skillMulti","wrongWay","touchControls","btnPauseMobile","btnResume","btnPauseGarage","btnPauseMap","btnReset","timeTabs","btnMutePause","pauseLocation","btnRetry","btnFreeRoam","medalIcon","resultTitle","resultTime","resultGold","resultYour","resultReward","btnMapClose","btnMapClose2","btnMapGarage","bigMap","bigMapMarkers","eventList","mapLegend","btnMapGarage","rotateHint"];for(const t of n)I[t]=document.getElementById(t);I.carList.innerHTML="",Ss.forEach((t,e)=>{const i=document.createElement("button");i.className="car-item",i.dataset.index=e,i.innerHTML=`<span class="num">${String(e+1).padStart(2,"0")}</span><span><b>${t.brand} ${t.name}</b><small>${t.year} · ${t.drivetrain} · ${t.tag}</small></span><span class="kl">${t.klass} ${t.rating}</span>`,i.addEventListener("click",()=>dc(e)),I.carList.appendChild(i)}),I.btnPlay.addEventListener("click",()=>hr()),I.btnGarageTitle.addEventListener("click",()=>ds("title")),I.btnEventsTitle.addEventListener("click",()=>ur("title")),I.btnCycleCar.addEventListener("click",()=>dc(B.carIndex+1)),I.btnTimeTitle.addEventListener("click",()=>xc()),I.btnSoundTitle.addEventListener("click",zh),I.btnGarageClose.addEventListener("click",pc),I.btnGarageBack.addEventListener("click",pc),I.btnGarageDrive.addEventListener("click",()=>{Bt(I.garage),hr()}),I.btnPauseMobile.addEventListener("click",()=>mc()),I.btnResume.addEventListener("click",gc),I.btnPauseGarage.addEventListener("click",()=>ds("driving")),I.btnPauseMap.addEventListener("click",()=>ur("driving")),I.btnReset.addEventListener("click",()=>{J?.resetToRoad(),gc(),Ui("МАШИНА ВОЗВРАЩЕНА НА ТРАССУ","R · СБРОС")}),I.btnMutePause.addEventListener("click",zh),I.btnRetry.addEventListener("click",()=>{const t=B.race?.event||Rs[0];Bt(I.results),Qc(t)}),I.btnFreeRoam.addEventListener("click",Xu),I.btnMapClose.addEventListener("click",_c),I.btnMapClose2.addEventListener("click",_c),I.btnMapGarage.addEventListener("click",()=>ds("driving")),I.timeTabs.querySelectorAll("button").forEach(t=>t.addEventListener("click",()=>Zc(t.dataset.time))),I.touchControls.querySelectorAll("[data-touch]").forEach(t=>{const e=t.dataset.touch,i=r=>{r.preventDefault(),ei[e]=!0,t.classList.add("active"),t.setPointerCapture?.(r.pointerId)},s=r=>{r.preventDefault(),ei[e]=!1,t.classList.remove("active")};t.addEventListener("pointerdown",i),t.addEventListener("pointerup",s),t.addEventListener("pointercancel",s),t.addEventListener("pointerleave",s),t.addEventListener("contextmenu",r=>r.preventDefault())}),window.addEventListener("keydown",Kx),window.addEventListener("keyup",t=>{je[t.code]=!1}),window.addEventListener("blur",()=>{for(const t in je)je[t]=!1}),I.garage.addEventListener("pointerdown",t=>{t.target.closest("button, .garage-list, .garage-detail, .modal-head")||(B.dragging=!0,B.dragX=t.clientX,I.garage.setPointerCapture?.(t.pointerId))}),I.garage.addEventListener("pointermove",t=>{if(!B.dragging)return;const e=t.clientX-B.dragX;B.dragX=t.clientX,B.menuRotation+=e*.012}),I.garage.addEventListener("pointerup",()=>{B.dragging=!1}),I.garage.addEventListener("pointercancel",()=>{B.dragging=!1}),window.addEventListener("resize",Bh),window.addEventListener("orientationchange",()=>setTimeout(Bh,300)),document.addEventListener("visibilitychange",()=>{document.hidden&&B.mode==="driving"&&mc()})}function Kx(n){if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(n.code)&&n.preventDefault(),je[n.code]=!0,!n.repeat){if(n.code==="Escape"){B.mode==="driving"?mc():B.mode==="pause"?gc():B.mode==="garage"?pc():B.mode==="map"?_c():B.mode==="results"&&Xu();return}if(B.mode==="title"){n.code==="Enter"||n.code==="NumpadEnter"?hr():n.code==="KeyG"?ds("title"):n.code==="KeyM"?ur("title"):n.code==="KeyT"&&xc();return}B.mode==="driving"&&(n.code==="KeyG"?ds("driving"):n.code==="KeyM"?ur("driving"):n.code==="KeyR"?(J.resetToRoad(),Ui("МАШИНА НА ТРАССЕ","R · СБРОС")):n.code==="KeyC"?Jx():n.code==="KeyT"?xc():n.code==="KeyH"&&Ui(Nn().brand+" "+Nn().name,"АВТОМОБИЛЬ НЕДЕЛИ"))}}function Bh(){He&&(ne.aspect=innerWidth/innerHeight,ne.updateProjectionMatrix(),He.setSize(innerWidth,innerHeight),Yc(),nl(),B.mode==="map"&&yo())}function Yc(){const n=innerHeight>innerWidth&&innerWidth<720;I.rotateHint?.classList.toggle("hidden",!(n&&B.mode==="driving"&&B.touch&&!B.race))}async function hr(n={}){ue?.init().then(()=>{ue.setMuted(B.muted),ue.click(600)}),ue?.chime(),B.mode="driving",B.previous="driving",Bt(I.loading),Bt(I.title),Bt(I.garage),Bt(I.mapscreen),Bt(I.pause),Bt(I.results),_e(I.hud),B.touch&&(_e(I.touchControls),_e(I.btnPauseMobile)),Qt&&(Qt.group.visible=!1),J&&(J.group.visible=!0),$c(),(!B.hasDriven||n.fresh)&&(J.place(ae.spawn.x,ae.spawn.z,ae.spawn.yaw),B.hasDriven=!0),n.race?Qc(n.race):(B.race=null,jc(),Bt(I.racePanel),Bt(I.checkpointArrow),tl("СВОБОДНАЯ ЕЗДА","BAJA · МЕКСИКА"),kc("BAJA","ДОБРО ПОЖАЛОВАТЬ НА ФЕСТИВАЛЬ",2600)),Fn(),Xc(),Yc(),ue?.update(0),B.started=!0}function $c(){if(!J)return;const n=Nn(),t=Gc();(J.def.id!==n.id||J.paint!==t)&&J.setCar(n,t),J.group.visible=!0,J.setLights(B.timePreset==="night"),Xc()}function ds(n="title"){B.mode!=="garage"&&(B.previous=n==="title"?"title":"driving",B.mode="garage",Bt(I.title),Bt(I.hud),Bt(I.pause),Bt(I.mapscreen),Bt(I.results),_e(I.garage),Qt&&(Qt.group.visible=!0),J&&(J.group.visible=!1),Mo(),ue?.click(700))}function pc(){Bt(I.garage),B.previous==="driving"?(B.mode="driving",$c(),_e(I.hud),Qt&&(Qt.group.visible=!1),Fn(),B.touch&&_e(I.touchControls)):(B.mode="title",_e(I.title),Qt&&(Qt.group.visible=!0),Bt(I.hud)),ue?.click(500)}function mc(){B.mode==="driving"&&(B.mode="pause",_e(I.pause),Bt(I.hud),Bt(I.touchControls),J&&(J.group.visible=!0),Qt&&(Qt.group.visible=!1),I.pauseLocation.textContent=B.race?B.race.event.name.toUpperCase():"BAJA · FESTIVAL GROUNDS",Kc(),Jc(),ue?.click(420))}function gc(){Bt(I.pause),B.mode="driving",_e(I.hud),Qt&&(Qt.group.visible=!1),J&&(J.group.visible=!0),B.touch&&_e(I.touchControls),Fn(),ue?.click(620)}function ur(n="driving"){B.mode!=="map"&&(B.previous=n==="title"?"title":"driving",B.mode="map",Bt(I.title),Bt(I.hud),Bt(I.pause),Bt(I.garage),Bt(I.results),_e(I.mapscreen),n==="title"?(Qt&&(Qt.group.visible=!0),J&&(J.group.visible=!1)):(Qt&&(Qt.group.visible=!1),J&&(J.group.visible=!1)),yo(),Yu(),ue?.click(700))}function _c(){Bt(I.mapscreen),B.previous==="title"?(B.mode="title",_e(I.title),Qt&&(Qt.group.visible=!0),J&&(J.group.visible=!1)):(B.mode="driving",_e(I.hud),J&&(J.group.visible=!0),Qt&&(Qt.group.visible=!1),Fn(),B.touch&&_e(I.touchControls)),ue?.click(520)}function Jx(){const n=["chase","far","hood"];B.cameraMode=n[(n.indexOf(B.cameraMode)+1)%n.length],J?.obj&&(J.obj.group.visible=B.cameraMode!=="hood"),Ui(B.cameraMode==="chase"?"КАМЕРА · ПОГОНЯ":B.cameraMode==="far"?"КАМЕРА · ДАЛЬНЯЯ":"КАМЕРА · КАПОТ","C · СМЕНА"),Fn()}function xc(){const n=["golden","day","dusk","night"];Zc(n[(n.indexOf(B.timePreset)+1)%n.length])}function Zc(n){Qs[n]&&(B.timePreset=n,Ce.time=n,Oi(),ae.setTimePreset(n),I.timeLabelTitle.textContent=Qs[n].label.toUpperCase(),Kc(),J?.setLights(n==="night"),ue?.click(760),B.mode==="driving"&&Ui(Qs[n].label.toUpperCase(),"ВРЕМЯ СУТОК"))}function Kc(){I.timeTabs?.querySelectorAll("button").forEach(n=>n.classList.toggle("active",n.dataset.time===B.timePreset))}function zh(){B.muted=!B.muted,Ce.muted=B.muted,Oi(),ue?.init().then(()=>ue.setMuted(B.muted)),ue?.setMuted(B.muted),Jc()}function Jc(){I.btnMutePause&&(I.btnMutePause.textContent=B.muted?"ВЫКЛ":"ВКЛ",I.btnMutePause.style.color=B.muted?"rgba(255,255,255,.35)":"var(--lime)",I.btnSoundTitle&&(I.btnSoundTitle.querySelector(".ico-sound").textContent=B.muted?"×":"♪"))}let qn=null,fr=null,Gu=[];function jc(){qn&&(Ye.remove(qn),qn.traverse(n=>{n.geometry&&n.geometry.dispose?.(),n.material&&n.material.dispose?.()}),qn=null),fr=null,Gu=[]}function Qc(n){ue?.init(),jc(),B.mode="driving",Bt(I.title),Bt(I.garage),Bt(I.mapscreen),Bt(I.pause),Bt(I.results),_e(I.hud),Qt&&(Qt.group.visible=!1),J&&(J.group.visible=!0),$c();const t=n.route,e=t[0],i=t[1],s=Math.atan2(i[0]-e[0],i[1]-e[1]);J.place(e[0],e[1],s),J.boostFuel=100,B.hasDriven=!0,B.race={event:n,cp:1,lap:1,elapsed:0,countdown:3.05,started:!1,finished:!1,wrong:0,wrongShown:!1},uc=-1,Bt(I.results),_e(I.racePanel),_e(I.checkpointArrow),I.raceName.textContent=n.name,I.raceTime.textContent="00:00.000",I.raceLap.textContent=`КРУГ 1/${n.laps}`,I.raceCp.textContent=`КП 1/${n.route.length-1}`,I.raceProgress.style.width="0%",tl(n.name.toUpperCase(),n.type+" · BAJA"),jx(n),kc(n.name.toUpperCase(),n.sub.toUpperCase(),1800),Fn(),B.touch&&_e(I.touchControls),ue?.click(500)}function tl(n,t){I.hudEventName.textContent=n,I.hudEventSub.textContent=t}function jx(n){const t=n.route;qn=new Te;const e=new ai(10.5,.55,6,28);for(let o=1;o<t.length;o++){const[a,c]=t[o],l=t[(o+1)%t.length]||t[0],h=Math.atan2(l[0]-a,l[1]-c),u=new un({color:10353919,transparent:!0,opacity:.2,depthWrite:!1,side:ke}),f=new gt(e,u);f.position.set(a,ae.heightAt(a,c)+9.2,c),f.rotation.y=h,f.userData.index=o,qn.add(f),Gu.push(u)}Ye.add(qn);const i=new un({color:14155583,transparent:!0,opacity:.16,depthWrite:!1,blending:li,side:ke});fr=new gt(new Me(1.6,1.6,110,8,1,!0),i),Ye.add(fr),Vu();const s=t[1],r=Math.hypot(s[0]-J.pos.x,s[1]-J.pos.z);I.cpDistance.textContent=`${Math.round(r)} м`}function Vu(){if(!B.race||!qn)return;const n=B.race;for(const e of qn.children){const i=e.userData.index===n.cp;e.material.color.setHex(i?14155583:10353919),e.material.opacity=i?.95:.16}const t=n.event.route[n.cp];t&&fr&&fr.position.set(t[0],ae.heightAt(t[0],t[1])+54,t[1])}function Qx(n){const t=B.race;if(!t)return;if(!t.started){if(t.countdown-=n,t.countdown>0){const h=Math.ceil(t.countdown);h!==uc&&(uc=h,I.countdown.textContent=h,I.countdown.classList.remove("hidden"),I.countdown.classList.remove("go"),I.countdown.style.animation="none",I.countdown.offsetWidth,I.countdown.style.animation="",ue?.click(330+(3-h)*90));return}t.started=!0,I.countdown.textContent="GO!",I.countdown.classList.add("go"),I.countdown.style.animation="none",I.countdown.offsetWidth,I.countdown.style.animation="",ue?.chime(),setTimeout(()=>Bt(I.countdown),750)}t.elapsed+=n;const e=t.event.route[t.cp];if(!e)return;const i=e[0]-J.pos.x,s=e[1]-J.pos.z,r=Math.hypot(i,s);I.cpDistance.textContent=`${Math.round(r)} м`;const o=Math.atan2(i,s)-J.yaw;if(I.checkpointArrow.querySelector(".cp-arrow-icon").style.transform=`rotate(${o}rad)`,(Math.sin(J.yaw)*i+Math.cos(J.yaw)*s)/(r||1)<-.25&&r>70?(t.wrong+=n,t.wrong>1.3&&!t.wrongShown&&(_e(I.wrongWay),t.wrongShown=!0)):(t.wrong=Math.max(0,t.wrong-n*2),t.wrong<.5&&t.wrongShown&&(Bt(I.wrongWay),t.wrongShown=!1)),r<36){if(t.cp++,t.cp>=t.event.route.length)if(t.lap<t.event.laps)t.lap++,t.cp=1,kc(`КРУГ ${t.lap}/${t.event.laps}`,"НЕ СБАВЛЯЙТЕ ТЕМП",1600),ue?.chime();else{Wu();return}else ue?.click(1020);Vu()}const c=t.event.laps*(t.event.route.length-1),l=(t.lap-1)*(t.event.route.length-1)+(t.cp-1);I.raceProgress.style.width=`${lr(l/c,0,1)*100}%`,I.raceTime.textContent=tr(t.elapsed),I.raceLap.textContent=`КРУГ ${t.lap}/${t.event.laps}`,I.raceCp.textContent=`КП ${Math.min(t.cp,t.event.route.length-1)}/${t.event.route.length-1}`}function Wu(){const n=B.race;n.finished=!0,Bt(I.checkpointArrow);const t=n.elapsed;let e="БРОНЗА",i="🥉",s=Math.round(n.event.reward*.55);t<=n.event.gold?(e="ЗОЛОТО",i="🥇",s=n.event.reward):t<=n.event.silver?(e="СЕРЕБРО",i="🥈",s=Math.round(n.event.reward*.78)):t>n.event.bronze&&(e="ФИНИШ",i="🏁",s=Math.round(n.event.reward*.35)),B.credits+=s,B.skillTotal+=Math.round(s*.4),Ce.credits=B.credits,Ce.skill=B.skillTotal;const r=n.event.id,o=Ce.best[r];(!o||t<o)&&(Ce.best[r]=t),Oi(),gr(),ue?.chime(),I.medalIcon.textContent=i,I.resultTitle.textContent=n.event.name,I.resultTime.textContent=tr(t),I.resultGold.textContent=tr(n.event.gold),I.resultYour.textContent=tr(t),I.resultReward.textContent=`+${Es(s)} ¢ · ${e}`,setTimeout(()=>{B.race===n&&(B.mode="results",Bt(I.hud),Bt(I.touchControls),Bt(I.countdown),Bt(I.toast),_e(I.results),J&&(J.group.visible=!0),Qt&&(Qt.group.visible=!1))},1400)}function Xu(){Bt(I.results),B.mode="driving",_e(I.hud),B.touch&&_e(I.touchControls),B.race=null,jc(),Bt(I.racePanel),Bt(I.checkpointArrow),Bt(I.wrongWay),tl("СВОБОДНАЯ ЕЗДА","BAJA · МЕКСИКА"),Fn(),Ui("СВОБОДНАЯ ЕЗДА","BAJA ЖДЁТ")}function el(n){const t=Rs[n];t&&(Bt(I.mapscreen),B.mode==="title"||B.mode==="garage"?hr({race:t,fresh:!0}):(Bt(I.pause),Qc(t)))}function tv(){let n=0,t=0,e=0,i=!1,s=!1;(je.KeyW||je.ArrowUp)&&(n=1),(je.KeyS||je.ArrowDown)&&(t=1),(je.KeyD||je.ArrowRight)&&(e+=1),(je.KeyA||je.ArrowLeft)&&(e-=1),je.Space&&(i=!0),(je.ShiftLeft||je.ShiftRight)&&(s=!0),ei.gas&&(n=1),ei.brake&&(t=1),ei.left&&(e-=1),ei.right&&(e+=1),ei.handbrake&&(i=!0),ei.boost&&(s=!0);const r=navigator.getGamepads?navigator.getGamepads():[];for(const o of r){if(!o)continue;const a=o.axes[0]||0;Math.abs(a)>.12&&(e=lr(a,-1,1));const c=o.buttons[7]?.value||0,l=o.buttons[6]?.value||0;c>.05&&(n=Math.max(n,c)),l>.05&&(t=Math.max(t,l)),o.buttons[0]?.pressed&&(i=!0),o.buttons[2]?.pressed&&(s=!0);break}return B.race&&!B.race.started&&(n=0,t=0,e=0,i=!1,s=!1),os.throttle=n,os.brake=t,os.steer=lr(e,-1,1),os.handbrake=i,os.boost=s,os}const gn=new P,Xn=new P,kh=new P;function Fn(){if(J){if(B.cameraMode==="hood"){const n=J.forward;ne.position.set(J.pos.x+n.x*.45,J.pos.y+1.17,J.pos.z+n.z*.45),Xn.set(J.pos.x+n.x*14,J.pos.y+1.1,J.pos.z+n.z*14),ne.lookAt(Xn),ne.fov=68}else{const n=J.forward,t=innerHeight>innerWidth*1.15,e=B.cameraMode==="far"?t?15.5:11.5:t?9.8:6.8;gn.set(J.pos.x-n.x*e,J.pos.y+(t?3.1:2.55),J.pos.z-n.z*e),gn.y=Math.max(gn.y,ae.heightAt(gn.x,gn.z)+1.2),ne.position.copy(gn),Xn.set(J.pos.x+n.x*4.2,J.pos.y+1.1,J.pos.z+n.z*4.2),ne.lookAt(Xn),ne.fov=t?66:62}ne.updateProjectionMatrix(),fs.copy(Xn),Pi=!0}}function ev(n){if(!J)return;if(B.mode==="title"||B.mode==="garage"){nv(n);return}if(B.mode!=="driving")return;Pi||Fn();const t=J.vel.length(),e=J.forward,i=Ln?Ln.shake:0,s=J.surface!=="road"&&J.surface!=="water",r=i*.42+(s?Math.min(.1,t*.0018):0);if(B.cameraMode==="hood")ne.position.set(J.pos.x+e.x*.45,J.pos.y+1.18,J.pos.z+e.z*.45),Xn.set(J.pos.x+e.x*18,J.pos.y+1.1+(s?Math.sin(mo*20)*.01:0),J.pos.z+e.z*18),ne.lookAt(Xn),ne.fov=lc(ne.fov,72+Math.min(10,t*.14),.1);else{const o=B.cameraMode==="far",a=innerHeight>innerWidth*1.15,c=(o?a?15.5:11.5:a?9.8:6.9)+t*(o?.025:.035),l=(o?a?3.9:3.4:a?3.1:2.55)+t*.008;gn.set(J.pos.x-e.x*c,J.pos.y+l,J.pos.z-e.z*c),gn.y=Math.max(gn.y,ae.heightAt(gn.x,gn.z)+1.25);const h=1-Math.exp(-5.4*n);ne.position.lerp(gn,Math.min(1,h+(Pi?0:1))),Xn.set(J.pos.x+e.x*(3.2+t*.035),J.pos.y+1.15,J.pos.z+e.z*(3.2+t*.035)),fs.lerp(Xn,1-Math.exp(-8*n)),ne.lookAt(fs),ne.fov=lc(ne.fov,(o?58:innerHeight>innerWidth*1.15?66:62)+t*.22+(J.boostActive?3:0),.09),J.drifting&&(ne.position.x+=Math.cos(J.yaw)*J.slip*.015,ne.position.z-=Math.sin(J.yaw)*J.slip*.015)}r>.001&&(ne.position.x+=(Math.random()-.5)*r,ne.position.y+=(Math.random()-.5)*r*.7,ne.position.z+=(Math.random()-.5)*r),ws&&ws.position.copy(ne.position).add(new P(0,1.2,0)),ne.updateProjectionMatrix(),Pi=!0}function nv(n){if(!Qt)return;const t=Qt.group.position;B.dragging||(B.menuRotation+=n*(B.mode==="garage"?.13:.07)),Qt.group.rotation.y=B.menuRotation;const e=mo,i=innerHeight>innerWidth*1.15,s=B.mode==="garage"?2.1:1.2+Math.sin(e*.09)*.1,r=B.mode==="garage"?i?10.8:7.6:i?14.5:9.4,o=B.mode==="garage"?i?2.8:2.05:i?3.2:2.35,a=new P(t.x+Math.sin(s)*r,t.y+o,t.z+Math.cos(s)*r),c=1-Math.exp(-3.6*n);Pi?ne.position.lerp(a,c):ne.position.copy(a);const l=new P().subVectors(t.clone().add(new P(0,.7,0)),ne.position).normalize();kh.set(-l.z,0,l.x).normalize();const h=t.clone().add(new P(0,.72,0)).addScaledVector(kh,B.mode==="garage"?-.65:i?-.35:-.9);Pi?fs.lerp(h,1-Math.exp(-5*n)):fs.copy(h),ne.lookAt(fs),ne.fov=lc(ne.fov,B.mode==="garage"?i?51:46:i?59:50,.1),ws&&ws.position.copy(ne.position).add(new P(0,1,0)),ne.updateProjectionMatrix(),Pi=!0}function qu(n){return{road:"АСФАЛЬТ",sand:"ПЕСОК",grass:"ТРАВА",dirt:"ГРУНТ",rock:"СКАЛЫ",shore:"БЕРЕГ",water:"ВОДА"}[n]||"БЕЗДОРОЖЬЕ"}function gr(){I.credits&&(I.credits.textContent=Es(B.credits)),I.skillTotal&&(I.skillTotal.textContent=Es(B.skillTotal))}function iv(n){if(!J)return;const t=Math.round(J.speedKmh);t!==Uh&&(I.speedNumber.textContent=t,Uh=t);const e=Math.round(J.speedKmh*.621371);e!==Ih&&(I.mphNumber.textContent=`${e} MPH`,Ih=e);const i=J.def.ev?"D":String(J.gear);i!==Nh&&(I.gearNumber.textContent=i,Nh=i);const s=lr(J.rpm/J.def.redline,0,1)*100;Math.abs(s-Fh)>.5&&(I.rpmBar.style.width=`${s}%`,Fh=s);const r=Math.round(J.boostFuel);r!==Oh&&(I.nitroFill.style.width=`${r}%`,Oh=r);const o=J.surface;I.hudSurface.textContent=`${qu(o)} · ${J.def.drivetrain}${J.airborne?" · ВОЗДУХ":""}`,J.drifting&&J.driftPoints>20?(_e(I.driftBadge),I.driftPoints.textContent=Math.round(J.driftPoints)):Bt(I.driftBadge);const a=(J.yaw*180/Math.PI+180+360)%360,c=["С","СВ","В","ЮВ","Ю","ЮЗ","З","СЗ"];I.compass.textContent=c[Math.round(a/45)%8],(B.race?B.race.event.route[B.race.cp]:null)&&B.race&&B.race.started?_e(I.checkpointArrow):B.race||Bt(I.checkpointArrow),gr(),la-=n,la<=0&&(nl(),la=.075),B.race&&B.race.started&&!B.race.finished&&(I.raceTime.textContent=tr(B.race.elapsed))}function sv(n){if(!!J?.drifting){cn.drifting||(cn.time=0,cn.banked=0),cn.drifting=!0,cn.time+=n;const e=Math.round(J.driftPoints);if(e>35){const i=1+Math.min(2.5,cn.time*.24);fc(`DRIFT +${e}`,`x${i.toFixed(1)}`)}}else if(cn.drifting){cn.drifting=!1;const e=Math.round(J.driftPoints);if(cn.time>.28&&e>35){const i=Math.round(e*(1+Math.min(2.5,cn.time*.24)));B.skillTotal+=i,B.credits+=i*2,Ce.skill=B.skillTotal,Ce.credits=B.credits,Oi(),fc(`SKILL +${i}`,"BANKED"),ue?.chime(),gr()}cn.time=0,J.driftPoints=0}}function rv(n,t){if(n)if(t==="AIRTIME"){const e=parseInt(n.replace(/[^0-9]/g,""),10)||0,i=Math.round(e*2);i>0&&(B.skillTotal+=i,B.credits+=i*2,Ce.skill=B.skillTotal,Ce.credits=B.credits,Oi(),fc(n,`+${Es(i)} SKILL`),ue?.chime(),gr())}else Ui(n,t)}function ao(n,t){return[(n/4200+.5)*100,(t/4200+.5)*100]}function nl(){if(!ae||!I.minimap)return;const n=I.minimap.getContext("2d"),t=220,e=2.7;n.clearRect(0,0,t,t),n.fillStyle="#0b1a24",n.fillRect(0,0,t,t);const i=J?J.pos.x:ae.spawn.x,s=J?J.pos.z:ae.spawn.z,r=(i/4200+.5)*256,o=(s/4200+.5)*256;if(n.save(),n.translate(t/2-r*e,t/2-o*e),n.scale(e,e),n.imageSmoothingEnabled=!0,n.drawImage(ae.mapCanvas,0,0),n.restore(),B.race){n.strokeStyle="rgba(215,255,63,.8)",n.lineWidth=2,n.beginPath(),B.race.event.route.forEach(([h,u],f)=>{const d=t/2+(h-i)/4200*256*e,g=t/2+(u-s)/4200*256*e;f===0?n.moveTo(d,g):n.lineTo(d,g)}),n.stroke();const l=B.race.event.route[B.race.cp];if(l){const h=t/2+(l[0]-i)/4200*256*e,u=t/2+(l[1]-s)/4200*256*e;n.fillStyle="#d7ff3f",n.beginPath(),n.arc(h,u,4,0,7),n.fill()}}const a=(l,h,u,f=3)=>{const d=t/2+(l-i)/4200*256*e,g=t/2+(h-s)/4200*256*e;d<-8||g<-8||d>t+8||g>t+8||(n.fillStyle=u,n.beginPath(),n.arc(d,g,f,0,7),n.fill(),n.strokeStyle="rgba(8,12,20,.8)",n.lineWidth=1,n.stroke())};for(const l of Rs)a(l.route[0][0],l.route[0][1],"rgba(255,45,122,.9)",3.2);a(we.x,we.y,"#23e6ff",4),a(qe.x,qe.y,"#ff7a3d",3),n.save(),n.translate(t/2,t/2),n.rotate(Math.PI-(J?J.yaw:0)),n.fillStyle="#d7ff3f",n.shadowColor="#d7ff3f",n.shadowBlur=10,n.beginPath(),n.moveTo(0,-8),n.lineTo(5.5,6),n.lineTo(0,3),n.lineTo(-5.5,6),n.closePath(),n.fill(),n.restore();const c=n.createRadialGradient(t/2,t/2,t*.35,t/2,t/2,t*.72);c.addColorStop(0,"rgba(8,12,20,0)"),c.addColorStop(1,"rgba(8,12,20,.55)"),n.fillStyle=c,n.fillRect(0,0,t,t)}function yo(){if(!ae||!I.bigMap)return;const n=I.bigMap.getContext("2d"),t=900;n.imageSmoothingEnabled=!0,n.clearRect(0,0,t,t),n.drawImage(ae.mapCanvas,0,0,t,t),n.strokeStyle="rgba(255,255,255,.065)",n.lineWidth=1;for(let i=1;i<9;i++){const s=i/9*t;n.beginPath(),n.moveTo(s,0),n.lineTo(s,t),n.stroke(),n.beginPath(),n.moveTo(0,s),n.lineTo(t,s),n.stroke()}const e=(i,s,r,o,a=17)=>{const[c,l]=ao(s,r);n.font=`800 ${a}px "Barlow Condensed", sans-serif`,n.textAlign="center",n.fillStyle="rgba(8,12,20,.7)",n.fillText(i,c/100*t+2,l/100*t+2),n.fillStyle=o,n.fillText(i,c/100*t,l/100*t)};if(e("FESTIVAL",we.x,we.y-40,"#23e6ff",18),e("PUERTO SOL",qe.x,qe.y-30,"#ffb75a",17),e("VOLCÁN",si.x,si.y-90,"#ff8a5a",17),e("AERÓDROMO",Xe.x,Xe.y-30,"#d7ff3f",15),e("DESIERTO",1100,650,"rgba(255,222,150,.8)",16),e("SELVA",-450,1550,"rgba(150,255,160,.8)",16),B.race){const i=B.race.event.route;n.strokeStyle="#d7ff3f",n.lineWidth=4,n.shadowColor="#d7ff3f",n.shadowBlur=12,n.beginPath(),i.forEach(([s,r],o)=>{const[a,c]=ao(s,r);o===0?n.moveTo(a/100*t,c/100*t):n.lineTo(a/100*t,c/100*t)}),n.stroke(),n.shadowBlur=0}if(J){const[i,s]=ao(J.pos.x,J.pos.z);n.save(),n.translate(i/100*t,s/100*t),n.rotate(Math.PI-J.yaw),n.fillStyle="#d7ff3f",n.shadowColor="#d7ff3f",n.shadowBlur=14,n.beginPath(),n.moveTo(0,-17),n.lineTo(11,12),n.lineTo(0,6),n.lineTo(-11,12),n.closePath(),n.fill(),n.restore()}}function Yu(){if(!I.bigMapMarkers)return;I.bigMapMarkers.innerHTML="";const n=(t,e,i,s,r)=>{const[o,a]=ao(t,e),c=document.createElement("button");c.className=`map-marker ${i}`,c.style.left=`${o}%`,c.style.top=`${a}%`,c.textContent=s||"",r&&c.addEventListener("click",r),I.bigMapMarkers.appendChild(c)};n(we.x,we.y,"fest","★"),n(qe.x,qe.y,"town",""),Rs.forEach((t,e)=>n(t.route[0][0],t.route[0][1],B.race?.event.id===t.id?"active":"",String(e+1),()=>el(e)))}function ov(){I.eventList&&(I.eventList.innerHTML="",Rs.forEach((n,t)=>{const e=document.createElement("button");e.className="event-item",e.innerHTML=`<div class="event-top"><b>${n.name}</b><span class="badge">${n.type}</span></div>
      <small>${n.sub}</small>
      <div class="event-meta"><span><i>◆</i> ${n.route.length-1} КП</span><span><i>◷</i> ЗОЛОТО ${qx(n.gold)}</span><span><i>¢</i> ${Es(n.reward)}</span></div>`,e.addEventListener("click",()=>el(t)),I.eventList.appendChild(e)}))}function $u(n){requestAnimationFrame($u);const t=Math.min(.05,(n-hc)/1e3||.016);if(hc=n,mo+=t,B.mode==="driving"){const e=tv();if(J.applyInput(e),B.race&&!B.race.started)J.step(1/120,{throttle:0,brake:0,steer:0,handbrake:!1,boost:!1});else{const i=Math.min(5,Math.max(1,Math.round(t*120))),s=t/i;for(let r=0;r<i;r++)J.step(s,e)}Qx(t),sv(t),Ln.update(t),iv(t),Ln.shake=Ln.shake,ue?.updateEngine(J.rpm,e.throttle,J.vel.length(),J.slip,J.surface!=="road",J.boostActive,!0)}else B.mode==="results"&&Ln.update(t),ue?.updateEngine(J?.rpm||900,0,0,0,!1,!1,!1),(B.mode==="title"||B.mode==="garage")&&Qt&&(Qt.group.rotation.y=B.menuRotation);ae.update(mo,ne,B.mode==="driving"?J.pos:Qt?Qt.group.position:null),ev(t),B.mode==="map"&&(Dh-=t)<=0&&(yo(),Dh=.25),ue?.update(),He.render(Ye,ne),to+=t,ca++,to>2.5&&(B.fps=ca/to,to=0,ca=0,B.fps<24&&B.quality==="high"&&(B.quality="medium",!B.touch&&innerWidth<2200&&He.setPixelRatio(1),ae.sky.sun.shadow.mapSize.x>1024&&(ae.sky.sun.shadow.mapSize.set(1024,1024),ae.sky.sun.shadow.map?.dispose(),ae.sky.sun.shadow.map=null)))}async function av(){as(6,"Подключаем камеру…"),await Xs(),await ha(120),He=new ox({antialias:!0,alpha:!1,powerPreference:"high-performance",stencil:!1});const n=He.getContext(),t=n.getExtension("WEBGL_debug_renderer_info"),e=t?n.getParameter(t.UNMASKED_RENDERER_WEBGL):"",i=/swiftshader|llvmpipe|software/i.test(e);He.setPixelRatio(i?1:Math.min(devicePixelRatio||1,1.65)),He.setSize(innerWidth,innerHeight),He.outputColorSpace=be,He.toneMapping=Wh,He.toneMappingExposure=1.05,He.shadowMap.enabled=!0,He.shadowMap.type=Gh,He.domElement.id="game-canvas",oo("#scene").appendChild(He.domElement),Ye=new hu,ne=new nn(50,innerWidth/innerHeight,.1,14e3),ws=new Ru(12047615,55,26,2),Ye.add(ws),as(17,"Генерируем рельеф Баха…"),await Xs(),ae=Nx(Ye,He),as(58,"Зажигаем фестиваль…"),await Xs(),Ce.beaten=Ce.beaten||{},i&&(B.quality="medium",ae.sky.sun.shadow.mapSize.set(1024,1024),ae.sky.sun.shadow.map?.dispose(),ae.sky.sun.shadow.map=null),Ln=new Wx(Ye),Ln.onMessage=rv,ue=new Xx,ue.setMuted(B.muted),J=new kx(Ye,ae,Ln,Nn(),Gc()),J.group.visible=!1,J.setLights(B.timePreset==="night"),Zx(),qc(),Wc(),Mo(),gr(),ov(),as(74,"Полируем хром и неон…"),await Xs(),ne.position.set(ae.festival.platformPosition.x+6,ae.festival.platformPosition.y+3,ae.festival.platformPosition.z-6),ne.lookAt(ae.festival.platformPosition.x,ae.festival.platformPosition.y+.7,ae.festival.platformPosition.z),ae.setTimePreset(B.timePreset),I.timeLabelTitle.textContent=Qs[B.timePreset].label.toUpperCase(),Kc(),Jc(),Yc(),nl(),yo(),Yu(),as(92,"Настраиваем закат…"),await Xs(),await ha(260),as(100,"Готово"),await ha(200),Bt(I.loading),_e(I.title),B.mode="title",B.started=!1,performance.now(),hc=performance.now(),requestAnimationFrame($u),window.__game={state:B,CARS:Ss,EVENTS:Rs,world:ae,vehicle:J,effects:Ln,audio:ue,scene:Ye,camera:ne,renderer:He,start:()=>hr(),startRace:s=>el(s),openGarage:()=>ds(B.mode==="title"?"title":"driving"),openMap:()=>ur(B.mode==="title"?"title":"driving"),setTime:Zc,teleport:(s,r,o=0)=>{J.place(s,r,o),Fn()},snapCamera:Fn,selectCar:dc,finishRace:Wu,get gpu(){return e},get software(){return i}},window.__scene={rendered:!0,gpu:e,software:i,world:!0},console.log("HORIZON LIBRE ready",e)}av().catch(n=>{console.error(n);const t=document.getElementById("loadLabel");t&&(t.textContent="Ошибка запуска: "+n.message)});

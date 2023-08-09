 function clock(){ 
var d=new Date(); 
var h=d.getHours();
var m=d.getMinutes();
var s=d.getSeconds();
var s_angle=s*6;
var m_angle=m*6;
var h_angle=h*30+m/2;
hr.style.transform="rotate("+h_angle+"deg)";
min.style.transform="rotate("+m_angle+"deg)";
sec.style.transform="rotate("+s_angle+"deg)";
 }
 setInterval(()=>{
    clock();
 },1000)
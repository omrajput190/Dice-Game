var ran1=Math.floor(Math.random()*6)+1;
var src1="Img/dice"+ran1+".png";
document.querySelectorAll("img")[0].setAttribute("src",src1);

var ran2=Math.floor(Math.random()*6)+1;
var src2="Img/dice"+ran2+".png";
document.querySelectorAll("img")[1].setAttribute("src",src2);

if(ran1>ran2){
    document.querySelector("h1").innerHTML="Player1 win";
}else if(ran1<ran2){
    document.querySelector("h1").innerHTML="Player2 win";
}else{
    document.querySelector("h1").innerHTML="Draw";
}

let canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");
function quadrados(cor,x,y,larg,alt){
    ctx.beginPath();
    ctx.fillStyle = cor;
    ctx.fillRect(x,y,larg,alt);
    ctx.fill();
}
function linhas(x1,y1,x2,y2,cor){
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2,y2)
    ctx.strokeStyle= cor;
    ctx.stroke()
}
function arcos(stroke_cor,x,y,raio,ang_inicio,ang_final,anti_horario,cor_fill,){
    ctx.beginPath();
    ctx.strokeStyle=stroke_cor;
    ctx.arc(x,y,raio,ang_inicio,ang_final,anti_horario);
    ctx.fillStyle=cor_fill;
    ctx.fill();
    ctx.stroke();
}
function texto(fonte,cor,palavras,x,y){
    ctx.font = fonte;
    ctx.fillStyle = cor;
    ctx.fillText(palavras, x, y);
}

quadrados("blue",0,0,50,50);
quadrados("red",250,0,50,50);
quadrados("yellow",0,240,30,60);
quadrados("yellow",0,270,60,30);
quadrados("black",270,240,30,60);
quadrados("black",240,270,60,30);
quadrados("red",109,150,40,40);
quadrados("aqua", 0, 120,30,60);
quadrados("aqua",260,130,40,40);
linhas(0,150,300,150,"green");
linhas(150,150,150,300,"black");
// linhas(0,0,150,150,"blue");
// linhas(300,0,150,150,"red");
texto("20px Arial","black","Canvas",110,40);
arcos("green",150,150,85,Math.PI,5*Math.PI/4,false,"white");
arcos("green",150,150,85,0,7*Math.PI/4,true);
arcos("green",151,300,65,Math.PI/2,3*Math.PI/2,true);
arcos("green",149,300,85,Math.PI,3*Math.PI/2,false);
arcos("green",59,120,85,Math.PI,5*Math.PI/4,false);
arcos("green",150,300,45,0,Math.PI/2,true,"cyan");
arcos("green",65,220,15,0,2*Math.PI,false,"yellow");
arcos("green",235,220,15,0,2*Math.PI,false,"yellow");
arcos("green",150,150,65,0,Math.PI,true,"white");
linhas(0,0,150,150,"blue");
linhas(300,0,150,150,"red");
arcos("blue",150,110,15,0,2*Math.PI,false,"cyan");
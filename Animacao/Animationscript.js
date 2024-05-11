let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')

// let capivara ={
//     x: 10,
//     y: 10,
//     largura: 30,
//     altura: 30,
//     img : new Image(),
//     desenha : function(){
//         this.img.src=""
//
//         ctx.drawImage(this.img, this.x, this.y, this.largura, this.altura)
//     }
// }
// capivara.desenha()

let quadrado ={
    x: 50,
    y: 50,
    largura: 30,
    altura: 30,
    cor: "red",
    desenha: function(){
        ctx.fillStyle = this.cor;
        ctx.fillRect(this.x,this.y, this.largura,this.altura)
    }

}
quadrado.desenha()
let x_mouse = 0;
let y_mouse = 0;
function atualizar(){
    ctx.clearRect(0,0,300,300);
    quadrado.desenha()
    requestAnimationFrame((atualizar))
    quadrado.x = x_mouse - quadrado.largura/2;
    quadrado.y = y_mouse - quadrado.altura/2;


    quadrado.x = Math.max(0,Math.min(canvas.width-quadrado.largura,quadrado.x))
    quadrado.y = Math.max(0,Math.min(canvas.height - quadrado.altura, quadrado.y))
}
atualizar();
document.addEventListener('mousemove',function(evento){
    let rect = canvas.getBoundingClientRect()
    x_mouse = evento.clientX - rect.left;
    y_mouse = evento.clientY - rect.top;
    console.log(x_mouse, y_mouse)

})
var canvas = document.getElementById("game");
var context = canvas.getContext("2d");
// context 무조건 시험나온다.
// context : c에서 사용할 때 특히 구조적 프로그래밍을 할때 사용합니다.
// c같은 경우에는 class를 사용하지 않는다.
// openGL context 를 사용하기도한다. gpu를 어느정도 점유하느냐를 나타낸다.
// 이 openGL context를 자료구조로 갖고있는데 skia context
// 이 skia context를 갖고있는게 canvas context이다.

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

class gameManager{

}



class player{
    constructor(x,y,radius,color)
    {
        this.pos_x = x;
        this.pos_y = y;
        this.radius = radius;
        this.color = color;
    }

    draw()
    {
        context.arc(this.pos_x,this.pos_y,this.radius,0,2*Math.PI)
        context.fillStyle = this.color;
        context.fill()
    }

}

class bullet{
    constructor(position_x,position_y,radius,color){
        this.position_x = position_x;
        this.position_y = position_y;
        this.radius = radius;
        this.color = color;
    }
    draw()
    {
        context.beginPath();
        context.arc(this.position_x, this.position_y, this.radius, 0, 2*Math.PI);
        context.fillStyle = this.color;
        context.fill();
        context.closePath();
    }
}

var char_player = new player(100,100,20,'skyblue');
char_player.draw();

var bullets = [];

canvas.onclick = function(event){

    let clickpos_x = event.clientX -context.canvas.offsetLeft;
    let clickpos_y = event.clientY -context.canvas.offsetTop;

    let bullets = new bullet(clickpos_x,clickpos_y,5,5,'pink');
    bullets.draw();
};
//class Bullet{
  //  constructor(pos_x,pos_y,width, height,color){
    //    this.pos_x = pos_x;
      //  this.pos_y = pos_Y;
        //this.width = width;
        //this.height = height;
        //this.color = color;
    //}

    //draw()
    //{
      //  context.beginPath();
        //context.fillStyle = this.color;
        //context.fill();
    //}
//}


//canvas.addEventListener ( char_Bullet = new Bullet(clientx,clientY,15,15,'orange'));
//char_Bullet.draw();
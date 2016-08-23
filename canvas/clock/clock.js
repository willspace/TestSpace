var WINDOW_WIDTH = 1600;
var WINDOW_HEIGHT = 768;
var RADIUS = 8;
var MARGIN_TOP = 100;
var MARGIN_LEFT = 200;

// const endTime = new Date(2016,7,17,22,00,00,00);
var curShowTime = [];

var balls =[];
const colors = ["#33B5E5","#09C","#A6C","#93C","#9C0","#FB3","#F80","#F44","#C00"];

window.onload = function(){
 
	WINDOW_WIDTH = document.body.clientWidth;
	WINDOW_HEIGHT = document.body.clientHeight;

	MARGIN_LEFT = Math.round(WINDOW_WIDTH/10);
	RADIUS = Math.round(WINDOW_WIDTH*4/5/108)-1;
	MARGIN_TOP = Math.round(WINDOW_HEIGHT/5);

	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");

	canvas.height = WINDOW_HEIGHT;
	canvas.width = WINDOW_WIDTH;

	curShowTime = getCurShowTime();

	setInterval(function(){
		render(context);
		update();
	},30);
}
function update(){
	var nextShowTime = getCurShowTime();

	var nextHours = nextShowTime[0];
	var nextMinutes = nextShowTime[1];
	var nextSeconds = nextShowTime[2];

	var curHours = curShowTime[0];
	var curMinutes = curShowTime[1];
	var curSeconds = curShowTime[2];

	if(nextShowTime.toString() != curShowTime.toString()){
		if(parseInt(curHours/10) != parseInt(nextHours/10)){
			addBalls(MARGIN_LEFT+0,MARGIN_TOP,parseInt(curHours/10));
		}
		if(parseInt(curHours%10) != parseInt(nextHours%10)){
			addBalls(MARGIN_LEFT+15*(RADIUS+1),MARGIN_TOP,parseInt(curHours%10));
		}
		if(parseInt(curMinutes/10) != parseInt(nextMinutes/10)){
			addBalls(MARGIN_LEFT+39*(RADIUS+1),MARGIN_TOP,parseInt(curMinutes/10));
		}
		if(parseInt(curMinutes%10) != parseInt(nextMinutes%10)){
			addBalls(MARGIN_LEFT+54*(RADIUS+1),MARGIN_TOP,parseInt(curMinutes%10));
		}
		if(parseInt(curSeconds/10) != parseInt(nextSeconds/10)){
			addBalls(MARGIN_LEFT+78*(RADIUS+1),MARGIN_TOP,parseInt(curSeconds/10));
		}
		if(parseInt(curSeconds%10) != parseInt(nextSeconds%10)){
			addBalls(MARGIN_LEFT+93*(RADIUS+1),MARGIN_TOP,parseInt(curSeconds%10));
		}
		curShowTime = nextShowTime;
		
	}
	updateBalls();
}
function updateBalls(){
	for (var i = 0; i < balls.length; i++) {
		balls[i].x += balls[i].vx;
		balls[i].y += balls[i].vy;
		balls[i].vy += balls[i].g;
		if(balls[i].y >= WINDOW_HEIGHT -RADIUS){
			balls[i].y = WINDOW_HEIGHT -RADIUS;
			balls[i].vy = -balls[i].vy*0.6;
		}
	}
	for (var i = 0; i < balls.length; i++) {
		if(balls[i].x<=RADIUS || balls[i].x>=WINDOW_WIDTH-RADIUS){
			balls.splice(i,1);
		}
	}
}
function addBalls(x,y,num){
	for (var i = 0; i < digit[num].length; i++) {
		for (var j = 0; j < digit[num][i].length; j++) {
			if(digit[num][i][j] == 1){
				var aBall = {
					x:x+j*2*(RADIUS+1)+(RADIUS+1),
					y:y+i*2*(RADIUS+1)+(RADIUS+1),
					g: 1+ Math.random(),
					vx : Math.pow(-1,Math.ceil(Math.random()*1000))*4,
					vy : -5,
					color: colors[Math.floor(Math.random()*colors.length)]
				}
				balls.push(aBall);
			}
		}
	}
}

function getCurShowTime(){
	var curTime = new Date();
	var ret = [curTime.getHours(),curTime.getMinutes(),curTime.getSeconds()]
	return ret || [];
}

function render(cxt){

	cxt.clearRect(0,0,WINDOW_WIDTH,WINDOW_HEIGHT);

	var hours = curShowTime[0];
	var minutes = curShowTime[1];
	var seconds = curShowTime[2];

	renderDigit(MARGIN_LEFT,MARGIN_TOP,parseInt(hours/10),cxt);
	renderDigit(MARGIN_LEFT+15*(RADIUS+1),MARGIN_TOP,parseInt(hours%10),cxt);
	renderDigit(MARGIN_LEFT+30*(RADIUS+1),MARGIN_TOP,10,cxt);

	renderDigit(MARGIN_LEFT+39*(RADIUS+1),MARGIN_TOP,parseInt(minutes/10),cxt);
	renderDigit(MARGIN_LEFT+54*(RADIUS+1),MARGIN_TOP,parseInt(minutes%10),cxt);
	renderDigit(MARGIN_LEFT+69*(RADIUS+1),MARGIN_TOP,10,cxt);

	renderDigit(MARGIN_LEFT+78*(RADIUS+1),MARGIN_TOP,parseInt(seconds/10),cxt);
	renderDigit(MARGIN_LEFT+93*(RADIUS+1),MARGIN_TOP,parseInt(seconds%10),cxt);

	for (var i = 0; i < balls.length; i++) {
		cxt.beginPath();
	 	cxt.fillStyle = balls[i].color;

	 	cxt.arc(balls[i].x,balls[i].y,RADIUS,0,2*Math.PI,true);
	 	cxt.closePath();
	 	cxt.fill();
	}

}
function renderDigit(x,y,num,cxt){
	cxt.fillStyle = "rgb(0,102,153)";

	for (var i = 0; i < digit[num].length; i++) {
		for (var j = 0; j < digit[num][i].length; j++) {
			if(digit[num][i][j] ==1){
				cxt.beginPath();
				cxt.arc(x+j*2*(RADIUS+1)+(RADIUS+1),y+i*2*(RADIUS+1)+(RADIUS+1),RADIUS,0,2*Math.PI);
				cxt.closePath();
				cxt.fill();
			}
		}
	}
}
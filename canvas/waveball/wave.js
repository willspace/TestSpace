//wave.js
var WINDOW_WIDTH = 1600;
var WINDOW_HEIGHT = 768;
var RADIUS = 8;
var MARGIN_TOP = 100;
var MARGIN_LEFT = 200;

// const endTime = new Date(2016,7,17,22,00,00,00);
var curShowTime = [];

var map ={
	x : 80,
	y : 1
};
var balls=[];
const colors = ["#33B5E5","#09C","#A6C","#93C","#9C0","#FB3","#F80","#F44","#C00"];

window.onload = function(){
 
	WINDOW_WIDTH = document.body.clientWidth;
	WINDOW_HEIGHT = document.body.clientHeight;

	MARGIN_LEFT = Math.round(WINDOW_WIDTH/10);
	RADIUS = Math.round(WINDOW_WIDTH/300)-1;
	MARGIN_TOP = Math.round(WINDOW_HEIGHT/5);

	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");

	canvas.height = WINDOW_HEIGHT;
	canvas.width = WINDOW_WIDTH;

	renderMap(context,100,100,0,0,map);

	render(context);
	setInterval(function(){
		render(context);
		update();
	},20);
}
function update(){
	updateBalls();
}
function updateBalls(){
	for (var i = 0; i < balls.length; i++) {
		balls[i].x0 += balls[i].vx;
		balls[i].y = balls[i].y0 + balls[i].a*Math.sin(x2o(balls[i].x0)) ;
	}
}
function addBall(x0,y0,a,vx=0,vy=0){
	var aBall = {
		x:x0,
		y:y0+a*Math.sin(x2o(x0)),
		x0:x0,
		y0:y0,
		a : a,
		vx : vx,
		vy : vy
	}
	balls.push(aBall);
			
		
}


function render(cxt){

	cxt.clearRect(0,0,cxt.canvas.width,cxt.canvas.height);

	for (var i = 0; i < balls.length; i++) {
		cxt.beginPath();
	 	cxt.arc(balls[i].x,balls[i].y,RADIUS,0,2*Math.PI,true);
	 	cxt.closePath();
	 	cxt.fill();
	}
}

function renderMap(cxt,x,y,width,height,map){
	
	if(width<=0){
		width = cxt.canvas.width;
		x = 0;
	}
	if (height<=0) {
		height = cxt.canvas.height;
		y = 0;
	} 
	
	cxt.fillStyle = "#11E42B";

	for (var i = 0; i < map.y; i++) {
		for (var j = 0; j < map.x; j++) {
			var p_x = x+width/map.x*(j+0.5);
			var o_x = x2o(p_x,width);
			var p_y = y+height/map.y*(i+0.5);
			addBall(p_x,p_y,RADIUS*10,5,0);
		}
	}
}

function x2o(x,width = document.body.clientWidth){
	return x/width*Math.PI*8;
}
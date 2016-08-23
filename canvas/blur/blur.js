var winWidth = window.innerWidth;
var winHeight = window.innerHeight;
var canvasWidth = 0;
var canvasHeight = 0;
var canvasSize = Math.sqrt(canvasHeight*canvasHeight+canvasWidth*canvasWidth);
var _clickLock = false;
var canvas  = document.getElementById("canvas");
var blurImg  = $("#blur-img");
var context = canvas.getContext("2d");


var _image = new Image();
var _radius = 40;
var _clippingRegion = {x:0,y:0,r:_radius};
_image.src = "img.png";
_image.onload = function(e){
	//initCanvas();
	if(blurImg.width() >= blurImg.height() && winHeight>=winWidth){
		blurImg.css('width',winWidth);
		blurImg.css('top',(winHeight-blurImg.height())/2);
		canvas.style.top = (winHeight-blurImg.height())/2+"px";
	}else{
		blurImg.css('height',winHeight);
		blurImg.css('left',(winWidth-blurImg.width())/2);
		canvas.style.left = (winWidth-blurImg.width())/2+"px";
	}
	canvasWidth = blurImg.width()
	canvasHeight = blurImg.height();
	canvas.width = blurImg.width();
	canvas.height = blurImg.height();
}

function initCanvas(){

	_clippingRegion = {x:Math.random()*(canvasWidth-_radius*2)+_radius,y:Math.random()*(canvasHeight-_radius*2)+_radius,r:_radius}
	draw(_image,_clippingRegion);
}

function setClippingRegion(_clippingRegion){
	context.beginPath();
	context.arc(_clippingRegion.x,_clippingRegion.y,_clippingRegion.r,0, Math.PI*2);
	context.clip();
}

function draw(_image,_clippingRegion){
	context.clearRect( 0, 0, canvas.width, canvas.height)
	context.save();
	setClippingRegion(_clippingRegion);
	context.drawImage(_image, 0, 0 , canvas.width, canvas.height);
	context.restore();
}

function show(){
	if(_clickLock)return;
	_clickLock = true;
	var _maxR = Math.sqrt(Math.pow(Math.max(_clippingRegion.x,canvasWidth-_clippingRegion.x),2)+Math.pow(Math.max(_clippingRegion.y,canvasHeight-_clippingRegion.y),2))
	var showInterval = setInterval(function(){
		if(_clippingRegion.r>=_maxR){
			clearInterval(showInterval);
			_clickLock = false;
			return;
		}
		_clippingRegion.r +=20;
		draw(_image,_clippingRegion); 
	},20);
}

function reset(){
	if(_clickLock)return;
	_clickLock = true;
	_clippingRegion = {x:Math.random()*(canvasWidth-_radius*2)+_radius,y:Math.random()*(canvasHeight-_radius*2)+_radius,r:0}
	var resetInterval = setInterval(function(){
		if(_clippingRegion.r>=_radius){
			clearInterval(resetInterval);
			_clickLock = false;
			return;
		}
		_clippingRegion.r +=1;
		draw(_image,_clippingRegion);
	},10);
}
var canvasWidth = Math.min( 800 , $(window).width() - 20 )
var canvasHeight = canvasWidth

var strokeColor = "rgba(0,0,0,1)"
var isMouseDown = false
var lastLoc = {x:0,y:0}
var lastTimestamp = 0
var lastLineWidth = -1

var canvas = document.getElementById("canvas")
var context = canvas.getContext("2d")

canvas.width = canvasWidth
canvas.height = canvasHeight

$("#controller").css("width",canvasWidth+"px")
drawGrid()

$("#clear_btn").click(
    function(e){
        context.clearRect( 0 , 0 , canvasWidth, canvasHeight )
        drawGrid()
    }
)
$(".color_btn").click(
    function(e){
        $(".color_btn").removeClass("color_btn_selected")
        $(this).addClass("color_btn_selected")
        strokeColor = $(this).css("background-color")
    }
)

function beginStroke(point){

    isMouseDown = true
    //console.log("mouse down!")
    lastLoc = windowToCanvas(point.x, point.y)
    lastTimestamp = new Date().getTime();
}
function endStroke(){
    isMouseDown = false
}
function moveStroke(point){

    var curLoc = windowToCanvas( point.x , point.y );
    var curTimestamp = new Date().getTime();
    var s = calcDistance( curLoc , lastLoc )
    var t = curTimestamp - lastTimestamp

    var lineWidth = calcLineWidth( t , s );

    //draw
    context.beginPath();
    context.moveTo( lastLoc.x , lastLoc.y );
    context.lineTo( curLoc.x , curLoc.y );

    context.strokeStyle = strokeColor
    context.lineWidth = lineWidth
    context.lineCap = "round"
    context.lineJoin = "round"
    context.stroke()

    lastLoc = curLoc
    lastTimestamp = curTimestamp
    lastLineWidth = lineWidth
}

canvas.onmousedown = function(e){
    e.preventDefault()
    beginStroke( {x: e.clientX , y: e.clientY} )
};
canvas.onmouseup = function(e){
    e.preventDefault()
    endStroke()
};
canvas.onmouseout = function(e){
    e.preventDefault()
    endStroke()
};
canvas.onmousemove = function(e){
    e.preventDefault()
    if( isMouseDown ){
        moveStroke({x: e.clientX , y: e.clientY})
    }
};

canvas.addEventListener('touchstart',function(e){
    e.preventDefault()
    touch = e.touches[0]
    beginStroke( {x: touch.pageX , y: touch.pageY} )
});
canvas.addEventListener('touchmove',function(e){
    e.preventDefault()
    if( isMouseDown ){
        touch = e.touches[0]
        moveStroke({x: touch.pageX , y: touch.pageY})
    }
});
canvas.addEventListener('touchend',function(e){
    e.preventDefault()
    endStroke()
});

var maxLineWidth = 30;
var minLineWidth = 1;
var maxStrokeV = 5;
var minStrokeV = 0.1;
function calcLineWidth( t , s ){

    var v = s / t;

    var resultLineWidth;
    if( v <= minStrokeV )
        resultLineWidth = maxLineWidth;
    else if ( v >= maxStrokeV )
        resultLineWidth = minLineWidth;
    else{
        resultLineWidth = maxLineWidth - (v-minStrokeV)/(maxStrokeV-minStrokeV)*(maxLineWidth-minLineWidth);
    }

    if( lastLineWidth == -1 )
        return resultLineWidth;

    return resultLineWidth*1/3 + lastLineWidth*2/3;
}

function calcDistance( loc1 , loc2 ){

    return Math.sqrt( (loc1.x - loc2.x)*(loc1.x - loc2.x) + (loc1.y - loc2.y)*(loc1.y - loc2.y) )
}

function windowToCanvas( x , y ){
    var bbox = canvas.getBoundingClientRect()
    return {x:Math.round(x-bbox.left) , y:Math.round(y-bbox.top)}
}
function drawGrid(){

    context.save()

    context.strokeStyle = "rgb(230,11,9)"

    context.beginPath()
    context.moveTo( 3 , 3 )
    context.lineTo( canvasWidth - 3 , 3 )
    context.lineTo( canvasWidth - 3 , canvasHeight - 3 )
    context.lineTo( 3 , canvasHeight - 3 )
    context.closePath()
    context.lineWidth = 6
    context.stroke()




    context.lineWidth = 1

    drawImaginaryLine(context,{x:0,y:0},{x:canvasWidth,y:canvasHeight},0.04);
    drawImaginaryLine(context,{x:canvasWidth,y:0},{x:0,y:canvasHeight},0.04);
    drawImaginaryLine(context,{x:canvasWidth/2,y:0},{x:canvasWidth/2,y:canvasHeight},0.04);
    drawImaginaryLine(context,{x:0,y:canvasHeight/2},{x:canvasWidth,y:canvasHeight/2},0.04);

    context.restore()
}

function drawImaginaryLine(_ct,_from,_to,_lv=0){
    _ct.beginPath();
    if(_lv>0 && _lv<1){
        var _kx = (_to.x-_from.x)*_lv;
        var _ky = (_to.y-_from.y)*_lv;
        for (var i = 0; i < 1/_lv; i++) {
            if(i%2 == 1)continue;
            _ct.moveTo(_from.x+i*_kx,_from.y+i*_ky);
            _ct.lineTo(_from.x+(i+1)*_kx,_from.y+(i+1)*_ky);
        }
    }else{
        _ct.moveTo(_from.x,_from.y);
        _ct.lineTo(_to.x,_to.y);
    }
    _ct.stroke();
}
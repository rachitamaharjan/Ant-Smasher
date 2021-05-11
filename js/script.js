var points = [
    {x: 100, y: 200},
    {x: 400, y: 400},
    {x: 450, y: 200},
    {x: 500, y: 500},
    {x: 200, y: 200},
    {x: 200, y: 100},
    {x: 200, y: 450},
];



// points.forEach(function(val, index) {
    
//     circle.setAttribute('class', 'circle');
//     circle.style.top = val.y+'px';
//     circle.style.left = val.x+"px";
//     boxContainer[0].appendChild(circle);
//     console.log(val + 1)

//     circle.onclick=function deletePoint(){
//         this.parentNode.removeChild(this);
//         points.splice(index,1);
//     }
// });



function Circle(x, y, r){
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = '#'+Math.floor(Math.random()*16777215).toString(16);
    this.movement = Math.random() * Math.PI * 2;

    // var circleElement = document.createElement('div');
    // circleElement.setAttribute('class', 'circle');
    // circleElement.style.top = y + 'px';
    // circleElement.style.left = x + "px";
    // boxContainer[0].appendChild(circleElement);

    // circle.onclick=function deletePoint(){
        // this.parentNode.removeChild(this);
        // points.splice(index,1);
    // }

}

var boxContainer = document.querySelector('canvas').getContext('2d');
console.log('hh',boxContainer,'kk' )



Circle.prototype = {
    updatePosition : function(){
        this.x += Math.cos(this.movement) * 4;
        this.y += Math.sin(this.movement) * 4;

        if(this.x - this.r < 0){
            this.x = this.r
            this.movement = Math.atan2(Math.sin(this.movement), Math.cos(this.movement)* -1)
        }
        else if(this.x + this.r > boxContainer.canvas.width){
            this.x = boxContainer.canvas.width - this.r
            this.movement = Math.atan2(Math.sin(this.movement), Math.cos(this.movement)* -1)
        }
        if(this.y - this.r < 0){
            this.y = this.r
            this.movement = Math.atan2(Math.cos(this.movement), Math.sin(this.movement)* -1)
        }
        else if(this.y + this.r > boxContainer.canvas.height){
            this.y = boxContainer.canvas.height - this.r
            this.movement = Math.atan2(Math.cos(this.movement), Math.sin(this.movement)* -1)
        }
    }
};

// var circle = new Circle(boxContainer.canvas.offsetLeft,boxContainer.canvas.offsetTop, 30)
// console.log('circle',circle);

var circleArray = [];
for(i = 0; i < 50; i++){
    circleArray.push(new Circle(boxContainer.canvas.offsetLeft, boxContainer.canvas.offsetTop, 30))
}




(function loop(){
    // var circle = circleArray[]
    window.requestAnimationFrame(loop);
    
    // circleArray.forEach(drawCircles)

    boxContainer.canvas.width = document.documentElement.clientHeight
    boxContainer.canvas.height = document.documentElement.clientWidth

    for(i = 0; i < circleArray.length; i++){
        var circle = circleArray[i]
        boxContainer.fillStyle = circle.color;
        boxContainer.beginPath();
        boxContainer.arc(circle.x, circle.y, circle.r, 0, Math.PI * 2);
        boxContainer.fill();
        circle.updatePosition();
    }
})();

// (function loop(){
//     // var circle = circleArray[]
//     window.requestAnimationFrame(loop);
    
//     circleArray.forEach(drawCircles)

//     boxContainer.canvas.width = document.documentElement.clientHeight
//     boxContainer.canvas.height = document.documentElement.clientWidth

//     function drawCircles(circle){
//         boxContainer.fillStyle = circle.color;
//         boxContainer.beginPath();
//         boxContainer.arc(circle.x, circle.y, circle.r, 0, Math.PI * 2);
//         boxContainer.fill();
//         circle.updatePosition();
//     }
// })();





// var circleArray = Array(100).map((_, i) => i).map(() => new Circle())
// console.log('circlearray',circleArray)

// circleArray.forEach(circle => {
//     circle.checkCollision(circleArray)
// })

// function checkCollision(circleArray){

// }
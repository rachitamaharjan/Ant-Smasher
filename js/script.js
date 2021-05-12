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

    this.updatePosition = function(){
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

    this.checkCollision = function(){

        for(j = 0; j< circleArray.length; j++){
            
            if(this != circleArray[j]){
                if (distance(this.x, this.y, circleArray[j].x, circleArray[j].y) - (this.r * 2) < 0) {
                    console.log('yes, collision detected', distance(this.x, this.y, circleArray[j].x, circleArray[j].y) - (this.r * 2) )
                    this.movement = Math.atan2(Math.sin(this.movement) * -1, Math.cos(this.movement)* -1)
                }
            }
        }
        }
        // console.log('iik',circleArray, 'ok',this)
        // // circleArray.forEach(check)
        // // function check(circle){
        //     }

        // }

    // }

}

var boxContainer = document.querySelector('canvas').getContext('2d');
console.log('hh',boxContainer,'kk' )



// var circle = new Circle(boxContainer.canvas.offsetLeft,boxContainer.canvas.offsetTop, 30)
// console.log('circle',circle);

var circleArray = [];
for(i = 0; i < 10; i++){
    var x = Math.random() * innerWidth
    var y = Math.random() * innerHeight
    // var x = boxContainer.canvas.offsetLeft
    // var y = boxContainer.canvas.offsetTop
    var r = 30
    if(i != 0){
        for(j = 0; j< circleArray.length; j++){
            if(distance(x, y, circleArray[j].x, circleArray[j].y) - (r * 2)  < 0){
                x = Math.random() * innerWidth
                y = Math.random() * innerHeight
                j = -1
            }
        }
    }
    circleArray.push(new Circle(x, y, r))
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
        circle.checkCollision()

        
    }
})();


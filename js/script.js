const speed = 2

function Circle(x, y, r){
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = '#'+Math.floor(Math.random()*16777215).toString(16);
    this.movement = Math.random() * Math.PI * 2;

  
    this.updatePosition = function(){
        this.x += Math.cos(this.movement) * speed;
        this.y += Math.sin(this.movement) * speed;

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
                    // console.log('yes, collision detected', distance(this.x, this.y, circleArray[j].x, circleArray[j].y) - (this.r * 2) )
                    this.movement = Math.atan2(Math.sin(this.movement) * -1, Math.cos(this.movement)* -1)
                }
            }
        }
    }

}

var boxContainer = document.querySelector('canvas').getContext('2d');



var circleArray = [];
for(i = 0; i < 5; i++){
    var x = Math.random() * innerWidth
    var y = Math.random() * innerHeight
    var r = 50
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
    window.requestAnimationFrame(loop);
    boxContainer.canvas.width = document.documentElement.clientWidth
    boxContainer.canvas.height = document.documentElement.clientHeight
    

    

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

var canvas = document.getElementsByTagName('canvas');

    canvas.width = window.innerWidth;
    canvas.height =window.innerHeight;
// console.log('hh',canvas,'kk' )
canvas[0].addEventListener('click', (e) => {
    // console.log('kkk')
    clickedItems(e, circleArray); })

function clickedItems(e, circleArray){
    circleArray.forEach((circle, index) => {
        const cursor = {
          x: e.clientX,
          y: e.clientY,
        };
        console.log('hh',cursor)
        console.log('yh', circle.x, circle.y)
        const dist = Math.sqrt(Math.pow((circle.x - cursor.x), 2) + Math.pow((circle.y - cursor.y), 2));;
        console.log('dd',dist, circle.r)
        if (dist <= circle.r * 2) {
            console.log('clicked')
            // shape.showClickResponse();
          circleArray.splice(index, 1);
        }
      });
}


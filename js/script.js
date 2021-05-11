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
    this.color = '#FF8C00';
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

Circle.prototype = {
    updatePosition : function(){
        this.x += Math.cos(this.movement);
        this.y += Math.sin(this.movement);

        if(this.x - this.r < 0){
            this.x = this.r
            this.movement = Math.atan2(Math.sin(this.movement), Math.cos(this.movement)* -1)
        }
    }
};

var boxContainer = document.querySelector('canvas').getContext('2d');

var circle = new Circle(100,200, 30)
console.log('circle',circle);



(function loop(){
    window.requestAnimationFrame(loop);
    

    circle.updatePosition();

    boxContainer.canvas.width = document.documentElement.clientHeight
    boxContainer.canvas.height = document.documentElement.clientWidth

    boxContainer.fillStyle = circle.color;
    boxContainer.beginPath();
    boxContainer.arc(circle.x, circle.y, circle.r, 0, Math.PI * 2);
    boxContainer.fill();
    
})();
// loop()




// var circleArray = Array(100).map((_, i) => i).map(() => new Circle(math.random,10))
// console.log('circlearray',circleArray)

// circleArray.forEach(circle => {
//     circle.checkCollision(circleArray)
// })

// function checkCollision(circleArray){

// }
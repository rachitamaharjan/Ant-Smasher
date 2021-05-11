var points = [
    {x: 100, y: 200},
    {x: 400, y: 400},
    {x: 450, y: 200},
    {x: 500, y: 500},
    {x: 200, y: 200},
    {x: 200, y: 100},
    {x: 200, y: 450},
];

var boxContainer = document.getElementsByClassName('box-container');


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

function Circle(x, y){
    // this.x = x;
    // this.y = y;

    var circleElement = document.createElement('div');
    circleElement.setAttribute('class', 'circle');
    circleElement.style.top = y + 'px';
    circleElement.style.left = x + "px";
    boxContainer[0].appendChild(circleElement);

    circleElement.onclick=function deletePoint(){
        this.parentNode.removeChild(this);
        // points.splice(index,1);
    }

}(this.bind)

var circle = new Circle(100,200)
console.log('circle',circle)

var circleArray = Array(100).map((_, i) => i).map(() => new Circle(math.random,10))
console.log('circlearray',circleArray)

circleArray.forEach(circle => {
    circle.checkCollision(circleArray)
})

function checkCollision(circleArray){
    
}
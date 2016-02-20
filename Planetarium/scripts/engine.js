var canvas;
var ctx;

const WIDTH = 800;
const HEIGHT = 800;

var planetArray = [];
function init() {

    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    canvas.setAttribute('width', WIDTH);
    canvas.setAttribute('height', HEIGHT);
    canvas.style.backgroundImage= "url('images/andromeda.jpg')";
    canvas.addEventListener("click", addPlanet, false);



    function addPlanet(event) {
        var x = event.clientX - canvas.offsetLeft;
        var y = event.clientY - canvas.offsetTop;

        var rad = document.getElementById("radius").value;
        var mas = document.getElementById("mass").value;

        var radiusParagraph = document.getElementById("numericRadius");
        var massParagraph = document.getElementById("numericMass");

        if(rad > 0 && mas > 0){
            planetArray.push(new Planet(x, y, 0, 0, rad, mas * 10));



            radiusParagraph.innerHTML = rad + ' thousand kilometer';
            massParagraph.innerHTML = mas + '0 000 000 000 000 000 000 tons';
        } else {
            radiusParagraph.innerHTML = 'enter number';
            massParagraph.innerHTML = 'enter number';
        }

    }

    return setInterval(draw, 10);
}

function draw() {
    clear();

    for (var i = 0; i < planetArray.length; i++) {
        for (var j = i; j < planetArray.length - 1; j++) {
            planetArray[i].InteractWithTheOtherPlanets(planetArray[j + 1]);
        }
    }

    for (var i = 0; i < planetArray.length; i++) {

        planetArray[i].Update();
        planetArray[i].Draw();
    }
}

function clear() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
}

init();

//distance = Math.sqrt(Math.abs(planet.x1)*Math.abs(planet.x1) + Math.abs(planet.y1)*Math.abs(planet.y1));
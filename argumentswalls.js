console.log('This wall has been painted red');

const paintWalls = function (colours) {
    console.log('This wall has been painted ' + colours);
}

const paintWallsSides = function (sides, colours) {
    console.log("The " + sides + " has been painted " + colours);
}

const color1 = "red";
const color2 = "green";
const color3 = "blue";
const wallColours = ["red", "orange", "grey"];
const wallSides = ["north", "east", "south", "west"];

//Dit werkt niet, hij pakt alleen argument 1; 
paintWalls(wallSides[0], wallColours[1]);

//Ook hier wordt alleen argument 1 meegenomen; ?? 
paintWalls("north", "orange");

/*
//Deze resulteert in 'red', klopt
paintWalls(color1);

//Deze resulteert in 'green', klopt
paintWalls(color2);

//Deze resulteert in 'blue', klopt
paintWalls(color3);

//Dit werkt niet, dan pakt hij alleen het eerste argument ('green'). Ws werkt dit wel met een [array]
paintWalls(color2, color3);

//Functie zonder argument: dit resulteert in undefined, omdat de functie definition wel een argument wil, vanwege het argument tussen de ()
paintWalls();
*/
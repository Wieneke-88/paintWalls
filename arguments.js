console.log('hello');

const paintWalls = function (sides, color) {
    console.log("The " + sides + " wall has been painted " + color);
};

paintWalls("yellow");
paintWalls("blue");
paintWalls();
paintWalls("north", "blue");
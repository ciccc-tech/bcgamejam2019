var express = require('express');
var router = express.Router();

/* GET game states. */
router.get('/start', function(req, res, next) {
  res.json(generateBuilding(building));
});

router.get('/end', function(req, res, next) {
  res.send('game over');
});

module.exports = router;


var generate_room = function(id=0, light_status=false, people_status=false){
    room = {
        "id": id,
        "light": light_status,
        "people": people_status
    };
    return room;
};

var power = {
    "total": 100,
    "current": 100
};

var building = {
    "floors": 10,
    "rooms": 2
};

var generateBuilding =  function(building_params){
    building = [];
    number_rooms = building_params.floors * building_params.rooms;
    for (i = 0; i < number_rooms; i++) {
            building.push(generate_room(i));
    };
    return building;
};

var randomRooms = function(room_qty = 100, difficulty_percentage = 10){
    rooms_random = [];
    difficulty = room_qty*(difficulty_percentage/100)
    while (rooms_random.length < difficulty) {
        random_number = Math.floor((Math.random() * room_qty) + 1);
        if(!rooms_random.includes(random_number)){
            rooms_random.push(random_number);
        };
    };
    return rooms_random;
};

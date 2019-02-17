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
    new_building = [];
    number_rooms = building_params.floors * building_params.rooms;
    rooms_with_people = randomRooms(number_rooms);
    for (i = 0; i < number_rooms; i++) {
        new_room = []    
        if (rooms_with_people.includes(i)) {
            new_room = generate_room(i, true, true);
        } else {
            new_room = generate_room(i);
        }
        new_building.push(new_room);
    };
    return new_building;
};

var randomRooms = function(room_qty = 20, difficulty_percentage = 10){
    rooms_random = [];
    difficulty = room_qty*(difficulty_percentage/100)
    while (rooms_random.length < difficulty) {
        random_number = Math.floor((Math.random() * room_qty-1) + 1);
        if(!rooms_random.includes(random_number)){
            rooms_random.push(random_number);
        };
    };
    return rooms_random;
};

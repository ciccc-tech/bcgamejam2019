var express = require('express');
var router = express.Router();
const fs = require('fs');
const uuidv1 = require('uuid/v1');

/* GET game states. */
router.get('/start', function(req, res, next) {
  res.json(generateBuilding(building_default_params));
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

var building_default_params = {
    "floors": 10,
    "rooms": 2
};

var generateBuilding =  function(building_params){

    new_rooms = []
    number_rooms = building_params.floors * building_params.rooms;
    rooms_with_people = randomRooms(number_rooms);
    for (i = 0; i < number_rooms; i++) {
        new_room = []
        if (rooms_with_people.includes(i)) {
            new_room = generate_room(i, true, true);
        } else {
            new_room = generate_room(i);
        }
        new_rooms.push(new_room);
    };
    new_building = {
        "id": uuidv1(), //generating random id
        "rooms": new_rooms
    };
    saveBuilding(new_building['id'], new_building);
    return new_building;
};

var randomRooms = function(room_qty = 20, difficulty_percentage = 10){
    rooms_random = [];
    difficulty = room_qty*(difficulty_percentage/100)
    while (rooms_random.length < difficulty) {
        //generating random number btw 0 and room_qty-1
        random_number = Math.floor((Math.random() * room_qty-1) + 1);
        if(!rooms_random.includes(random_number)){
            rooms_random.push(random_number);
        };
    };
    return rooms_random;
};


var saveBuilding = function(id, content){
    //storing data from the game on a file
    fs.writeFile("/tmp/" + id + ".json", JSON.stringify(content), function(err) {
        if(err) {
            return console.log(err);
        }

        console.log("The file was saved!");
    });

}

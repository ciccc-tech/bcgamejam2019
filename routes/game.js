var express = require('express');
var router = express.Router();
const fs = require('fs');
const uuidv1 = require('uuid/v1');

/* GET initial game state. */
router.get('/start', function(req, res, next) {
  res.json(generateBuilding(building_default_params));
});

/* GET current game state */
router.get('/:buildingId', function(req, res, next) {
    res.json(retrieveBuilding(req.params['buildingId']));
});

router.get('/end', function(req, res, next) {
  res.send('game over');
});

module.exports = router; 

var get_file_name = function(id){
    file_path = "/tmp/";
    file_type = ".json";
    return file_path + id + file_type; 
}

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
        "id": uuidv1(),
        "rooms": new_rooms
    }; 
    saveBuilding(new_building['id'], new_building);
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


var saveBuilding = function(id, content){
    fs.writeFile(get_file_name(id), JSON.stringify(content), function(err) {
        if(err) {
            return console.log(err);
        }

        console.log("The file " + get_file_name(id) + " was saved!");
    }); 

}

var retrieveBuilding = function(id){
    return JSON.parse(fs.readFileSync(get_file_name(id), 'utf8'));
}

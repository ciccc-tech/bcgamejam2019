var express = require('express');
var router = express.Router();
const fs = require('fs');
const uuidv1 = require('uuid/v1');

/* GET initial game state. */
router.get('/start', function(req, res, next) {
  res.json(generateBuilding(building_default_params, power_default_params));
});

/* GET current game state */
router.get('/:buildingId', function(req, res, next) {
    res.json(retrieveBuilding(req.params['buildingId']));
});

router.get('/end', function(req, res, next) {
  res.send(gameOver());
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

var power_default_params = {
    "total": 100,
    "current": 80
};

var building_default_params = {
    "floors": 10,
    "rooms": 2
};

var generateBuilding =  function(building_params, power_params){
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
        "current_power": power_default_params.current,
        "total_power": power_default_params.total,
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
    fs.writeFile(get_file_name(id), JSON.stringify(content), function(err) {
        if(err) {
            return console.log(err);
        }

        console.log("The file " + get_file_name(id) + " was saved!");
    });
}

var spentPower = function(power_current, power_spent){
    power_current -= power_spent;
    if (power_current < 0){
        return gameOver();
    } else {
        return power_current;
    };
};

var gainPower = function(power_total, power_current, power_gain){
    power_current += power_gain;
    if (power_current>=power_total){
        return power_total;
    } else{
        return power_current;
    };
}

var gameOver = function(){
  	return "GAME OVER!";
}

var retrieveBuilding = function(id){
    return JSON.parse(fs.readFileSync(get_file_name(id), 'utf8'));
}

var updateBuildingPower = function(id, new_current_power){
    building_file = JSON.parse(fs.readFileSync(get_file_name(id), 'utf8'));
    building_file.current_power = new_current_power;
    fs.writeFile(get_file_name(id), JSON.stringify(building_file), function(err) {
        if(err) {
            return console.log(err);
        }

        console.log("The file " + get_file_name(id) + " was saved!");
    });

}

var express = require('express');
var router = express.Router();
const fs = require('fs');
const uuidv1 = require('uuid/v1');
const cycle = 500;
// var core  = require('../core.js')
const Core  = require('../core.js')

/* GET initial game state. */
router.get('/start', function(req, res, next) {
    // core.startGame();
    new_building = generateBuilding(building_default_params, power_default_params);
    // core = new Core(new_building['id']);
    startGame(new_building['id']);
    // core.start();
    res.json(generateBuilding(building_default_params, power_default_params));
});

/* Test */
// router.get('/:buildingId/test', function(req, res, next) {
//   res.json(getCurrentRoomsOnPercentage(req.params['buildingId']));
// });

/* GET current game state */
router.get('/:buildingId', function(req, res, next) {
    res.json(retrieveBuilding(req.params['buildingId']));
});

<<<<<<< HEAD
/* GET current game state */
router.get('/power/:buildingId', function(req, res, next) {
    // res.json(updateBuildingPower(req.params['buildingId'], req.params['currentPower']));
    res.json(updateBuildingPower(req.params['buildingId'], 10));
});

=======
/* GET trun light on*/
router.get('/:buildingId/lighton/:roomId', function(req, res, next) {
    res.json(updateRoomLightOn(req.params['buildingId'], req.params['roomId']));
});

/* GET trun light off*/
router.get('/:buildingId/lightoff/:roomId', function(req, res, next) {
    res.json(updateRoomLightOff(req.params['buildingId'], req.params['roomId']));
});
>>>>>>> e2ea23f00cfd500ef15317be59156a5837b6f9ab

router.get('/end', function(req, res, next) {

  res.send(gameOver());
});

module.exports = router;

var get_file_name = function(id){
    file_path = "/tmp/";
    file_type = ".json";
    return file_path + id + file_type;
}

var saveFile = function(id, content) {
    fs.writeFile(get_file_name(id), JSON.stringify(content), function(err) {
        if(err) {
            return console.log(err);
        }

        console.log("The file " + get_file_name(id) + " has been saved!");
    });
    
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
    "total": 1000,
    "current": 1000
};

var building_default_params = {
    "floors": 10,
    "rooms": 2
};

var generateBuilding =  function(building_params, power_params){
    new_rooms = []
    number_rooms = building_default_paramss.floors * power_default_params.rooms;
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
        "game_state": true,
        "current_power": power_default_params.current,
        "total_power": power_default_params.total,
        "rooms": new_rooms

    };
    saveBuilding(new_building['id'], new_building);
    return new_building;
};

var randomRooms = function(room_qty = (building_default_params.floors * building_default_params.rooms), difficulty_percentage = 10){
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

// var spentPower = function(power_current, power_spent){
//     power_current -= power_spent;
//     if (power_current < 0){
//         return gameOver();
//     } else {
//         return power_current;
//     };
// };
//
// var gainPower = function(power_total, power_current, power_gain){
//     power_current += power_gain;
//     if (power_current>=power_total){
//         return power_total;
//     } else{
//         return power_current;
//     };
// }

var gameOver = function(){
  	return "GAME OVER!";
}

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

var retrieveBuilding = function(id){
    return JSON.parse(fs.readFileSync(get_file_name(id), 'utf8'));
}

var updateBuildingPower = function(id, new_current_power){
    building_file = JSON.parse(fs.readFileSync(get_file_name(id), 'utf8'));
    building_file.current_power = new_current_power;

    saveFile(id, building_file);
    return building_file;
}

var startGame = function(id) {
    game = setInterval( function(){
        console.log("Cycle of " + id)
        // TODO If the power reaches 0, br/e5b12940-32f5-11e9-802a-27cfdf6141a0eak the interval and end game.
        // test = JSON.parse(fs.readFileSync(get_file_name(id), 'utf8'), {"flag": 'r+'} );
        // console.log("Current test: " + test.current_power);
        logPower(id);

        if (checkGameOver(id)) {
            gameOver(id);
        }
    }, cycle);
    console.log(game);
    return game;
}

var actions = function() {
    console.log('cycle');
}


var checkGameOver = function(building_id) {
    // building = retrieveBuilding(building_id);
    building = JSON.parse(fs.readFileSync(get_file_name(building_id), 'utf8'), {"flag": 'r+'} );
    fs.readFile(get_file_name(building_id), function (err, data) {
        if (err) return console.error(err);
            // console.log("Current PowerAsync: " + JSON.parse(data).current_power);
    });
    // console.log("Current Power: " + building.current_power);
    if (building.current_power < 1) {
        return true
    } else {
        return false
    }
}

var gameOver = function(building_id){
    building = JSON.parse(fs.readFileSync(get_file_name(building_id), 'utf8'));
    building.game_state = false;
    saveFile(id, building);
}

var updateRoomLightOn = function(id_building, id_room){
    building_file = JSON.parse(fs.readFileSync(get_file_name(id_building), 'utf8'));
    for (i=0 ; i < building_file.rooms.length; i++){
        if (building_file.rooms[i].id == id_room){//Changing lights to on and off
            building_file.rooms[i].light = true;
        };
    };
    fs.writeFile(get_file_name(id_building), JSON.stringify(building_file), function(err) {
        if(err) {
            return console.log(err);
        }

        console.log("The file " + get_file_name(id_building) + " was saved!");
    });
}

var updateRoomLightOff = function(id_building, id_room){
    building_file = JSON.parse(fs.readFileSync(get_file_name(id_building), 'utf8'));
    for (i=0 ; i < building_file.rooms.length; i++){
        if (building_file.rooms[i].id == id_room){//Changing lights to on and off
            building_file.rooms[i].light = false;
        };
    };
    fs.writeFile(get_file_name(id_building), JSON.stringify(building_file), function(err) {
        if(err) {
            return console.log(err);
        }

        console.log("The file " + get_file_name(id_building) + " was saved!");
    });
}

var getCurrentLightsOnPercentage = function(id_building){
    building_file = JSON.parse(fs.readFileSync(get_file_name(id_building), 'utf8'));
    room_qty = building_file.rooms.length;
    room_light_on_qty = 0;
    for (i=0; i < room_qty; i++){
        if(building_file.rooms[i].light){
            room_light_on_qty++;
        };
    };
    return 100*(room_light_on_qty/room_qty);
};

var decreaseBuildingPower = function(id) {
    building = JSON.parse(fs.readFileSync(get_file_name(id), 'utf8'));
    current_power = building.current_power
    for i in building.rooms {
        if((!i.people) && i.light){
            current_power--
            updateBuildingPower(id, current_power);
        }
    }
};

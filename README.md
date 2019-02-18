# bcgamejam2019
BC Game Jam

## Requirements
NodeJS 10: https://nodejs.org/en/download/

## Setup
Clone the project:

```bash
git clone https://github.com/ivanincanada/bcgamejam2019
```

Enter the new directory:

```bash
cd bcgamejam2019
```

Update the dependencies:
```bash
npm install
```

Start the server:
```bash
npm start
```
Check your game! http://localhost:3000

## Backend


### Available actions

All the available actions have sample JSON responses in the `samples/`

#### `/game/start`

Generate a building and return a JSON representation. [SAMPLE](samples/game/start)

#### `/game/:buildingId`

Retrieve the current state of the game. [SAMPLE](samples/games/:buildingId)

#### `/game/:buildingId/lighton/:roomId`

Turn light of the room on

#### `/game/:buildingId/lightoff/:roomId`

Turn light of the room off

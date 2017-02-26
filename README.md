#React+Redux game starter

You are gonna to build a new super-rock-star game. How can you start? Right, use the starter kit. There are many boring things you have to boilerplate instead of building real game features and fun. Games have a lot of in common, starting from player flow to gameplay and logic. 

Whatever game you build you have the next game phases:
- players registration (one or many)
- a game session is started
- playing with a score calculation
- a game session is done
- a winner dedicated and shown
- restart game
etc. 

>This starter kit allows you to have a good start point with half of work done already.

### To start using:
``` 
clone the repository locally
npm install
npm start
```

## Code structure.
The root folders
- *actions/* action creators and action types (constants) 
- *components/* stateless ui components 
- *containers/* stateful ui components 
- *reducers/* reducers and game logic
- *store/* configure app store
- *utils/* other helpers 


### Action creators

```javascript 
- addPlayer
- gotoNextGamePhase
- gotoNextGamePhaseWithDelay
- doPlayerNextStep
- doAutoPlay
- showWinner
- restartGame
```

Game phases ('start game', 'stop game', etc.) can be changed, extended with additional ones and it's nice to have a mechanism to keep things flexible. That's why we try to avoid actions like 'start game', instead, we do *gotoNextGamePhase*, and keep the queue of game phases as a separated list. 

Currently list looks like:
```javascript 
var GamePhasesQueue = [PLAYERS_REGISTRATION, GAME_IN_PROGRESS, GAME_SESSION_DONE, GAME_WINNER];
```

It means if you need to add *SHOW_LEVEL_COMICS*, after players registration, you don't have to change that logic in a few components, just put it a sequence and define UI behavior on that phase. Sometimes exact game phase can mean game sceen change or just rect somehow on it.
```javascript
getScreen () {
    let props = this.props;

    switch (props.currentGamePhase) {
        case PLAYERS_REGISTRATION:
            return <StartView />;

        case GAME_IN_PROGRESS:
            return  <PlayView />;

        case GAME_WINNER:
            return  <FinishView />;

        default:
            return <StartView />;
    }
}

/**
 *
 * @param {Object} nextProps
 * @returns {boolean}
 */
shouldComponentUpdate(nextProps) {
    return [PLAYERS_REGISTRATION, GAME_IN_PROGRESS, GAME_WINNER].indexOf(nextProps.currentGamePhase) !== -1;
}
```
To do actual player's action (step, move) you can use *doPlayerNextStep* action creator. If you want to have a nice demo or just test entire gameplay you can call *doAutoPlay* (thunk is used to make recursive calls).

### Components
Game related UI located in *game-page/* sub-folder. It contains three main game screen: players registration, game board, and game end.
The main component in game board is *ScoreTable* which renders what's is going on during the game session. That's a good place to change to whatever UI or game you currently build. 

### Containers
There is a folder inside called 'my-game', you have to rename regarding the game topic you build (i.e. bowling-game, poker, chess, etc.). Go further you can see three sub-folders as well, for start, play, and finish screens. 

### Reducers
That's probably the most interesting thing because all you game magic will happen there. Due to actions creators described above, you can already figure out the reducers list. 

Let's have a look at *DO_PLAYER_NEXT_STEP* reducer. What happens when the player does move? Several things:

1. Player changes his score.
2. The Current player index could be changed if the player has already done his action.
3. The current frame (actions round) could be changed if all players did their actions.
4. The current game phase could be changed as well, i.e. someone won or failed, or just game time ended. 


Games usually contain a lot of logic, how a player does his move, how his last step influence on the game process and other players, etc. All that logic is moved to separate service (*reducers/logic/myGameLogic*), and its public APIs used in the reducer. Of course to do all things right you should keep methods as pure functions without any side effects and dependencies. Like 
```script
/**
 *
 * @param {Number} currentPlayerIndex
 * @param {Array} players
 * @returns {boolean}
 */
isCurrentGameFrameDone(currentPlayerIndex, players) {
    return currentPlayerIndex === players.length - 1;
},

/**
 *
 * @param {Number} currentFrame
 * @returns {number}
 */
getNextGameFrame(currentFrame) {
    return ++currentFrame;
},

/**
 *
 * @param {Number} currentFrame
 * @param {Number} totalFame
 * @returns {boolean}
 */
isGameSessionDone(currentFrame, totalFame = TOTAL_FRAMES_NUMBER) {
    return currentFrame >= totalFame;
},
...
```

## TODO
Tests

## License
MIT

import { ADD_PLAYER, START_GAME, RESTART_GAME, DO_PLAYER_NEXT_STEP } from '../actions/actionTypes';
import GameLogic from './logic/myGameLogic';

const initialState = {
    currentFrame: 0,
    currentPlayerIndex: 0,
    players: [],
    isGameSessionDone: false,
    isGameStarted: false,
    winner: null
};

export default (state = initialState, action) => {
    
    switch (action.type) {
        case ADD_PLAYER:
            return {
                ...state, 
                players: [
                    ...state.players,
                    {
                        id: action.id,
                        displayName: action.displayName,
                        frames: action.frames
                    }
                ]
            };

        case START_GAME:
            return {
                ...state,
                isGameStarted: action.isGameStarted
            };

        case RESTART_GAME:
            return {
                ...initialState
            };
            
        case DO_PLAYER_NEXT_STEP:
            let players = [].concat(state.players),
                currentPlayer = {...players[state.currentPlayerIndex]},
                currentFrame = state.currentFrame,
                currentPlayerIndex = state.currentPlayerIndex;

            currentPlayer.frames = GameLogic.getPlayerStepFrames(currentPlayer.frames, state.currentFrame);
            currentPlayer.score = GameLogic.getPlayerScore(currentPlayer.frames);
			players[state.currentPlayerIndex] = currentPlayer;
			
            if (GameLogic.isPlayerStepDone(currentPlayer, currentFrame)) {
                if (GameLogic.isCurrentGameFrameDone(currentPlayerIndex, players)) {
                    currentFrame = GameLogic.getNextGameFrame(currentFrame);
                }

                currentPlayerIndex = GameLogic.computeNextPlayerIndex(currentPlayerIndex, players);
            }

            return {
                ...state,
                players,
                currentPlayerIndex,
                currentFrame,
                isGameSessionDone: GameLogic.isGameSessionDone(currentFrame),
                winner: GameLogic.getWinner(players)
            };
            
            break;
        
        default:
            return state
    }
};

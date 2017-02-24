import { ADD_PLAYER, GO_TO_NEXT_GAME_PHASE, SHOW_WINNER, RESTART_GAME, DO_PLAYER_NEXT_STEP } from '../actions/actionTypes';
import { PLAYERS_REGISTRATION } from '../utils/constants';
import GameLogic from './logic/myGameLogic';

const initialState = {
    players: [],    
    winner: null,

    currentFrame: 0,
    currentPlayerIndex: 0,
    currentGamePhase: PLAYERS_REGISTRATION
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

        case GO_TO_NEXT_GAME_PHASE:
            return {
                ...state,
                currentGamePhase: GameLogic.getNextPhaseAfter(state.currentGamePhase)
            };

        case RESTART_GAME:
            return {
                ...initialState
            };

        case SHOW_WINNER:
            return {
                ...state,
                winner: GameLogic.getWinner(state.players)
            }
            
        case DO_PLAYER_NEXT_STEP:
            let players = [].concat(state.players),                
                currentFrame = state.currentFrame,
                currentPlayerIndex = state.currentPlayerIndex,
                currentGamePhase = state.currentGamePhase;
                
            players[state.currentPlayerIndex] = GameLogic.getPlayerAfterStep(players[state.currentPlayerIndex], state.currentFrame);
			
            if (GameLogic.isPlayerStepDone(players[state.currentPlayerIndex], currentFrame)) {
                if (GameLogic.isCurrentGameFrameDone(currentPlayerIndex, players)) {
                    currentFrame = GameLogic.getNextGameFrame(currentFrame);
                }

                currentPlayerIndex = GameLogic.computeNextPlayerIndex(currentPlayerIndex, players);
            }

            if (GameLogic.isGameSessionDone(currentFrame)) {
                currentGamePhase = GameLogic.getNextPhaseAfter(state.currentGamePhase);
            }

            return {
                ...state,
                players,
                currentPlayerIndex,
                currentFrame,
                currentGamePhase
            };
        
        default:
            return state
    }
};

import { ADD_PLAYER, GO_TO_NEXT_GAME_PHASE, RESTART_GAME, DO_PLAYER_NEXT_STEP, SHOW_WINNER } from './actionTypes';
import { GAME_IN_PROGRESS, GAME_SESSION_DONE } from '../utils/constants';
import { delay } from '../utils/';

let nextPlayerId = 0;

export const addPlayer = (displayName, frames) => ({
    type: ADD_PLAYER,
    
    id: nextPlayerId++,
    displayName: displayName,
    frames: frames
});

export const restartGame = () => ({
    type: RESTART_GAME
});

export const showWinner = () => ({
    type: SHOW_WINNER
});

export const gotoNextGamePhase = () => ({
    type: GO_TO_NEXT_GAME_PHASE
});

export const gotoNextGamePhaseWithDelay = (value) => {
    return function (dispatch, getState) {
        return delay(() => {
            dispatch(gotoNextGamePhase());
        }, value);
    }
};

export const doPlayerNextStep = () => {
    return function (dispatch, getState) {
        dispatch({
            type: DO_PLAYER_NEXT_STEP
        });

        if (getState().game.currentGamePhase === GAME_SESSION_DONE) {
            dispatch(gotoNextGamePhaseWithDelay(2000));
        }
    };
};

export const doAutoPlay = ()=> {
    return (dispatch, getState) => {
        dispatch(doPlayerNextStep())

        return delay(() => {
            if(getState().game.currentGamePhase === GAME_IN_PROGRESS) {
                dispatch(doAutoPlay());
            }
        }, 20);
    }
}
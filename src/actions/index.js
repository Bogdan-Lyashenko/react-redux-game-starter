import { ADD_PLAYER, START_GAME, RESTART_GAME, DO_PLAYER_NEXT_STEP } from './actionTypes';

let nextPlayerId = 0;

export const addPlayer = (displayName, frames) => ({
    type: ADD_PLAYER,
    
    id: nextPlayerId++,
    displayName: displayName,
    frames: frames
});

export const startGame = (value) => ({
    type: START_GAME,

    isGameStarted: value
});


export const restartGame = (value) => ({
    type: RESTART_GAME
});

export const doPlayerNextStep = () => {
    return function (dispatch, getState) {
        dispatch({
            type: DO_PLAYER_NEXT_STEP
        });

        return Promise.resolve(getState().game);
    };
};
import { PLAYERS_REGISTRATION, GAME_IN_PROGRESS, GAME_WINNER, GAME_SESSION_DONE, TOTAL_FRAMES_NUMBER } from '../../utils/constants';

var GamePhasesQueue = [PLAYERS_REGISTRATION, GAME_IN_PROGRESS, GAME_SESSION_DONE, GAME_WINNER];

export default {

    /**    
     * 
     * @param {Object} player
     * @param {Object} currentFrame
     * @returns {Object}
     */
    getPlayerAfterStep(player, currentFrame) {
        let frames = this.getPlayerStepFrames(player.frames, currentFrame);
        let score = this.getPlayerScore(frames);

        return {...player, frames, score};
    },

    /**
     * 
     * @param {String} currentGamePhase     
     * @returns {String}
     */
    getNextPhaseAfter(currentGamePhase) {
        let index = GamePhasesQueue.indexOf(currentGamePhase);

        if (index === -1 || index >= GamePhasesQueue.length - 1) {
            throw new RangeError('Current phase `{currentGamePhase}` is the last in queue.');
        }

        return GamePhasesQueue[index + 1];
    },

    /**
     * 
     * @param {Array} frames
     * @param {Number} currentFrame
     * @returns {Array}
     */
    getPlayerStepFrames(frames, currentFrame) {
        var newFrames = [].concat(frames);
        newFrames[currentFrame].push(this.getRandomOfTen());

        return newFrames;
    },

    /**
     *
     * @param {Object} currentPlayer
     * @param {Number} currentFrame
     * @returns {boolean}
     */
    isPlayerStepDone(currentPlayer, currentFrame) {
        return currentPlayer.frames[currentFrame].length === 2;
    },

    /**
     *
     * @param {Number} currentPlayerIndex
     * @param {Array} players
     * @returns {number}
     */
    computeNextPlayerIndex(currentPlayerIndex, players) {
        return !this.isCurrentGameFrameDone(currentPlayerIndex, players) ?
            ++currentPlayerIndex : 0;
    },


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


    /**
     *
     * @param {Array} frames
     * @returns {Number}
     */
    getPlayerScore(frames) {
        return frames.reduce((summ, frame) => {
            return summ + (frame[0] || 0) + (frame[1] || 0);
        }, 0);
    },

    /**
     *
     * @param {Array} players
     * @returns {Object}
     */
    getWinner(players) {
        let results = players.map(player => player.score);
        let index = results.indexOf(Math.max(...results));

        return players[index];
    },

    /**
     * @returns {Number}
     */
    getRandomOfTen() {
        return Math.round(Math.random()*10);
    }
    
}
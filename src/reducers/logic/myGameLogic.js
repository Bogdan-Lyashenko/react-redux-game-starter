var TOTAL_FRAMES = 10;

export default {

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
    isGameSessionDone(currentFrame, totalFame = TOTAL_FRAMES) {
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
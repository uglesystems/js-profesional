"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AutoPlay = (function () {
    function AutoPlay() {
    }
    AutoPlay.prototype.run = function (player) {
        if (!player.media.muted) {
            player.media.muted = true;
        }
        player.play();
    };
    return AutoPlay;
}());
exports.default = AutoPlay;
//# sourceMappingURL=AutoPlay.js.map
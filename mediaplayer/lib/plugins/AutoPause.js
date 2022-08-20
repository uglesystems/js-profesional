"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AutoPause = (function () {
    function AutoPause() {
        this.threshold = 0.25;
        this.handleIntersection = this.handleIntersection.bind(this);
        this.handleVisibilityChage = this.handleVisibilityChage.bind(this);
    }
    AutoPause.prototype.run = function (player) {
        this.player = player;
        var observer = new IntersectionObserver(this.handleIntersection, {
            threshold: this.threshold
        });
        observer.observe(player.media);
        document.addEventListener("visibilitychange", this.handleVisibilityChage);
    };
    AutoPause.prototype.handleVisibilityChage = function () {
        var isVisible = document.visibilityState === "visible";
        if (isVisible) {
            this.player.play();
        }
        else {
            this.player.pause();
        }
    };
    AutoPause.prototype.handleIntersection = function (entries) {
        var entry = entries[0];
        var isVisible = entry.intersectionRatio >= this.threshold;
        if (isVisible) {
            this.player.play();
        }
        else {
            this.player.pause();
        }
    };
    return AutoPause;
}());
exports.default = AutoPause;
//# sourceMappingURL=AutoPause.js.map
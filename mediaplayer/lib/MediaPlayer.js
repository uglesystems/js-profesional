"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MediaPlayer = (function () {
    function MediaPlayer(config) {
        this.media = config.el;
        this.plugins = config.plugins || [];
        this.initPlayer();
        this.initPlugins();
    }
    MediaPlayer.prototype.initPlayer = function () {
        var _a;
        this.container = document.createElement('div');
        this.container.style.position = 'relative';
        (_a = this.media.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(this.container, this.media);
        this.container.appendChild(this.media);
    };
    MediaPlayer.prototype.initPlugins = function () {
        var _this = this;
        var player = {
            play: function () { return _this.play(); },
            pause: function () { return _this.pause(); },
            media: this.media,
            get muted() {
                return this.media.muted;
            },
            set muted(value) {
                this.media.muted = value;
            }
        };
        this.plugins.forEach(function (plugin) {
            plugin.run(_this);
        });
    };
    MediaPlayer.prototype.play = function () {
        this.media.play();
    };
    MediaPlayer.prototype.pause = function () {
        this.media.pause();
    };
    MediaPlayer.prototype.togglePlay = function () {
        if (this.media.paused)
            this.play();
        else
            this.pause();
    };
    MediaPlayer.prototype.mute = function () {
        this.media.muted = true;
    };
    MediaPlayer.prototype.unMute = function () {
        this.media.muted = false;
    };
    MediaPlayer.prototype.toggleMute = function () {
        if (this.media.muted)
            this.unMute();
        else
            this.mute();
    };
    return MediaPlayer;
}());
exports.default = MediaPlayer;
//# sourceMappingURL=MediaPlayer.js.map
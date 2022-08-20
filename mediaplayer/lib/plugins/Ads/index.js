"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Ads_1 = require("./Ads");
var AdsPlugin = (function () {
    function AdsPlugin() {
        this.ads = Ads_1.Ads.getInstance();
        this.adsContainer = document.createElement('div');
        this.handleTimeUpdate = this.handleTimeUpdate.bind(this);
    }
    AdsPlugin.prototype.run = function (player) {
        this.player = player;
        this.player.container.appendChild(this.adsContainer);
        this.media = this.player.media;
        this.media.addEventListener('timeupdate', this.handleTimeUpdate);
    };
    AdsPlugin.prototype.handleTimeUpdate = function () {
        var currentTime = Math.floor(this.media.currentTime);
        console.log(currentTime);
        if (currentTime % 30 === 0) {
            this.renderAd();
        }
    };
    AdsPlugin.prototype.renderAd = function () {
        var _this = this;
        if (this.currentAd) {
            return;
        }
        var ad = this.ads.getAdd();
        this.currentAd = ad;
        this.adsContainer.innerHTML = " <div class=\"ads\">\n                                            <a  class=\"ads__link\" href=\"".concat(this.currentAd.url, "\" target=\"_blank\">\n                                                <img class=\"ads__img\" src=\"").concat(this.currentAd.imageUrl, "\" />\n                                                <div class=\"ads__info\">\n                                                <h5 class=\"ads__title\">").concat(this.currentAd.title, "</h5>\n                                                <p class=\"ads__body\">").concat(this.currentAd.body, "</p>\n                                                </div>\n                                            </a>\n                                        </div>");
        setTimeout(function () {
            _this.currentAd = null;
            _this.adsContainer.innerHTML = '';
        }, 10000);
    };
    return AdsPlugin;
}());
exports.default = AdsPlugin;
//# sourceMappingURL=index.js.map
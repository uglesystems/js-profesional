import MediaPlayer from "../../mediaplayer/lib/MediaPlayer";
import AutoPlay from '../../mediaplayer/lib/plugins/AutoPlay';
import AutoPause from '../../mediaplayer/lib/plugins/AutoPause';
import Ads from "../../mediaplayer/lib/plugins/Ads";

const video = document.querySelector("video");
const player = new MediaPlayer({ el: video, plugins: [
        new AutoPlay(),
        new AutoPause(),
        new Ads(),
    ]
});

const btn_play: HTMLElement = document.querySelector("#btn_play");
btn_play.onclick = () => player.togglePlay();

const btn_mute: HTMLElement = document.querySelector("#btn_mute");
btn_mute.onclick = () => player.toggleMute();



// if('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('./sw.js').catch(error => {
//         console.log(error.message);
//     })
// }
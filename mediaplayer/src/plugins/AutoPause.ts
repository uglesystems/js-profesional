import MediaPlayer from '../MediaPlayer.js';

class AutoPause {
    private threshold: number;
    player: MediaPlayer;

    constructor() {
        this.threshold = 0.25;
        this.handleIntersection = this.handleIntersection.bind(this);
        this.handleVisibilityChage = this.handleVisibilityChage.bind(this);
    }

    run(player: MediaPlayer) {
        this.player = player;

        const observer = new IntersectionObserver(this.handleIntersection, {
            threshold: this.threshold
        });

        observer.observe(player.media);
        document.addEventListener("visibilitychange", this.handleVisibilityChage );

    }
    
    private handleVisibilityChage(){
        const isVisible = document.visibilityState === "visible";
        
        if(isVisible){
            this.player.play();
        }else{
            this.player.pause();
        }
    }

    private handleIntersection(entries: IntersectionObserverEntry[] ){
        const entry = entries[0];
        
        const isVisible = entry.intersectionRatio >= this.threshold;

        if(isVisible){
            this.player.play();
        }else{
            this.player.pause();
        }

    }
}

export default AutoPause;
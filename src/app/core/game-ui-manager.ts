import {EventEmitter} from "../utilities/event-emitter";
import {config} from "../config";


export class GameUIManager{
    gameUi;
    rowTop;
    mazeDiv;
    mazeImg;
    mazeCover;
    pointsDisplay;
    highScoreDisplay;
    extraLivesDisplay;
    fruitDisplay;
    mainMenu;
    gameStartButton;
    pauseButton;
    soundButton;
    leftCover;
    rightCover;
    pausedText;
    bottomRow;
    movementButtons;
    remainingSources;
    gameUIEvents:EventEmitter<UIEvents> = new EventEmitter<UIEvents>();
    dotContainer;


    constructor() {
        this.gameUi = document.getElementById('game-ui');
        this.rowTop = document.getElementById('row-top');
        this.mazeDiv = document.getElementById('maze');
        this.mazeImg = document.getElementById('maze-img');
        this.mazeCover = document.getElementById('maze-cover');
        this.pointsDisplay = document.getElementById('points-display');
        this.highScoreDisplay = document.getElementById('high-score-display');
        this.extraLivesDisplay = document.getElementById('extra-lives');
        this.fruitDisplay = document.getElementById('fruit-display');
        this.mainMenu = document.getElementById('main-menu-container');
        this.gameStartButton = document.getElementById('game-start');
        this.pauseButton = document.getElementById('pause-button');
        this.soundButton = document.getElementById('sound-button');
        this.leftCover = document.getElementById('left-cover');
        this.rightCover = document.getElementById('right-cover');
        this.pausedText = document.getElementById('paused-text');
        this.bottomRow = document.getElementById('bottom-row');
        this.movementButtons = document.getElementById('movement-buttons');
        this.initListen();

    }



    initListen(){
        this.gameStartButton.addEventListener("click",this.getGameUIEmitter("gameStart"));
        this.pauseButton.addEventListener("click",this.getGameUIEmitter("pauseToggle"));
        this.soundButton.addEventListener("click",this.getGameUIEmitter("soundToggle"));
    }


    getGameUIEmitter(event:UIEvents){
        return ()=>{
            this.gameUIEvents.emit(event,{});
        }
    }


    setUiDimensions(scaledTileSize) {
        this.gameUi.style.fontSize = `${scaledTileSize}px`;
        this.rowTop.style.marginBottom = `${scaledTileSize}px`;
    }


    startButtonClick() {
        this.leftCover.style.left = '-50%';
        this.rightCover.style.right = '-50%';
        this.mainMenu.style.opacity = 0;
        this.gameStartButton.disabled = true;

        setTimeout(() => {
            this.mainMenu.style.visibility = 'hidden';
        }, 1000);
    }

    drawMaze(scaledTileSize){
        this.mazeDiv.style.height = `${scaledTileSize * 31}px`;
        this.mazeDiv.style.width = `${scaledTileSize * 28}px`;
        this.gameUi.style.width = `${scaledTileSize * 28}px`;
        this.bottomRow.style.minHeight = `${scaledTileSize * 2}px`;
        this.dotContainer = document.getElementById('dot-container');
    }

    /**
     * Sets the icon for the sound button
     */
    setSoundButtonIcon(newVolume) {
        this.soundButton.innerHTML = newVolume === 0 ? 'volume_off' : 'volume_up';
    }

    /**
     * Displays an error message in the event assets are unable to download
     */
    displayErrorMessage() {
        const loadingContainer:any = document.getElementById('loading-container');
        const errorMessage:any = document.getElementById('error-message');
        loadingContainer.style.opacity = 0;
        setTimeout(() => {
            loadingContainer.remove();
            errorMessage.style.opacity = 1;
            errorMessage.style.visibility = 'visible';
        }, 1500);
    }

    /**
     * Load all assets into a hidden Div to pre-load them into memory.
     * There is probably a better way to read all of these file names.
     */
    preloadAssets() {
        return new Promise((resolve) => {
            const loadingContainer:any = document.getElementById('loading-container');
            const loadingPacman:any = document.getElementById('loading-pacman');
            const loadingDotMask:any = document.getElementById('loading-dot-mask');

            const imgBase = config.imgBase;
            const imgSources = [
                // Pacman
                `${imgBase}characters/pacman/arrow_down.svg`,
                `${imgBase}characters/pacman/arrow_left.svg`,
                `${imgBase}characters/pacman/arrow_right.svg`,
                `${imgBase}characters/pacman/arrow_up.svg`,
                `${imgBase}characters/pacman/pacman_death.svg`,
                `${imgBase}characters/pacman/pacman_error.svg`,
                `${imgBase}characters/pacman/pacman_down.svg`,
                `${imgBase}characters/pacman/pacman_left.svg`,
                `${imgBase}characters/pacman/pacman_right.svg`,
                `${imgBase}characters/pacman/pacman_up.svg`,

                // Blinky
                `${imgBase}characters/ghosts/blinky/blinky_down_angry.svg`,
                `${imgBase}characters/ghosts/blinky/blinky_down_annoyed.svg`,
                `${imgBase}characters/ghosts/blinky/blinky_down.svg`,
                `${imgBase}characters/ghosts/blinky/blinky_left_angry.svg`,
                `${imgBase}characters/ghosts/blinky/blinky_left_annoyed.svg`,
                `${imgBase}characters/ghosts/blinky/blinky_left.svg`,
                `${imgBase}characters/ghosts/blinky/blinky_right_angry.svg`,
                `${imgBase}characters/ghosts/blinky/blinky_right_annoyed.svg`,
                `${imgBase}characters/ghosts/blinky/blinky_right.svg`,
                `${imgBase}characters/ghosts/blinky/blinky_up_angry.svg`,
                `${imgBase}characters/ghosts/blinky/blinky_up_annoyed.svg`,
                `${imgBase}characters/ghosts/blinky/blinky_up.svg`,

                // Clyde
                `${imgBase}characters/ghosts/clyde/clyde_down.svg`,
                `${imgBase}characters/ghosts/clyde/clyde_left.svg`,
                `${imgBase}characters/ghosts/clyde/clyde_right.svg`,
                `${imgBase}characters/ghosts/clyde/clyde_up.svg`,

                // Inky
                `${imgBase}characters/ghosts/inky/inky_down.svg`,
                `${imgBase}characters/ghosts/inky/inky_left.svg`,
                `${imgBase}characters/ghosts/inky/inky_right.svg`,
                `${imgBase}characters/ghosts/inky/inky_up.svg`,

                // Pinky
                `${imgBase}characters/ghosts/pinky/pinky_down.svg`,
                `${imgBase}characters/ghosts/pinky/pinky_left.svg`,
                `${imgBase}characters/ghosts/pinky/pinky_right.svg`,
                `${imgBase}characters/ghosts/pinky/pinky_up.svg`,

                // Ghosts Common
                `${imgBase}characters/ghosts/eyes_down.svg`,
                `${imgBase}characters/ghosts/eyes_left.svg`,
                `${imgBase}characters/ghosts/eyes_right.svg`,
                `${imgBase}characters/ghosts/eyes_up.svg`,
                `${imgBase}characters/ghosts/scared_blue.svg`,
                `${imgBase}characters/ghosts/scared_white.svg`,

                // Dots
                `${imgBase}pickups/pacdot.svg`,
                `${imgBase}pickups/powerPellet.svg`,

                // Fruit
                `${imgBase}pickups/apple.svg`,
                `${imgBase}pickups/bell.svg`,
                `${imgBase}pickups/cherry.svg`,
                `${imgBase}pickups/galaxian.svg`,
                `${imgBase}pickups/key.svg`,
                `${imgBase}pickups/melon.svg`,
                `${imgBase}pickups/orange.svg`,
                `${imgBase}pickups/strawberry.svg`,

                // Text
                `${imgBase}text/ready.svg`,

                // Points
                `${imgBase}text/100.svg`,
                `${imgBase}text/200.svg`,
                `${imgBase}text/300.svg`,
                `${imgBase}text/400.svg`,
                `${imgBase}text/500.svg`,
                `${imgBase}text/700.svg`,
                `${imgBase}text/800.svg`,
                `${imgBase}text/1000.svg`,
                `${imgBase}text/1600.svg`,
                `${imgBase}text/2000.svg`,
                `${imgBase}text/3000.svg`,
                `${imgBase}text/5000.svg`,

                // Maze
                `${imgBase}maze/maze_blue.svg`,

                // Misc
                'assets/graphics/extra_life.svg',
            ];

            const audioBase = 'assets/audio/';
            const audioSources = [
                `${audioBase}game_start.mp3`,
                `${audioBase}pause.mp3`,
                `${audioBase}pause_beat.mp3`,
                `${audioBase}siren_1.mp3`,
                `${audioBase}siren_2.mp3`,
                `${audioBase}siren_3.mp3`,
                `${audioBase}power_up.mp3`,
                `${audioBase}extra_life.mp3`,
                `${audioBase}eyes.mp3`,
                `${audioBase}eat_ghost.mp3`,
                `${audioBase}death.mp3`,
                `${audioBase}fruit.mp3`,
                `${audioBase}dot_1.mp3`,
                `${audioBase}dot_2.mp3`,
            ];

            const totalSources = imgSources.length + audioSources.length;
            this.remainingSources = totalSources;

            loadingPacman.style.left = '0';
            loadingDotMask.style.width = '0';

            Promise.all([
                this.createElements(imgSources, 'img', totalSources, this),
                this.createElements(audioSources, 'audio', totalSources, this),
            ])
                .then(() => {
                    loadingContainer.style.opacity = 0;
                    resolve(null);

                    setTimeout(() => {
                        loadingContainer.remove();
                        this.mainMenu.style.opacity = 1;
                        this.mainMenu.style.visibility = 'visible';
                    }, 1500);
                })
                .catch(this.displayErrorMessage);
        });
    }



    /**
     * Iterates through a list of sources and updates the loading bar as the assets load in
     * @param {String[]} sources
     * @param {('img'|'audio')} type
     * @param {Number} totalSources
     * @param {Object} gameCoord
     * @returns {Promise}
     */
    createElements(sources, type, totalSources, gameCoord) {
        const loadingContainer = document.getElementById('loading-container');
        const preloadDiv = document.getElementById('preload-div');
        const loadingPacman = document.getElementById('loading-pacman');
        const containerWidth = loadingContainer.scrollWidth
            - loadingPacman.scrollWidth;
        const loadingDotMask = document.getElementById('loading-dot-mask');

        const gameCoordRef = gameCoord;

        return new Promise((resolve, reject) => {
            let loadedSources = 0;

            sources.forEach((source) => {
                const element:any = type === 'img' ? new Image() : new Audio();
                preloadDiv.appendChild(element);

                const elementReady = () => {
                    gameCoordRef.remainingSources -= 1;
                    loadedSources += 1;
                    const percent = 1 - gameCoordRef.remainingSources / totalSources;
                    loadingPacman.style.left = `${percent * containerWidth}px`;
                    loadingDotMask.style.width = loadingPacman.style.left;

                    if (loadedSources === sources.length) {
                        resolve(null);
                    }
                };

                if (type === 'img') {
                    element.onload = elementReady;
                    element.onerror = reject;
                } else {
                    element.addEventListener('canplaythrough', elementReady);
                    element.onerror = reject;
                }

                element.src = source;

                if (type === 'audio') {
                    element.load();
                }
            });
        });
    }


    setPointDisplay(value){
        this.pointsDisplay.innerHTML = value;
    }

    setHighScoreDisaply(value){
        this.highScoreDisplay.innerHTML = value;
    }


}


export type UIEvents = "gameStart" | "pauseToggle" | "soundToggle";
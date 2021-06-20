import GameCoordinator from "./core/game-coordinator";
import {config} from "./config";
import "../style/main.scss";

window.onload = () => {
    let gameCoordinator = new GameCoordinator();
    if(config.debugMode){
        window['game'] = gameCoordinator;
    }
}

import GameCoordinator from "./core/gameCoordinator";
import {config} from "./config";
import "../style/main.scss";

window.onload = () => {
    let gameCoordinator = new GameCoordinator();
    if(config.debugMode){
        window['game'] = gameCoordinator;
    }
}

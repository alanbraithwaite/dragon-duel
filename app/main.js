import DragonController from "./components/dragons/dragons-controller.js";
import ChampionController from "./components/champions/champion-controller.js";

class App {
  constructor() {
    this.controllers = {
      dragonController: new DragonController(),
      championController: new ChampionController(),


    }
  }
}


// @ts-ignore
window.app = new App()

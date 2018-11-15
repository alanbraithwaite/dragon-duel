import GameController from "./components/gamecontroller.js";

class App {
  constructor() {
    this.controllers = {
      gameController: new GameController(),


    }
  }
}


// @ts-ignore
window.app = new App()

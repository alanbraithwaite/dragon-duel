import DragonService from "./dragons-service.js";

let _dragonService = new DragonService()



function _drawDragons() {
  let dragons = _dragonService.dragons
  let template = ""
  dragons.forEach(dragon => {
    template += `
        <div class="col-5 card">
          <div class="">
            <img class="card-img-top" src="${dragon.imgUrl}">
            <div class="card-body">
              <h5 class="card-name">${dragon.name}</h5>
              <div class="card-text">
                <p>Max Hitpoints: ${dragon.maxHP}</p>
                <p>Current Hitpoints: ${dragon.currentHP}</p>
                <p>Max ID: ${dragon.id}</p>
                <div>
                  <button></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      `
  })
  document.getElementById('dragons').innerHTML = template
}


export default class DragonController {

  constructor() {
    console.log("Controller")
    _dragonService.getDragons(_drawDragons)
  }




}

import ChampionService from "./champion-service.js";

let _championService = new ChampionService()



function _drawChampions() {
  let champions = _championService.champions
  let template = ""
  champions.forEach(champion => {
    template += `
        <div class="col-6 card">
          <div class="">
            <img class="card-img-top" src="${champion.imgUrl}">
            <div class="card-body">
              <h5 class="card-name">${champion.name}</h5>
              <div class="card-text">
                <p>Race: ${champion.race}</p>
                <p>Class: ${champion.class}</p>
                <p>HitPoints: ${champion.hp}</p>
                <p>ID: ${champion.id}</p>
                <div>
                  <button></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      `
  })
  document.getElementById('champions').innerHTML = template
}


export default class ChampionController {

  constructor() {
    console.log("Controller")
    _championService.getChampions(_drawChampions)
  }




}

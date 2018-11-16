import Champion from "../../model/champion.js"

// @ts-ignore
let _championApi = axios.create({
  baseURL: "https://dragon-duel.herokuapp.com/api/champions"
})

let _champions = []

export default class ChampionService {
  constructor() {
    console.log("Service")
  }

  getChampions(drawcallback) {
    _championApi.get('')
      .then(res => {
        console.log(res)
        _champions = res.data.map(item => new Champion(item))
        drawcallback()
      })


  }

  get champions() {
    return _champions
  }
}
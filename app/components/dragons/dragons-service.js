import Dragon from "../../model/dragon.js"

// @ts-ignore
let _dragonApi = axios.create({
  baseURL: "https://dragon-duel.herokuapp.com/api/dragons"
})

let _dragons = []

export default class DragonService {
  constructor() {
    console.log("Service")
  }

  getDragons(drawcallback) {
    _dragonApi.get('')
      .then(res => {
        console.log(res)
        _dragons = res.data.map(item => new Dragon(item))
        drawcallback()
      })


  }

  get dragons() {
    return _dragons
  }
}
import Dragon from "../model/dragon.js"

// @ts-ignore
let _dragonApi = axios.create({
  baseURL: "https://dragon-duel.herokuapp.com/api/dragons"
})

let _dragons = []

export default class GameService {
  constructor() {
    console.log("Service")
  }

  getDragons() {
    _dragonApi.get('')
      .then(res => {
        let _dragons = res.data.map(item => new Dragon(item))
      })
  }
}
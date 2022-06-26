const data = require("../temp-data/counter-store")

class Api {
  constructor(express) {
    this.express = express
  }

  init() {
    this.express.get("/api/get", (req, res) => {
      res.send({  counter: data.value })
    })

    this.express.post("/api/increment", (req, res) => {
      data.incr()
      res.send({ counter: data.value })
    })
  }


}

module.exports = Api

const data = require("../temp-data/counter-store")

class Pages {
  constructor(express, next) {
    this.express = express
    this.next = next
  }

  init() {
    this.initCustomPages()
    this.initDefaultPages()
  }

  initCustomPages() {
    
    this.express.get('/preload-data', (req, res) => {
      res.serverData = {
        counter: data.value
      }
      return this.next.render(req, res, `/preload-data`)
    })

    this.express.get('/github-profile', (req, res) => {
      res.serverData = {
        counter: data.value
      }
      return this.next.render(req, res, `/github-profile`)
    })

    /* Dynamic Routing Example */
    this.express.get('/conditional/:urlValue', (req, res) => {
      console.log("REQ PARAMS: ", req.params)
      const intValue = parseInt(req.params.urlValue)
      if(isNaN(intValue)) {
        return this.next.render(req, res, `/conditional/invalid`, req.query)
      }
      if(intValue < 5) {
        return this.next.render(req, res, `/conditional/small`, req.query)
      } else {
        return this.next.render(req, res, `/conditional/large`, req.query)
      }
    })
  }

  initDefaultPages() {
    this.express.get('/', (req, res) => {
        // Map the default route to a file in pages
      return this.next.render(req, res, `/index`, req.query)
    })

    this.express.get('*', (req, res) => {
      return this.next.render(req, res, `${req.path}`, req.query)
    })
  }
}

module.exports = Pages

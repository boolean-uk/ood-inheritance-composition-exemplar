const CatalogueItem = require("./CatalogueItem")

class Newspaper extends CatalogueItem {
  checkIn() {
    throw new Error('newspapers are not available for loan')
  }

  checkOut() {
    throw new Error('newspapers are not available for loan')
  }
}

module.exports = Newspaper
